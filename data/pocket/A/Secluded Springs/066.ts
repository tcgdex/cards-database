import { Card } from "models/database/card"
import Set from "../Secluded Springs"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Fletchling",
		'fr-fr': "Passerouge"
	},

	illustrator: "Shibuzoh.",
	rarity: "One Diamond",
	category: "Pokemon",

	dexId: [661],
	hp: 50,
	types: ["Colorless"],

	description: {
		'en-us': "This Pokémon is normally calm, but once it enters battle,\nits hormonal balance changes and it becomes aggressive.",
		'fr-fr': "Il a un tempérament généralement calme, mais son équilibre hormonal se modifie lors des combats et le rend plus agressif."
	},

	stage: "Basic",

	attacks: [{
		name: {
			'en-us': "Quick Attack",
			'fr-fr': "Vive-Attaque"
		},

		damage: 10,
		cost: ["Colorless"],

		effect: {
			'en-us': "Flip a coin. If heads, this attack does 30 more damage.",
			'fr-fr': "Lancez une pièce. Si c'est face, cette attaque inflige 30 dégâts de plus."
		}
	}],

	weaknesses: [{
		type: "Lightning",
		value: "+20"
	}],

	retreat: 1
}

export default card