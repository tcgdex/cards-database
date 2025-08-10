import { Card } from "../../../interfaces"
import Set from "../Surging Sparks"

const card: Card = {
	dexId: [238],
	set: Set,

	name: {
		en: "Smoochum",
		fr: "Lippouti",
		es: "Smoochum",
		it: "Smoochum",
		pt: "Smoochum",
		de: "Kussilla"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 30,
	types: ["Psychic"],
	stage: "Basic",

	attacks: [{
		name: {
			en: "Delightful Kiss",
			fr: "Bisou Délicieux",
			es: "Beso Encantador",
			it: "Bacio Incantevole",
			pt: "Beijinho Doce",
			de: "Bezaubernder Kuss"
		},

		effect: {
			en: "Search your deck for up to 2 Basic {P} Energy cards and attach them to 1 of your Benched Pokémon. Then, shuffle your deck.",
			fr: "Cherchez dans votre deck jusqu'à 2 cartes Énergie {P} de base, puis attachez-les à l'un de vos Pokémon de Banc. Mélangez ensuite votre deck.",
			es: "Busca en tu baraja hasta 2 cartas de Energía {P} Básica y únelas a uno de tus Pokémon en Banca. Después, baraja las cartas de tu baraja.",
			it: "Cerca nel tuo mazzo fino a due carte Energia base {P} e assegnale a uno dei tuoi Pokémon in panchina. Poi rimischia le carte del tuo mazzo.",
			pt: "Procure por até 2 cartas de Energia {P} Básica no seu baralho e ligue-as a 1 dos seus Pokémon no Banco. Em seguida, embaralhe o seu baralho.",
			de: "Durchsuche dein Deck nach bis zu 2 Basis-{P}-Energiekarten und lege sie an 1 Pokémon auf deiner Bank an. Mische anschließend dein Deck."
		}
	}],

	retreat: 0,
	regulationMark: "H",

	variants: {
		holo: false
	},

	illustrator: "Saya Tsuruta"
}

export default card
