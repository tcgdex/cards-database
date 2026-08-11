import { Card } from "models/database/card"
import Set from "../PCG5"

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "ラントン",
	},

	rarity: "Holo Rare",
	category: "Pokemon",
	dexId: [171],
	hp: 80,
	types: ["Lightning"],
	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: {
				'ja-jp': "デュアルアーマー",
			},
			effect: {
				'ja-jp': "Lanturnに水エネルギーが付着している限り、Lanturnは水と稲妻の両方のタイプです。",
			},
		}],

	attacks: [
		{
			cost: ["Lightning", "Colorless"],
			name: {
				'ja-jp': "かみそりフィン",
			},
			damage: 30,
		},
		{
			cost: ["Colorless", "Colorless", "Colorless"],
			name: {
				'ja-jp': "ウォーターガン",
			},
			effect: {
				'ja-jp': "40のダメージに加えて、ラントンに付着した水エネルギーごとに20のダメージがさらに20件ありますが、この攻撃のエネルギーコストの支払いには使用されません。この方法で{{sic}} 40ダメージを追加することはできません。",
			},
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
