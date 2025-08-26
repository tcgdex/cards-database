import { Card } from "../../../interfaces"
import Set from "../neo2"

const card: Card = {
	set: Set,
	name: {
		ja: "ヤンマ",
	},

	rarity: "Holo Rare",
	category: "Pokemon",
	dexId: [193],
	hp: 60,
	types: ["Grass"],
	stage: "Basic",

	attacks: [
		{
			cost: ["Grass"],
			name: {
				ja: "衝撃波",
			},
			effect: {
				ja: "コインをひっくり返します。頭の場合、この攻撃は相手の各ポケモンに10ダメージを与えます。衰弱と抵抗を適用しないでください。次に、相手がベンチポケモンを持っている場合、彼または彼女はそれらの1つを選択し、防御ポケモンでそれを切り替えます。",
			},
		},
		{
			cost: ["Grass", "Grass", "Grass"],
			name: {
				ja: "迅速",
			},
			effect: {
				ja: "この攻撃の損傷は、衰弱、抵抗、ポケモンの力、または防御ポケモンに対するその他の影響の影響を受けません。",
			},
			damage: 30,
		},
	],


	variants: [
		{
			type: "holo",
		},
	],
};

export default card
