import {Card} from "../../../interfaces"
import Set from "../PCG1"

const card: Card = {
	set: Set,
	name: {
		ja: "ヴェノナト",
	},

	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [48],
	hp: 50,
	types: ["Grass"],
	stage: "Basic",

	attacks: [
		{
			cost: ["Colorless"],
			name: {
				ja: "サイコウェーブ",
			},
			effect: {
				ja: "Venonatに取り付けられたエネルギーカードを廃棄します。防御ポケモンは今混乱しています。",
			},
		},
		{
			cost: ["Grass"],
			name: {
				ja: "噛む",
			},
			damage: 10,
		},
	],

	retreat: 1,

	variants: [
		{
			type: "normal",
			stamp: ["1st edition"],
		},
	],
};
