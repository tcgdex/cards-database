import { Card } from '../../../interfaces'
import Set from '../Flashfire'

const card: Card = {
	name: {
		en: "Charizard EX",
		fr: "Dracaufeu EX",
		es: "Charizard EX",
		it: "Charizard EX",
		pt: "Charizard EX",
		de: "Glurak EX"
	},

	illustrator: "Eske Yoshinob",
	rarity: "Ultra Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		6,
	],

	hp: 180,

	types: [
		"Fire",
	],

	suffix: "EX",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Stoke",
				fr: "Attisement",
				es: "Atizador",
				it: "Attizzatoio",
				pt: "Carregar",
				de: "Anheizen"
			},
			effect: {
				en: "Flip a coin. If heads, search your deck for up to 3 basic Energy cards and attach them to this Pokémon. Shuffle your deck afterward.",
				fr: "Lancez une pièce. Si c'est face, cherchez jusqu'à 3 cartes Énergie de base dans votre deck et attachez-les à ce Pokémon. Mélangez ensuite votre deck.",
				es: "Lanza 1 moneda. Si sale cara, busca en tu baraja hasta 3 cartas de Energía Básica y únelas a este Pokémon. Baraja las cartas de tu baraja después.",
				it: "Lancia una moneta. Se esce testa, cerca nel tuo mazzo fino a tre carte Energia base e assegnale a questo Pokémon. Poi rimischia le carte del tuo mazzo.",
				pt: "Jogue uma moeda. Se sair cara, procure em seu baralho até 3 cards de Energia básica e ligue-os a esse Pokémon. Em seguida, embaralhe seus cards.",
				de: "Wirf 1 Münze. Durchsuche bei \"Kopf\" dein Deck nach bis zu 3 Basis-Energiekarten und lege sie an dieses Pokémon an. Mische anschließend dein Deck."
			},

		},
		{
			cost: [
				"Fire",
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Fire Blast",
				fr: "Déflagration",
				es: "Llamarada",
				it: "Fuocobomba",
				pt: "Rajada de Fogo",
				de: "Feuersturm"
			},
			effect: {
				en: "Discard an Energy attached to this Pokémon.",
				fr: "Défaussez une Énergie attachée à ce Pokémon.",
				es: "Descarta 1 Energía unida a este Pokémon.",
				it: "Scarta un'Energia assegnata a questo Pokémon.",
				pt: "Descarte uma Energia ligada a este Pokémon.",
				de: "Lege 1 an dieses Pokémon angelegte Energie auf deinen Ablagestapel."
			},
			damage: 120,

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],

	retreat: 2,
	stage: "Basic"
}

export default card
