import { Card } from "../../../interfaces";
import Set from "../M6a";

const card: Card = {
	set: Set,
	name: {
		ja: "ゼルネアス",
	},

	illustrator: "kodama",
	category: "Pokemon",
	hp: 120,
	types: ["Psychic"],

	description: {
		ja: "頭の ツノが 七色に 輝くとき 永遠の 命を 分け与えると いわれている。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "ジオナビゲート" },
			cost: ["Colorless"],
			effect: {
				ja: "自分の山札からスタジアムを2枚まで選び、相手に見せて、手札に加える。そして山札を切る。",
			},
		},
		{
			name: { ja: "オーロラホーン" },
			damage: 100,
			cost: ["Psychic", "Psychic", "Colorless"],
		},
	],

	weaknesses: [{ type: "Metal", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 908241,
			},
		},
	],

	retreat: 2,
	regulationMark: "J",
	rarity: "None",
	dexId: [716],
};

export default card;
