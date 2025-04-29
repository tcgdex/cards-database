import { Card } from "../../../interfaces"
import Set from "../Journey Together"

const card: Card = {
	set: Set,

	name: {
		en: "Reshiram ex",
		fr: "Reshiram-ex",
		es: "Reshiram ex",
		de: "Reshiram-ex",
		it: "Reshiram-ex",
		pt: "Reshiram ex",
		'es-mx': "Reshiram ex"
	},

	rarity: "Double rare",
	category: "Pokemon",
	hp: 220,
	types: ["Fire"],
	stage: "Basic",

	attacks: [{
		cost: ["Fire"],

		name: {
			en: "Fire Wing",
			fr: "Aile de Feu",
			es: "Ala Ígnea",
			de: "Feuerflügel",
			it: "Alafiamma",
			pt: "Asa de Fogo",
			'es-mx': "Ala Ígnea"
		},

		damage: 40
	}, {
		cost: ["Fire", "Fire", "Colorless"],

		name: {
			en: "Scorching Fire",
			fr: "Feu Infernal",
			es: "Fuego Abrasador",
			de: "Versengendes Feuer",
			it: "Fuoco Ustionante",
			pt: "Fogo Ardente",
			'es-mx': "Fuego Ardiente"
		},

		effect: {
			en: "Discard an Energy from this Pokémon.",
			fr: "Défaussez une Énergie de ce Pokémon.",
			es: "Descarta 1 Energía de este Pokémon.",
			de: "Lege 1 Energie von diesem Pokémon auf deinen Ablagestapel.",
			it: "Scarta un'Energia da questo Pokémon.",
			pt: "Descarte uma Energia deste Pokémon.",
			'es-mx': "Descarta 1 Energía de este Pokémon."
		},

		damage: 200
	}],

	retreat: 2,
	regulationMark: "H",

	variants: {
		"firstEdition": false,
		"holo": true,
		"normal": false
		"reverse": false,
		"wPromo": false,
		}
}

export default card
