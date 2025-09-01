import {Card} from "../../../interfaces"
import Set from "../ADV4"

const card: Card = {
	set: Set,
	name: {
		ja: "シーレオ",
	},

	rarity: "Rare",
	category: "Pokemon",
	dexId: [364],
	hp: 70,
	types: ["Water"],
	stage: "Stage1",

	attacks: [
		{
			cost: ["Water"],
			name: {
				ja: "超氷の風",
			},
			effect: {
				ja: "対戦相手の各ポケモンに10ダメージを与えます。  この攻撃の損傷は、脱力感や抵抗の影響を受けません。",
			},
		},
		{
			cost: ["Water", "Colorless", "Colorless"],
			name: {
				ja: "頭蓋骨バッシュ",
			},
			damage: 50,
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
