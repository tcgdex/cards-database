import {Card} from "../../../interfaces"
import Set from "../E5"

const card: Card = {
	set: Set,
	name: {
		ja: "ギャラドス",
	},

	rarity: "Rare",
	category: "Pokemon",
	dexId: [130],
	hp: 90,
	types: ["Water"],
	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: {
				ja: "炎の蒸気",
			},
			effect: {
				ja: "アクティブなポケモンを進化させるために手からgyaradosをプレイすると、2つのコインをひっくり返すことができます。各ヘッドについて、防御ポケモンに取り付けられたエネルギーカードを捨てます。",
			},
		}],

	attacks: [
		{
			cost: ["Water", "Colorless", "Colorless", "Colorless"],
			name: {
				ja: "ドラゴンの復ge",
			},
			effect: {
				ja: "Gyaradosに7つ以上のダメージカウンターがある場合、この攻撃のベースダメージは100です。",
			},
			damage: 50,
		},
	],

	retreat: 2,

	variants: [
		{
			type: "normal",
			stamp: ["1st edition"],
		},
		{
			type: "normal",
			subtype: "unlimited",
		},
	],
};
