import { Card } from '../../../interfaces'
import Set from '../POP Series 9'

const card: Card = {
	name: {
		en: "Garchomp",
		fr: "Carchacrok",
		de: "Knakrack"
	},

	illustrator: "Kagemaru Himeno",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [445],

	hp: 130,

	types: [
		"Colorless"
	],

	evolveFrom: {
		en: "Gabite",
		fr: "Carmache",
		de: "Knarksel"
	},

	stage: "Stage2",

	attacks: [
		{
			cost: [
				"Colorless",
			],

			name: {
				en: "Dragon Rage",
				fr: "Draco-Rage",
				de: "Drachenwut"
			},

			effect: {
				en: "Flip 2 coins. If either of them is tails, this attack does nothing.",
				fr: "Lancez 2 pièces. Si vous obtenez au moins un côté pile, cette attaque ne fait rien.",
				de: "Wirf 2 Münzen. Wenn eine oder beide Münzen „Zahl“ gezeigt haben, hat dieser Angriff keine Auswirkungen."
			},

			damage: 80,
		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Jet Sword",
				fr: "Jet Sword",
				de: "Düsenschwert"
			},
			effect: {
				en: "Discard 2 Energy attached to Garchomp and this attack does 10 damage to each of your opponent's Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
				fr: "Défaussez deux Énergies attachées à Carchacrok. Cette attaque inflige 10 dégâts à chacun des Pokémon de Banc de votre adversaire. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
				de: "Entferne 2 Energien, die an Knakrack angelegt sind, und lege sie auf deinen Ablagestapel und dieser Angriff fügt allen Pokémon auf der Bank deines Gegners 10 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)"
			},
			damage: 100,

		},
	],

	weaknesses: [
		{
			type: "Colorless",
			value: "+30"
		},
	],
	retreat: 0,

	description: {
		en: "It flies at speeds equal to a jet fighter plane. It never allows its prey to escape.",
		fr: "Il vole à la vitesse d'un avion à réaction et ne lâche jamais sa proie.",
		de: "Es fliegt mit der Geschwindigkeit eines Kampfjets. Es lässt nicht zu, dass ihm seine Beute entkommt."
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 85622,
				cardmarket: 278552
			},
		},
	],

}

export default card
