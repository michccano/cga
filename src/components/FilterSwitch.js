import React from 'react'
import Switch from "@material-ui/core/Switch";
import FormControlLabel from "@material-ui/core/FormControlLabel";


function FilterSwitch() {
    return (
        <>
            <section className="filter_switch mt-3" >
                <div className="switch_holder text-center">




                <FormControlLabel
                    value="start"
                    control={<Switch color="primary" />}
                    label="Birth"
                    labelPlacement="start"
                />
	

                <FormControlLabel 
                    value="start"
                    control={<Switch color="primary" />}
                    label="Burn" 
                    labelPlacement="start" 
                />
                
                </div>
            </section>
        </>
    )
}

export default FilterSwitch
