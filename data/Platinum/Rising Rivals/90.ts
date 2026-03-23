import { Card } from '../../../interfaces'
import Set from '../Rising Rivals'

const card: Card = {
	name: {
		en: "Bertha's Warmth",
		fr: "La chaleur de Terry",
		de: "Teresas Herzlichkeit"
	},

	illustrator: "Ken Sugimori",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		fr: "Retirez à 1 de vos Pokémon SP 5 marqueurs de dégât.",
		de: "Entferne 5 Schadensmarken von 1 deiner Pokémon SP.",
	},

	trainerType: "Supporter",

	thirdParty: {
		cardmarket: 278664,
		tcgplayer: 83813
	},

	variants: [
		{
			type: "normal"
		},
		{
			type: "reverse"
		}
	]
}

export default card
