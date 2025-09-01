import { Card } from "../../../interfaces"
import Set from "../PCG10"

const card: Card = {
	set: Set,
	name: {
		ja: "アルマルド",
	},

	rarity: "Rare",
	category: "Pokemon",
	dexId: [348],
	hp: 120,
	types: ["Fighting"],
	stage: "Stage2",

	attacks: [
		{
			cost: ["Fighting"],
			name: {
				ja: "ロックブラスト",
			},
			effect: {
				ja: "Armaldoに取り付けられた最大5つのファイティングエネルギーカードを捨てます。廃棄したエネルギーカードごとに、プレイ中の対戦相手のポケモンを選択してください。この攻撃は、それらのポケモンに20のダメージを与えます。 （同じポケモンを複数回選択できます。）この攻撃の損傷は、脱力感や抵抗の影響を受けません。",
			},
		},
		{
			cost: ["Colorless", "Colorless", "Colorless"],
			name: {
				ja: "マッハクロー",
			},
			effect: {
				ja: "この攻撃の損傷は抵抗の影響を受けません。",
			},
			damage: 60,
		},
	],

	retreat: 3,

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
