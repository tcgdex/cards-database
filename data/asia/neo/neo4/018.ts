import { Card } from "../../../interfaces"
import Set from "../neo4"

const card: Card = {
	set: Set,
	name: {
		ja: "軽いニネタール",
	},

	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [38],
	hp: 90,
	types: ["Fire"],
	stage: "Stage1",

	attacks: [
		{
			cost: ["Fire"],
			name: {
				ja: "ガイドフレーム",
			},
			effect: {
				ja: "ベビーポケモンまたは基本的なポケモンカードを、捨てられた山からベンチに置きます。 （ベンチがいっぱいの場合、この攻撃を使用できません。）",
			},
		},
		{
			cost: ["Fire", "Fire", "Fire"],
			name: {
				ja: "火の爆発",
			},
			effect: {
				ja: "この攻撃を使用するために、軽いニネタールに取り付けられた消防エネルギーカードを廃棄します。",
			},
			damage: 50,
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
