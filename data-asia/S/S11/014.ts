import { Card } from "../../../interfaces";
import Set from "../S11";

const card: Card = {
	set: Set,
	name: {
		ja: "キュウコン",
		'zh-tw': "九尾",
	},

	illustrator: "Shiburingaru",
	category: "Pokemon",
	hp: 110,
	types: ["Fire"],

	description: {
		ja: "しっぽの １本 １本に 神通力が 込められている。 １０００年 生きると 言われる。",
		'zh-tw': "每一根尾巴裡都蘊含著神通力。據說牠的壽命 長達１０００年。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: {
				ja: "みつめる",
				'zh-tw': "目不轉睛",
			},
			cost: ["Colorless"],
			effect: {
				ja: "相手のバトルポケモンをねむりにする。",
				'zh-tw': "將對手的戰鬥寶可夢【睡眠】。",
			},
		},
		{
			name: {
				ja: "しゃくねつのいぶき",
				'zh-tw': "灼熱氣息",
			},
			damage: 120,
			cost: ["Fire", "Colorless"],
			effect: {
				ja: "次の自分の番、このポケモンはワザが使えない。",
				'zh-tw': "在下個自己的回合，這隻寶可夢無法使用招式。",
			},
		},
	],

	weaknesses: [{ type: "Water", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 667617,
				tcgplayer: 569945,
			},
		},
	],

	evolveFrom: {
		ja: "ロコン",
	},

	retreat: 1,
	regulationMark: "F",
	rarity: "Common",
	dexId: [38],
};

export default card;
