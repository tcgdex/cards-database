import { Card } from "models/database/card"
import Set from "../Eevee Grove"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Tropius",
		'fr-fr': "Tropius"
	},

	illustrator: "Oswaldo KATO",
	rarity: "Two Diamond",
	category: "Pokemon",

	dexId: [357],
	hp: 100,
	types: ["Grass"],

	description: {
		'en-us': "It lives in tropical jungles. The bunch of fruit\naround its neck is delicious. The fruit grows\ntwice a year.",
		'fr-fr': "Tropius vit dans les jungles tropicales. Les fruits sur son cou sont sucrés et succulents. Ils poussent deux fois par an."
	},

	stage: "Basic",

	attacks: [{
		name: {
			'en-us': "Cutting Wind",
			'fr-fr': "Vent Glacial"
		},

		damage: 60,
		cost: ["Colorless", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "+20"
	}],

	retreat: 2
}

export default card