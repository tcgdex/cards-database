import { Card } from "../../../interfaces"
import Set from "../E1"

const card: Card = {
	set: Set,
	name: {
		ja: "ライチュ",
	},

	rarity: "Holo Rare",
	category: "Pokemon",
	dexId: [26],
	hp: 80,
	types: ["Lightning"],
	stage: "Stage1",

	attacks: [
		{
			cost: ["Colorless"],
			name: {
				ja: "プラズマ",
			},
			effect: {
				ja: "廃棄パイルに稲妻エネルギーカードがある場合は、コインをひっくり返します。  頭の場合は、それらの1つをライチュに取り付けます。",
			},
			damage: 10,
		},
		{
			cost: ["Lightning", "Lightning", "Colorless"],
			name: {
				ja: "ショックボルト",
			},
			effect: {
				ja: "Raichuに取り付けられたすべてのLightning Energyカードを廃棄するか、この攻撃は何もしません。",
			},
			damage: 60,
		},
	],

	retreat: 1,

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
