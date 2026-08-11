import { Card } from "models/database/card";
import Set from "../S6H";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "エースバーン",
		'zh-tw': "閃焰王牌",
	},

	illustrator: "Ryuta Fuse",
	category: "Pokemon",
	hp: 170,
	types: ["Fire"],

	description: {
		'ja-jp': "攻守に 優れ 応援されると さらに 燃えるが スタンドプレイに 走り ピンチを 招くこともある。",
		'zh-tw': "擁有熟練的進攻和防守技巧。只要得到聲援就會更有衝勁，但有時會為了出風頭而弄巧成拙。",
	},

	stage: "Stage2",

	abilities: [
		{
			type: "Ability",
			name: { ja: "かじばのパワー" },
			effect: {
				'ja-jp': "このポケモンが使うワザの、相手のバトルポケモンへのダメージは、相手がすでにとったサイド1枚につき「+30」される。",
			},
		},
	],

	attacks: [
		{
			name: {
				'ja-jp': "ひのたまシュート",
				'zh-tw': "濁霧",
			},
			damage: 150,
			cost: ["Fire", "Colorless"],
			effect: {
				'ja-jp': "次の自分の番、このポケモンはワザが使えない。",
				'zh-tw': "將對手的戰鬥寶可夢【中毒】。",
			},
		},
	],

	weaknesses: [{ type: "Water", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 560433,
				tcgplayer: 569149,
			},
		},
	],

	evolveFrom: {
		'ja-jp': "ラビフット",
	},

	retreat: 1,
	regulationMark: "E",
	rarity: "Rare",
	dexId: [815],
};

export default card;
