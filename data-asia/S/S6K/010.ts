import { Card } from "../../../interfaces";
import Set from "../S6K";

const card: Card = {
	set: Set,
	name: {
		ja: "ゴルダック",
		'zh-tw': "哥達鴨",
	},

	illustrator: "Kyoko Umemoto",
	category: "Pokemon",
	hp: 120,
	types: ["Water"],

	description: {
		ja: "泳ぎの プロフェッショナル。 長い シッポを 巧みに くねらせ 丸々 ２日 泳いでいられる。",
		'zh-tw': "游泳專家。能靈活地擺動長長的尾巴，連續游上整整２天。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: {
				ja: "サイケこうせん",
				'zh-tw': "幻象光線",
			},
			damage: 20,
			cost: ["Colorless"],
			effect: {
				ja: "相手のバトルポケモンをこんらんにする。",
				'zh-tw': "將對手的戰鬥寶可夢【混亂】。",
			},
		},
		{
			name: {
				ja: "なみのり",
				'zh-tw': "衝浪",
			},
			damage: 70,
			cost: ["Water", "Colorless"],
		},
	],

	weaknesses: [{ type: "Lightning", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 560741,
				tcgplayer: 569238,
			},
		},
	],

	evolveFrom: {
		ja: "コダック",
	},

	retreat: 1,
	regulationMark: "E",
	rarity: "Uncommon",
	dexId: [55],
};

export default card;
