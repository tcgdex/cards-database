import { Card } from "../../../interfaces"
import Set from "../neo2"

const card: Card = {
	set: Set,
	name: {
		ja: "Pineco",
	},

	rarity: "Common",
	category: "Pokemon",
	dexId: [204],
	hp: 40,
	types: ["Grass"],
	stage: "Basic",

	attacks: [
		{
			cost: ["Grass"],
			name: {
				ja: "バースト",
			},
			effect: {
				ja: "コインをひっくり返します。頭の場合、Pinecoはそれ自体に40のダメージを与え、各プレイヤーのベンチで各ポケモンに10ダメージを与えます。 （ベンチポケモンに衰弱と抵抗を適用しないでください。）コインをひっくり返します。尾の場合、この攻撃は何もしません（ダメージさえありません）。",
			},
			damage: 40,
		},
	],

	retreat: 2,

	variants: [
		{
			type: "normal",
		},
	],
};

export default card
