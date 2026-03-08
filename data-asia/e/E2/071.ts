import { Card } from "../../../interfaces"
import Set from "../E2"

const card: Card = {
	set: Set,
	name: {
		ja: "猟犬-071/092",
	},

	rarity: "Holo Rare",
	category: "Pokemon",
	dexId: [229],
	hp: 70,
	types: ["Darkness"],
	stage: "Stage1",

	attacks: [
		{
			cost: ["Fire", "Colorless"],
			name: {
				ja: "花火",
			},
			effect: {
				ja: "コインをひっくり返します。尾の場合は、猟犬に取り付けられた消防剤カードを捨ててください。",
			},
			damage: 30,
		},
		{
			cost: ["Darkness", "Colorless", "Colorless"],
			name: {
				ja: "暗い衝撃",
			},
			effect: {
				ja: "ディフェンディングポケモンは、敵の次のターンの終わりまで、ポックを使用できません。",
			},
			damage: 40,
		},
	],

	retreat: 1,

	variants: [
		{
			type: "holo",
		},
		{
			type: "holo",
			stamp: ["1st edition"],
		},
	],
};

export default card
