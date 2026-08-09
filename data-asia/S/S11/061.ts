import { Card } from "../../../interfaces";
import Set from "../S11";

const card: Card = {
	set: Set,
	name: {
		ja: "ガメノデス",
		'zh-tw': "龜足巨鎧",
	},

	illustrator: "KEIICHIRO ITO",
	category: "Pokemon",
	hp: 130,
	types: ["Fighting"],

	description: {
		ja: "７匹の カメテテが １匹分の 体を つくっている。 頭が 手足に 命令する 仕組み。",
		'zh-tw': "７隻龜腳腳組成了１隻龜足巨鎧的身體。 由頭部對手腳發號施令。",
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: {
				ja: "ロストブロック",
				'zh-tw': "放逐區障礙",
			},
			effect: {
				ja: "このポケモンがいるかぎり、相手がとるサイドは、手札には加えず、ロストゾーンに置く。",
				'zh-tw': "只要這隻寶可夢在場上，對手獲得的獎賞卡不加入手牌，而是放置於放逐區。",
			},
		},
	],

	attacks: [
		{
			name: {
				ja: "ばくれつチョップ",
				'zh-tw': "爆裂劈",
			},
			damage: 100,
			cost: ["Fighting", "Colorless", "Colorless"],
		},
	],

	weaknesses: [{ type: "Grass", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 667936,
				tcgplayer: 569992,
			},
		},
	],

	evolveFrom: {
		ja: "カメテテ",
	},

	retreat: 3,
	regulationMark: "F",
	rarity: "Rare",
	dexId: [689],
};

export default card;
