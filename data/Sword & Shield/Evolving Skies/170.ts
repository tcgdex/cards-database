import { Card } from '../../../interfaces'
import Set from '../Evolving Skies'

const card: Card = {
	set: Set,

	variants: {
		normal: false,
		reverse: false,
		holo: true,
		firstEdition: false
	},

	name: {
		en: "Volcarona V",
		fr: "Pyrax V",
		es: "Volcarona V",
		it: "Volcarona V",
		pt: "Volcarona V",
		de: "Ramoth V"
	},

	rarity: "Ultra Rare",
	category: "Pokemon",
	hp: 210,
	types: ["Fire"],
	stage: "Basic",
	illustrator: "Eske Yoshinob",

	attacks: [{
		name: {
			en: "Surging Flames",
			fr: "Flammes Jaillissantes",
			es: "Llamas Crecientes",
			it: "Fuocoraffica",
			pt: "Surging Flames",
			de: "Flammenschwall"
		},

		effect: {
			en: "This attack does 20 more damage for each basic Energy card in your discard pile. Then, shuffle those Energy cards into your deck.",
			fr: "Cette attaque inflige 20 dégâts supplémentaires pour chaque carte Énergie de base dans votre pile de défausse. Mélangez ensuite ces cartes Énergie avec votre deck.",
			es: "Este ataque hace 20 puntos de daño más por cada carta de Energía Básica en tu pila de descartes. Después, pon esas cartas de Energía en tu baraja y barájalas todas.",
			it: "Questo attacco infligge 20 danni in più per ogni carta Energia base nella tua pila degli scarti. Poi rimischia quelle carte Energia nel tuo mazzo.",
			pt: "This attack does 20 more damage for each basic Energy card in your discard pile. Then, shuffle those Energy cards into your deck.",
			de: "Diese Attacke fügt für jede Basis-Energiekarte in deinem Ablagestapel 20 Schadenspunkte mehr zu. Mische jene Energiekarten anschließend in dein Deck."
		},

		damage: "20+",
		cost: ["Fire"]
	}, {
		name: {
			en: "Fire Blast",
			fr: "Déflagration",
			es: "Llamarada",
			it: "Fuocobomba",
			pt: "Fire Blast",
			de: "Feuersturm"
		},

		effect: {
			en: "Discard an Energy from this Pokémon.",
			fr: "Défaussez une Énergie de ce Pokémon.",
			es: "Descarta 1 Energía de este Pokémon.",
			it: "Scarta un'Energia da questo Pokémon.",
			pt: "Discard an Energy from this Pokémon.",
			de: "Lege 1 Energie von diesem Pokémon auf deinen Ablagestapel."
		},

		damage: 160,
		cost: ["Fire", "Fire", "Colorless"]
	}],

	weaknesses: [{
		type: "Water",
		value: "×2"
	}],

	retreat: 2,
	dexId: [637],
	regulationMark: "E",
	suffix: "V"
}

export default card
