import { Card } from "../../../interfaces"
import Set from "../PCG7"

const card: Card = {
	set: Set,
	name: {
		ja: "ゆっくり（デルタ種）",
	},

	rarity: "Holo Rare",
	category: "Pokemon",
	dexId: [346],
	hp: 100,
	types: ["Darkness"],
	stage: "Stage2",

	attacks: [
		{
			cost: ["Darkness", "Colorless"],
			name: {
				ja: "過酷な液体",
			},
			effect: {
				ja: "対戦相手の次のターンの終わりに、防御ポケモンに5つのダメージカウンターを置きます。",
			},
			damage: 20,
		},
		{
			cost: ["Metal", "Colorless", "Colorless"],
			name: {
				ja: "毒の触手",
			},
			effect: {
				ja: "防御ポケモンは現在中毒になっています。",
			},
			damage: 50,
		},
	],

	retreat: 2,

	variants: [
		{
			type: "holo",
			stamp: ["1st edition"],
		},
		{
			type: "holo",
			subtype: "unlimited",
		},
	],
};

export default card
