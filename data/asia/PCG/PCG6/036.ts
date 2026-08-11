import { Card } from "models/database/card"
import Set from "../PCG6"

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "ベルダム（デルタ種）",
	},

	rarity: "Common",
	category: "Pokemon",
	dexId: [374],
	hp: 50,
	types: ["Lightning"],
	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: {
				'ja-jp': "導電性ボディ",
			},
			effect: {
				'ja-jp': "ベルダムがあなたのアクティブなポケモンである限り、あなたはあなたのベンチの各ベルダムのベルダムを後退させるために無色の少ない支払いをします。",
			},
		}],

	attacks: [
		{
			cost: ["Lightning", "Colorless"],
			name: {
				'ja-jp': "降ろす",
			},
			effect: {
				'ja-jp': "Beldumはそれ自体に10ダメージを与えます。",
			},
			damage: 30,
		},
	],

	retreat: 1,

	variants: [
		{
			type: "normal",
			subtype: "unlimited",
		},
		{
			type: "normal",
			stamp: ["1st edition"],
		},
	],
};

export default card
