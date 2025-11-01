import { Card } from "../../../interfaces"
import Set from "../Secluded Springs"

const card: Card = {
	set: Set,

	name: {
		en: "Mismagius",
		fr: "Magirêve"
	},

	illustrator: "tono",
	rarity: "Two Diamond",
	category: "Pokemon",
	hp: 100,
	types: ["Psychic"],

	evolveFrom: {
		en: "Misdreavus"
	},

	description: {
		en: "Its cry sounds like an incantation. It is said the cry\nmay rarely be imbued with happiness-giving power.",
		fr: "Son cri est semblable à une incantation. On raconte qu'en de rares occasions, il emplit de joie quiconque l'entend."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			en: "Cursed Prose",
			fr: "Mots Maudits"
		},

		cost: ["Psychic"],

		effect: {
			en: "At the end of your opponent's next turn, do 90 damage to the Defending Pokémon.",
			fr: "À la fin du prochain tour de votre adversaire, infligez 90 dégâts au Pokémon Défenseur."
		}
	}],

	weaknesses: [{
		type: "Darkness",
		value: "+20"
	}],

	retreat: 1
}

export default card