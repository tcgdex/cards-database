import { Card } from "../../../interfaces"
import Set from "../E5"

const card: Card = {
	set: Set,
	name: {
		ja: "猟犬",
	},

	rarity: "Rare",
	category: "Pokemon",
	dexId: [229],
	hp: 70,
	types: ["Darkness"],
	stage: "Stage1",

	attacks: [
		{
			cost: ["Colorless", "Colorless"],
			name: {
				ja: "待ち伏せ",
			},
			effect: {
				ja: "コインをひっくり返します。頭の場合、この攻撃は10ダメージに加えて20ダメージを与えます。",
			},
		},
		{
			cost: ["Darkness", "Colorless", "Colorless"],
			name: {
				ja: "孤独な牙",
			},
			effect: {
				ja: "この攻撃は、30のダメージに加えて、対戦相手のベンチポケモンの数を20回以上ダメージし、ベンチポケモンの数を差し引いています。 （たとえば、相手が3つのベンチポケモンを持っていて、1つのベンチがある場合、この攻撃は30のダメージと40ダメージを与えます。）",
			},
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
			stamp: ["1st Edition"],
		},
	],
};

export default card
