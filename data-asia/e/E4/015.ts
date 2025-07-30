import {Card} from "../../../interfaces"
import Set from "../E4"

const card: Card = {
	set: Set,
	name: {
		ja: "ヘラクロス",
	},

	rarity: "Common",
	category: "Pokemon",
	dexId: [214],
	hp: 60,
	types: ["Grass"],
	stage: "Basic",

	attacks: [
		{
			cost: ["Colorless", "Colorless"],
			name: {
				ja: "スラッシュ",
			},
			damage: 20,
		},
		{
			cost: ["Grass", "Colorless", "Colorless"],
			name: {
				ja: "怒っている角",
			},
			effect: {
				ja: "ヘラクロスに4つ以上のダメージカウンターがある場合、この攻撃のベースダメージは30ではなく50です。",
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
