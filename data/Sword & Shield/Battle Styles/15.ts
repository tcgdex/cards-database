import { Card } from '../../../interfaces'
import Set from '../Battle Styles'

const card: Card = {
	set: Set,

	name: {
		en: "Lurantis",
		fr: "Floramantis",
		es: "Lurantis",
		it: "Lurantis",
		pt: "Lurantis",
		de: "Mantidea"
	},

	illustrator: "Anesaki Dynamic",
	rarity: "Rare",
	category: "Pokemon",
	hp: 120,
	types: ["Grass"],

	evolveFrom: {
		en: "Fomantis",
		fr: "Mimantis"
	},

	attacks: [{
		name: {
			en: "Leaf Drain",
			fr: "Feuille Sangsue",
			es: "Hoja Drenante",
			it: "Assorbifoglia",
			pt: "Dreno Folha",
			de: "Blattsauger"
		},

		effect: {
			en: "Heal 30 damage from this Pokémon.",
			fr: "Soignez 30 dégâts de ce Pokémon.",
			es: "Cura 30 puntos de daño a este Pokémon.",
			it: "Cura questo Pokémon da 30 danni.",
			pt: "Cure 30 pontos de dano deste Pokémon.",
			de: "Heile 30 Schadenspunkte bei diesem Pokémon."
		},

		damage: 30,
		cost: ["Grass"]
	}, {
		name: {
			en: "Solar Cutter",
			fr: "Coupe Solaire",
			es: "Corte Solar",
			it: "Taglio Solare",
			pt: "Cortador Solar",
			de: "Solarschneider"
		},

		damage: 70,
		cost: ["Grass", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "E"
}

export default card