import { Card } from "../../../interfaces";
import Set from "../S8b";

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
				'zh-tw': "暗影薄霧",
			},
			damage: 10,
			cost: ["Psychic"],
			effect: {
				ja: "次の相手の番、相手は手札から、「特殊エネルギー」を出してつけられず「スタジアム」も出せない。",
				'zh-tw': "在下個對手的回合，對手無法從手牌附上「特殊能量」，也無法使出「競技場」。",
			},
		},
		{
			name: {
				ja: "アストラルビット",
				'zh-tw': "星碎",
			},
			cost: ["Colorless", "Colorless", "Colorless"],
			effect: {
				ja: "相手のポケモン2匹に、それぞれダメカンを5個のせる。",
				'zh-tw': "在對手的2隻寶可夢身上各放置5個傷害指示物。",
			},
		},
	],

	weaknesses: [{ type: "Darkness", value: "x2" }],
	resistances: [{ type: "Fighting", value: "-30" }],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 586598,
				tcgplayer: 571335,
			},
		},
	],

	retreat: 2,
	regulationMark: "E",
	rarity: "Double rare",
	dexId: [898],
};

export default card;
