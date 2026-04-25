import { Card } from "../../../interfaces"
import Set from "../SVP Black Star Promos"

const card: Card = {
	set: Set,

	name: {
		en: "Kangaskhan",
		fr: "Kangourex",
		de: "Kangama",
		it: "Kangaskhan",
		es: "Kangaskhan",
		pt: "Kangaskhan"
	},

	illustrator: "Uta",
	rarity: "None",
	category: "Pokemon",
	dexId: [115],
	hp: 130,
	types: ["Colorless"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "Call for Family",
			fr: "Appel à la Famille",
			de: "Familienruf",
			it: "Cerca Famiglia",
			es: "Llamar a la Familia",
			pt: "Chamar a Família"
	},

		effect: {
			en: "Search your deck for a Basic Pokémon and put it onto your Bench. Then, shuffle your deck.",
			fr: "Cherchez dans votre deck un Pokémon de base, puis placez-le sur votre Banc. Mélangez ensuite votre deck.",
			de: "Durchsuche dein Deck nach 1 Basis-Pokémon und lege es auf deine Bank. Mische anschließend dein Deck.",
			it: "Cerca nel tuo mazzo un Pokémon Base e mettilo nella tua panchina. Poi rimischia le carte del tuo mazzo.",
			es: "Busca en tu baraja 1 Pokémon Básico y ponlo en tu Banca. Después, baraja las cartas de tu baraja.",
			pt: "Procure por um Pokémon Básico no seu baralho e coloque-o no seu Banco. Em seguida, embaralhe o seu baralho."
	}
	}, {
		cost: ["Colorless", "Colorless", "Colorless"],

		name: {
			en: "Mega Punch",
			fr: "Ultimapoing",
			de: "Megahieb",
			it: "Megapugno",
			es: "Megapuño",
			pt: "Megassoco"
	},

		damage: 100
	}],

	weaknesses: [{
		type: "Fighting",
		value: "x2"
	}],

	retreat: 2,
	regulationMark: "H",

	variants: [
		{
			type: "holo",
			subtype: "cosmos"
		}
	]
}

export default card