import { Card } from '../../../interfaces'
import Set from '../Cosmic Eclipse'

const card: Card = {
	name: {
		en: "Drilbur",
		fr: "Rototaupe",
		es: "Drilbur",
		it: "Drilbur",
		pt: "Drilbur",
		de: "Rotomurf"
	},

	illustrator: "Suwama Chiaki",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		529,
	],

	hp: 70,

	types: [
		"Fighting",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Rototiller",
				fr: "Fertilisation",
				es: "Fertilizante",
				it: "Aracampo",
				pt: "Rototiller",
				de: "Pflüger"
			},
			effect: {
				en: "Shuffle a card from your discard pile into your deck.",
				fr: "Mélangez une carte de votre pile de défausse avec votre deck.",
				es: "Pon 1 carta de tu pila de descartes en tu baraja y baraja todas las cartas.",
				it: "Rimischia una carta dalla tua pila degli scarti nel tuo mazzo.",
				pt: "Embaralhe 1 carta da sua pilha de descarte no seu baralho.",
				de: "Mische 1 Karte aus deinem Ablagestapel in dein Deck."
			},

		},
		{
			cost: [
				"Fighting",
			],
			name: {
				en: "Mud-Slap",
				fr: "Coud’Boue",
				es: "Bofetón Lodo",
				it: "Fangosberla",
				pt: "Tapa de Lama",
				de: "Lehmschelle"
			},

			damage: 10,

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 2,

	thirdParty: {
		cardmarket: 408219
	}
}

export default card
