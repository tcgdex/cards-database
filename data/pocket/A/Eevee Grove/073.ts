import { Card } from "models/database/card"
import Set from "../Eevee Grove"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Glaceon",
		'fr-fr': "Givrali"
	},

	illustrator: "Fujimoto Gold",
	rarity: "One Star",
	category: "Pokemon",

	dexId: [471],
	hp: 100,
	types: ["Water"],

	evolveFrom: {
		'en-us': "Eevee"
	},

	description: {
		'en-us': "It can control its body temperature at will.\nThis enables it to freeze the moisture in the\natmosphere, creating flurries of diamond dust.",
		'fr-fr': "Il peut contrôler la température de son corps à volonté et créer des cristaux de glace en gelant l'humidité de l'air."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'en-us': "Ice Blade",
			'fr-fr': "Lame de Glace"
		},

		cost: ["Water", "Water"],

		effect: {
			'en-us': "This attack does 50 damage to 1 of your opponent's Pokémon.",
			'fr-fr': "Cette attaque inflige 50 dégâts à l'un des Pokémon de votre adversaire."
		}
	}],

	weaknesses: [{
		type: "Metal",
		value: "+20"
	}],

	retreat: 2
}

export default card