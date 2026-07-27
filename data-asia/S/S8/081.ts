import { Card } from "../../../interfaces";
import Set from "../S8";

const card: Card = {
	set: Set,
	name: {
		ja: "エネコ",
		'zh-tw': "向尾喵",
	},

	illustrator: "Yukiko Baba",
	category: "Pokemon",
	hp: 60,
	types: ["Colorless"],

	description: {
		ja: "自分の 尻尾を 追いかけて 遊んでいると 目を 回すといった 可愛らしい 一面を みせる。",
		'zh-tw': "有時會展現出追著自己的尾巴玩，但玩著玩著就會頭昏眼花的可愛一面。",
	},

	stage: "Basic",

	attacks: [
		{
			name: {
				ja: "きまぐれタックル",
				'zh-tw': "胡思亂撞",
			},
			damage: 30,
			cost: ["Colorless"],
			effect: {
				ja: "コインを1回投げウラなら、このワザは失敗。",
				'zh-tw': "擲1次硬幣若為反面，則這個招式失敗。",
			},
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 575636,
				tcgplayer: 569582,
			},
		},
	],

	retreat: 1,
	regulationMark: "E",
	rarity: "Common",
	dexId: [300],
};

export default card;
