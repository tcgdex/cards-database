import { Card } from "models/database/card"
import Set from "../Eevee Grove"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Slurpuff",
		'fr-fr': "Cupcanaille"
	},

	illustrator: "Kyoko Umemoto",
	rarity: "Two Diamond",
	category: "Pokemon",

	dexId: [685],
	hp: 120,
	types: ["Psychic"],

	evolveFrom: {
		'en-us': "Swirlix"
	},

	description: {
		'en-us': "By taking in a person's scent, it can sniff out their\nmental and physical condition. It's hoped that\nthis skill will have many medical applications.",
		'fr-fr': "Il peut diagnostiquer l'état de santé mentale et physique de quelqu'un rien qu'à l'odorat. Un tel don pourrait avoir des applications en médecine."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'en-us': "Sweets Relay",
			'fr-fr': "Saupoudrage Sucré"
		},

		damage: 30,
		cost: ["Colorless", "Colorless"],

		effect: {
			'en-us': "If 1 of your Pokémon used Sweets Relay during your last turn, this attack does 60 more damage.",
			'fr-fr': "Si un de vos Pokémon a utilisé  lors de votre dernier tour, cette attaque inflige 60 dégâts supplémentaires."
		}
	}],

	weaknesses: [{
		type: "Metal",
		value: "+20"
	}],

	retreat: 3
}

export default card