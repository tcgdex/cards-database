import { Card } from '../../../interfaces'
import Set from '../Unified Minds'

const card: Card = {
	name: {
		en: "Excadrill",
		fr: "Minotaupe",
		es: "Excadrill",
		it: "Excadrill",
		pt: "Excadrill",
		de: "Stalobor"
	},
	illustrator: "Kyoko Umemoto",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		530,
	],
	hp: 120,
	types: [
		"Fighting",
	],
	evolveFrom: {
		en: "Drilbur",
		fr: "Rototaupe",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Fighting",
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
				en: "Shuffle 4 cards from your discard pile into your deck.",
				fr: "Mélangez 4 cartes de votre pile de défausse avec votre deck.",
				es: "Pon 4 cartas de tu pila de descartes en tu baraja y baraja todas las cartas.",
				it: "Rimischia quattro carte dalla tua pila degli scarti nel tuo mazzo.",
				pt: "Embaralhe 4 cartas da sua pilha de descarte no seu baralho.",
				de: "Mische 4 Karten aus deinem Ablagestapel in dein Deck."
			},

		},
		{
			cost: [
				"Fighting",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Slash",
				fr: "Tranche",
				es: "Cuchillada",
				it: "Lacerazione",
				pt: "Talho",
				de: "Schlitzer"
			},

			damage: 90,

		},
	],
	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 2,



}

export default card
