import { Card } from "../../../interfaces"
import Set from "../neo2"

const card: Card = {
	set: Set,
	name: {
		ja: "d",
	},

	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [201],
	hp: 40,
	types: ["Psychic"],
	stage: "Basic",

	abilities: [
		{
			type: "Pokemon Power",
			name: {
				ja: "暗い[暗闇]",
			},
			effect: {
				ja: "暗闇のポクモンがポクモンの1を損傷するときはいつでも、その損傷を30 <em>（衰弱と抵抗を適用した後）</em>に減らします。このパワーは、プレイ中に複数の[D]を1つ以上持っている場合、機能しなくなります。 <em>（このパワーは、眠っていない、混乱している、または麻痺している場合でも機能します。）</em>",
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
