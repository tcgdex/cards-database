import { Card } from "../../../interfaces"
import Set from "../neo3"

const card: Card = {
	set: Set,
	name: {
		ja: "マグネトン",
	},

	rarity: "Holo Rare",
	category: "Pokemon",
	dexId: [82],
	hp: 80,
	types: ["Metal"],
	stage: "Stage1",

	abilities: [
		{
			name: {
				ja: "電磁電力",
			},
			effect: {
				ja: "ターン<em>（攻撃の前に）</em>中に好きなように、1つのマグネム人、マグネトン、または暗いマグネトンに1つのエネルギーカードを取り付けて、マグネムイト、マグネトン、または暗いマグネトンの別の1つの1つに取り付けることができます。マグネトンが眠ったり、混乱したり、麻痺している場合、この力は使用できません。",
			},
		}],

	attacks: [
		{
			cost: ["Lightning", "Lightning", "Colorless"],
			name: {
				ja: "プラズマ",
			},
			effect: {
				ja: "廃棄パイルに稲妻エネルギーカードがある場合は、それらの1つをマグネトンに取り付けます。",
			},
			damage: 30,
		},
	],

	retreat: 2,

	variants: [
		{
			type: "holo",
		},
	],
};

export default card
