import { Card } from "../../../interfaces"
import Set from "../PCG6"

const card: Card = {
	set: Set,
	name: {
		ja: "マイティエナ（デルタ種）",
	},

	rarity: "Holo Rare",
	category: "Pokemon",
	dexId: [262],
	hp: 70,
	types: ["Darkness"],
	stage: "Stage1",

	attacks: [
		{
			cost: ["Darkness", "Colorless"],
			name: {
				ja: "デルタファン",
			},
			effect: {
				ja: "防御ポケモンがポケモンエクスの場合、そのポケモンは相手の次のターン中に攻撃できません。",
			},
			damage: 20,
		},
		{
			cost: ["Metal", "Colorless"],
			name: {
				ja: "ギャングアップ",
			},
			effect: {
				ja: "闇のポケモンとメタルポケモンの数を10回ダメージします。",
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
