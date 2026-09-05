import { Card } from '../../../interfaces'
import Set from '../Black & White'

const card: Card = {
	name: {
		en: "Zebstrika",
		fr: "Zéblitz",
		es: "Zebstrika",
		it: "Zebstrika",
		pt: "Zebstrika",
		de: "Zebritz"
	},

	illustrator: "Masakazu Fukuda",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		523,
	],

	hp: 90,

	types: [
		"Lightning",
	],

	evolveFrom: {
		en: "Blitzle",
		fr: "Zébibron",
		de: "Elezeba"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Rear Kick",
				fr: "Ruade",
				de: "Rückwärtskick"
			},

			damage: 30,

		},
		{
			cost: [
				"Lightning",
				"Lightning",
				"Lightning",
			],
			name: {
				en: "Electrispark",
				fr: "Arc Électrique",
				de: "Stromfunke"
			},
			effect: {
				en: "Does 10 damage to each of your opponent's Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
				fr: "Inflige 10 dégâts à chacun des Pokémon de Banc de votre adversaire. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
				de: "Dieser Angriff fügt jedem Pokémon auf der Bank deines Gegners 10 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)"
			},
			damage: 70,

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
		en: "They have lightning-like movements. When Zebstrika run at full speed, the sound of thunder reverberates.",
		de: "Es ist explosiv wie ein Blitz. Galoppiert es mit voller Geschwindigkeit drauflos, kann es man Donnerhall vernehmen."
	},

	thirdParty: {
		cardmarket: 279780,
		tcgplayer: 90728
	}
}

export default card
