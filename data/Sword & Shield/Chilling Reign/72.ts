import { Card } from '../../../interfaces'
import Set from '../Chilling Reign'

const card: Card = {
	set: Set,

	name: {
		en: "Hattrem",
		fr: "Chapotus",
		es: "Hattrem",
		it: "Hattrem",
		pt: "Hattrem",
		de: "Brimano"
	},

	illustrator: "miki kudo",
	rarity: "Uncommon",
	category: "Pokemon",
	hp: 80,
	types: ["Psychic"],

	evolveFrom: {
		en: "Hatenna",
		fr: "Bibichut"
	},

	attacks: [{
		name: {
			en: "Spiral Drain",
			fr: "Spirale Épuisante",
			es: "Drenaje Espiral",
			it: "Assorbimento Spirale",
			pt: "Dreno Espiral",
			de: "Spiralsauger"
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
		cost: ["Psychic"]
	}],

	weaknesses: [{
		type: "Darkness",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "-30"
	}],

	retreat: 1,
	regulationMark: "E"
}

export default card