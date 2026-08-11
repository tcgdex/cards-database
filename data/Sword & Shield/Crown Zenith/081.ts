import { Card } from "../../../interfaces"
import Set from "../Crown Zenith"

const card: Card = {
	dexId: [690],
	set: Set,

	name: {
		en: "Skrelp",
		fr: "Venalgue",
		es: "Skrelp",
		it: "Skrelp",
		pt: "Skrelp",
		de: "Algitt"
	},

	illustrator: "Tomokazu Komiya",
	rarity: "Common",
	category: "Pokemon",
	hp: 60,
	types: ["Darkness"],
	stage: "Basic",

	attacks: [{
		cost: ["Darkness"],

		name: {
			en: "Tackle",
			fr: "Charge",
			es: "Placaje",
			it: "Azione",
			pt: "Investida",
			de: "Tackle"
		},

		damage: 10
	}, {
		cost: ["Darkness", "Colorless"],

		name: {
			en: "Melt",
			fr: "Dissolution",
			es: "Derretir",
			it: "Liquefazione",
			pt: "Derreter",
			de: "Schmelzen"
		},

		damage: 20
	}],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "F",


	description: {
		en: "It drifts in the ocean, blending in with floating seaweed. When other Pokémon come to feast on the seaweed, Skrelp feasts on them instead.",
	},

	

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 691799,
				tcgplayer: 478220
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 691799,
				tcgplayer: 478220
			}
		},
	],
}

export default card
