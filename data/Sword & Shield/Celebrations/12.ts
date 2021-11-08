import { Card } from '../../../interfaces'
import Set from '../Celebrations'

const card: Card = {
	set: Set,

	variants: {
		normal: false,
		reverse: false,
		holo: true,
		firstEdition: false
	},

	name: {
		en: "Xerneas",
		fr: "Xerneas",
		es: "Xerneas",
		it: "Xerneas",
		pt: "Xerneas",
		de: "Xerneas"
	},

	rarity: "Rare",
	category: "Pokemon",
	hp: 120,
	types: ["Psychic"],
	stage: "Basic",
	illustrator: "AKIRA EGAWA",

	attacks: [{
		name: {
			en: "Breath of Life",
			fr: "Souffle de Vie",
			es: "Soplo de Creación",
			it: "Soffio di Vita",
			pt: "Sopro da Vida",
			de: "Lebenshauch"
		},

		effect: {
			en: "Search your deck for up to 3 basic Energy cards of different types and attach them to your Pokémon in any way you like. Then, shuffle your deck.",
			fr: "Cherchez dans votre deck jusqu'à 3 cartes Énergie de base de types différents, puis attachez-les à vos Pokémon comme il vous plaît. Mélangez ensuite votre deck.",
			es: "Busca en tu baraja hasta 3 cartas de Energía Básica de diferentes tipos y únelas a tus Pokémon de la manera que desees. Después, baraja las cartas de tu baraja.",
			it: "Cerca nel tuo mazzo fino a tre carte Energia base di tipo diverso e assegnale ai tuoi Pokémon nel modo che preferisci. Poi rimischia le carte del tuo mazzo.",
			pt: "Procure por até 3 cartas de Energia básica de tipos diferentes no seu baralho e ligue-as aos seus Pokémon como desejar. Em seguida, embaralhe o seu baralho.",
			de: "Durchsuche dein Deck nach bis zu 3 Basis-Energiekarten verschiedenen Typs und lege sie beliebig an deine Pokémon an. Mische anschließend dein Deck."
		},

		cost: ["Colorless", "Colorless"]
	}, {
		name: {
			en: "Aurora Horns",
			fr: "Cornes Boréales",
			es: "Cuernos Aurora",
			it: "Corni dell'Aurora",
			pt: "Chifres da Aurora",
			de: "Aurorahörner"
		},

		damage: 100,
		cost: ["Psychic", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Metal",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "E",

	description: {
		en: "When the horns on its head shine in seven different colors, it is said to be sharing everlasting life."
	},

	dexId: [716]
}

export default card
