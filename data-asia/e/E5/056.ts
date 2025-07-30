import {Card} from "../../../interfaces"
import Set from "../E5"

const card: Card = {
	set: Set,
	name: {
		ja: "マグカルゴ",
	},

	rarity: "Holo Rare",
	category: "Pokemon",
	dexId: [219],
	hp: 80,
	types: ["Fighting"],
	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: {
				ja: "ストリーミングマントル",
			},
			effect: {
				ja: "アクティブなポクモンを進化させるために手からマグカルゴをプレイすると、デッキのトップ3カードを破棄してから、廃棄の山からデッキに3枚の基本的なエネルギーカードをシャッフルすることができます。もしそうなら、あなたの相手は同じことをします。",
			},
		}],

	attacks: [
		{
			cost: ["Fighting", "Colorless", "Colorless"],
			name: {
				ja: "溶岩を粉砕します",
			},
			effect: {
				ja: "Magcargoに取り付けられた火災またはファイティングベーシックエネルギーカードを捨てることができます。このように火災エネルギーカードを廃棄すると、防御するポケモンが燃やされます。このようにファイティングエネルギーカードを破棄すると、この攻撃は40ダメージに20回のダメージを与えます。",
			},
		},
	],

	retreat: 3,

	variants: [
		{
			type: "holo",
		},
		{
			type: "holo",
			stamps: ["1st Edition"],
		},
	],
};
