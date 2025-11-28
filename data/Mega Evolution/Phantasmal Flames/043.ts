import { Card } from "../../../interfaces"
import Set from "../Phantasmal Flames"

const card: Card = {
	set: Set,

	name: {
		en: "Milcery",
		fr: "Crèmy",
		es: "Milcery",
		'es-mx': "Milcery",
		de: "Hokumil",
		it: "Milcery",
		pt: "Milcery"
	},

	rarity: "Common",
	category: "Pokemon",

	dexId: [868],
	hp: 50,
	types: ["Psychic"],
	stage: "Basic",
	dexId: [868],

	attacks: [{
		cost: ["Psychic"],

		name: {
			en: "Draining Kiss",
			fr: "Vampibaiser",
			es: "Beso Drenaje",
			'es-mx': "Beso Drenador",
			de: "Diebeskuss",
			it: "Assorbibacio",
			pt: "Beijo Drenante"
		},

		effect: {
			en: "Heal 10 damage from this Pokémon.",
			fr: "Soignez 10 dégâts de ce Pokémon.",
			es: "Cura 10 puntos de daño a este Pokémon.",
			'es-mx': "Cura 10 puntos de daño a este Pokémon.",
			de: "Heile 10 Schadenspunkte bei diesem Pokémon.",
			it: "Cura questo Pokémon da 10 danni.",
			pt: "Cure 10 pontos de dano deste Pokémon."
		},

		damage: 10
	}],

	retreat: 1,
	regulationMark: "I",

	thirdParty: {
		cardmarket: 857618
	}
}

export default card