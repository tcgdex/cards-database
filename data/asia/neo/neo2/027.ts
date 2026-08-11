import { Card } from "../../../interfaces"
import Set from "../neo2"

const card: Card = {
	set: Set,
	name: {
		ja: "未定のm",
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
				ja: "金属[金属]",
			},
			effect: {
				ja: "金属PokmonがPokmonの1を損傷するときはいつでも、その損傷を30 <em>（脱力感と抵抗を適用した後）</em>に減らします。このパワーは、プレイ中に複数の[m]を1つ以上持っている場合、機能しなくなります。 <em>（このパワーは、眠っていない、眠っていても混乱している、または麻痺していても機能します。）</em>",
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
