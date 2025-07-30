import {Card} from "../../../interfaces"
import Set from "../PCG1"

const card: Card = {
	set: Set,
	name: {
		ja: "exeggutor",
	},

	rarity: "Holo Rare",
	category: "Pokemon",
	dexId: [103],
	hp: 80,
	types: ["Psychic"],
	stage: "Stage1",

	attacks: [
		{
			cost: ["Colorless"],
			name: {
				ja: "サイキック交換",
			},
			effect: {
				ja: "あなたの手をあなたのデッキにシャッフルします。最大8枚のカードを作成します。",
			},
		},
		{
			cost: ["Psychic", "Colorless"],
			name: {
				ja: "大きな卵の幅",
			},
			effect: {
				ja: "exeggutorに取り付けられた各エネルギーのコインをひっくり返します。この攻撃は、ヘッド数の40回のダメージ倍になります。",
			},
		},
	],

	retreat: 2,

	variants: [
		{
			type: "holo",
		},
		{
			type: "holo",
			stamp: ["1st edition"],
		},
	],
};
