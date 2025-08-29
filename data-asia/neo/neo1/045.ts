import { Card } from "../../../interfaces"
import Set from "../neo1"

const card: Card = {
	set: Set,
	name: {
		ja: "slowpoke",
	},

	rarity: "Common",
	category: "Pokemon",
	dexId: [79],
	hp: 40,
	types: ["Psychic"],
	stage: "Basic",

	attacks: [
		{
			cost: ["Psychic"],
			name: {
				ja: "PsyShock",
			},
			effect: {
				ja: "コインをひっくり返します。頭の場合、防御ポケモンは麻痺しています。",
			},
			damage: 10,
		},
		{
			cost: ["Water"],
			name: {
				ja: "ウォーターガン",
			},
			effect: {
				ja: "10ダメージに加えて、スローポークに付着した水エネルギーごとに10ダメージを加えて10ダメージを与えますが、この攻撃のエネルギーコストの支払いには使用されません。この方法で20以上のダメージを追加することはできません。",
			},
		},
	],

	retreat: 1,

	variants: [
		{
			type: "normal",
		},
	],
};

export default card
