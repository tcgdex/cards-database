import { Card } from "models/database/card"
import Set from "../E4"

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "Omastar",
	},

	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [139],
	hp: 90,
	types: ["Water"],
	stage: "Stage2",

	abilities: [
		{
			type: "Ability",
			name: {
				'ja-jp': "原始凝視",
			},
			effect: {
				'ja-jp': "Omastarがアクティブなポケモンである限り、あなたの対戦相手は、アクティブなポクモンを進化させるために、手から進化カードのために基本的なポケモンをプレイすることができません。",
			},
		}],

	attacks: [
		{
			cost: ["Water", "Water", "Colorless"],
			name: {
				'ja-jp': "恐怖",
			},
			effect: {
				'ja-jp': "防御するポケモンは、相手の次のターン中に退却することはできません。",
			},
			damage: 50,
		},
	],

	retreat: 2,

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
