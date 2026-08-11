import { Card } from "../../../interfaces"
import Set from "../E2"

const card: Card = {
	set: Set,
	name: {
		ja: "スキプルーム",
	},

	rarity: "Common",
	category: "Pokemon",
	dexId: [188],
	hp: 60,
	types: ["Grass"],
	stage: "Stage1",

	abilities: [
		{
			name: {
				ja: "軽量",
			},
			effect: {
				ja: "あなたはそれに取り付けられた各草のエネルギーについてスキプルームを後退させるために無色の少ない支払いをします。",
			},
		}],

	attacks: [
		{
			cost: ["Colorless"],
			name: {
				ja: "パウダーを壊します",
			},
			effect: {
				ja: "コインをひっくり返します。頭の場合、この攻撃は10ダメージに加えて20ダメージを与えます。尾の場合、この攻撃は10ダメージを与え、防御ポケモンは眠っています。",
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
