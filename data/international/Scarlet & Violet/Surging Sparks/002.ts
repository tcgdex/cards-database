import { Card } from "models/database/card"
import Set from "../Surging Sparks"

const card: Card = {
	dexId: [102],
	set: Set,

	name: {
		'en-us': "Exeggcute",
		'fr-fr': "Noeunoeuf",
		'es-es': "Exeggcute",
		'it-it': "Exeggcute",
		'pt-br': "Exeggcute",
		'de-de': "Owei"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 50,
	types: ["Grass"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			'en-us': "Absorb",
			'fr-fr': "Vole-Vie",
			'es-es': "Absorber",
			'it-it': "Assorbimento",
			'pt-br': "Absorção",
			'de-de': "Absorber"
		},

		effect: {
			'en-us': "Heal 10 damage from this Pokémon.",
			'fr-fr': "Soignez 10 dégâts de ce Pokémon.",
			'es-es': "Cura 10 puntos de daño a este Pokémon.",
			'it-it': "Cura questo Pokémon da 10 danni.",
			'pt-br': "Cure 10 pontos de dano deste Pokémon.",
			'de-de': "Heile 10 Schadenspunkte bei diesem Pokémon."
		},

		damage: 10
	}],

	weaknesses: [
		{
			type: "Fire",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "H",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 794257,
				tcgplayer: 589940
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 794257,
				tcgplayer: 589940
			}
		},
	],

	illustrator: "OKUBO",
	
}

export default card
