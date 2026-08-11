import { Card } from "models/database/card";
import Set from "../SV8";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "ワッカネズミ",
		'zh-tw': "一對鼠",
		'zh-cn': "一對鼠",
	},

	illustrator: "USGMEN",
	category: "Pokemon",
	hp: 40,
	types: ["Colorless"],

	description: {
		'ja-jp': "どんなときでも ２匹は 一緒。 見つけた エサは ぴったりと 半分こして 仲良く 食べる。",
		'zh-tw': "無論何時２隻都待在一起。 會把尋獲的食物均分成兩半， 親密無間地一同進食。",
		'zh-cn': "無論何時２隻都待在一起。 會把尋獲的食物均分成兩半， 親密無間地一同進食。",
	},

	stage: "Basic",

	attacks: [
		{
			name: {
				'ja-jp': "じゃれつく",
				'zh-tw': "嬉鬧",
				'zh-cn': "嬉鬧",
			},
			damage: "10+",
			cost: ["Colorless"],
			effect: {
				'ja-jp': "コインを1回投げオモテなら、10ダメージ追加。",
				'zh-tw': "擲1次硬幣若為正面，則增加10點傷害。",
				'zh-cn': "擲1次硬幣若為正面，則增加10點傷害。",
			},
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 793525,
				tcgplayer: 587671,
			},
		},
	],

	retreat: 1,
	regulationMark: "H",
	rarity: "Common",
	dexId: [924],
};

export default card;
