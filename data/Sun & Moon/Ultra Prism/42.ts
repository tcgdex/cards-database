import { Card } from '../../../interfaces'
import Set from '../Ultra Prism'

const card: Card = {
	name: {
		en: "Manaphy",
		fr: "Manaphy",
		es: "Manaphy",
		it: "Manaphy",
		pt: "Manaphy",
		de: "Manaphy"
	},

	illustrator: "kawayoo",
	rarity: "Uncommon",
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
				en: "Deep Currents",
				fr: "Courants Profonds",
				es: "Corrientes Profundas",
				it: "Correnti Profonde",
				pt: "Correntezas Profundas",
				de: "Tiefe Strömung"
			},
			effect: {
				en: "Shuffle 5 Water Energy cards from your discard pile into your deck.",
				fr: "Mélangez 5 cartes Énergie Water de votre pile de défausse avec votre deck.",
				es: "Pon 5 cartas de Energía Water de tu pila de descartes en tu baraja y barájalas todas.",
				it: "Rimischia cinque carte Energia Water dalla tua pila degli scarti nel tuo mazzo.",
				pt: "Embaralhe 5 cartas de Energia Water da sua pilha de descarte no seu baralho.",
				de: "Mische 5 Water-Energiekarten aus deinem Ablagestapel in dein Deck."
			},

		},
		{
			cost: [
				"Water",
			],
			name: {
				en: "Water Pulse",
				fr: "Vibraqua",
				es: "Hidropulso",
				it: "Idropulsar",
				pt: "Pulso d’Água",
				de: "Aquawelle"
			},
			effect: {
				en: "Your opponent’s Active Pokémon is now Asleep.",
				fr: "Le Pokémon Actif de votre adversaire est maintenant Endormi.",
				es: "El Pokémon Activo de tu rival pasa a estar Dormido.",
				it: "Il Pokémon attivo del tuo avversario viene addormentato.",
				pt: "O Pokémon Ativo do seu oponente agora está Adormecido.",
				de: "Das Aktive Pokémon deines Gegners schläft jetzt."
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

	thirdParty: {
		cardmarket: 315972
	}
}

export default card
