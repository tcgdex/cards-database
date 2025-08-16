import { Card } from '../../../interfaces'
import Set from '../Shining Fates'

const card: Card = {
	dexId: [812],
	set: Set,

	name: {
		fr: "Gorythmic V",
		en: "Rillaboom V",
		es: "Rillaboom V",
		it: "Rillaboom V",
		pt: "Rillaboom V",
		de: "Gortrom V"
	},

	illustrator: "5ban Graphics",
	rarity: "Shiny rare V",
	category: "Pokemon",
	hp: 220,
	types: ["Grass"],

	attacks: [{
		name: {
			fr: "Festin Forestier",
			en: "Forest Feast",
			es: "Festín Forestal",
			it: "Festa del Bosco",
			pt: "Banquete Florestal",
			de: "Waldschmaus"
		},

		effect: {
			fr: "Cherchez dans votre deck jusqu'à 2 Pokémon Grass de base, puis placez-les sur votre Banc. Mélangez ensuite votre deck.",
			en: "Search your deck for up to 2 Basic Grass Pokémon and put them onto your Bench. Then, shuffle your deck.",
			es: "Busca en tu baraja hasta 2 Pokémon Grass Básicos y ponlos en tu Banca. Después, baraja las cartas de tu baraja.",
			it: "Cerca nel tuo mazzo fino a due Pokémon Base Grass e mettili nella tua panchina. Poi rimischia le carte del tuo mazzo.",
			pt: "Procure por até 2 Pokémon Grass Básicos no seu baralho e coloque-os no seu Banco. Em seguida, embaralhe o seu baralho.",
			de: "Durchsuche dein Deck nach bis zu 2 Basis-Grass-Pokémon und lege sie auf deine Bank. Mische anschließend dein Deck."
		},

		cost: ["Grass"]
	}, {
		name: {
			fr: "Martobois",
			en: "Wood Hammer",
			es: "Mazazo",
			it: "Mazzuolegno",
			pt: "Martelo de Madeira",
			de: "Holzhammer"
		},

		effect: {
			fr: "Ce Pokémon s'inflige aussi 30 dégâts.",
			en: "This Pokémon also does 30 damage to itself.",
			es: "Este Pokémon también se hace 30 puntos de daño a sí mismo.",
			it: "Questo Pokémon infligge anche 30 danni a se stesso.",
			pt: "Este Pokémon também causa 30 pontos de dano a si mesmo.",
			de: "Dieses Pokémon fügt auch sich selbst 30 Schadenspunkte zu."
		},

		damage: 220,
		cost: ["Grass", "Grass", "Grass", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 3,
	regulationMark: "D",
	stage: "Basic",
	suffix: "V",

	thirdParty: {
		cardmarket: 539913
	}
}

export default card
