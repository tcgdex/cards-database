import { Card } from "../../../interfaces";
import Set from "../S8b";

const card: Card = {
	set: Set,
	name: {
		ja: "リザード",
		'zh-tw': "火恐龍",
	},

	illustrator: "SATOSHI NAKAI",
	category: "Pokemon",
	hp: 90,
	types: ["Fire"],

	description: {
		ja: "燃える しっぽを 振りまわし するどい ツメで 相手を 切り裂く 荒々しい 性格。",
		'zh-tw': "揮動燃燒著火焰的尾巴，用鋒利的爪子撕裂對手。性情十分粗暴。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: {
				ja: "きりさく",
				'zh-tw': "劈開",
			},
			damage: 20,
			cost: ["Fire"],
		},
		{
			name: {
				ja: "やまかじ",
				'zh-tw': "森林火災",
			},
			damage: 60,
			cost: ["Fire", "Fire"],
			effect: {
				ja: "自分の山札を上から3枚トラッシュする。",
				'zh-tw': "將自己的牌庫上方3張卡丟棄。",
			},
		},
	],

	weaknesses: [{ type: "Water", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 586531,
				tcgplayer: 571269,
			},
		},
		{
			type: "reverse",
			thirdParty: {
				tcgplayer: 578362,
			},
		},
	],

	evolveFrom: {
		ja: "ヒトカゲ",
	},

	retreat: 2,
	regulationMark: "D",
	rarity: "None",
	dexId: [5],
};

export default card;
