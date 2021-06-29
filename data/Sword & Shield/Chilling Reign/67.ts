import { Card } from '../../../interfaces'
import Set from '../Chilling Reign'

const card: Card = {
	set: Set,

	name: {
		en: "Swirlix",
		fr: "Sucroquin",
		es: "Swirlix",
		it: "Swirlix",
		pt: "Swirlix",
		de: "Flauschling"
	},

	illustrator: "Shibuzoh.",
	rarity: "Common",
	category: "Pokemon",
	hp: 60,
	types: ["Psychic"],

	attacks: [{
		name: {
			en: "Draining Kiss",
			fr: "Vampibaiser",
			es: "Beso Drenaje",
			it: "Assorbibacio",
			pt: "Beijo Drenante",
			de: "Diebeskuss"
		},

		effect: {
			en: "Heal 10 damage from this Pokémon.",
			fr: "Soignez 10 dégâts de ce Pokémon.",
			es: "Cura 10 puntos de daño a este Pokémon.",
			it: "Cura questo Pokémon da 10 danni.",
			pt: "Cure 10 pontos de dano deste Pokémon.",
			de: "Heile 10 Schadenspunkte bei diesem Pokémon."
		},

		damage: 20,
		cost: ["Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Metal",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "E"
}

export default card