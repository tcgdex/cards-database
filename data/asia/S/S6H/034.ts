import { Card } from "../../../interfaces";
import Set from "../S6H";

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
			name: { ja: "ミラージュステップ" },
			cost: ["Psychic"],
			effect: {
				ja: "自分の山札から「キルリア」を3枚まで選び、ベンチに出す。そして山札を切る。",
			},
		},
	],

	weaknesses: [{ type: "Metal", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 560450,
				tcgplayer: 569166,
			},
		},
	],

	evolveFrom: {
		ja: "ラルトス",
	},

	retreat: 1,
	regulationMark: "E",
	rarity: "Uncommon",
	dexId: [281],
};

export default card;
