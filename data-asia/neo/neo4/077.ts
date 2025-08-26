import { Card } from "../../../interfaces"
import Set from "../neo4"

const card: Card = {
	set: Set,
	name: {
		ja: "軽いマチャンプ",
	},

	rarity: "Rare",
	category: "Pokemon",
	dexId: [68],
	hp: 100,
	types: ["Fighting"],
	stage: "Stage2",

	abilities: [
		{
			type: "Pokemon Power",
			name: {
				ja: "タグチーム",
			},
			effect: {
				ja: "手から軽いマチャンプをプレイしたら、ベンチにある場合は、アクティブなポクモンから3つのダメージカウンターを削除します。それよりもダメージカウンターが少ない場合は、それらすべてを削除します。次に、アクティブなポクモンでライトマチャンプを切り替えます。",
			},
		}],

	attacks: [
		{
			cost: ["Fighting", "Fighting", "Fighting"],
			name: {
				ja: "ビートダウン",
			},
			effect: {
				ja: "防御するポケモンがその名前が暗い場合、または暗闇のポケモンである場合は、コインをひっくり返します。頭の場合、この攻撃は50ではなく100のダメージを与えます。",
			},
			damage: 50,
		},
	],

	retreat: 2,

	variants: [
		{
			type: "normal",
		},
	],
};

export default card
