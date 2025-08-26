import { Card } from "../../../interfaces"
import Set from "../E1"

const card: Card = {
	set: Set,
	name: {
		ja: "マグマー",
	},

	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [126],
	hp: 60,
	types: ["Fire"],
	stage: "Basic",

	attacks: [
		{
			cost: ["Fire", "Colorless"],
			name: {
				ja: "燃えるようなパンチ",
			},
			effect: {
				ja: "コインをひっくり返します。頭の場合、防御するポケモンが燃やされます。",
			},
			damage: 10,
		},
		{
			cost: ["Fire", "Colorless", "Colorless"],
			name: {
				ja: "スラッシュ",
			},
			effect: {
				ja: "コインをひっくり返します。頭の場合、この攻撃は30ダメージに加えて10ダメージを与えます。尾の場合、マグマーはそれ自体に10ダメージを与えます。",
			},
		},
	],

	retreat: 1,

	variants: [
		{
			type: "normal",
		},
		{
			type: "normal",
			stamp: ["1st edition"],
		},
	],
};

export default card
