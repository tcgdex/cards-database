import { Card } from "../../../interfaces"
import Set from "../neo2"

const card: Card = {
	set: Set,
	name: {
		ja: "未作外",
	},

	rarity: "Common",
	category: "Pokemon",
	dexId: [201],
	hp: 40,
	types: ["Psychic"],
	stage: "Basic",

	abilities: [
		{
			type: "Pokemon Power",
			name: {
				ja: "増加[増加]",
			},
			effect: {
				ja: "手から[i]を使用していない場合は、名前が付けられていないカードを検索して、ベンチに置くことができます。その後、デッキをシャッフルします。ベンチがいっぱいになった場合、このパワーを使用することはできません。",
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
