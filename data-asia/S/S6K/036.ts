import { Card } from "../../../interfaces";
import Set from "../S6K";

const card: Card = {
	set: Set,
	name: {
		ja: "こくばバドレックスV",
		'zh-tw': "黑馬蕾冠王V",
	},

	illustrator: "D.A.G Inc.",
	category: "Pokemon",
	hp: 210,
	types: ["Psychic"],

	stage: "Basic",

	attacks: [
		{
			name: {
				ja: "シャドーミスト",
				'zh-tw': "星碎",
			},
			damage: 10,
			cost: ["Psychic"],
			effect: {
				ja: "次の相手の番、相手は手札から、「特殊エネルギー」を出してつけられず「スタジアム」も出せない。",
				'zh-tw': "在對手的2隻寶可夢身上各放置5個傷害指示物。",
			},
		},
		{
			name: { ja: "アストラルビット" },
			cost: ["Colorless", "Colorless", "Colorless"],
			effect: {
				ja: "相手のポケモン2匹に、それぞれダメカンを5個のせる。",
			},
		},
	],

	weaknesses: [{ type: "Darkness", value: "x2" }],
	resistances: [{ type: "Fighting", value: "-30" }],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 560806,
				tcgplayer: 569264,
			},
		},
	],

	retreat: 2,
	regulationMark: "E",
	rarity: "Double rare",
	dexId: [898],
};

export default card;
