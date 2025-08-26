import { Card } from "../../../interfaces"
import Set from "../PMCG6"

const card: Card = {
	set: Set,
	name: {
		ja: "ロケットのザプドス",
	},

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
				ja: "プラズマ",
			},
			effect: {
				ja: "廃棄パイルに稲妻エネルギーカードがある場合は、それらの1つをロケットのザプドに取り付けます。",
			},
			damage: 20,
		},
		{
			cost: ["Lightning", "Lightning", "Lightning", "Colorless"],
			name: {
				ja: "エレクトロブルン",
			},
			effect: {
				ja: "RocketのZapdosは、それに取り付けられたLightning Energyカードの数の10倍に相当するそれ自体にダメージを与えます。",
			},
			damage: 70,
		},
	],

	retreat: 2,

	variants: [
		{
			type: "holo",
		},
	],
};

export default card
