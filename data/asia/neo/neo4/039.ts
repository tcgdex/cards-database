import { Card } from "models/database/card"
import Set from "../neo4"

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "暗いferaligatr",
	},

	rarity: "Holo Rare",
	category: "Pokemon",
	dexId: [160],
	hp: 80,
	types: ["Water"],
	stage: "Stage2",

	abilities: [
		{
			type: "Pokemon Power",
			name: {
				'ja-jp': "怖い",
			},
			effect: {
				'ja-jp': "暗いferaligatrがあなたのアクティブなポクモンである限り、相手の赤ちゃんのポクモンのパワーはすべて働くことを止め、相手の赤ちゃんのポクモンは攻撃できません。このパワーは、暗いフェラガトルが眠っている、混乱し、麻痺している間に機能しなくなります。",
			},
		}],

	attacks: [
		{
			cost: ["Water", "Water", "Water"],
			name: {
				'ja-jp': "押しつぶす打撃",
			},
			effect: {
				'ja-jp': "防衛ポケモンにエネルギーカードが付いている場合は、コインをひっくり返します。頭の場合は、それらのカードの1枚を選択して破棄します。",
			},
			damage: 50,
		},
	],

	retreat: 3,

	variants: [
		{
			type: "holo",
		},
	],
};

export default card
