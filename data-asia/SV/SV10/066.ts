import { Card } from "../../../interfaces";
import Set from "../SV10";

const card: Card = {
	set: Set,
	name: {
		ja: "ロケット団のクロバットex",
		'zh-tw': "<火箭隊的>叉字蝠ex",
		'zh-cn': "<火箭隊的>叉字蝠ex",
	},

	illustrator: "5ban Graphics",
	category: "Pokemon",
	hp: 310,
	types: ["Darkness"],

	stage: "Stage2",

	abilities: [
		{
			type: "Ability",
			name: {
				ja: "かみつきまわる",
				'zh-tw': "亂咬",
				'zh-cn': "亂咬",
			},
			effect: {
				ja: "自分の番に、このカードを手札から出して進化させたとき、1回使える。相手のポケモン2匹に、それぞれダメカンを2個のせる。",
				'zh-tw': "在自己的回合，從手牌使出這張卡並完成進化時，可使用1次。在對手的2隻寶可夢身上各放置2個傷害指示物。",
				'zh-cn': "在自己的回合，從手牌使出這張卡並完成進化時，可使用1次。在對手的2隻寶可夢身上各放置2個傷害指示物。",
			},
		},
	],

	attacks: [
		{
			name: {
				ja: "アサシンリターン",
				'zh-tw': "刺殺迴旋",
				'zh-cn': "刺殺迴旋",
			},
			damage: 120,
			cost: ["Darkness", "Darkness"],
			effect: {
				ja: "のぞむなら、このポケモンを手札にもどす。（ポケモン以外のカードは、すべてトラッシュする。）",
				'zh-tw': "若希望，將這隻寶可夢放回手牌。（寶可夢以外的卡全部丟棄。）",
				'zh-cn': "若希望，將這隻寶可夢放回手牌。（寶可夢以外的卡全部丟棄。）",
			},
		},
	],

	weaknesses: [{ type: "Lightning", value: "x2" }],
	resistances: [{ type: "Fighting", value: "-30" }],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 821898,
				tcgplayer: 628707,
			},
		},
	],

	evolveFrom: {
		ja: "ロケット団のゴルバット",
	},

	retreat: 1,
	regulationMark: "I",
	rarity: "Double rare",
	dexId: [169],

	suffix: "EX",
};

export default card;
