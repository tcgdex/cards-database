import { Card } from "models/database/card"
import Set from "../PCG3"

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "ロケットの鳴き声",
	},

	rarity: "Rare",
	category: "Pokemon",
	dexId: [52],
	hp: 60,
	types: ["Darkness"],
	stage: "Basic",

	attacks: [
		{
			cost: ["Colorless"],
			name: {
				'ja-jp': "ひったくりと走ります",
			},
			effect: {
				'ja-jp': "ポケモンツールカードまたはロケットのシークレットマシンカードを検索し、対戦相手に見せて、手に入れてください。もしそうなら、あなたはあなたのベンチ付きポケモンの1つでロケットの鳴き声を切り替えることができます。その後、デッキをシャッフルします。",
			},
		},
		{
			cost: ["Colorless", "Colorless"],
			name: {
				'ja-jp': "奇跡的なカムバック",
			},
			effect: {
				'ja-jp': "プレイ中の各ポケモン（あなたと相手の両方）のコインをひっくり返します。この攻撃は、ヘッド数の10倍のダメージを与えます。 Rocket's Meowthは、尾の数をそれ自体に10回ダメージします。",
			},
		},
	],

	retreat: 1,

	variants: [
		{
			type: "normal",
			stamp: ["1st edition"],
		},
		{
			type: "normal",
			subtype: "unlimited",
		},
	],
};

export default card
