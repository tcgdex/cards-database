import { Card } from "../../../interfaces"
import Set from "../web1"

const card: Card = {
	set: Set,
	name: {
		ja: "exeggcute",
	},

	rarity: "Common",
	category: "Pokemon",
	dexId: [102],
	hp: 50,
	types: ["Grass"],
	stage: "Basic",

	attacks: [
		{
			cost: ["Psychic"],
			name: {
				ja: "催眠",
			},
			effect: {
				ja: "防御ポケモンは今眠っています。",
			},
		},
		{
			cost: ["Grass", "Grass"],
			name: {
				ja: "リーチシード",
			},
			effect: {
				ja: "この攻撃からのすべての損傷が防止されない限り、ExeggCuteから1つのダメージカウンターを削除できます。",
			},
			damage: 20,
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
