import { Card } from "../../../interfaces";
import Set from "../S12a";

const card: Card = {
	set: Set,
	name: {
		ja: "エレキブル",
		'zh-tw': "電擊魔獸",
		th: "เอเลคิเบิล",
	},

	illustrator: "AKIRA EGAWA",
	category: "Pokemon",
	hp: 140,
	types: ["Lightning"],

	description: {
		ja: "発電量は 心拍数と 比例する。 戦いになると 一気に ボルテージが 上がるのだ。",
		'zh-tw': "發電量與心跳數成正比。當牠面臨戰鬥的時候， 電壓就會急速飆升。",
		th: "ปริมาณไฟฟ้าที่ผลิตนั้นแปรผันตามอัตราการเต้นของหัวใจ เมื่อเข้าสู่การต่อสู้ แรงดันไฟฟ้าจะพุ่งสูงขึ้นในหนึ่งอึดใจ",
	},

	stage: "Stage1",

	attacks: [
		{
			name: {
				ja: "ばくえんボルト",
				'zh-tw': "爆焰伏特",
				th: "ระเบิดไฟสายฟ้า",
			},
			damage: "30+",
			cost: ["Lightning"],
			effect: {
				ja: "自分のベンチの「ブーバーン」にダメカンがのっているなら、90ダメージ追加。",
				'zh-tw': "若自己的備戰區的「鴨嘴炎獸」身上放置有傷害指示物，則增加90點傷害。",
				th: "ถ้า [บูเบิร์น] บนเบนช์ฝ่ายเรามีตัวนับแดเมจวางอยู่ การโจมตีนี้จะเพิ่มแดเมจอีก 90",
			},
		},
		{
			name: {
				ja: "こうあつでんりゅう",
				'zh-tw': "高壓電流",
				th: "กระแสไฟแรงดันสูง",
			},
			cost: ["Lightning", "Lightning", "Colorless"],
			effect: {
				ja: "相手のポケモン全員に、それぞれ50ダメージ。［ベンチは弱点・抵抗力を計算しない。］",
				'zh-tw': "對手的所有寶可夢各受到50點傷害。[在備戰區不計算弱點・抵抗力。]",
				th: "โปเกมอนฝ่ายตรงข้ามทุกตัว จะได้รับแดเมจตัวละ 50 [โปเกมอนบนเบนช์จะไม่นำจุดอ่อนและความต้านทานมาคิด]",
			},
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 687515,
				tcgplayer: 571573,
			},
		},
		{
			type: "reverse",
			thirdParty: {
				tcgplayer: 577452,
			},
		},
	],

	evolveFrom: {
		ja: "エレブー",
	},

	retreat: 3,
	regulationMark: "F",
	rarity: "None",
	dexId: [466],
};

export default card;
