import { Card } from '../../../interfaces'
import Set from '../SWSH Black Star Promos'

const card: Card = {
	set: Set,

	name: {
		en: "Zamazenta",
		fr: "Zamazenta",
		es: "Zamazenta",
		it: "Zamazenta",
		pt: "Zamazenta",
		de: "Zamazenta"
	},

	illustrator: "Kouki Saitou",
	rarity: "None",
	category: "Pokemon",
	hp: 130,
	types: ["Metal"],

	abilities: [{
		type: "Ability",

		name: {
			en: "Sturdy Shield",
			fr: "Bouclier Solide",
			es: "Escudo Robusto",
			it: "Scudo Robusto",
			pt: "Sturdy Shield",
			de: "Robuster Schild"
		},

		effect: {
			en: "This Pokémon takes 20 less damage from attacks (after applying Weakness and Resistance).",
			fr: "Ce Pokémon subit 20 dégâts de moins provenant des attaques (après application de la Faiblesse et de la Résistance).",
			es: "Los ataques hacen 20 puntos de daño menos a este Pokémon (después de aplicar Debilidad y Resistencia).",
			it: "Questo Pokémon subisce 20 danni in meno dagli attacchi, dopo aver applicato debolezza e resistenza.",
			pt: "This Pokémon takes 20 less damage from attacks (after applying Weakness and Resistance).",
			de: "Diesem Pokémon werden durch Attacken 20 Schadenspunkte weniger zugefügt (nachdem Schwäche und Resistenz verrechnet wurden)."
		}
	}],

	attacks: [{
		name: {
			en: "Headbang",
			fr: "Frappe de Tête",
			es: "Cabecear",
			it: "Scuotitesta",
			pt: "Headbang",
			de: "Headbangen"
		},

		damage: 130,
		cost: ["Metal", "Metal", "Metal", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	resistances: [{
		type: "Grass",
		value: "-30"
	}],

	retreat: 2,

	description: {
		en: "Its ability to deflect any attack led to it being known as the Fighting Master’s Shield. It was feared and respected by all."
	},

	stage: "Basic",
	dexId: [889],

	variants: {
		normal: false,
		reverse: false,
		holo: true,
		firstEdition: false
	}
}

export default card