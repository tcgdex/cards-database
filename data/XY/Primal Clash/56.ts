import { Card } from '../../../interfaces'
import Set from '../Primal Clash'

const card: Card = {
	name: {
		en: "Manaphy",
		fr: "Manaphy",
		es: "Manaphy",
		it: "Manaphy",
		pt: "Manaphy",
		de: "Manaphy"
	},
	illustrator: "sui",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		490,
	],
	hp: 70,
	types: [
		"Water",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Water",
			],
			name: {
				en: "Deep Sea Swirl",
				fr: "Remous Abyssal",
				es: "Remolino de Alta Mar",
				it: "Vortice Abissale",
				pt: "Giro em Mar Profundo",
				de: "Tiefseewirbel"
			},
			effect: {
				en: "Shuffle your hand into your deck. Then, draw 6 cards.",
				fr: "Mélangez votre main avec votre deck. Ensuite, piochez 6 cartes.",
				es: "Pon las cartas de tu mano en tu baraja y barájalas todas. Después, roba 6 cartas.",
				it: "Metti le carte che hai in mano nel tuo mazzo e rimischialo. Poi pesca sei carte.",
				pt: "Embaralhe a mão no seu baralho. Em seguida, compre 6 cards.",
				de: "Mische deine Handkarten in dein Deck. Ziehe anschließend 6 Karten."
			},

		},
		{
			cost: [
				"Water",
			],
			name: {
				en: "Life Saver",
				fr: "Sauvetage",
				es: "Salvavidas",
				it: "Salvagente",
				pt: "Salva-vidas",
				de: "Lebensretter"
			},
			effect: {
				en: "Put 2 Water Pokémon from your discard pile into your hand.",
				fr: "Ajoutez 2 Pokémon Water de votre pile de défausse à votre main.",
				es: "Pon 2 Pokémon Water de tu pila de descartes en tu mano.",
				it: "Prendi due Pokémon Water dalla tua pila degli scarti e aggiungili alle carte che hai in mano.",
				pt: "Coloque 2 Pokémon Water da sua pilha de descarte em sua mão.",
				de: "Nimm 2 Water-Pokémon von deinem Ablagestapel auf deine Hand."
			},

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
