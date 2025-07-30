import {Card} from "../../../interfaces"
import Set from "../ADV4"

const card: Card = {
	set: Set,
	name: {
		ja: "ゴルバット",
	},

	rarity: "Rare",
	category: "Pokemon",
	dexId: [42],
	hp: 70,
	types: ["Grass"],
	stage: "Stage1",

	attacks: [
		{
			cost: ["Colorless"],
			name: {
				ja: "超音速",
			},
			effect: {
				ja: "防御ポケモンは今混乱しています。",
			},
		},
		{
			cost: ["Grass", "Colorless"],
			name: {
				ja: "鋭い牙",
			},
			damage: 20,
		},
	],

	retreat: 1,

	variants: [
		{
			type: "normal",
		},
		{
			type: "normal",
			stamp: ["1st edition"],
		},
	],
};
