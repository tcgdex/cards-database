import { Card } from "../../../interfaces";
import Set from "../S10P";

const card: Card = {
	set: Set,
	name: {
		ja: "レジアイス",
		'zh-tw': "雷吉艾斯",
	},

	illustrator: "aoki",
	category: "Pokemon",
	hp: 130,
	types: ["Water"],

	description: {
		ja: "マイナス２００度まで 冷えこむ 冷気を 操り 近づいたものを あっという間に 氷漬けにする。",
		'zh-tw': "能操控降至零下２００度的寒氣，將靠近牠的東西 都在一瞬間就冰封起來。",
	},

	stage: "Basic",

	attacks: [
		{
			name: {
				ja: "レジゲート",
				'zh-tw': "雷吉之門",
			},
			cost: ["Colorless"],
			effect: {
				ja: "自分の山札からたねポケモンを1枚選び、ベンチに出す。そして山札を切る。",
				'zh-tw': "從自己的牌庫選擇1張【基礎】寶可夢卡，放置於備戰區。並且重洗牌庫。",
			},
		},
		{
			name: {
				ja: "ブリザードバインド",
				'zh-tw': "暴雪制約",
			},
			damage: 100,
			cost: ["Water", "Water", "Colorless"],
			effect: {
				ja: "次の相手の番、このワザを受けた「ポケモンV」は、ワザが使えない。",
				'zh-tw': "在下個對手的回合，受到這個招式的「寶可夢【V】」，無法使用招式。",
			},
		},
	],

	weaknesses: [{ type: "Metal", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 651078,
				tcgplayer: 569862,
			},
		},
	],

	retreat: 3,
	regulationMark: "F",
	rarity: "Uncommon",
	dexId: [378],
};

export default card;
