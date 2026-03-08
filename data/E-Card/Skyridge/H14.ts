import { Card } from '../../../interfaces'
import Set from '../Skyridge'

const card: Card = {
	name: {
		en: "Ledian",
		de: "Ledian"
	},

	illustrator: "Hikaru Koike",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		166,
	],

	hp: 70,

	types: [
		"Grass",
	],

	evolveFrom: {
		en: "Ledyba",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Pollen Shield",
				de: "Pollenschild"
			},
			effect: {
				en: "During your opponent's next turn, Ledian can't become affected by a Special Condition. (Any other effect of attacks, Poké",
				de: "Während des nächsten gegnerischen Zugs kann Ledian nicht von speziellen Zuständen betroffen werden. (Alle anderen Effekte von Angriffen, Poke-Powers, Poke-Bodies und Trainerkarten finden immer noch statt.)"
			},
			damage: 10,

		},
		{
			cost: [
				"Grass",
				"Grass",
				"Colorless",
			],
			name: {
				en: "Swift",
				de: "Sternschauer"
			},
			effect: {
				en: "This attack's damage isn't affected by Weakness, Resistance, Poké-Powers, Poké-Bodies, or any other effects on the Defending Pokémon.",
				de: "Die Schadenspunkte dieses Angriffs werden nicht durch Schwäche, Resistenz, Poke-Powers, Poke-Bodies oder andere das verteidigende Pokémon betreffende Effekte beeinflusst."
			},
			damage: 50,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	thirdParty: {
		cardmarket: 275242,
		tcgplayer: 86690
	},

	variants: [
		{
			type: 'holo',
		}
	]
}

export default card
