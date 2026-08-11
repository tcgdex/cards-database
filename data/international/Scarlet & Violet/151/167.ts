import { Card } from "models/database/card"
import Set from "../151"

const card: Card = {
	dexId: [2],
	set: Set,

	name: {
		'fr-fr': "Herbizarre",
		'en-us': "Ivysaur",
		'es-es': "Ivysaur",
		'it-it': "Ivysaur",
		'pt-br': "Ivysaur",
		'de-de': "Bisaknosp"
	},

	rarity: "Illustration rare",
	category: "Pokemon",
	hp: 100,
	types: ["Grass"],
	evolveFrom: {
		'fr-fr': "Bulbizarre",
		'en-us': "Bulbasaur",
		'es-es': "Bulbasaur",
		'it-it': "Bulbasaur",
		'pt-br': "Bulbasaur",
		'de-de': "Bisasam"
	},
	stage: "Stage1",

	attacks: [{
		cost: ["Grass", "Colorless"],

		name: {
			'fr-fr': "Vampigraine",
			'en-us': "Leech Seed",
			'es-es': "Drenadoras",
			'it-it': "Parassiseme",
			'pt-br': "Semente Sanguessuga",
			'de-de': "Egelsamen"
		},

		effect: {
			'fr-fr': "Soignez 20 dégâts de ce Pokémon.",
			'en-us': "Heal 20 damage from this Pokémon.",
			'es-es': "Cura 20 puntos de daño a este Pokémon.",
			'it-it': "Cura questo Pokémon da 20 danni.",
			'pt-br': "Cure 20 pontos de dano deste Pokémon.",
			'de-de': "Heile 20 Schadenspunkte bei diesem Pokémon."
		},

		damage: 30
	}, {
		cost: ["Grass", "Grass", "Colorless"],

		name: {
			'fr-fr': "Fouet Lianes",
			'en-us': "Vine Whip",
			'es-es': "Látigo Cepa",
			'it-it': "Frustata",
			'pt-br': "Chicote de Vinha",
			'de-de': "Rankenhieb"
		},

		damage: 80
	}],

	weaknesses: [
		{
			type: "Fire",
			value: "×2",
		},
	],
	retreat: 3,
	regulationMark: "G",

	description: {
		'en-us': "Exposure to sunlight adds to its strength. Sunlight also makes the bud on its back grow larger.",
	},

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 733762,
				tcgplayer: 516998,
				cardtrader: 261292
			}
		},
	],

	illustrator: "Yoriyuki Ikegami",

	
}

export default card
