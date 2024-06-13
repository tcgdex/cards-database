import { Card } from "../../../interfaces"
import Set from "../Obsidian Flames"

const card: Card = {
	dexId: [590],
	set: Set,

	name: {
		fr: "Trompignon",
		en: "Foongus",
		es: "Foongus",
		it: "Foongus",
		pt: "Foongus",
		de: "Tarnpignon"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 50,
	types: ["Grass"],
	stage: "Basic",

	attacks: [{
		cost: ["Grass"],

		name: {
			fr: "Motif Attirant",
			en: "Enticing Pattern",
			es: "Patrón Tentador",
			it: "Motivo Allettante",
			pt: "Padrão Atraente",
			de: "Lockmuster"
		},

		effect: {
			fr: "Cherchez dans votre deck un Pokémon Grass de base, puis placez-le sur votre Banc. Mélangez ensuite votre deck.",
			en: "Search your deck for a Basic Grass Pokémon and put it onto your Bench. Then, shuffle your deck.",
			es: "Busca en tu baraja 1 Pokémon Grass Básico y ponlo en tu Banca. Después, baraja las cartas de tu baraja.",
			it: "Cerca nel tuo mazzo un Pokémon Base Grass e mettilo nella tua panchina. Poi rimischia le carte del tuo mazzo.",
			pt: "Procure por um Pokémon Grass Básico no seu baralho e coloque-o no seu Banco. Em seguida, embaralhe o seu baralho.",
			de: "Durchsuche dein Deck nach 1 Basis-Grass-Pokémon und lege es auf deine Bank. Mische anschließend dein Deck."
		}
	}, {
		cost: ["Grass", "Colorless"],

		name: {
			fr: "Bataille",
			en: "Beat",
			es: "Toque",
			it: "Battuta",
			pt: "Pulso",
			de: "Verprügler"
		},

		damage: 20
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card