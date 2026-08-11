import { Card } from "models/database/card"
import Set from "../Obsidian Flames"

const card: Card = {
	dexId: [530],
	set: Set,

	name: {
		'fr-fr': "Minotaupe",
		'en-us': "Excadrill",
		'es-es': "Excadrill",
		'it-it': "Excadrill",
		'pt-br': "Excadrill",
		'de-de': "Stalobor"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 120,
	types: ["Metal"],
	evolveFrom: {
		'fr-fr': "Rototaupe",
		'en-us': "Drilbur",
		'es-es': "Drilbur",
		'it-it': "Drilbur",
		'pt-br': "Drilbur",
		'de-de': "Rotomurf"
	},
	stage: "Stage1",

	attacks: [{
		cost: ["Metal"],

		name: {
			'fr-fr': "Transpercement",
			'en-us': "Pierce",
			'es-es': "Perforar",
			'it-it': "Perforare",
			'pt-br': "Perfurar",
			'de-de': "Durchbohren"
		},

		damage: 60
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
	retreat: 2,
	regulationMark: "G",

	description: {
		'en-us': "Known as the Drill King, this Pokémon can tunnel through the terrain at speeds of over 90 mph.",
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 725227,
				tcgplayer: 509934,
				cardtrader: 255832
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 725227,
				tcgplayer: 509934,
				cardtrader: 255832
			}
		},
	],

	illustrator: "kawayoo",

	
}

export default card
