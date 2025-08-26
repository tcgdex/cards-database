import { Card } from "../../../interfaces"
import Set from "../PCG5"

const card: Card = {
	set: Set,
	name: {
		ja: "シーレオ",
	},

	rarity: "Rare",
	category: "Pokemon",
	dexId: [364],
	hp: 70,
	types: ["Water"],
	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: {
				ja: "パワー循環",
			},
			effect: {
				ja: "ターン中（攻撃の前）になったら、廃棄パイルを基本的なエネルギーカードで検索し、相手に見せて、デッキの上に置くことができます。もしそうなら、Sealeoに1つのダメージカウンターを入れます。シーレオが特別な状態の影響を受けている場合、このパワーは使用できません。",
			},
		}],

	attacks: [
		{
			cost: ["Water", "Colorless"],
			name: {
				ja: "突進します",
			},
			damage: 30,
		},
	],

	retreat: 1,

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
