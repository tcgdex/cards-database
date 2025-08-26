import { Card } from "../../../interfaces"
import Set from "../web1"

const card: Card = {
	set: Set,
	name: {
		ja: "ニドキング",
	},

	rarity: "Rare",
	category: "Pokemon",
	dexId: [34],
	hp: 90,
	types: ["Grass"],
	stage: "Stage2",

	attacks: [
		{
			cost: ["Grass", "Colorless", "Colorless"],
			name: {
				ja: "スラッシュ",
			},
			effect: {
				ja: "コインをひっくり返します。頭の場合、この攻撃は30のダメージに加えて10ダメージを与えます。テールの場合、この攻撃は30のダメージを与え、ニドキングはそれ自体に10ダメージを与えます。",
			},
		},
		{
			cost: ["Grass", "Grass", "Grass"],
			name: {
				ja: "有毒",
			},
			effect: {
				ja: "防御ポケモンは現在中毒になっています。各プレイヤーのターン後（すでに毒されていたとしても）、20回ではなく20回の毒ダメージがかかります。",
			},
			damage: 20,
		},
	],

	retreat: 3,

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
