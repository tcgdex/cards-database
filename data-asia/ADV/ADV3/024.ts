import {Card} from "../../../interfaces"
import Set from "../ADV3"

const card: Card = {
	set: Set,
	name: {
		ja: "フラフィー",
	},

	rarity: "Rare",
	category: "Pokemon",
	dexId: [180],
	hp: 80,
	types: ["Lightning"],
	stage: "Stage1",

	attacks: [
		{
			cost: ["Lightning"],
			name: {
				ja: "エネルギーリコール",
			},
			effect: {
				ja: "廃棄パイルからFlaaffyに最大2つの基本エネルギーカードを取り付けます。",
			},
		},
		{
			cost: ["Lightning", "Colorless"],
			name: {
				ja: "稲妻",
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
