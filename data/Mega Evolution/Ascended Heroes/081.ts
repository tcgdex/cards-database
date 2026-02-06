import { Card } from "../../../interfaces"
import Set from "../Ascended Heroes"

const card: Card = {
	set: Set,

	dexId: [176],

	name: {
		en: "Togetic",
		fr: "Togetic",
		es: "Togetic",
		'es-mx': "Togetic",
		de: "Togetic",
		it: "Togetic",
		pt: "Togetic"
	},

	illustrator: "Teeziro",
	rarity: "Common",
	category: "Pokemon",
	hp: 90,
	types: ["Psychic"],
	stage: "Stage1",

	attacks: [{
		cost: ["Colorless", "Colorless"],

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
			en: "Heal 30 damage from this Pokémon.",
			fr: "Soignez 30 dégâts de ce Pokémon.",
			es: "Cura 30 puntos de daño a este Pokémon.",
			'es-mx': "Cura 30 puntos de daño a este Pokémon.",
			de: "Heile 30 Schadenspunkte bei diesem Pokémon.",
			it: "Cura questo Pokémon da 30 danni.",
			pt: "Cure 30 pontos de dano deste Pokémon."
		},

		damage: 30
	}],

	retreat: 1,
	regulationMark: "H",

	thirdParty: {
		tcgplayer: 675893,
		cardmarket: 869692
	}
}

export default card