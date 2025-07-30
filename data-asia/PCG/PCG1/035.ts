import {Card} from "../../../interfaces"
import Set from "../PCG1"

const card: Card = {
	set: Set,
	name: {
		ja: "Gyarados Ex",
	},

	rarity: "Holo Rare",
	category: "Pokemon",
	dexId: [130],
	hp: 130,
	types: ["Water"],
	stage: "Stage1",

	attacks: [
		{
			cost: ["Water", "Colorless"],
			name: {
				ja: "ツイスター",
			},
			effect: {
				ja: "2つのコインをフリップします。各ヘッドについて、ディフェンディングポケモンに取り付けられた1つのエネルギーを選択して、それを破棄します。両方が尾の場合、この攻撃は何もしません。",
			},
			damage: 40,
		},
		{
			cost: ["Water", "Water", "Colorless", "Colorless", "Colorless"],
			name: {
				ja: "ドラゴンレイジ",
			},
			damage: 100,
		},
	],

	retreat: 3,

	variants: [
		{
			type: "holo",
			subtype: "unlimited",
		},
	],
};
