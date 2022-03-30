import { Card } from '../../../interfaces'
import Set from '../Furious Fists'

const card: Card = {
	name: {
		en: "Plusle",
		fr: "Posipi",
		es: "Plusle",
		it: "Plusle",
		pt: "Plusle",
		de: "Plusle"
	},
	illustrator: "Akira Komayama",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		311,
	],
	hp: 70,
	types: [
		"Lightning",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Positive Hand",
				fr: "Main Positive",
				es: "Mano Positiva",
				it: "Mano Positiva",
				pt: "Mão Positiva",
				de: "Positive Hand"
			},
			effect: {
				en: "Discard a basic Energy card from your hand. If you do, draw 2 cards.",
				fr: "Défaussez une carte Énergie de base de votre main. Dans ce cas, piochez 2 cartes.",
				es: "Descarta 1 carta de Energía Básica de tu mano. Si lo haces, roba 2 cartas.",
				it: "Scarta una carta Energia base presente tra le carte che hai in mano. Se lo fai, pesca due carte.",
				pt: "Descarte um card de Energia básica de sua mão. Se fizer isso, compre 2 cards.",
				de: "Lege 1 Basis-Energiekarte aus deiner Hand auf deinen Ablagestapel. Wenn du das machst, ziehe 2 Karten."
			},

		},
		{
			cost: [
				"Lightning",
				"Colorless",
			],
			name: {
				en: "Electric Tail",
				fr: "Électro-Queue",
				es: "Cola Eléctrica",
				it: "Elettrocoda",
				pt: "Cauda Elétrica",
				de: "Stromschweif"
			},
			effect: {
				en: "Flip a coin. If heads, your opponent's Active Pokémon is now Paralyzed.",
				fr: "Lancez une pièce. Si c'est face, le Pokémon Actif de votre adversaire est maintenant Paralysé.",
				es: "Lanza 1 moneda. Si sale cara, el Pokémon Activo de tu rival pasa a estar Paralizado.",
				it: "Lancia una moneta. Se esce testa, il Pokémon attivo del tuo avversario viene paralizzato.",
				pt: "Jogue uma moeda. Se sair cara, o Pokémon Ativo do seu oponente será Paralisado.",
				de: "Wirf 1 Münze. Bei \"Kopf\" ist das Aktive Pokémon deines Gegners jetzt paralysiert."
			},
			damage: 30,

		},
	],
	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Metal",
			value: "-20"
		},
	],
	retreat: 1,



}

export default card
