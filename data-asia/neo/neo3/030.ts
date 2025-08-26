import { Card } from "../../../interfaces"
import Set from "../neo3"

const card: Card = {
	set: Set,
	name: {
		ja: "k",
	},

	rarity: "Common",
	category: "Pokemon",
	dexId: [201],
	hp: 40,
	types: ["Psychic"],
	stage: "Basic",

	abilities: [
		{
			name: {
				ja: "[保持]",
			},
			effect: {
				ja: "対戦相手の攻撃、ポケモンのパワー、トレーナーカードは、名前が付けられていないポケモンからエネルギーカードを捨てることはできません。 <em>（他の効果はまだ発生します。）</em>",
			},
		}],

	attacks: [
		{
			cost: ["Psychic"],
			name: {
				ja: "隠された力",
			},
			damage: 10,
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
