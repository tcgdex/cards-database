import { Card } from "../../../interfaces"
import Set from "../neo4"

const card: Card = {
	set: Set,
	name: {
		ja: "軽いウィグリティフ",
	},

	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [40],
	hp: 80,
	types: ["Colorless"],
	stage: "Stage1",

	attacks: [
		{
			cost: ["Colorless"],
			name: {
				ja: "進化の歌",
			},
			effect: {
				ja: "対戦相手は、ポケモンの1つを選択し、そのポケモンから進化するカードを自分のデッキに検索することができます。相手はそのカードをそのポケモンに取り付けます。これは、そのポケモンの進化としてカウントされます。いずれにせよ、あなたは同じことをするかもしれません、そして、検索した各プレイヤーは彼または彼女のデッキをシャッフルします。",
			},
		},
		{
			cost: ["Colorless", "Colorless", "Colorless"],
			name: {
				ja: "ボディスラム",
			},
			effect: {
				ja: "コインをひっくり返します。頭の場合、防御ポケモンは麻痺しています。",
			},
			damage: 20,
		},
	],

	retreat: 1,

	variants: [
		{
			type: "normal",
		},
	],
};

export default card
