import { Card } from "../../../interfaces"
import Set from "../neo1"

const card: Card = {
	set: Set,
	name: {
		ja: "スローキング",
	},

	rarity: "Holo Rare",
	category: "Pokemon",
	dexId: [199],
	hp: 80,
	types: ["Psychic"],
	stage: "Stage1",

	abilities: [
		{
			type: "Pokemon Power",
			name: {
				ja: "マインドゲーム",
			},
			effect: {
				ja: "<em>スローキングがアクティブなポクモン</em>である場合、このパワーを使用できます。対戦相手がトレーナーカードをプレイするたびに、コインをひっくり返すことができます。頭の場合、そのカードは何もしません。対戦相手のデッキの上に置いてください。スローキングが眠ったり、混乱したり、麻痺している場合、このパワーは使用できません。",
			},
		}],

	attacks: [
		{
			cost: ["Psychic", "Psychic", "Psychic"],
			name: {
				ja: "マインドブラスト",
			},
			effect: {
				ja: "コインをひっくり返します。頭の場合、この攻撃は20ダメージに加えて10ダメージを与え、防御ポケモンが混乱しています。尾の場合、この攻撃は20ダメージを与えます。",
			},
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
