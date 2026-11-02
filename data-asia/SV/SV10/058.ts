import { Card } from "../../../interfaces";
import Set from "../SV10";

const card: Card = {
	set: Set,
	name: {
		ja: "ロケット団のニドラン♀",
		'zh-tw': "<火箭隊的>尼多蘭",
		'zh-cn': "<火箭隊的>尼多蘭",
	},

	illustrator: "REND",
	category: "Pokemon",
	hp: 70,
	types: ["Darkness"],

	description: {
		ja: "硬い 前歯で 木の実を 砕いて 食べる。 ツノの 先は オスより 少し 丸みを 帯びている。",
		'zh-tw': "會用堅硬的門牙咬碎 樹果後吃下。角的尖端 會比雄性還要圓一些。",
		'zh-cn': "會用堅硬的門牙咬碎 樹果後吃下。角的尖端 會比雄性還要圓一些。",
	},

	stage: "Basic",

	attacks: [
		{
			name: {
				ja: "ふいをつく",
				'zh-tw': "偷襲",
				'zh-cn': "偷襲",
			},
			damage: 30,
			cost: ["Darkness"],
			effect: {
				ja: "コインを1回投げウラなら、このワザは失敗。",
				'zh-tw': "擲1次硬幣若為反面，則這個招式失敗。",
				'zh-cn': "擲1次硬幣若為反面，則這個招式失敗。",
			},
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 821890,
				tcgplayer: 628699,
			},
		},
	],

	retreat: 1,
	regulationMark: "I",
	rarity: "Common",
	dexId: [29],
};

export default card;
