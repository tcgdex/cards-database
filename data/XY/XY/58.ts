import { Card } from '../../../interfaces'
import Set from '../XY'

const card: Card = {
	name: {
		en: "Diglett",
		fr: "Taupiqueur",
		es: "Diglett",
		it: "Diglett",
		pt: "Diglett",
		de: "Digda"
	},
	illustrator: "Kanako Eo",
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
				es: "Mina",
				it: "Miniera",
				pt: "Mina",
				de: "Abbau"
			},
			effect: {
				en: "Look at the top card of your opponent's deck. Then, you may have your opponent shuffle his or her deck.",
				fr: "Regardez la carte du dessus du deck de votre adversaire. Ensuite, vous pouvez demander à votre adversaire de mélanger son deck.",
				es: "Mira la primera carta de la baraja de tu rival. Después, puedes hacer que tu rival baraje las cartas de su baraja.",
				it: "Guarda la carta in cima al mazzo del tuo avversario. Poi, puoi fargli rimischiare il suo mazzo.",
				pt: "Olhe o card de cima do baralho do seu oponente. Em seguida, você poderá fazer com que seu oponente o embaralhe.",
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
				es: "Bofetón Lodo",
				it: "Fangosberla",
				pt: "Tapa de Lama",
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



}

export default card
