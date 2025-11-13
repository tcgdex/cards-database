import { Card } from '../../../interfaces'
import Set from '../HeartGold SoulSilver'

const card: Card = {
	name: {
		en: "Persian",
		fr: "Persian",
		de: "Snobilikat"
	},

	illustrator: "Kagemaru Himeno",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		53,
	],

	hp: 80,

	types: [
		"Colorless",
	],

	evolveFrom: {
		en: "Meowth",
		fr: "Miaouss",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Sharpen Claws",
				fr: "Affûtage des griffes",
				de: "Krallenschärfer"
			},
			effect: {
				en: "Flip 3 coins. For each heads, discard a card from your opponent’s hand without looking.",
				fr: "Lancez 3 pièces. Pour chaque face, défaussez une carte de la main de votre adversaire sans la regarder.",
				de: "Wirf 3 Münzen. Wähle pro \"Kopf\" 1 Karte von der Hand deines Gegners (ohne sie vorher anzusehen) und lege sie auf seinen Ablagestapel."
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Sneaky Attack",
				fr: "Coup Bas",
				de: "Hinterhältiger Angriff"
			},
			effect: {
				en: "If Persian has any Darkness Energy attached to it, this attack does 30 damage plus 30 more damage.",
				fr: "Si des cartes Énergie Darkness sont attachées à Persian, cette attaque inflige 30 dégâts plus 30 dégâts supplémentaires.",
				de: "Wenn an Snobilikat mindestens 1 -Energie angelegt ist, fügt dieser Angriff 30 Schadenspunkte plus 30 weitere Schadenspunkte zu."
			},
			damage: "30+",

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	retreat: 1,

	description: {
		en: "Its lithe muscles allow it to walk without making a sound. It attacks in an instant."
	},

	variants: [
		{
			type: "normal"
		},
		{
			type: "reverse"
		}
	],

	thirdParty: {
		cardmarket: 278999,
		tcgplayer: 87987
	}
}

export default card
