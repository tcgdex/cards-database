import { Card } from "models/database/card"
import Set from "../Secluded Springs"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Mismagius",
		'fr-fr': "Magirêve"
	},

	illustrator: "tono",
	rarity: "Two Diamond",
	category: "Pokemon",

	dexId: [429],
	hp: 100,
	types: ["Psychic"],

	evolveFrom: {
		'en-us': "Misdreavus"
	},

	description: {
		'en-us': "Its cry sounds like an incantation. It is said the cry\nmay rarely be imbued with happiness-giving power.",
		'fr-fr': "Son cri est semblable à une incantation. On raconte qu'en de rares occasions, il emplit de joie quiconque l'entend."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'en-us': "Cursed Prose",
			'fr-fr': "Mots Maudits"
		},

		cost: ["Psychic"],

		effect: {
			'en-us': "At the end of your opponent's next turn, do 90 damage to the Defending Pokémon.",
			'fr-fr': "À la fin du prochain tour de votre adversaire, infligez 90 dégâts au Pokémon Défenseur."
		}
	}],

	weaknesses: [{
		type: "Darkness",
		value: "+20"
	}],

	retreat: 1
}

export default card