import { Card } from "../../../interfaces";
import Set from "../SV10";

const card: Card = {
	set: Set,
	name: {
		ja: "ロケット団のニドラン♂",
		'zh-tw': "<火箭隊的>尼多朗",
		'zh-cn': "<火箭隊的>尼多朗",
	},

	illustrator: "buchi",
	category: "Pokemon",
	hp: 70,
	types: ["Darkness"],

	description: {
		ja: "小柄だが 勇ましい 性質。 仲良しの メスを 守るため 身を ていして 果敢に 戦う。",
		'zh-tw': "體型嬌小，但性情勇猛。 為了保護感情好的雌性， 會奮不顧身地勇敢戰鬥。",
		'zh-cn': "體型嬌小，但性情勇猛。 為了保護感情好的雌性， 會奮不顧身地勇敢戰鬥。",
	},

	stage: "Basic",

	attacks: [
		{
			name: {
				ja: "つきさす",
				'zh-tw': "突刺",
				'zh-cn': "突刺",
			},
			damage: 10,
			cost: ["Darkness"],
		},
		{
			name: {
				ja: "ぶちかます",
				'zh-tw': "頭突",
				'zh-cn': "頭突",
			},
			damage: 30,
			cost: ["Darkness", "Colorless"],
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 821893,
				tcgplayer: 628702,
			},
		},
	],

	retreat: 1,
	regulationMark: "I",
	rarity: "Common",
	dexId: [32],
};

export default card;
