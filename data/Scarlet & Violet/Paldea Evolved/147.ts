import { Card } from "../../../interfaces"
import Set from "../Paldea Evolved"

const card: Card = {
	set: Set,

	name: {
		fr: "Lestombaile",
		en: "Bombirdier",
		es: "Bombirdier",
		it: "Bombirdier",
		pt: "Bombirdier",
		de: "Adebom"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 120,
	types: ["Darkness"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			fr: "Poche de Livraison",
			en: "Delivery Pocket",
			es: "Bolsillo de Reparto",
			it: "Tasca da Consegna",
			pt: "Bolso de Entrega",
			de: "Liefertasche"
		},

		effect: {
			fr: "Cherchez dans votre deck un Pokémon de base, puis placez-le sur votre Banc. Mélangez ensuite votre deck.",
			en: "Search your deck for a Basic Pokémon and put it onto your Bench. Then, shuffle your deck.",
			es: "Busca en tu baraja 1 Pokémon Básico y ponlo en tu Banca. Después, baraja las cartas de tu baraja.",
			it: "Cerca nel tuo mazzo un Pokémon Base e mettilo nella tua panchina. Poi rimischia le carte del tuo mazzo.",
			pt: "Procure por um Pokémon Básico no seu baralho e coloque-o no seu Banco. Em seguida, embaralhe o seu baralho.",
			de: "Durchsuche dein Deck nach 1 Basis-Pokémon und lege es auf deine Bank. Mische anschließend dein Deck."
		}
	}, {
		cost: ["Darkness", "Darkness", "Colorless"],

		name: {
			fr: "Lame Obscurité",
			en: "Dark Edge",
			es: "Filo Siniestro",
			it: "Lama Oscura",
			pt: "Gume Sombrio",
			de: "Dunkelklinge"
		},

		effect: {
			fr: "Défaussez une Énergie de ce Pokémon.",
			en: "Discard an Energy from this Pokémon.",
			es: "Descarta 1 Energía de este Pokémon.",
			it: "Scarta un'Energia da questo Pokémon.",
			pt: "Descarte uma Energia deste Pokémon.",
			de: "Lege 1 Energie von diesem Pokémon auf deinen Ablagestapel."
		},

		damage: 120
	}],

	retreat: 1,
	regulationMark: "G",

	variants: {
		holo: false
	},

	illustrator: "Sekio",

	thirdParty: {
		cardmarket: 715622
	}
}

export default card