import { Card } from '../../../interfaces'
import Set from '../Aquapolis'

const card: Card = {
	name: {
		en: "Cubone",
		fr: "Osselait",
		de: "Tragosso"
	},

	illustrator: "Midori Harada",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [104],

	hp: 40,

	types: [
		"Fighting"
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
				en: "During your opponent's next turn, any damage done to Cubone by attacks is reduced by 20.",
				fr: "Pendant le prochain tour de votre adversaire, tous les dégâts infligés à Osselait par des attaques sont réduits de 20.",
				de: "Aller Schaden, der Lahmus im nächsten Zug deines Gegners durch Angriffe zugefügt wird, wird um 20 reduziert."
			},

		},
		{
			cost: [
				"Fighting",
			],
			name: {
				en: "Tackle",
				fr: "Charge",
				de: "Tackle"
			},

			damage: 10,

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "x2"
		},
	],
	resistances: [
		{
			type: "Lightning",
			value: "-30"
		},
	],
	retreat: 1,


	variants: [
		{
			type: 'normal',
			thirdParty: {
				tcgplayer: 84528,
				cardmarket: 275145
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				tcgplayer: 84528,
				cardmarket: 275145
			}
		},
	]
}

export default card
