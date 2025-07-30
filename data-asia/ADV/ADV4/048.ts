import {Card} from "../../../interfaces"
import Set from "../ADV4"

const card: Card = {
	set: Set,
	name: {
		ja: "キメコー",
	},

	rarity: "Holo Rare",
	category: "Pokemon",
	dexId: [358],
	hp: 60,
	types: ["Psychic"],
	stage: "Basic",

	attacks: [
		{
			cost: ["Colorless"],
			name: {
				ja: "チャイム",
			},
			effect: {
				ja: "対戦相手の廃棄パイルを検索して、サポーターカードを使用し、この攻撃の効果としてそのカードの効果を使用します。 （サポーターカードは相手の廃棄パイルに残ります。）",
			},
		},
		{
			cost: ["Psychic"],
			name: {
				ja: "サイキックブーム",
			},
			effect: {
				ja: "ディフェンディングポケモンに取り付けられたエネルギーの量を10回ダメージします。",
			},
		},
	],

	retreat: 1,

	variants: [
		{
			type: "holo",
			stamp: ["1st edition"],
		},
	],
};
