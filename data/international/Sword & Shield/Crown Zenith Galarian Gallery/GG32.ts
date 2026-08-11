import { Card } from "models/database/card"
import Set from "../Crown Zenith Galarian Gallery"

const card: Card = {
	dexId: [46],
	set: Set,

	name: {
		'en-us': "Paras",
		'fr-fr': "Paras",
		'es-es': "Paras",
		'it-it': "Paras",
		'pt-br': "Paras",
		'de-de': "Paras"
	},

	illustrator: "Kouki Saitou",
	rarity: "Rare",
	category: "Pokemon",
	hp: 70,
	types: ["Grass"],
	stage: "Basic",

	attacks: [{
		cost: ["Grass", "Colorless"],

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

		damage: 20
	}],

	weaknesses: [
		{
			type: "Fire",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "F",


	description: {
		'en-us': "The mushrooms, known as tochukaso, are controlling the bug. Even if the bug bugs the mushrooms, they tell it to bug off.",
	},

	

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 691911,
				tcgplayer: 478061
			}
		},
	],
}

export default card
