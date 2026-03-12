import { Card } from '../../../interfaces'
import Set from '../Ruby & Sapphire'

const card: Card = {
	name: {
		en: "Aron",
		fr: "Galekid",
		de: "Stollunior"
	},

	illustrator: "Mitsuhiro Arita",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		304,
	],

	hp: 40,

	types: [
		"Metal",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Teary Eyes",
				fr: "Des larmes dans les yeux",
				de: "Tränende Augen"
			},
			effect: {
				en: "During your opponent's next turn, any damage done to Aron by attacks is reduced by 10.",
				fr: "Pendant le prochain tour de votre adversaire, les dégâts infligés à Galekid sont réduits de 10.",
				de: "Während des nächsten Zuges deines Gegners wird jeder Schaden, der Stollunior durch Angriffe zugefügt wird, um 10 Schadenspunkte reduziert."
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Ram",
				fr: "Charge",
				de: "Ramme"
			},

			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Grass",
			value: "-30"
		},
	],


	retreat: 1,

	thirdParty: {
		cardmarket: 275673,
		tcgplayer: 83629
	},

	variants: [
		{
			type: "normal",
		},
		{
			type: "reverse",
		},
	]
}

export default card
