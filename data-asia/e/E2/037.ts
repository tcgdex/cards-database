import { Card } from "../../../interfaces"
import Set from "../E2"

const card: Card = {
	set: Set,
	name: {
		ja: "Zapdos -037/092",
	},

	rarity: "Rare",
	category: "Pokemon",
	dexId: [145],
	hp: 80,
	types: ["Lightning"],
	stage: "Basic",

	abilities: [
		{
			name: {
				ja: "ライトニング対策",
			},
			effect: {
				ja: "手からザプドスに稲妻エネルギーカードを取り付けることはできません。",
			},
		}],

	attacks: [
		{
			cost: ["Colorless"],
			name: {
				ja: "プラズマ",
			},
			effect: {
				ja: "廃棄パイルに稲妻エネルギーカードがある場合は、コインをひっくり返します。頭の場合は、それらの1つをZapdosに取り付けます。",
			},
			damage: 10,
		},
		{
			cost: ["Lightning", "Lightning", "Colorless", "Colorless"],
			name: {
				ja: "稲妻",
			},
			effect: {
				ja: "コインをひっくり返します。尾の場合、zapdosに2つのダメージカウンターを入れます。",
			},
			damage: 60,
		},
	],

	retreat: 2,

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
