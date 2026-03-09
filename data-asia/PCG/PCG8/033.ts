import { Card } from "../../../interfaces"
import Set from "../PCG8"

const card: Card = {
	set: Set,
	name: {
		ja: "アラカザムスター",
	},

	rarity: "Shiny rare",
	category: "Pokemon",
	dexId: [65],
	hp: 80,
	types: ["Psychic"],
	stage: "Basic",

	attacks: [
		{
			cost: ["Psychic"],
			name: {
				ja: "サイキックセレクト",
			},
			effect: {
				ja: "廃棄の山から1枚のカードを手に入れます。",
			},
		},
		{
			cost: ["Colorless", "Colorless", "Colorless"],
			name: {
				ja: "スキルコピー",
			},
			effect: {
				ja: "あなたの手から基本的なポケモンまたは進化カードを捨ててください。そのカードの攻撃の1つを選択します。スキルコピーはその攻撃をコピーします。この攻撃は、Alakazam {{Star | This Pokemon}}がその攻撃を使用するのに必要なエネルギーを持っていない場合、何もしません。 （その攻撃に必要な他のことをまだしなければなりません。）Alakazam {{Star | This Pokemon}}その攻撃を実行します。",
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

export default card
