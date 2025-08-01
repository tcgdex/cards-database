import { Card } from '../../../interfaces'
import Set from '../Evolving Skies'

const card: Card = {
	set: Set,

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	},

	name: {
		en: "Deino",
		fr: "Solochi",
		es: "Deino",
		it: "Deino",
		pt: "Deino",
		de: "Kapuno"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 60,
	types: ["Dragon"],
	stage: "Basic",
	illustrator: "HYOGONOSUKE",

	attacks: [{
		name: {
			en: "Call for Family",
			fr: "Appel à la Famille",
			es: "Llamar a la Familia",
			it: "Cerca Famiglia",
			pt: "Call for Family",
			de: "Familienruf"
		},

		effect: {
			en: "Search your deck for a Basic Pokémon and put it onto your Bench. Then, shuffle your deck.",
			fr: "Cherchez dans votre deck un Pokémon de base, puis placez-le sur votre Banc. Mélangez ensuite votre deck.",
			es: "Busca en tu baraja 1 Pokémon Básico y ponlo en tu Banca. Después, baraja las cartas de tu baraja.",
			it: "Cerca nel tuo mazzo un Pokémon Base e mettilo nella tua panchina. Poi rimischia le carte del tuo mazzo.",
			pt: "Search your deck for a Basic Pokémon and put it onto your Bench. Then, shuffle your deck.",
			de: "Durchsuche dein Deck nach 1 Basis-Pokémon und lege es auf deine Bank. Mische anschließend dein Deck."
		},

		cost: ["Darkness"]
	}, {
		name: {
			en: "Bite",
			fr: "Morsure",
			es: "Mordisco",
			it: "Morso",
			pt: "Bite",
			de: "Biss"
		},

		damage: 30,
		cost: ["Psychic", "Darkness"]
	}],

	retreat: 1,
	dexId: [633],

	description: {
		en: "Because it can't see, this Pokémon is constantly biting at everything it touches, trying to keep track of its surroundings."
	},

	regulationMark: "E",

	thirdParty: {
		cardmarket: 574161
	}
}

export default card
