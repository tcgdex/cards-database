import { Card } from "../../../interfaces";
import Set from "../S11";

const card: Card = {
	set: Set,
	name: {
		ja: "テッシード",
		'zh-tw': "種子鐵球",
	},

	illustrator: "ryoma uratsuka",
	category: "Pokemon",
	hp: 60,
	types: ["Metal"],

	description: {
		ja: "棘を 飛ばして 身を 守る。 狙った 方向に 飛ばすには たくさんの 訓練が 必要。",
		'zh-tw': "會發射尖刺來保護自己。需要反覆訓練才能將 尖刺準確地射中目標。",
	},

	stage: "Basic",

	attacks: [
		{
			name: {
				ja: "たいあたり",
				'zh-tw': "撞擊",
			},
			damage: 10,
			cost: ["Metal"],
		},
		{
			name: {
				ja: "ころがりタックル",
				'zh-tw': "滾動衝撞",
			},
			damage: 20,
			cost: ["Metal", "Colorless"],
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [{ type: "Grass", value: "-30" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 667951,
				tcgplayer: 570007,
			},
		},
	],

	retreat: 2,
	regulationMark: "F",
	rarity: "Common",
	dexId: [597],
};

export default card;
