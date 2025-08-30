import {Card} from "../../../interfaces"
import Set from "../ADV3"

const card: Card = {
	set: Set,
	name: {
		ja: "ニンジャスク",
	},

	rarity: "Rare",
	category: "Pokemon",
	dexId: [291],
	hp: 70,
	types: ["Grass"],
	stage: "Stage1",

	abilities: [
		{
			name: {
				ja: "ゆるいシェル",
			},
			effect: {
				ja: "ターン中に、手からニンジャスクをプレイしてポカンの1つを進化させると、シェディンジャを検索してベンチに置くことができます。新しいベンチ付きポカモンを基本的なポケモンとして扱います。その後、デッキをシャッフルします。",
			},
		}],

	attacks: [
		{
			cost: ["Colorless", "Colorless"],
			name: {
				ja: "クイックタッチ",
			},
			effect: {
				ja: "ベンチ付きポケモンの1つでニンジャスクを切り替えることができます。そうすれば、ニンジャスクに取り付けられた草のエネルギーカードを新しいアクティブポケモンに移動できます。",
			},
			damage: 30,
		},
	],

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
