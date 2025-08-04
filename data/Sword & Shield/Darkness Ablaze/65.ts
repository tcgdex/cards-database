import { Card } from '../../../interfaces'
import Set from '../Darkness Ablaze'

const card: Card = {
	name: {
		en: "Dracozolt",
		fr: "Galvagon",
		es: "Dracozolt",
		it: "Dracozolt",
		pt: "Dracozolt",
		de: "Lectragon"
	},

	illustrator: "Misa Tsutsui",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,
	hp: 160,

	types: [
		"Lightning",
	],

	evolveFrom: {
		en: "Rare Fossil",
		fr: "Fossile Rare",
		es: "Fósil Raro",
		it: "Fossile Raro",
		pt: "Fóssil Raro",
		de: "Seltenes Fossil"
	},

	attacks: [
		{
			cost: [
				"Lightning",
			],
			name: {
				en: "Amping Up",
				fr: "Amplificateur",
				es: "Amplificación",
				it: "Incremento",
				pt: "Amplificando",
				de: "Verstärker"
			},
			effect: {
				en: "During your next turn, this Pokémon's Amping Up attack does 90 more damage (before applying Weakness and Resistance).",
				fr: "Pendant votre prochain tour, l'attaque Amplificateur de ce Pokémon inflige 90 dégâts supplémentaires (avant application de la Faiblesse et de la Résistance).",
				es: "Durante tu próximo turno, el ataque Amplificación de este Pokémon hace 90 puntos de daño más (antes de aplicar Debilidad y Resistencia).",
				it: "Durante il tuo prossimo turno, l'attacco Incremento di questo Pokémon infligge 90 danni in più, prima di aver applicato debolezza e resistenza.",
				pt: "Durante o seu próximo turno, o ataque Amplificando deste Pokémon causará 90 pontos de dano a mais (antes de aplicar Fraqueza e Resistência).",
				de: "Während deines nächsten Zuges fügt die Attacke Verstärker dieses Pokémon 90 Schadenspunkte mehr zu (bevor Schwäche und Resistenz verrechnet werden)."
			},
			damage: 30,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Giga Impact",
				fr: "Giga Impact",
				es: "Gigaimpacto",
				it: "Gigaimpatto",
				pt: "Gigaimpacto",
				de: "Gigastoß"
			},
			effect: {
				en: "During your next turn, this Pokémon can't attack.",
				fr: "Pendant votre prochain tour, ce Pokémon ne peut pas attaquer.",
				es: "Durante tu próximo turno, este Pokémon no puede atacar.",
				it: "Durante il tuo prossimo turno, questo Pokémon non può attaccare.",
				pt: "Durante o seu próximo turno, este Pokémon não poderá atacar.",
				de: "Während deines nächsten Zuges kann dieses Pokémon nicht angreifen."
			},
			damage: 200,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	retreat: 4,
	regulationMark: "D",

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	},

	stage: "Stage1",

	description: {
		en: "In ancient times, it was unbeatable thanks to its powerful lower body, but it went extinct anyway after it depleted all its plant-based food sources."
	},

	thirdParty: {
		cardmarket: 483204,
		tcgplayer: 219432
	}
}

export default card
