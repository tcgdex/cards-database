import {Card} from "../../../interfaces"
import Set from "../PCG1"

const card: Card = {
	set: Set,
	name: {
		ja: "Zapdos Ex",
	},

	rarity: "Holo Rare",
	category: "Pokemon",
	dexId: [145],
	hp: 110,
	types: ["Lightning"],
	stage: "Basic",

	abilities: [
		{
			name: {
				ja: "伝説的な上昇",
			},
			effect: {
				ja: "ターン中に、Zapdos Exを手からベンチに置くと、Zapdos ExでアクティブなPokã©Monの1を切り替えることができます。そうする場合は、Pokã©Monに取り付けられた数の基本的な稲妻エネルギーカードをZapdos Exに移動することもできます。",
			},
		}],

	attacks: [
		{
			cost: ["Lightning", "Lightning", "Colorless"],
			name: {
				ja: "電子クラッシュ",
			},
			effect: {
				ja: "Zapdos Exに取り付けられたエネルギーカードを破棄できます。そうした場合、この攻撃は50ダメージに加えて20ダメージを与えます。",
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
