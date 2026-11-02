import { Card } from "../../../interfaces";
import Set from "../S10P";

const card: Card = {
	set: Set,
	name: {
		ja: "マーイーカ",
		'zh-tw': "好啦魷",
	},

	illustrator: "miki kudo",
	category: "Pokemon",
	hp: 60,
	types: ["Psychic"],

	description: {
		ja: "回転しながら 発光体を 点滅。 光の パターンで 仲間と コミュニケーションする。",
		'zh-tw': "旋轉著閃爍自己的發光體。透過改變閃爍的方式 來和其他夥伴交流。",
	},

	stage: "Basic",

	attacks: [
		{
			name: {
				ja: "きまぐれこうげき",
				'zh-tw': "浮躁攻擊",
			},
			damage: 30,
			cost: ["Psychic"],
			effect: {
				ja: "コインを1回投げウラなら、このワザは失敗。",
				'zh-tw': "擲1次硬幣若為反面，則這個招式失敗。",
			},
		},
	],

	weaknesses: [{ type: "Darkness", value: "x2" }],
	resistances: [{ type: "Fighting", value: "-30" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 651091,
				tcgplayer: 569875,
			},
		},
	],

	retreat: 1,
	regulationMark: "F",
	rarity: "Common",
	dexId: [686],
};

export default card;
