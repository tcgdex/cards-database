import { Card } from "../../../interfaces"
import Set from "../neo1"

const card: Card = {
	set: Set,
	name: {
		ja: "染色",
	},

	rarity: "Holo Rare",
	category: "Pokemon",
	dexId: [157],
	hp: 100,
	types: ["Fire"],
	stage: "Stage2",

	abilities: [
		{
			type: "Pokemon Power",
			name: {
				ja: "火災充電",
			},
			effect: {
				ja: "ターン中に（攻撃の前に）</em> </em>、コインをひっくり返すことができます。頭の場合は、捨てられた山から火のポクモン1に火のエネルギーカードを取り付けます。害虫が眠っている、混乱し、麻痺している場合、この力は使用できません。",
			},
		}],

	attacks: [
		{
			cost: ["Fire", "Fire", "Fire", "Fire"],
			name: {
				ja: "炎が破裂します",
			},
			effect: {
				ja: "コインをひっくり返します。頭の場合、この攻撃は60のダメージに20件のダメージを与え、腸チフスに20ダメージを与えます。尾の場合、この攻撃は60のダメージを与えます。",
			},
		},
	],

	retreat: 2,

	variants: [
		{
			type: "holo",
		},
	],
};

export default card
