import { Card } from "../../../interfaces";
import Set from "../S8b";

const card: Card = {
	set: Set,
	name: {
		ja: "キルリア",
		'zh-tw': "奇魯莉安",
	},

	illustrator: "0313",
	category: "Pokemon",
	hp: 80,
	types: ["Psychic"],

	description: {
		ja: "サイコパワーを 操り まわりの 空間を ねじ曲げる ことで 未来を 見通す ことが できる。",
		'zh-tw': "能夠操縱精神力量來扭曲周圍的空間，讓自己看見未來。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: {
				ja: "ミラージュステップ",
				'zh-tw': "幻想舞步",
			},
			cost: ["Psychic"],
			effect: {
				ja: "自分の山札から「キルリア」を3枚まで選び、ベンチに出す。そして山札を切る。",
				'zh-tw': "從自己的牌庫選擇最多3張「奇魯莉安」卡，放置於備戰區。並且重洗牌庫。",
			},
		},
	],

	weaknesses: [{ type: "Metal", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 586578,
				tcgplayer: 571315,
			},
		},
		{
			type: "reverse",
			thirdParty: {
				tcgplayer: 578383,
			},
		},
	],

	evolveFrom: {
		ja: "ラルトス",
	},

	retreat: 1,
	regulationMark: "E",
	rarity: "None",
	dexId: [281],
};

export default card;
