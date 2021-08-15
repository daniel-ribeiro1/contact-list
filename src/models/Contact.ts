import { Model, DataTypes } from 'sequelize';
import { sequelize } from "../instance/mysql";

export interface ContactInstance extends Model {
    id: number;
    name: string;
    phone: string;
    avatar: string;
    firstLetter: string;
}

export const Contact = sequelize.define<ContactInstance>('contact', {
        id: {
            type: DataTypes.BIGINT,
            primaryKey: true,
        },
        name: {
            type: DataTypes.STRING,
        },
        phone: {
            type: DataTypes.STRING,
        },
        avatar: {
            type: DataTypes.STRING,
            set(value) {
                let colors = ['black', 'blue', 'pink', 'red', 'orange'];
                let randomKey = Math.floor(Math.random() * colors.length);

                if(value) {
                    return;
                }

                this.setDataValue('avatar', colors[randomKey]);
            }
        },
        firstLetter: {
            type: DataTypes.VIRTUAL,
            get() {
                let name: string = this.getDataValue('name');
                
                return name.charAt(0);
            }
        }
    }, 
    {
        timestamps: false,
        tableName: 'contacts'
    }
);