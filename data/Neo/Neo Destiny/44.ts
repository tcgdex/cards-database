import { Card } from '../../../interfaces'
import Set from '../Neo Destiny'

const card: Card = {
	name: {
		en: "Jigglypuff",
		fr: "Rondoudou"
	},

	illustrator: "Yuka Morii",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		39,
	],

	hp: 50,

	types: [
		"Colorless",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Expand",
				fr: "Pousstoidla"
			},
			effect: {
				en: "All damage done to Jigglypuff during your opponent's next turn is reduced by 10 (after applying Weakness and Resistance).",
				fr: "Tous les dégâts infligés à Rondoudou pendant le prochain tour de votre adversaire sont réduits de 10 (après application de la Faiblesse et de la Résistance)."
			},
			damage: 10,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Psychic",
			value: "-30"
		},
	],

	description: {
		fr: "Il gonfle son corps comme un ballon et chante une berceuse qui fait sombrer tous ceux qui l'entendent dans un profond sommeil."
	}
}

export default card
