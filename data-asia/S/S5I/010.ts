import { Card } from "../../../interfaces";
import Set from "../S5I";

const card: Card = {
	set: Set,
	name: {
		ja: "ポカブ",
		'zh-tw': "暖暖豬",
		th: "โพคาบู",
	},

	illustrator: "You Iribi",
	category: "Pokemon",
	hp: 80,
	types: ["Fire"],

	description: {
		ja: "焼いた 木の実を 食べるのが 大好きだが 興奮しすぎて ときどき 真っ黒焦げに しちゃう。",
		'zh-tw': "最喜歡吃烤過的樹果，但有時候會因為興奮過頭，把樹果烤得焦黑。",
		th: "ชอบกินผลไม้เผา แต่เพราะตื่นเต้นมากเกินไป ทำให้บางครั้งไหม้จนเกรียม",
	},

	stage: "Basic",

	attacks: [
		{
			name: {
				ja: "ぶつかる",
				'zh-tw': "衝撞",
				th: "กระแทก",
			},
			damage: 20,
			cost: ["Colorless", "Colorless"],
		},
		{
			name: {
				ja: "かえん",
				'zh-tw': "烈焰",
				th: "เผาไหม้",
			},
			damage: 50,
			cost: ["Fire", "Fire", "Colorless"],
		},
	],

	weaknesses: [{ type: "Water", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 533272,
				tcgplayer: 568958,
			},
		},
	],

	retreat: 2,
	regulationMark: "E",
	rarity: "Common",
	dexId: [498],
};

export default card;
