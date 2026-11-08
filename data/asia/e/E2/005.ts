import { Card } from "models/database/card"
import Set from "../E2"

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "MUK -005/092",
	},

	rarity: "Holo Rare",
	category: "Pokemon",
	dexId: [89],
	hp: 70,
	types: ["Grass"],
	stage: "Stage1",

	abilities: [
		{
			name: {
				'ja-jp': "ヘビー級",
			},
			effect: {
				'ja-jp': "MUKに草のエネルギーが取り付けられている限り、追加の{{e}} {{e}} {{e}}を支払う必要があります。",
			},
		}],

	attacks: [
		{
			cost: ["Colorless", "Colorless"],
			name: {
				'ja-jp': "燃えるスラッジ",
			},
			effect: {
				'ja-jp': "MUKに取り付けられた草のエネルギーの量に等しい多数のコインをひっくり返します。それらのいずれかが頭である場合、防御するポケモンは現在毒され、燃やされています。",
			},
			damage: 10,
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
