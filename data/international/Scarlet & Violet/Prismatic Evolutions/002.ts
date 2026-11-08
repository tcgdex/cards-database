import { Card } from "models/database/card"
import Set from "../Prismatic Evolutions"

const card: Card = {
	dexId: [103],
	set: Set,

	name: {
		'en-us': "Exeggutor",
		'fr-fr': "Noadkoko",
		'es-es': "Exeggutor",
		'pt-br': "Exeggutor",
		'it-it': "Exeggutor",
		'de-de': "Kokowei"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 140,
	types: ["Grass"],
	evolveFrom: {
		'en-us': "Exeggcute",
		'fr-fr': "Noeunoeuf",
		'es-es': "Exeggcute",
		'pt-br': "Exeggcute",
		'it-it': "Exeggcute",
		'de-de': "Owei"
	},
	stage: "Stage1",

	attacks: [{
		cost: ["Grass", "Colorless"],

		name: {
			'en-us': "Mega Drain",
			'fr-fr': "Méga-Sangsue",
			'es-es': "Megaagotar",
			'pt-br': "Megadreno",
			'it-it': "Megassorbimento",
			'de-de': "Megasauger"
		},

		effect: {
			'en-us': "Heal 30 damage from this Pokémon.",
			'fr-fr': "Soignez 30 dégâts de ce Pokémon.",
			'es-es': "Cura 30 puntos de daño a este Pokémon.",
			'pt-br': "Cure 30 pontos de dano deste Pokémon.",
			'it-it': "Cura questo Pokémon da 30 danni.",
			'de-de': "Heile 30 Schadenspunkte bei diesem Pokémon."
		},

		damage: 50
	}, {
		cost: ["Grass", "Grass", "Colorless"],

		name: {
			'en-us': "Solar Beam",
			'fr-fr': "Lance-Soleil",
			'es-es': "Rayo Solar",
			'pt-br': "Raio Solar",
			'it-it': "Solarraggio",
			'de-de': "Solarstrahl"
		},

		damage: 130
	}],

	retreat: 3,
	regulationMark: "H",
	illustrator: "Dsuke",

	weaknesses: [{
		type: "Fire",
		value: "x2"
	}],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 805391,
				tcgplayer: 610357
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 805391,
				tcgplayer: 610357
			}
		},
		{
			type: "reverse",
			foil: "pokeball",
			thirdParty: {
				cardmarket: 806410,
				tcgplayer: 610537
			}
		},
		{
			type: "reverse",
			foil: "masterball",
			thirdParty: {
				cardmarket: 806411,
				tcgplayer: 610638
			}
		},
	],
}

export default card
