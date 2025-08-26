import { Card } from "../../../interfaces"
import Set from "../neo4"

const card: Card = {
	set: Set,
	name: {
		ja: "ライトゴルダック",
	},

	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [55],
	hp: 80,
	types: ["Water"],
	stage: "Stage1",

	attacks: [
		{
			cost: ["Water"],
			name: {
				ja: "フリッパーストローク",
			},
			effect: {
				ja: "あなたの対戦相手は、彼または彼女のデッキのトップ3カードを見ます。それらのいずれかが基本的なエネルギーカードである場合、彼または彼女はそれらの数をあなたに見せて、彼または彼女の手にそれらを置くことができます。あなたも同じことをします。いずれにせよ、各プレイヤーは自分のデッキをシャッフルします。",
			},
		},
		{
			cost: ["Psychic", "Colorless", "Colorless"],
			name: {
				ja: "コアブラスト",
			},
			effect: {
				ja: "この攻撃は、防御ポケモンに取り付けられた特別なエネルギーカードごとに30のダメージに加えて20ダメージを与えます。",
			},
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
