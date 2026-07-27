import { Card } from "../../../interfaces";
import Set from "../S6H";

const card: Card = {
	set: Set,
	name: {
		ja: "エースバーン",
		'zh-tw': "閃焰王牌",
	},

	illustrator: "Ryuta Fuse",
	category: "Pokemon",
	hp: 170,
	types: ["Fire"],

	description: {
		ja: "攻守に 優れ 応援されると さらに 燃えるが スタンドプレイに 走り ピンチを 招くこともある。",
		'zh-tw': "擁有熟練的進攻和防守技巧。只要得到聲援就會更有衝勁，但有時會為了出風頭而弄巧成拙。",
	},

	stage: "Stage2",

	abilities: [
		{
			type: "Ability",
			name: { ja: "かじばのパワー" },
			effect: {
				ja: "このポケモンが使うワザの、相手のバトルポケモンへのダメージは、相手がすでにとったサイド1枚につき「+30」される。",
			},
		},
	],

	attacks: [
		{
			name: {
				ja: "ひのたまシュート",
				'zh-tw': "濁霧",
			},
			damage: 150,
			cost: ["Fire", "Colorless"],
			effect: {
				ja: "次の自分の番、このポケモンはワザが使えない。",
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
		ja: "ラビフット",
	},

	retreat: 1,
	regulationMark: "E",
	rarity: "Rare",
	dexId: [815],
};

export default card;
