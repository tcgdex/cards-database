import { Card } from "../../../interfaces"
import Set from "../Obsidian Flames"

const card: Card = {
	dexId: [194],
	set: Set,

	name: {
		fr: "Axoloto de Paldea",
		en: "Paldean Wooper",
		es: "Wooper de Paldea",
		it: "Wooper di Paldea",
		pt: "Wooper de Paldea",
		de: "Paldea-Felino"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 70,
	types: ["Darkness"],
	stage: "Basic",

	attacks: [{
		cost: ["Darkness", "Colorless"],

		name: {
			fr: "Flop",
			en: "Flop",
			es: "Vuelta",
			it: "Tonfo",
			pt: "Baque",
			de: "Plumps"
		},

		damage: 30
	}],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2",
		},
	],
	retreat: 2,
	regulationMark: "G",

	description: {
		en: "After losing a territorial struggle, Wooper began living on land. The Pokémon changed over time, developing a poisonous film to protect its body.",
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 725207,
				tcgplayer: 509883,
				cardtrader: 255812
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 725207,
				tcgplayer: 509883,
				cardtrader: 255812
			}
		},
	],

	illustrator: "Pani Kobayashi",

	
}

export default card
