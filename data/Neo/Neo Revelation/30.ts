import { Card } from '../../../interfaces'
import Set from '../Neo Revelation'

const card: Card = {
	name: {
		en: "Graveler",
		fr: "Gravalanch",
		de: "Georok"
	},

	illustrator: "Yukiko Baba",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		75,
	],

	hp: 70,

	types: [
		"Fighting",
	],

	evolveFrom: {
		en: "Geodude",
		fr: "Racaillou",
		de: "Kleinstein"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Fighting",
				"Colorless",
			],
			name: {
				en: "Earthquake",
				fr: "Séisme",
				de: "Erdbeben"
			},
			effect: {
				en: "Does 10 damage to each of your own Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
				fr: "Inflige 10 dégâts à chacun des Pokémon de votre propre Banc. (Ne pas appliquer la Faiblesse et la Résistance aux Pokémon sur le Banc.)",
				de: "Fügt jedem Pokémon auf deiner eigenen Bank 10 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)"
			},
			damage: 40,

		},
		{
			cost: [
				"Fighting",
				"Fighting",
				"Fighting",
			],
			name: {
				en: "Rock Tumble",
				fr: "Roule-pierre",
				de: "Rollende Felsen"
			},
			effect: {
				en: "Don't apply Resistance.",
				fr: "N'appliquez pas la Résistance.",
				de: "Wende Resistenz nicht an."
			},
			damage: 50,

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],
	retreat: 2,


	description: {
		en: "With a free and uncaring nature, it doesn't mind if pieces break off while it rolls down mountains.",
		fr: "De nature libre et peu souciante, il se moque de perdre des fragments de pierre en roulant sur les pentes des montagnes.",
		de: "Da es ein fröhliches Gemüt hat, ist es ihm egal, ob ein paar Teile aus ihm herausbrechen, während es die Berge herunterrollt."
	},


	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 274616,
				tcgplayer: 85885
			}
		},
		{
			type: "normal",
			stamp: ["1st-edition"],
			thirdParty: {
				cardmarket: 274616,
				tcgplayer: 85885
			}
		}
	]
}

export default card

