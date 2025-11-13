import { Card } from "../../../interfaces"
import Set from "../PCG4"

const card: Card = {
	set: Set,
	name: {
		ja: "スローキング",
	},

	rarity: "Holo Rare",
	category: "Pokemon",
	dexId: [199],
	hp: 70,
	types: ["Psychic"],
	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: {
				ja: "アイテム検索",
			},
			effect: {
				ja: "ターン中（攻撃の前に）一度（攻撃の前）、ポケモンツールカードのデッキを検索し、対戦相手に見せて、手に渡すことができます。その後、デッキをシャッフルします。スローキングが特別な状態の影響を受ける場合、このパワーは使用できません。",
			},
		}],

	attacks: [
		{
			cost: ["Psychic", "Colorless"],
			name: {
				ja: "余波",
			},
			effect: {
				ja: "廃棄パイル内の各ポケモンツールカードに対して20のダメージと10ダメージがさらに10ダメージを与えます。この方法で60以上のダメージを追加することはできません。",
			},
		},
	],

	retreat: 1,

	variants: [
		{
			type: "holo",
			subtype: "unlimited",
		},
		{
			type: "holo",
			stamp: ["1st edition"],
		},
	],
};

export default card
