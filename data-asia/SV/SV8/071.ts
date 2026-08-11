import { Card } from "../../../interfaces";
import Set from "../SV8";

const card: Card = {
	set: Set,
	name: {
		ja: "ジヘッド",
		'zh-tw': "雙首暴龍",
		'zh-cn': "雙首暴龍",
	},

	illustrator: "chibi",
	category: "Pokemon",
	hp: 100,
	types: ["Darkness"],

	description: {
		ja: "２つの 頭は 好みが 違う。 頭同士 争うことで だれの 力も 借りずに 強くなるのだ。",
		'zh-tw': "２顆頭各有喜好。 由於頭之間會互相爭鬥， 因此不靠外力也能變強。",
		'zh-cn': "２顆頭各有喜好。 由於頭之間會互相爭鬥， 因此不靠外力也能變強。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: {
				ja: "ふみならす",
				'zh-tw': "踩落",
				'zh-cn': "踩落",
			},
			cost: ["Darkness"],
			effect: {
				ja: "相手の山札を上から2枚トラッシュする。",
				'zh-tw': "將對手的牌庫上方2張卡丟棄。",
				'zh-cn': "將對手的牌庫上方2張卡丟棄。",
			},
		},
		{
			name: {
				ja: "やみのキバ",
				'zh-tw': "暗之牙",
				'zh-cn': "暗之牙",
			},
			damage: 60,
			cost: ["Darkness", "Colorless", "Colorless"],
		},
	],

	weaknesses: [{ type: "Grass", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 793505,
				tcgplayer: 587651,
			},
		},
	],

	evolveFrom: {
		ja: "モノズ",
	},

	retreat: 2,
	regulationMark: "H",
	rarity: "Common",
	dexId: [634],
};

export default card;
