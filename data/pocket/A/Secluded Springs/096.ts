import { Card } from "models/database/card"
import Set from "../Secluded Springs"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Kingler",
		'fr-fr': "Krabboss"
	},

	illustrator: "Shigenori Negishi",
	rarity: "One Shiny",
	category: "Pokemon",

	dexId: [99],
	hp: 120,
	types: ["Water"],

	evolveFrom: {
		'en-us': "Krabby"
	},

	description: {
		'en-us': "Its large and hard pincer has 10,000-horsepower\nstrength. However, being so big, it is unwieldy\nto move.",
		'fr-fr': "Sa grosse pince est dotée d'une puissance incommensurable. Sa taille imposante la rend toutefois difficile à utiliser."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'en-us': "KO Crab",
			'fr-fr': "Crabe Fatal"
		},

		damage: 80,
		cost: ["Water", "Water", "Colorless"],

		effect: {
			'en-us': "Flip 2 coins. If both of them are heads, this attack does 80 more damage.",
			'fr-fr': "Lancez 2 pièces. Si toutes sont côté face, cette attaque inflige 80 dégâts de plus."
		}
	}],

	weaknesses: [{
		type: "Lightning",
		value: "+20"
	}],

	retreat: 3
}

export default card