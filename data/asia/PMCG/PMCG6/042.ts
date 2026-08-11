import { Card } from "models/database/card"
import Set from "../PMCG6"

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "R団のサンダー",
	},
	illustrator: "Shin-ichi Yoshida",

	rarity: "Holo Rare",
	category: "Pokemon",
	dexId: [145],
	hp: 70,
	types: ["Lightning"],
	stage: "Basic",

	attacks: [
		{
			cost: ["Lightning"],
			name: {
				'ja-jp': "プラズマ",
			},
			effect: {
				'ja-jp': "廃棄パイルに稲妻エネルギーカードがある場合は、それらの1つをロケットのザプドに取り付けます。",
			},
			damage: 20,
		},
		{
			cost: ["Lightning", "Lightning", "Lightning", "Colorless"],
			name: {
				'ja-jp': "エレクトロブルン",
			},
			effect: {
				'ja-jp': "RocketのZapdosは、それに取り付けられたLightning Energyカードの数の10倍に相当するそれ自体にダメージを与えます。",
			},
			damage: 70,
		},
	],

	retreat: 2,

	variants: [
		{
			type: "holo",
			thirdParty: {
				tcgplayer: 575341
			},
		},
	],
};

export default card
