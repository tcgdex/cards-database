import { Card } from "models/database/card"
import Set from "../Journey Together"

const card: Card = {
	dexId: [640],
	set: Set,

	name: {
		'en-us': "Virizion",
		'fr-fr': "Viridium",
		'es-es': "Virizion",
		'de-de': "Viridium",
		'it-it': "Virizion",
		'pt-br': "Virizion",
		'es-mx': "Virizion"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 120,
	types: ["Grass"],
	stage: "Basic",

	attacks: [{
		cost: ["Grass", "Colorless"],

		name: {
			'en-us': "Leaf Drain",
			'fr-fr': "Feuille Sangsue",
			'es-es': "Hoja Drenante",
			'de-de': "Blattsauger",
			'it-it': "Assorbifoglia",
			'pt-br': "Dreno Folha",
			'es-mx': "Hojadrenado"
		},

		effect: {
			'en-us': "Heal 30 damage from this Pokémon.",
			'fr-fr': "Soignez 30 dégâts de ce Pokémon.",
			'es-es': "Cura 30 puntos de daño a este Pokémon.",
			'de-de': "Heile 30 Schadenspunkte bei diesem Pokémon.",
			'it-it': "Cura questo Pokémon da 30 danni.",
			'pt-br': "Cure 30 pontos de dano deste Pokémon.",
			'es-mx': "Cura 30 puntos de daño a este Pokémon."
		},

		damage: 30
	}, {
		cost: ["Grass", "Colorless", "Colorless"],

		name: {
			'en-us': "Slicing Blade",
			'fr-fr': "Lame Tranchante",
			'es-es': "Cuchilla Cortante",
			'de-de': "Schwertschneide",
			'it-it': "Affettalama",
			'pt-br': "Lâmina Fatiante",
			'es-mx': "Cuchilla Cortante"
		},

		damage: 100
	}],

	weaknesses: [
		{
			type: "Fire",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "H",
	illustrator: "Anesaki Dynamic",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 817167,
				tcgplayer: 623442
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 817167,
				tcgplayer: 623442
			}
		},
	],
}

export default card
