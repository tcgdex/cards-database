import { Card } from "../../../interfaces";
import Set from "../S11";

const card: Card = {
	set: Set,
	name: {
		ja: "モルフォン",
		'zh-tw': "摩魯蛾",
	},

	illustrator: "Kagemaru Himeno",
	category: "Pokemon",
	hp: 90,
	types: ["Grass"],

	description: {
		ja: "羽に りんぷんが ついていて ヒラヒラと 羽ばたくたびに 猛毒の 粉を ばらまく。",
		'zh-tw': "翅膀上附著鱗粉，每次翩翩拍動翅膀， 就會散播劇毒的粉末。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: {
				ja: "ミラクルパウダー",
				'zh-tw': "奇跡粉",
			},
			damage: 30,
			cost: ["Grass"],
			effect: {
				ja: "コインを1回投げオモテなら、特殊状態の中から1つを選び、相手のバトルポケモンをその状態にする。",
				'zh-tw': "擲1次硬幣若為正面，則從特殊狀態中選擇1種，將對手的戰鬥寶可夢處於那個狀態。",
			},
		},
		{
			name: {
				ja: "かぜおこし",
				'zh-tw': "起風",
			},
			damage: 70,
			cost: ["Grass", "Colorless"],
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 667565,
				tcgplayer: 569933,
			},
		},
	],

	evolveFrom: {
		ja: "コンパン",
	},

	retreat: 0,
	regulationMark: "F",
	rarity: "Uncommon",
	dexId: [49],
};

export default card;
