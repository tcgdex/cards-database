import { Card } from "../../../interfaces";
import Set from "../SV6a";

const card: Card = {
	set: Set,
	name: {
		ja: "ゾウドウ",
		'zh-tw': "銅象",
	},

	illustrator: "Shinya Mizuno",
	category: "Pokemon",
	hp: 100,
	types: ["Metal"],

	description: {
		ja: "５トンの 荷物を 持ち上げられる。 朝になると 群れで 洞窟へと 向かい エサの 鉱石を 探す。",
		'zh-tw': "能夠舉起重達５噸的貨物。 天一亮就會成群結隊 前往洞窟找礦石來吃。",
	},

	stage: "Basic",

	attacks: [
		{
			name: {
				ja: "たいあたり",
				'zh-tw': "撞擊",
			},
			damage: 30,
			cost: ["Metal", "Colorless"],
		},
		{
			name: {
				ja: "がちんこ",
				'zh-tw': "正面對決",
			},
			damage: 70,
			cost: ["Metal", "Metal", "Colorless"],
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [{ type: "Grass", value: "-30" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 773790,
				tcgplayer: 566292,
			},
		},
	],

	retreat: 3,
	regulationMark: "H",
	rarity: "Common",
	dexId: [878],
};

export default card;
