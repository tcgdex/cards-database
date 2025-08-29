import { Card } from "../../../interfaces"
import Set from "../neo1"

const card: Card = {
	set: Set,
	name: {
		ja: "シードラ",
	},

	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [117],
	hp: 70,
	types: ["Water"],
	stage: "Stage1",

	attacks: [
		{
			cost: ["Water"],
			name: {
				ja: "バブル",
			},
			effect: {
				ja: "コインをひっくり返します。頭の場合、防御ポケモンは麻痺しています。",
			},
			damage: 10,
		},
		{
			cost: ["Water", "Water"],
			name: {
				ja: "泥のスプラッシュ",
			},
			effect: {
				ja: "対戦相手がベンチポケモンを持っている場合は、1つを選択してコインをひっくり返します。頭の場合、この攻撃はそのポケモンに10ダメージを与えます。 （ベンチポケモンに衰弱と抵抗を適用しないでください。）",
			},
			damage: 30,
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
