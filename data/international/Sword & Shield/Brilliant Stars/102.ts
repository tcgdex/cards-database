import { Card } from "models/database/card"
import Set from "../Brilliant Stars"

const card: Card = {
	dexId: [599],
	set: Set,

	name: {
		'en-us': "Klink",
		'fr-fr': "Tic",
		'es-es': "Klink",
		'it-it': "Klink",
		'pt-br': "Klink",
		'de-de': "Klikk"
	},

	illustrator: "OKACHEKE",
	rarity: "Common",
	category: "Pokemon",
	hp: 50,
	types: ["Metal"],
	stage: "Basic",

	attacks: [{
		cost: ["Metal"],

		name: {
			'en-us': "Vise Grip",
			'fr-fr': "Force Poigne",
			'es-es': "Agarre",
			'it-it': "Presa",
			'pt-br': "Agarramento Compressor",
			'de-de': "Klammer"
		},

		damage: 10
	}, {
		cost: ["Metal", "Colorless"],

		name: {
			'en-us': "Spinning Attack",
			'fr-fr': "Attaque Tournante",
			'es-es': "Ataque Giratorio",
			'it-it': "Attacco Rotante",
			'pt-br': "Ataque Giratório",
			'de-de': "Rundumangriff"
		},

		damage: 20
	}],

	weaknesses: [
		{
			type: "Fire",
			value: "×2",
		},
	],
	resistances: [
		{
			type: "Grass",
			value: "-30",
		},
	],
	retreat: 1,
	regulationMark: "F",


	description: {
		'en-us': "The two minigears that compose this Pokémon are closer than twins. They mesh well only with each other.",
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 608648,
				tcgplayer: 263822
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 608648,
				tcgplayer: 263822
			}
		},
	],
}

export default card
