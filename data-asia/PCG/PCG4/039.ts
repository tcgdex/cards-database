import { Card } from "../../../interfaces"
import Set from "../PCG4"

const card: Card = {
	set: Set,
	name: {
		ja: "ライコウスター",
	},

	rarity: "Shiny rare",
	category: "Pokemon",
	dexId: [243],
	hp: 80,
	types: ["Lightning"],
	stage: "Stage1",

	attacks: [
		{
			cost: ["Lightning", "Colorless"],
			name: {
				ja: "稲妻ターン",
			},
			effect: {
				ja: "raikou {{star | this pokemon}}をベンチしたポケモンを1枚切り替えます。",
			},
			damage: 20,
		},
		{
			cost: ["Lightning", "Lightning", "Lightning"],
			name: {
				ja: "メタ電圧",
			},
			effect: {
				ja: "対戦相手よりも賞品が少ない場合、この攻撃はそれぞれのポケモンに40のダメージを与えます。 （ベンチポケモンに衰弱と抵抗を適用しないでください。）",
			},
			damage: 70,
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

export default card
