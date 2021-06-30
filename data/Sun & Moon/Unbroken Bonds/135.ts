import { Card } from '../../../interfaces'
import Set from '../Unbroken Bonds'

const card: Card = {
	name: {
		en: "Wigglytuff",
		fr: "Grodoudou",
		es: "Wigglytuff",
		it: "Wigglytuff",
		pt: "Wigglytuff",
		de: "Knuddeluff"
	},
	illustrator: "miki kudo",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		40,
	],
	hp: 110,
	types: [
		"Fairy",
	],
	evolveFrom: {
		en: "Jigglypuff",
		fr: "Rondoudou",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Orb Polish",
				fr: "Orbe Lustré",
				es: "Pulidor de Orbes",
				it: "Lucidasfera",
				pt: "Polimento de Esfera",
				de: "Orbpolitur"
			},
			effect: {
				en: "Put 3 Energy cards from your discard pile into your hand.",
				fr: "Ajoutez 3 cartes Énergie de votre pile de défausse à votre main.",
				es: "Pon 3 cartas de Energía de tu pila de descartes en tu mano.",
				it: "Prendi tre carte Energia dalla tua pila degli scarti e aggiungile alle carte che hai in mano.",
				pt: "Coloque 3 cartas de Energia da sua pilha de descarte na sua mão.",
				de: "Nimm 3 Energiekarten aus deinem Ablagestapel auf deine Hand."
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Sleepy Ball",
				fr: "Boule Dodo",
				es: "Bola Soporífera",
				it: "Sonnopalla",
				pt: "Bola Sonolenta",
				de: "Schlafball"
			},
			effect: {
				en: "Your opponent’s Active Pokémon is now Asleep.",
				fr: "Le Pokémon Actif de votre adversaire est maintenant Endormi.",
				es: "El Pokémon Activo de tu rival pasa a estar Dormido.",
				it: "Il Pokémon attivo del tuo avversario viene addormentato.",
				pt: "O Pokémon Ativo do seu oponente agora está Adormecido.",
				de: "Das Aktive Pokémon deines Gegners schläft jetzt."
			},
			damage: 80,

		},
	],
	weaknesses: [
		{
			type: "Metal",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Darkness",
			value: "-20"
		},
	],
	retreat: 1,



}

export default card
