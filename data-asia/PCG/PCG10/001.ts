import {Card} from "../../../interfaces"
import Set from "../PCG10"

const card: Card = {
	set: Set,
	name: {
		ja: "種子",
	},


	category: "Pokemon",
	dexId: [273],
	hp: 40,
	types: ["Grass"],
	stage: "Basic",

	attacks: [
		{
			cost: ["Colorless"],
			name: {
				ja: "昼寝",
			},
			effect: {
				ja: "Seedotから2つのダメージカウンターを削除します。",
			},
		},
		{
			cost: ["Grass", "Colorless"],
			name: {
				ja: "ダブルスピン",
			},
			effect: {
				ja: "2つのコインをフリップします。この攻撃は、ヘッド数の20倍のダメージを与えます。",
			},
		},
	],

	retreat: 1,

	variants: [
		{
			type: "normal",
			subtype: "unlimited",
		},
		{
			type: "normal",
			stamp: ["1st edition"],
		},
	],
};
