import { Card } from "../../../interfaces";
import Set from "../S12a";

const card: Card = {
	set: Set,
	name: {
		ja: "エレキブル",
		'zh-tw': "電擊魔獸",
	},

	illustrator: "Mina Nakai",
	category: "Pokemon",
	hp: 140,
	types: ["Lightning"],

	description: {
		ja: "発電量は 心拍数と 比例する。 戦いになると 一気に ボルテージが 上がるのだ。",
		'zh-tw': "發電量與心跳數成正比。當牠面臨戰鬥的時候，電壓就會急速飆升。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: {
				ja: "ばくえんボルト",
				'zh-tw': "爆焰伏特",
			},
			damage: "30+",
			cost: ["Lightning"],
			effect: {
				ja: "自分のベンチの「ブーバーン」にダメカンがのっているなら、90ダメージ追加。",
				'zh-tw': "若自己的備戰區的「鴨嘴炎獸」身上放置有傷害指示物，則增加90點傷害。",
			},
		},
		{
			name: {
				ja: "こうあつでんりゅう",
				'zh-tw': "高壓電流",
			},
			cost: ["Lightning", "Lightning", "Colorless"],
			effect: {
				ja: "相手のポケモン全員に、それぞれ50ダメージ。［ベンチは弱点・抵抗力を計算しない。］",
				'zh-tw': "對手的所有寶可夢各受到50點傷害。[在備戰區不計算弱點・抵抗力。]",
			},
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 687742,
				tcgplayer: 571718,
			},
		},
	],

	evolveFrom: {
		ja: "エレブー",
	},

	retreat: 3,
	regulationMark: "F",
	rarity: "Illustration rare",
	dexId: [466],
};

export default card;
