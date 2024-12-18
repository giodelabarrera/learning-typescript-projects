interface Restaurant {
	city: string;
	name: string;
}

interface GroupedRestaurants {
	[city: string]: string[];
}

export function groupRestaurants(restaurants: Restaurant[]) {
	return restaurants.reduce<GroupedRestaurants>((grouped, restaurant) => {
		if (!grouped.hasOwnProperty(restaurant.city)) {
			grouped[restaurant.city] = [];
		}
		grouped[restaurant.city].push(restaurant.name);
		return grouped;
	}, {});
}
