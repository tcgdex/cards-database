import { Card } from '../../../interfaces'
import Set from '../Generations'

const card: Card = {
	name: {
		en: "Golem",
		fr: "Grolem",
		de: "Geowaz"
	},

	illustrator: "Hasuno",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		76,
	],

	hp: 150,

	types: [
		"Fighting",
	],

	evolveFrom: {
		en: "Graveler",
		fr: "Gravalanch",
		de: "Georok"
	},

	stage: "Stage2",

	attacks: [
		{
			cost: [
				"Fighting",
				"Fighting",
				"Colorless",
			],
			name: {
				en: "Stone Edge",
				fr: "Lame de Roc",
				de: "Steinkante"
			},
			effect: {
				en: "Flip a coin. If heads, this attack does 30 more damage.",
				fr: "Lancez une pièce. Si c'est face, cette attaque inflige 30 dégâts supplémentaires.",
				de: "Wirf 1 Münze. Bei „Kopf“ fügt dieser Angriff 30 weitere Schadenspunkte zu."
			},
			damage: "60+",

		},
		{
			cost: [
				"Fighting",
				"Fighting",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Explosion",
				fr: "Explosion",
				de: "Explosion"
			},
			effect: {
				en: "This Pokémon does 100 damage to itself.",
				fr: "Ce Pokémon s'inflige 100 dégâts.",
				de: "Dieses Pokémon fügt sich selbst 100 Schadenspunkte zu."
			},
			damage: 150,

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 3,

	description: {
		en: "It tumbles down mountains, leaving grooves from peak to base. Stay clear of these grooves.",
		de: "Sie rollen Berge hinunter und hinterlassen Spurrillen. Halte dich von diesen Rillen fern."
	},

	thirdParty: {
		cardmarket: 288483,
		tcgplayer: 113703
	}
}

export default card
