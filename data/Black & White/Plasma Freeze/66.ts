import { Card } from '../../../interfaces'
import Set from '../Plasma Freeze'

const card: Card = {
	name: {
		en: "Weavile",
		fr: "Dimoret",
		es: "Weavile",
		it: "Weavile",
		pt: "Weavile",
		de: "Snibunna"
	},

	illustrator: "5ban Graphics",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		461,
	],

	hp: 90,

	types: [
		"Darkness",
	],

	evolveFrom: {
		en: "Sneasel",
		fr: "Farfuret",
		de: "Sniebel"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Hail",
				fr: "Grêle",
				de: "Hagelsturm"
			},
			effect: {
				en: "This attack does 10 damage to each of your opponent's Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
				fr: "Cette attaque inflige 10 dégâts à chacun des Pokémon de votre adversaire. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
				de: "Dieser Angriff fügt jedem Pokémon deines Gegners 10 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)"
			},

		},
		{
			cost: [
				"Darkness",
				"Colorless",
			],
			name: {
				en: "Vilify",
				fr: "Calomnie",
				de: "Kalkuliertes Risiko"
			},
			effect: {
				en: "Discard as many Pokémon as you like from your hand. This attack does 30 damage times the number of Pokémon you discarded.",
				fr: "Défaussez autant de Pokémon que vous voulez de votre main. Cette attaque inflige 30 dégâts multipliés par le nombre de Pokémon que vous avez défaussés.",
				de: "Lege beliebig viele Pokémon von deiner Hand auf deinen Ablagestapel. Dieser Angriff fügt 30 Schadenspunkte mal der Anzahl der von dir abgelegten Pokémon zu."
			},
			damage: 30,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Psychic",
			value: "-20"
		},
	],

	retreat: 1,

	description: {
		en: "They communicate by clawing signs in boulders and work together to surround enemies.",
		de: "Sie sprechen sich miteinander ab, indem sie Muster in Steine ritzen, um ihre Gegner dann gemeinsam einzukreisen."
	},

	thirdParty: {
		cardmarket: 280944,
		tcgplayer: 90535
	}
}

export default card
