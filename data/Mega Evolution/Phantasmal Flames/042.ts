import { Card } from "../../../interfaces"
import Set from "../Phantasmal Flames"

const card: Card = {
	set: Set,

	name: {
		en: "Mimikyu",
		fr: "Mimiqui",
		es: "Mimikyu",
		'es-mx': "Mimikyu",
		de: "Mimigma",
		it: "Mimikyu",
		pt: "Mimikyu"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 70,
	types: ["Psychic"],
	stage: "Basic",
	dexId: [778],

	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "Call for Family",
			fr: "Appel à la Famille",
			es: "Llamar a la Familia",
			'es-mx': "Llamar a la Familia",
			de: "Familienruf",
			it: "Cerca Famiglia",
			pt: "Chamar a Família"
		},

		effect: {
			en: "Search your deck for a Basic Pokémon and put it onto your Bench. Then, shuffle your deck.",
			fr: "Cherchez dans votre deck un Pokémon de base, puis placez-le sur votre Banc. Mélangez ensuite votre deck.",
			es: "Busca en tu baraja 1 Pokémon Básico y ponlo en tu Banca. Después, baraja las cartas de tu baraja.",
			'es-mx': "Busca en tu mazo 1 Pokémon Básico y ponlo en tu Banca. Después, baraja tu mazo.",
			de: "Durchsuche dein Deck nach 1 Basis-Pokémon und lege es auf deine Bank. Mische anschließend dein Deck.",
			it: "Cerca nel tuo mazzo un Pokémon Base e mettilo nella tua panchina. Poi rimischia il tuo mazzo.",
			pt: "Procure por um Pokémon Básico no seu baralho e coloque-o no seu Banco. Em seguida, embaralhe o seu baralho."
		}
	}, {
		cost: ["Psychic"],

		name: {
			en: "Scratch",
			fr: "Griffe",
			es: "Arañazo",
			'es-mx': "Arañazo",
			de: "Kratzer",
			it: "Graffio",
			pt: "Arranhão"
		},

		damage: 20
	}],

	retreat: 1,
	regulationMark: "I",

	variants: [
		{
			type: "normal"
		},
		{
			type: "reverse"
		}
	],

	thirdParty: {
		cardmarket: 857617,
		tcgplayer: 662197
	}
}

export default card