export default {
	customWidgetDataMikMethod (){
	
		const test = SELECT_TOPWORKORDER.data[0].workorderid;
		
		return { 
						"sisu1": [test],
			"sisu2": ["üksteist", "kaksteist", "neliteist"]  
		}; 
		
	}
}