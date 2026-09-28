import { Card } from "../../../interfaces"
import Set from "../MEP Black Star Promos"

const card: Card = {
	set: Set,

	name: {
		en: "Mewtwo",
		es: "Mewtwo",
	},

	illustrator: "Nisota Niso",
	rarity: "Promo",
	category: "Pokemon",
	hp: 130,
	types: ["Psychic"],
	stage: "Basic",
	dexId: [150],

	attacks: [{
		cost: ["Psychic"],

		name: {
			en: "Empower",
			es: "Empoderar",
		},

		effect: {
			en: "Attach up to 2 Basic Energy cards from your discard pile to 1 of your Pokémon.",
			es: "Une hasta 2 cartas de Energía Básica de tu pila de descartes a uno de tus Pokémon.",
		}
	},
	{
		cost: ["Psychic", "Psychic", "Colorless"],

		name: {
			en: "Psydrive",
			es: "Guía Psi",
		},

		effect: {
			en: "Discard an Energy from this Pokémon.",
			es: "Descarta 1 Energía de este Pokémon.",
		},

		damage: 120
	}],

	retreat: 2,
	regulationMark: "J",

	weaknesses: [{
		type: "Darkness",
		value: "x2"
	}],

	resistances: [{
		type: "Fighting",
		value: "-30"
	}],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 895620,
				tcgplayer: 713289
			}
		},
		{
			type: "holo",
			size: "jumbo",
		}
	],
}

export default card
