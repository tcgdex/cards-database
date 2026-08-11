import { Card } from "models/database/card"
import Set from "../Journey Together"

const card: Card = {
	dexId: [643],
	set: Set,

	name: {
		'en-us': "Reshiram ex",
		'fr-fr': "Reshiram-ex",
		'es-es': "Reshiram ex",
		'de-de': "Reshiram-ex",
		'it-it': "Reshiram-ex",
		'pt-br': "Reshiram ex",
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
			'en-us': "Fire Wing",
			'fr-fr': "Aile de Feu",
			'es-es': "Ala Ígnea",
			'de-de': "Feuerflügel",
			'it-it': "Alafiamma",
			'pt-br': "Asa de Fogo",
			'es-mx': "Ala Ígnea"
		},

		damage: 40
	}, {
		cost: ["Fire", "Fire", "Colorless"],

		name: {
			'en-us': "Scorching Fire",
			'fr-fr': "Feu Infernal",
			'es-es': "Fuego Abrasador",
			'de-de': "Versengendes Feuer",
			'it-it': "Fuoco Ustionante",
			'pt-br': "Fogo Ardente",
			'es-mx': "Fuego Ardiente"
		},

		effect: {
			'en-us': "Discard an Energy from this Pokémon.",
			'fr-fr': "Défaussez une Énergie de ce Pokémon.",
			'es-es': "Descarta 1 Energía de este Pokémon.",
			'de-de': "Lege 1 Energie von diesem Pokémon auf deinen Ablagestapel.",
			'it-it': "Scarta un'Energia da questo Pokémon.",
			'pt-br': "Descarte uma Energia deste Pokémon.",
			'es-mx': "Descarta 1 Energía de este Pokémon."
		},

		damage: 200
	}],

	weaknesses: [
		{
			type: "Water",
			value: "×2",
		},
	],
	retreat: 2,
	regulationMark: "H",
	suffix: "ex",
	illustrator: "PLANETA Mochizuki",

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 817182,
				tcgplayer: 623457
			}
		},
		{
			type: "holo",
			stamp: ["set-logo"],
			thirdParty: {
				cardmarket: 841282,
			}
		},
		{
			type: "holo",
			stamp: ["set-logo"],
			size: "jumbo",
			thirdParty: {
				cardmarket: 841283,
			}
		},
	],
}

export default card
