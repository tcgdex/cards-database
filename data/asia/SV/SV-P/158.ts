import { Card } from "../../../interfaces";
import Set from "../SV-P";

const card: Card = {
	set: Set,
	name: {
		ja: "ズルズキン",
	},

	illustrator: "OKUBO",
	category: "Pokemon",
	hp: 120,
	types: ["Darkness"],

	description: {
		ja: "やる気の なさげな キックは ローブシンの もつ コンクリートも 砕くほどの 破壊力。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "かっぱらう" },
			cost: ["Colorless"],
			effect: {
				ja: "自分のベンチポケモンの数ぶんまで、自分の山札から好きなカードを選び、手札に加える。そして山札を切る。",
			},
		},
		{
			name: { ja: "とびひざげり" },
			damage: 100,
			cost: ["Darkness", "Colorless", "Colorless"],
		},
	],

	weaknesses: [{ type: "Grass", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 766674,
				tcgplayer: 587901,
			},
		},
	],

	evolveFrom: {
		ja: "ズルッグ",
	},

	retreat: 1,
	regulationMark: "H",
	rarity: "Promo",
	dexId: [560],
};

export default card;
