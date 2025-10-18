import { Card } from "../../../interfaces"
import Set from "../Mega Evolution"

const card: Card = {
	set: Set,

	name: {
		en: "Seedot",
		fr: "Grainipiot",
		de: "Samurzel",
		it: "Seedot",
		es: "Seedot",
		pt: "Seedot",
		'es-mx': "Seedot"
	},

	illustrator: "Miki Tanaka",
	rarity: "Common",
	category: "Pokemon",
	hp: 60,
	types: ["Grass"],
	stage: "Basic",
	dexId: [273],

	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "Nap",
			fr: "Tit'Sieste",
			de: "Nickerchen",
			it: "Pausa",
			es: "Siesta",
			pt: "Soneca",
			'es-mx': "Siesta"
		},

		effect: {
			en: "Heal 20 damage from this Pokémon.",
			fr: "Soignez 20 dégâts de ce Pokémon.",
			de: "Heile 20 Schadenspunkte bei diesem Pokémon.",
			it: "Cura questo Pokémon da 20 danni.",
			es: "Cura 20 puntos de daño a este Pokémon.",
			pt: "Cure 20 pontos de dano deste Pokémon.",
			'es-mx': "Cura 20 puntos de daño a este Pokémon."
		}
	}, {
		cost: ["Grass", "Colorless"],

		name: {
			en: "Seed Bomb",
			fr: "Canon Graine",
			de: "Samenbomben",
			it: "Semebomba",
			es: "Bomba Germen",
			pt: "Bomba de Sementes",
			'es-mx': "Bomba Semilla"
		},

		damage: 20
	}],

	retreat: 1,
	regulationMark: "I",

	thirdParty: {
		tcgplayer: 654352
	}
}

export default card