import {Card} from "../../../interfaces"
import Set from "../PMCG2"

const card: Card = {
	set: Set,
	name: {
		ja: "ニドランf",
	},

	rarity: "Common",
	category: "Pokemon",
	dexId: [29],
	hp: 60,
	types: ["Grass"],
	stage: "Basic",

	attacks: [
		{
			cost: ["Grass"],
			name: {
				ja: "フューリースワイプ",
			},
			effect: {
				ja: "3コインをフリップします。この攻撃は、ヘッド数の10倍のダメージを与えます。",
			},

		},
		{
			cost: ["Grass", "Grass"],
			name: {
				ja: "家族を呼びます",
			},
			effect: {
				ja: "Nidoranという名前の基本的なポケモンをデッキを検索しますか？またはニドラン？そして、それをあなたのベンチに置きます。その後、デッキをシャッフルします。 （ベンチがいっぱいの場合、この攻撃を使用できません。）",
			},

		},
	],

	retreat: 1,

	variants : [
		{
			type: "normal",
		},
	],
};

export default card
