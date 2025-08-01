import { Card } from '../../../interfaces'
import Set from '../Shining Fates'

const card: Card = {
	set: Set,

	name: {
		fr: "Galvagon",
		en: "Dracozolt",
		es: "Dracozolt",
		it: "Dracozolt",
		pt: "Dracozolt",
		de: "Lectragon"
	},

	illustrator: "Shin Nagasawa",
	rarity: "Shiny rare",
	category: "Pokemon",
	hp: 160,
	types: ["Lightning"],

	evolveFrom: {
		fr: "Fossile Rare",
		en: "Rare Fossil"
	},

	attacks: [{
		name: {
			fr: "Amplificateur",
			en: "Amping Up",
			es: "Amplificación",
			it: "Incremento",
			pt: "Amplificando",
			de: "Verstärker"
		},

		effect: {
			fr: "Pendant votre prochain tour, l'attaque Amplificateur de ce Pokémon inflige 90 dégâts supplémentaires (avant application de la Faiblesse et de la Résistance).",
			en: "During your next turn, this Pokémon's Amping Up attack does 90 more damage (before applying Weakness and Resistance).",
			es: "Durante tu próximo turno, el ataque Amplificación de este Pokémon hace 90 puntos de daño más (antes de aplicar Debilidad y Resistencia).",
			it: "Durante il tuo prossimo turno, l'attacco Incremento di questo Pokémon infligge 90 danni in più, prima di aver applicato debolezza e resistenza.",
			pt: "Durante o seu próximo turno, o ataque Amplificando deste Pokémon causará 90 pontos de dano a mais (antes de aplicar Fraqueza e Resistência).",
			de: "Während deines nächsten Zuges fügt die Attacke Verstärker dieses Pokémon 90 Schadenspunkte mehr zu (bevor Schwäche und Resistenz verrechnet werden)."
		},

		damage: 30,
		cost: ["Lightning"]
	}, {
		name: {
			fr: "Giga Impact",
			en: "Giga Impact",
			es: "Gigaimpacto",
			it: "Gigaimpatto",
			pt: "Gigaimpacto",
			de: "Gigastoß"
		},

		effect: {
			fr: "Pendant votre prochain tour, ce Pokémon ne peut pas attaquer.",
			en: "During your next turn, this Pokémon can't attack.",
			es: "Durante tu próximo turno, este Pokémon no puede atacar.",
			it: "Durante il tuo prossimo turno, questo Pokémon non può attaccare.",
			pt: "Durante o seu próximo turno, este Pokémon não poderá atacar.",
			de: "Während deines nächsten Zuges kann dieses Pokémon nicht angreifen."
		},

		damage: 200,
		cost: ["Colorless", "Colorless", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 4,
	regulationMark: "D",
	stage: "Stage1",

	description: {
		en: "In ancient times, it was unbeatable thanks to its powerful lower body, but it went extinct anyway after it depleted all its plant-based food sources."
	},

	thirdParty: {
		cardmarket: 539638
	}
}

export default card
