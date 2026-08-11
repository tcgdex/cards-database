import { Card } from "models/database/card"
import Set from "../PCG3"

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "ロケットのウォブバッフェット",
	},

	rarity: "Rare",
	category: "Pokemon",
	dexId: [202],
	hp: 70,
	types: ["Darkness"],
	stage: "Basic",

	attacks: [
		{
			cost: ["Colorless"],
			name: {
				'ja-jp': "暗い援助",
			},
			effect: {
				'ja-jp': "ポケモンツールカードとロケットのシークレットマシンカードを廃棄することを検索してください。 1つのポケモンツールカードまたはロケットのシークレットマシンカードを相手に表示して手に渡すか、3つのポケモンツールカードまたはロケットのシークレットマシンカードの組み合わせを相手に表示し、デッキにシャッフルすることができます。",
			},
		},
		{
			cost: ["Psychic", "Colorless"],
			name: {
				'ja-jp': "健忘症",
			},
			effect: {
				'ja-jp': "防御ポケモンの攻撃の1つを選択します。そのポケモンは、相手の次のターン中にその攻撃を使用できません。",
			},
			damage: 10,
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
