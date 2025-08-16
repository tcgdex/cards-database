import { Card } from '../../../interfaces'
import Set from '../Neo Genesis'

const card: Card = {
	name: {
		en: "Mareep",
		fr: "Wattouat",
		de: "Voltilamm"
	},

	illustrator: "Ken Sugimori",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		179,
	],

	hp: 40,

	types: [
		"Lightning",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Lightning",
			],
			name: {
				en: "Static Electricity",
				fr: "Électricité statique",
				de: "Static Electricity"
			},
			effect: {
				en: "For each Mareep in play, you may search your deck for a Energy card and attach it to Mareep. Shuffle your deck afterward.",
				fr: "Pour chaque Wattouat en jeu, vous pouvez chercher une carte Énergie  dans votre deck et l'attacher à Mareep. Mélangez ensuite votre deck.",
				de: "For each Mareep in play, you may search your deck for a  Energy card and attach it to Mareep. Shuffle your deck afterward."
			},

		},
		{
			cost: [
				"Lightning",
				"Lightning",
			],
			name: {
				en: "Thundershock",
				fr: "Éclair",
				de: "Thundershock"
			},
			effect: {
				en: "Flip a coin. If heads, the Defending Pokémon is now Paralyzed.",
				fr: "Lancez une pièce. Si c'est face, le Pokémon Défenseur est maintenant Paralysé.",
				de: "Flip a coin. If heads, the Defending Pokémon is now Paralyzed."
			},
			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	description: {
		fr: "Si de l'électricité statique s'accumule dans son corps, sa toison double de volume. Tout contact avec lui vous électrocute."
	},

	thirdParty: {
		cardmarket: 274465,
		tcgplayer: 87193
	}
}

export default card
