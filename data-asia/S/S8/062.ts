import { Card } from "../../../interfaces";
import Set from "../S8";

const card: Card = {
	set: Set,
	name: {
		ja: "ヤブクロン",
		'zh-tw': "破破袋",
	},

	illustrator: "Shibuzoh.",
	category: "Pokemon",
	hp: 70,
	types: ["Darkness"],

	description: {
		ja: "ゴミの 詰まった ゴミ袋から 生まれた。 吐き出す 毒ガスは ガラルの マタドガスの 好物。",
		'zh-tw': "誕生自塞滿垃圾的垃圾袋裡。牠嘴裡噴出的毒氣是伽勒爾雙彈瓦斯的最愛。",
	},

	stage: "Basic",

	attacks: [
		{
			name: {
				ja: "なかまをよぶ",
				'zh-tw': "呼朋引伴",
			},
			cost: ["Darkness"],
			effect: {
				ja: "自分の山札からたねポケモンを1枚選び、ベンチに出す。そして山札を切る。",
				'zh-tw': "從自己的牌庫選擇1張【基礎】寶可夢卡，放置於備戰區。並且重洗牌庫。",
			},
		},
		{
			name: {
				ja: "どくのいき",
				'zh-tw': "毒之氣息",
			},
			damage: 20,
			cost: ["Darkness", "Colorless"],
			effect: {
				ja: "相手のバトルポケモンをどくにする。",
				'zh-tw': "將對手的戰鬥寶可夢【中毒】。",
			},
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 575617,
				tcgplayer: 569563,
			},
		},
	],

	retreat: 2,
	regulationMark: "E",
	rarity: "Common",
	dexId: [568],
};

export default card;
