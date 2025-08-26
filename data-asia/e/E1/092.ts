import { Card } from "../../../interfaces"
import Set from "../E1"

const card: Card = {
	set: Set,
	name: {
		ja: "Fearow -092/128",
	},

	rarity: "Rare",
	category: "Pokemon",
	dexId: [22],
	hp: 70,
	types: ["Colorless"],
	stage: "Stage1",

	attacks: [
		{
			cost: ["Colorless", "Colorless"],
			name: {
				ja: "クラッチ",
			},
			effect: {
				ja: "防御するポケモンは、相手の次のターン中に退却することはできません。",
			},
			damage: 20,
		},
		{
			cost: ["Colorless", "Colorless", "Colorless"],
			name: {
				ja: "超音速飛行",
			},
			effect: {
				ja: "コインをひっくり返します。尾の場合、この攻撃は何もしません。",
			},
			damage: 50,
		},
	],


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
