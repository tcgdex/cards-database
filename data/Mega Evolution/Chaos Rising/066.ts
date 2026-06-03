import { Card } from "../../../interfaces"
import Set from "../Chaos Rising"

const card: Card = {
	set: Set,

	variants: {
		normal: true,
		reverse: false,
		holo: false,
		firstEdition: false
	},

	name: {
		en: "Goomy",
		fr: "Mucuscule",
		es: "Goomy",
		'es-mx': "Goomy",
		de: "Viscora",
		it: "Goomy",
		pt: "Goomy"
	},

	illustrator: "Anesaki Dynamic",
	rarity: "Common",
	category: "Pokemon",
	dexId: [704],
	hp: 60,
	types: ["Dragon"],
	stage: "Basic",

	attacks: [{
		name: {
			en: "Absorb",
			fr: "Vole-Vie",
			es: "Absorber",
			'es-mx': "Absorción",
			de: "Absorber",
			it: "Assorbimento",
			pt: "Absorção"
		},

		cost: ["Water", "Psychic"],
		damage: 30,

		effect: {
			en: "Heal 30 damage from this Pokémon.",
			fr: "Soignez 30 dégâts de ce Pokémon.",
			es: "Cura 30 puntos de daño a este Pokémon.",
			'es-mx': "Cura 30 puntos de daño a este Pokémon.",
			de: "Heile 30 Schadenspunkte bei diesem Pokémon.",
			it: "Cura questo Pokémon da 30 danni.",
			pt: "Cure 30 pontos de dano deste Pokémon."
		}
	}],

	retreat: 2,
	regulationMark: "J",

	thirdParty: {
		tcgplayer: 693496,
		cardmarket: 886458
	}
}

export default card