import { Card } from "../../../interfaces";
import Set from "../M4";

const card: Card = {
	set: Set,
	name: {
		ja: "ゲコガシラ",
	},

	illustrator: "Susumu Maeya",
	category: "Pokemon",
	hp: 100,
	types: ["Water"],

	description: {
		ja: "身軽さは だれにも 負けない。 ６００メートルを 超える タワーの 天辺まで １分で 登りきる。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "よびよせのじゅつ" },
			cost: ["Water"],
			effect: {
				ja: "自分の山札からポケモンを3枚まで選び、相手に見せて、手札に加える。そして山札を切る。",
			},
		},
		{
			name: { ja: "アクアエッジ" },
			damage: 50,
			cost: ["Water", "Water"],
		},
	],

	weaknesses: [{ type: "Lightning", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 877316,
			},
		},
	],

	evolveFrom: {
		ja: "ケロマツ",
	},

	retreat: 1,
	regulationMark: "J",
	rarity: "Illustration rare",
	dexId: [657],
};

export default card;
