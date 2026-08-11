import { Card } from "../../../interfaces";
import Set from "../S-P";

const card: Card = {
	set: Set,
	name: {
		ja: "ワルビル",
		'zh-tw': "強顎雞母蟲",
	},

	illustrator: "Shin Nagasawa",
	category: "Pokemon",
	hp: 90,
	types: ["Darkness"],

	description: {
		ja: "獲物の １部は 砂の中に 埋めて 狩りが 失敗したときの 非常食に するのだ。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: {
				ja: "かみつく",
				'zh-tw': "帶電",
			},
			damage: 20,
			cost: ["Darkness"],
		},
		{
			name: {
				ja: "ほりあらす",
				'zh-tw': "偷襲",
			},
			cost: ["Colorless", "Colorless", "Colorless"],
			effect: {
				ja: "相手の山札を上から3枚トラッシュする。",
				'zh-tw': "擲1次硬幣若為反面，則這個招式失敗。",
			},
		},
	],

	weaknesses: [{ type: "Grass", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 525265,
				tcgplayer: 597317,
			},
		},
	],

	evolveFrom: {
		ja: "メグロコ",
	},

	retreat: 2,
	regulationMark: "D",
	rarity: "Promo",
	dexId: [552],
};

export default card;
