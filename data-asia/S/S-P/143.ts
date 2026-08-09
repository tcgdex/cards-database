import { Card } from "../../../interfaces";
import Set from "../S-P";

const card: Card = {
	set: Set,
	name: {
		ja: "リザードン",
		'zh-tw': "袋獸",
	},

	illustrator: "Jiro Sasumo",
	category: "Pokemon",
	hp: 170,
	types: ["Fire"],

	description: {
		ja: "岩石も 焼けるような 灼熱の 炎を 吐いて 山火事を 起こすことが ある。",
		'zh-tw': "袋獸的母愛很深。如果是為了守護自己的孩子，據說連死都毫不畏懼。",
	},

	stage: "Stage2",

	attacks: [
		{
			name: {
				ja: "ブレイブフレイム",
				'zh-tw': "捲土重來",
			},
			damage: 180,
			cost: ["Fire", "Fire", "Fire", "Colorless"],
			effect: {
				ja: "このポケモンについているエネルギーを1個選び、トラッシュする。",
				'zh-tw': "若在上個對手的回合，自己的寶可夢因招式的傷害而【氣絕】了，則增加90點傷害。",
			},
		},
	],

	weaknesses: [{ type: "Water", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 525395,
				tcgplayer: 597342,
			},
		},
	],

	evolveFrom: {
		ja: "リザード",
	},

	retreat: 3,
	regulationMark: "D",
	rarity: "Promo",
	dexId: [6],
};

export default card;
