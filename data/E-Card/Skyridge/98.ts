import { Card } from '../../../interfaces'
import Set from '../Skyridge'

const card: Card = {
	name: {
		en: "Slugma",
		de: "Schneckmag"
	},

	illustrator: "Naoyo Kimura",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		218,
	],

	hp: 50,

	types: [
		"Fire",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Tackle",
				de: "Tackle"
			},

			damage: 10,

		},
		{
			cost: [
				"Fire",
			],
			name: {
				en: "Scorching Lava",
				de: "Glühendheiße Lava"
			},
			effect: {
				en: "Discard a Energy card attached to Slugma in order to use this attack. The Defending Pokémon is now Burned.",
				de: "Lege eine an Schneckmag angelegte -Energiekarte auf deinen Ablagestapel, um diesen Angriff zu verwenden. Das verteidigende Pokémon ist jetzt verbrannt."
			},

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],

	thirdParty: {
		cardmarket: 275356,
		tcgplayer: 89338
	}
}

export default card
