import { Card } from '../../../interfaces'
import Set from '../Stormfront'

const card: Card = {
	name: {
		en: "Dusclops",
		fr: "Teraclope",
		de: "Zwirrklop"
	},

	illustrator: "Yukiko Baba",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		356,
	],

	hp: 80,

	types: [
		"Psychic",
	],

	evolveFrom: {
		en: "Duskull",
		fr: "Skélénox",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Psychic",
			],
			name: {
				en: "Dark One-eye",
				fr: "Borgne obscur",
				de: "Finsteres Einauge"
			},
			effect: {
				en: "You may discard a card from your hand. If you do, your opponent discards a card from his or her hand.",
				fr: "Vous pouvez défausser une carte de votre main. Votre adversaire défausse alors une carte de sa main.",
				de: "Du kannst 1 Karte von deiner Hand auf deinen Ablagestapel legen. Wenn du das machst, legt dein Gegner 1 Karte von seiner Hand auf seinen Ablagestapel."
			},
			damage: 20,

		},
		{
			cost: [
				"Psychic",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Ambush",
				fr: "Embuscade",
				de: "Hinterhalt"
			},
			effect: {
				en: "Flip a coin. If heads, this attack does 40 damage plus 20 more damage.",
				fr: "Lancez une pièce. Si c'est face, cette attaque inflige 40 dégâts plus 20 dégâts supplémentaires.",
				de: "Wirf 1 Münze. Bei \"Kopf\" fügt dieser Angriff 40 Schadenspunkte plus 20 weitere Schadenspunkte zu."
			},
			damage: "40+",

		},
	],

	weaknesses: [
		{
			type: "Darkness",
			value: "+20"
		},
	],

	resistances: [
		{
			type: "Colorless",
			value: "-20"
		},
	],

	retreat: 1,

	description: {
		fr: "Son corps est creux. On raconte que celui qui regarde à l'intérieur finira aspiré par le néant."
	},

	thirdParty: {
		cardmarket: 278332
	}
}

export default card
