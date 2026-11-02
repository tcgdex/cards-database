import { Card } from '../../../interfaces'
import Set from '../Generations'

const card: Card = {
	name: {
		en: "Diglett",
		fr: "Taupiqueur",
		de: "Digda"
	},

	illustrator: "Tomokazu Komiya",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		50,
	],

	hp: 50,

	types: [
		"Fighting",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Fighting",
			],
			name: {
				en: "Mine",
				fr: "Mine",
				de: "Abbau"
			},
			effect: {
				en: "Look at the top card of your opponent's deck. Then, you may have your opponent shuffle his or her deck.",
				fr: "Regardez la carte du dessus du deck de votre adversaire. Ensuite, vous pouvez demander à votre adversaire de mélanger son deck.",
				de: "Schau dir die oberste Karte des Decks deines Gegners an. Anschließend kannst du deinen Gegner veranlassen, sein Deck zu mischen."
			},

		},
		{
			cost: [
				"Fighting",
				"Colorless",
			],
			name: {
				en: "Mud-Slap",
				fr: "Coud'Boue",
				de: "Lehmschelle"
			},

			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 1,

	description: {
		en: "Lives about one yard underground where it feeds on plant roots. It sometimes appears aboveground.",
		de: "Dieses Pokémon lebt 1 m unter der Erde. Es frisst Wurzeln und kommt selten an die Oberfläche."
	},

	thirdParty: {
		cardmarket: 288476,
		tcgplayer: 113696
	}
}

export default card
