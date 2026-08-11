import { Card } from "../../../interfaces"
import Set from "../neo2"

const card: Card = {
	set: Set,
	name: {
		ja: "Umbreon",
	},

	rarity: "Holo Rare",
	category: "Pokemon",
	dexId: [197],
	hp: 80,
	types: ["Darkness"],
	stage: "Stage1",

	attacks: [
		{
			cost: ["Colorless", "Colorless"],
			name: {
				ja: "噛む",
			},
			damage: 20,
		},
		{
			cost: ["Darkness", "Darkness", "Colorless"],
			name: {
				ja: "FEINT攻撃",
			},
			effect: {
				ja: "対戦相手のポケモンを1つ選択します。この攻撃は、そのポケモンに30のダメージを与えます。この攻撃の損傷は、衰弱、抵抗、ポケモンの力、または防御ポケモンに対するその他の影響の影響を受けません。",
			},
		},
	],

	retreat: 1,

	variants: [
		{
			type: "holo",
		},
	],
};

export default card
