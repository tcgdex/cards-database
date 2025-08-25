import { Card } from "../../../interfaces"
import Set from "../White Flare"

const card: Card = {
	dexId: [546],
	set: Set,

	name: {
		en: "Cottonee",
		fr: "Doudouvet",
		de: "Waumboll",
		it: "Cottonee",
		pt: "Cottonee",
		es: "Cottonee",
		'es-mx': "Cottonee"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 60,
	types: ["Grass"],
	stage: "Basic",

	attacks: [{
		cost: ["Grass"],

		name: {
			en: "Absorb",
			fr: "Vole-Vie",
			de: "Absorber",
			it: "Assorbimento",
			pt: "Absorção",
			es: "Absorber",
			'es-mx': "Absorción"
		},

		effect: {
			en: "Heal 10 damage from this Pokémon.",
			fr: "Soignez 10 dégâts de ce Pokémon.",
			de: "Heile 10 Schadenspunkte bei diesem Pokémon.",
			it: "Cura questo Pokémon da 10 danni.",
			pt: "Cure 10 pontos de dano deste Pokémon.",
			es: "Cura 10 puntos de daño a este Pokémon.",
			'es-mx': "Cura 10 puntos de daño a este Pokémon."
		},

		damage: 10
	}],

	retreat: 1,
	regulationMark: "I",

	thirdParty: {
		cardmarket: 835907
	}
}

export default card