import { Card } from '../../../interfaces'
import Set from '../SWSH Black Star Promos'

const card: Card = {
	set: Set,

	name: {
		en: "Rillaboom V",
		fr: "Gorythmic V",
		es: "Rillaboom V",
		it: "Rillaboom V",
		pt: "Rillaboom V",
		de: "Gortrom V"
	},

	illustrator: "5ban Graphics",
	rarity: "None",
	category: "Pokemon",
	hp: 220,
	types: ["Grass"],

	attacks: [{
		name: {
			en: "Forest Feast",
			fr: "Festin Forestier",
			es: "Festín Forestal",
			it: "Festa del Bosco",
			pt: "Forest Feast",
			de: "Waldschmaus"
		},

		effect: {
			en: "Search your deck for up to 2 Basic Grass Pokémon and put them onto your Bench. Then, shuffle your deck.",
			fr: "Cherchez dans votre deck jusqu’à 2 Pokémon Grass de base, puis placez-les sur votre Banc. Mélangez ensuite votre deck.",
			es: "Busca en tu baraja hasta 2 Pokémon Grass Básicos y ponlos en tu Banca. Después, baraja las cartas de tu baraja.",
			it: "Cerca nel tuo mazzo fino a due Pokémon Base Grass e mettili nella tua panchina. Poi rimischia le carte del tuo mazzo.",
			pt: "Search your deck for up to 2 Basic Grass Pokémon and put them onto your Bench. Then, shuffle your deck.",
			de: "Durchsuche dein Deck nach bis zu 2 Basis-Grass-Pokémon und lege sie auf deine Bank. Mische anschließend dein Deck."
		},

		cost: ["Grass"]
	}, {
		name: {
			en: "Wood Hammer",
			fr: "Martobois",
			es: "Mazazo",
			it: "Mazzuolegno",
			pt: "Wood Hammer",
			de: "Holzhammer"
		},

		effect: {
			en: "This Pokémon also does 30 damage to itself.",
			fr: "Ce Pokémon s’inflige aussi 30 dégâts.",
			es: "Este Pokémon también se hace 30 puntos de daño a sí mismo.",
			it: "Questo Pokémon infligge anche 30 danni a se stesso.",
			pt: "This Pokémon also does 30 damage to itself.",
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
	stage: "Basic",
	suffix: "V",
	dexId: [812],

	variants: {
		normal: false,
		reverse: false,
		holo: true,
		firstEdition: false
	}
}

export default card