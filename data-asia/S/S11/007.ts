import { Card } from "../../../interfaces";
import Set from "../S11";

const card: Card = {
	set: Set,
	name: {
		ja: "ダーテング",
		'zh-tw': "狡猾天狗",
	},

	illustrator: "kawayoo",
	category: "Pokemon",
	hp: 160,
	types: ["Grass"],

	description: {
		ja: "森の 神様と 恐れられていた ポケモン。 相手の 考えを 読み 先回りする 能力を もつ。",
		'zh-tw': "過去被視為森林之神而受到畏懼的寶可夢。有著讀取對手想法並 搶先一步行動的能力。",
	},

	stage: "Stage2",

	attacks: [
		{
			name: {
				ja: "うちわトルネード",
				'zh-tw': "圓扇龍捲風",
			},
			damage: 50,
			cost: ["Grass"],
			effect: {
				ja: "のぞむなら、相手のバトルポケモンをベンチポケモンと入れ替える。［バトル場に出すポケモンは相手が選ぶ。］",
				'zh-tw': "若希望，將對手的戰鬥寶可夢與備戰寶可夢互換。[由對手選擇放置於戰鬥場的寶可夢。]",
			},
		},
		{
			name: {
				ja: "やぶれとっぷう",
				'zh-tw': "毀壞陣風",
			},
			damage: 210,
			cost: ["Grass"],
			effect: {
				ja: "このポケモンと、ついているすべてのカードを、ロストゾーンに置く。",
				'zh-tw': "將這隻寶可夢與附加的卡，全部放置於放逐區。",
			},
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 667610,
				tcgplayer: 569938,
			},
		},
	],

	evolveFrom: {
		ja: "コノハナ",
	},

	retreat: 2,
	regulationMark: "F",
	rarity: "Rare",
	dexId: [275],
};

export default card;
