import { Card } from "models/database/card"
import Set from "../PMCG4"

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "わるいサンダース",
	},

	illustrator: "Mitsuhiro Arita",
	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [135],
	hp: 50,
	types: ["Lightning"],
	stage: "Stage1",

	attacks: [
		{
			cost: ["Lightning"],
			name: {
				'ja-jp': "稲妻フラッシュ",
			},
			effect: {
				'ja-jp': "防衛ポケモンが相手の次のターン中に攻撃を試みた場合、対戦相手はコインをひっくり返します。尾の場合、その攻撃は何もしません。",
			},
			damage: 20,
		},
		{
			cost: ["Lightning", "Lightning", "Colorless"],
			name: {
				'ja-jp': "サンダー攻撃",
			},
			effect: {
				'ja-jp': "コインをひっくり返します。頭の場合、防御ポケモンは麻痺しています。尾の場合、ダークジョルテオンはそれ自体に10ダメージを与えます。",
			},
			damage: 30,
		},
	],

	retreat: 1,

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 575765
			},
		},
	],
};

export default card
