import { Card } from "../../../interfaces";
import Set from "../S11";

const card: Card = {
	set: Set,
	name: {
		ja: "ナットレイ",
		'zh-tw': "堅果啞鈴",
	},

	illustrator: "Anesaki Dynamic",
	category: "Pokemon",
	hp: 130,
	types: ["Metal"],

	description: {
		ja: "トゲで 岩盤に キズを つけると 触手の 先端を あてて 栄養を 吸収する。",
		'zh-tw': "用尖刺刺裂岩壁之後，牠會用觸手的尖端 接觸裂縫吸收營養。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: {
				ja: "かいてんアタック",
				'zh-tw': "迴轉攻擊",
			},
			damage: 50,
			cost: ["Metal", "Colorless"],
		},
		{
			name: {
				ja: "ウィップスマッシュ",
				'zh-tw': "鞭打粉碎",
			},
			damage: 130,
			cost: ["Metal", "Metal", "Colorless"],
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [{ type: "Grass", value: "-30" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 667952,
				tcgplayer: 570008,
			},
		},
	],

	evolveFrom: {
		ja: "テッシード",
	},

	retreat: 2,
	regulationMark: "F",
	rarity: "Common",
	dexId: [598],
};

export default card;
