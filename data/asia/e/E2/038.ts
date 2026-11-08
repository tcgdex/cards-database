import { Card } from "models/database/card"
import Set from "../E2"

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "Zapdos -038/092",
	},

	rarity: "Holo Rare",
	category: "Pokemon",
	dexId: [145],
	hp: 80,
	types: ["Lightning"],
	stage: "Basic",

	abilities: [
		{
			name: {
				'ja-jp': "ライトニング対策",
			},
			effect: {
				'ja-jp': "手からザプドスに稲妻エネルギーカードを取り付けることはできません。",
			},
		}],

	attacks: [
		{
			cost: ["Colorless"],
			name: {
				'ja-jp': "プラズマ",
			},
			effect: {
				'ja-jp': "廃棄パイルに稲妻エネルギーカードがある場合は、コインをひっくり返します。頭の場合は、それらの1つをZapdosに取り付けます。",
			},
			damage: 10,
		},
		{
			cost: ["Lightning", "Lightning", "Colorless", "Colorless"],
			name: {
				'ja-jp': "稲妻",
			},
			effect: {
				'ja-jp': "コインをひっくり返します。尾の場合、zapdosに2つのダメージカウンターを入れます。",
			},
			damage: 60,
		},
	],

	retreat: 2,

	variants: [
		{
			type: "holo",
		},
		{
			type: "holo",
		},
		{
			type: "holo",
			stamp: ["1st edition"],
		},
		{
			type: "holo",
			stamp: ["1st edition"],
		},
	],
};

export default card
