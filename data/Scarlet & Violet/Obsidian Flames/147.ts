import { Card } from "../../../interfaces"
import Set from "../Obsidian Flames"

const card: Card = {
	dexId: [530],
	set: Set,

	name: {
		fr: "Minotaupe",
		en: "Excadrill",
		es: "Excadrill",
		it: "Excadrill",
		pt: "Excadrill",
		de: "Stalobor"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 120,
	types: ["Metal"],
	evolveFrom: {
		fr: "Rototaupe",
		en: "Drilbur",
		es: "Drilbur",
		it: "Drilbur",
		pt: "Drilbur",
		de: "Rotomurf"
	},
	stage: "Stage1",

	attacks: [{
		cost: ["Metal"],

		name: {
			fr: "Transpercement",
			en: "Pierce",
			es: "Perforar",
			it: "Perforare",
			pt: "Perfurar",
			de: "Durchbohren"
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
		en: "Known as the Drill King, this Pokémon can tunnel through the terrain at speeds of over 90 mph.",
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
