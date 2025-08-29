import { Card } from "../../../interfaces"
import Set from "../neo1"

const card: Card = {
	set: Set,
	name: {
		ja: "ホッピップ",
	},

	rarity: "Common",
	category: "Pokemon",
	dexId: [187],
	hp: 50,
	types: ["Grass"],
	stage: "Basic",

	attacks: [
		{
			cost: ["Colorless"],
			name: {
				ja: "ホップ",
			},
			damage: 10,
		},
		{
			cost: ["Grass"],
			name: {
				ja: "芽",
			},
			effect: {
				ja: "デッキを検索して、ホッピップという名前の基本的なポケモンを探して、ベンチに置きます。その後、デッキをシャッフルします。 （ベンチがいっぱいの場合、この攻撃を使用できません。）",
			},
		},
	],


	variants: [
		{
			type: "normal",
		},
	],
};

export default card
