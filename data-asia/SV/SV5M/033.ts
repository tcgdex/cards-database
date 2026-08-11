import { Card } from "../../../interfaces";
import Set from "../SV5M";

const card: Card = {
	set: Set,
	name: {
		ja: "アブリー",
		'zh-tw': "萌虻",
		th: "อบูรี",
	},

	illustrator: "Sekio",
	category: "Pokemon",
	hp: 30,
	types: ["Psychic"],

	description: {
		ja: "花粉や 蜜が 大好物。 ヒメンカの 花粉を 狙って アブリーが 近くを 飛びまわる。",
		'zh-tw': "花粉和花蜜是萌虻的最愛。為了採集幼棉棉的花粉， 萌虻會在牠們附近飛來飛去。",
		th: "ชอบเกสรดอกไม้หรือน้ำผึ้งมาก อบูรีจะบินวนใกล้ ๆ เพื่อเล็งเอาเกสรดอกไม้ของฮิเมงกะ",
	},

	stage: "Basic",

	attacks: [
		{
			name: {
				ja: "プチドレイン",
				'zh-tw': "小吸取",
				th: "สมอลเดรน",
			},
			damage: 10,
			cost: ["Colorless"],
			effect: {
				ja: "このポケモンのHPを「10」回復する。",
				'zh-tw': "將這隻寶可夢恢復「10」HP。",
				th: "ฟื้นฟู HP ของโปเกมอนนี้ [10]",
			},
		},
	],

	weaknesses: [{ type: "Metal", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 752914,
				tcgplayer: 566184,
			},
		},
	],

	retreat: 1,
	regulationMark: "H",
	rarity: "Common",
	dexId: [742],
};

export default card;
