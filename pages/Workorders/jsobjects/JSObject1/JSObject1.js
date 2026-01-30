export default {
	autoRefresh: () => {
		setInterval(() => {
			// Replace 'fetchData' with your actual query name
			Select_dbo_ESTWORKORDERHEADER1.run()
				.then(() => {
					showAlert("Data refreshed!", "success");
				})
				.catch(() => {
					showAlert("Refresh failed", "error");
				});
		}, 10000); // 10 seconds
	}
}