import { Card } from "../../../interfaces"
import Set from "../Phantasmal Flames"

const card: Card = {
	set: Set,

	name: {
		en: "Lombre",
		fr: "Lombre",
		es: "Lombre",
		'es-mx': "Lombre",
		de: "Lombrero",
		it: "Lombre",
		pt: "Lombre"
	},

	rarity: "Common",
	category: "Pokemon",

	dexId: [271],
	hp: 90,
	types: ["Grass"],
	stage: "Stage1",

	attacks: [{
		cost: ["Grass", "Colorless"],

		name: {
			en: "Mega Drain",
			fr: "Méga-Sangsue",
			es: "Megaagotar",
			'es-mx': "Megadrenado",
			de: "Megasauger",
			it: "Megassorbimento",
			pt: "Megadreno"
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

	weaknesses: [
		{
			type: "Fire",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "I",

	description: {
		en: "It prefers waterfronts with plentiful food. It became nocturnal so it wouldn't have to compete for food with bird Pokémon.",
	},

	illustrator: "Shigenori Negishi",
	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 857581,
				tcgplayer: 662177,
				cardtrader: 356790
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 857581,
				tcgplayer: 662177,
				cardtrader: 356790
			}
		},
	],
}

export default card
