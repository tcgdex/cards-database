import { Card } from "../../../interfaces"
import Set from "../PCG2"

const card: Card = {
	set: Set,
	name: {
		ja: "ウィスカッシュ",
	},

	rarity: "Holo Rare",
	category: "Pokemon",
	dexId: [340],
	hp: 90,
	types: ["Fighting"],
	stage: "Stage1",

	attacks: [
		{
			cost: ["Colorless"],
			name: {
				ja: "荒れ狂う震え",
			},
			effect: {
				ja: "コインをひっくり返します。ヘッドの場合、この攻撃は、各防御ポケモンに対してウィスカッシュで各ダメージカウンターに対して10ダメージを与えます。テールの場合、この攻撃は、防御ポケモンのウィスカッシュで各ダメージカウンターに対して10ダメージを与えます。",
			},
		},
		{
			cost: ["Fighting", "Fighting", "Colorless"],
			name: {
				ja: "波の減少",
			},
			effect: {
				ja: "Whiscashのダメージカウンターごとに70のダメージを引いた10ダメージを引いた。",
			},
		},
	],

	retreat: 2,

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

export default card
