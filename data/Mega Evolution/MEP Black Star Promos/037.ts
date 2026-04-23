import { Card } from "../../../interfaces"
import Set from "../MEP Black Star Promos"

const card: Card = {
	set: Set,

	name: {
		en: "Bulbasaur",
		fr: "Bulbizarre",
		de: "Bisasam",
		it: "Bulbasaur",
		es: "Bulbasaur",
		pt: "Bulbasaur",
		'es-mx': "Bulbasaur"
	},

	illustrator: "Saboteri",
	rarity: "None",
	category: "Pokemon",
	hp: 80,
	types: ["Grass"],
	stage: "Basic",
	dexId: [1],

	attacks: [{
		cost: ["Grass"],

		name: {
			en: "Leech Seed",
			fr: "Vampigraine",
			de: "Egelsamen",
			it: "Parassiseme",
			es: "Drenadoras",
			pt: "Semente Sanguessuga",
			'es-mx': "Drenadoras"
		},

		damage: 10,

		effect: {
			en: "Heal 10 damage from this Pokémon.",
			fr: "Soignez 10 dégâts de ce Pokémon.",
			de: "Heile 10 Schadenspunkte bei diesem Pokémon.",
			it: "Cura questo Pokémon da 10 danni.",
			es: "Cura 10 puntos de daño a este Pokémon.",
			pt: "Cure 10 pontos de dano deste Pokémon.",
			'es-mx': "Cura 10 puntos de daño a este Pokémon."
		}
	}],

	retreat: 2,
	regulationMark: "J",

	thirdParty: {
		cardmarket: 875186
	},

	variants: [
		{
			type: "holo"
		}
	]
}

export default card
