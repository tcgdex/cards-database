import { Card } from "models/database/card"
import Set from "../Chaos Rising"

const card: Card = {
	set: Set,

	description: {
		'en-us': "It keeps a twig in its tail. Using friction from its tail fur, it sets the twig on fire and launches into battle.",
	},


	name: {
		'en-us': "Braixen",
		'fr-fr': "Roussil",
		'es-es': "Braixen",
		'es-mx': "Braixen",
		'de-de': "Rutena",
		'it-it': "Braixen",
		'pt-br': "Braixen"
	},

	illustrator: "Taiga Kasai",
	rarity: "Common",
	category: "Pokemon",
	dexId: [654],
	hp: 100,
	types: ["Fire"],

	evolveFrom: {
		'en-us': "Fennekin"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'en-us': "Flamethrower",
			'fr-fr': "Lance-Flammes",
			'es-es': "Lanzallamas",
			'es-mx': "Lanzallamas",
			'de-de': "Flammenwurf",
			'it-it': "Lanciafiamme",
			'pt-br': "Lança-chamas"
		},

		cost: ["Fire", "Fire"],
		damage: 80,

		effect: {
			'en-us': "Discard an Energy from this Pokémon.",
			'fr-fr': "Défaussez une Énergie de ce Pokémon.",
			'es-es': "Descarta 1 Energía de este Pokémon.",
			'es-mx': "Descarta 1 Energía de este Pokémon.",
			'de-de': "Lege 1 Energie von diesem Pokémon auf deinen Ablagestapel.",
			'it-it': "Scarta un'Energia da questo Pokémon.",
			'pt-br': "Descarte uma Energia deste Pokémon."
		}
	}],

	weaknesses: [{
		type: "Water",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "J",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 886404,
				tcgplayer: 693457
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 886404,
				tcgplayer: 693457
			}
		},
	],
}

export default card
