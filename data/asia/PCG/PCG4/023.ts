import { Card } from "models/database/card"
import Set from "../PCG4"

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "スローブロ",
	},

	rarity: "Holo Rare",
	category: "Pokemon",
	dexId: [80],
	hp: 80,
	types: ["Water"],
	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: {
				'ja-jp': "デュアルアーマー",
			},
			effect: {
				'ja-jp': "Slowbroに精神エネルギーが付着している限り、Slowbroは水と精神型の両方です。",
			},
		}],

	attacks: [
		{
			cost: ["Colorless"],
			name: {
				'ja-jp': "並列ゲイン",
			},
			effect: {
				'ja-jp': "各ポケモン（スローブロを含む）から1つのダメージカウンターを取り外します。",
			},
			damage: 20,
		},
		{
			cost: ["Water", "Colorless", "Colorless"],
			name: {
				'ja-jp': "ローリングタックル",
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
