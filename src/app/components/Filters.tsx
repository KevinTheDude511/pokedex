import React from "react";

interface CheckBoxProps {
    label: string;
}

interface RadioButtonProps {
    label: string;
    labelName: string;
    checked: boolean;
    onChange: () => void;
}

export const CheckBox: React.FC<CheckBoxProps> = ({ label }) => {
    return (
        <div className="w-fit flex items-center">
            <input
                type="checkbox"
                className="w-3 h-3 border-2 border-primary text-primary focus:ring-0"
            />
            <p className="ml-2 body-3">{label}</p>
        </div>
    );
};

export const RadioButton: React.FC<RadioButtonProps> = ({
    label,
    labelName,
    checked,
    onChange
}) => {
    return (
        <div className="w-fit flex items-center">
            <input
                type="radio"
                name={labelName}
                checked={checked}
                onChange={onChange}
                className="ml-2 w-3 h-3 border-2 border-primary text-primary focus:ring-0"
            />
            <p className="ml-2 body-3 capitalize">{label}</p>
        </div>
    );
};
