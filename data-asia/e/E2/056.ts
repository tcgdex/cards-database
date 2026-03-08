import { Card } from "../../../interfaces"
import Set from "../E2"

const card: Card = {
	set: Set,
	name: {
		ja: "ヒットモントップ",
	},

	rarity: "Common",
	category: "Pokemon",
	dexId: [237],
	hp: 60,
	types: ["Fighting"],
	stage: "Basic",

	attacks: [
		{
			cost: ["Colorless", "Colorless"],
			name: {
				ja: "ダブルキック",
			},
			effect: {
				ja: "2つのコインをフリップします。この攻撃は、ヘッド数の20倍のダメージを与えます。",
			},
		},
		{
			cost: ["Fighting", "Colorless", "Colorless"],
			name: {
				ja: "トリプルスピン",
			},
			effect: {
				ja: "3コインをフリップします。この攻撃は、ヘッド数の20倍のダメージを与えます。 2つ以上のヘッドを手に入れた場合は、ベンチ付きポケモンを1つ持ってHitMontopを切り替えます。",
			},
		},
	],

	retreat: 1,

	variants: [
		{
			type: "normal",
		},
		{
			type: "normal",
			stamp: ["1st edition"],
		},
	],
};

export default card
