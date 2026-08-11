import { Card } from '../../../interfaces'
import Set from '../Rising Rivals'

const card: Card = {
	name: {
		en: "Luxray GL",
		fr: "Luxray  Niv. 48",
		de: "Luxtra GL"
	},

	illustrator: "Kouki Saitou",
	rarity: "Holo Rare",
	category: "Pokemon",
	set: Set,

	dexId: [405],

	hp: 80,

	types: [
		"Lightning"
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Bite",
				fr: "Morsure",
				de: "Biss"
			},

			damage: 30,

		},
		{
			cost: [
				"Lightning",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Trash Bolt",
				fr: "Éclair saccageant",
				de: "Abfallblitz"
			},
			effect: {
				en: "Discard an Energy card from your hand. (If you can't discard a card from your hand, this attack does nothing.)",
				fr: "Défaussez une carte Énergie de votre main. (Si vous ne pouvez pas défausser de carte de votre main, cette attaque est sans effet).",
				de: "Lege 1 Energiekarte von deiner Hand auf deinen Ablagestapel. (Wenn du das nicht machen kannst, hat dieser Angriff keine Auswirkungen.)"
			},
			damage: 70,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "x2"
		},
	],
	resistances: [
		{
			type: "Metal",
			value: "-20"
		},
	],
	retreat: 1,

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 278583,
				tcgplayer: 86951
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 278583,
				tcgplayer: 86951
			}
		},
		{
			type: "holo",
			stamp: ["tsubasa-nakamura"],
			thirdParty: {
				cardmarket: 868924,
				tcgplayer: 479911
			}
		},
		{
			type: "holo",
			stamp: ["stephen-silvestro"],
			thirdParty: {
				cardmarket: 868923,
				tcgplayer: 479912
			}
		},
		{
			type: "holo",
			stamp: ["yuta-komatsuda"],
			thirdParty: {
				cardmarket: 868702,
				tcgplayer: 480076
			}
		},
		{
			type: "holo",
			stamp: ["mychael-bryan"],
			thirdParty: {
				cardmarket: 868700,
				tcgplayer: 480075
			}
		},
	],

}

export default card
