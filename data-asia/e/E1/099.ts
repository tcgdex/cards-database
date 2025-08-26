import { Card } from "../../../interfaces"
import Set from "../E1"

const card: Card = {
	set: Set,
	name: {
		ja: "アーボック-099/128",
	},

	rarity: "Holo Rare",
	category: "Pokemon",
	dexId: [24],
	hp: 70,
	types: ["Grass"],
	stage: "Stage1",

	attacks: [
		{
			cost: ["Grass"],
			name: {
				ja: "毒スプレー",
			},
			effect: {
				ja: "防御ポケモンは現在中毒になっています。",
			},
		},
		{
			cost: ["Colorless", "Colorless"],
			name: {
				ja: "毒反応",
			},
			effect: {
				ja: "防御ポケモンが毒されている場合、この攻撃は20ダメージに加えて20ダメージを与えます。",
			},
		},
	],

	retreat: 1,

	variants: [
		{
			type: "holo",
		},
		{
			type: "holo",
			stamp: ["1st edition"],
		},
	],
};

export default card
