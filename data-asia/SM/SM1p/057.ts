import { Card } from "../../../interfaces";
import Set from "../SM1p";

const card: Card = {
	set: Set,
	name: {
		ja: "ニンフィアGX",
	},

	illustrator: "5ban Graphics",
	category: "Pokemon",
	hp: 200,
	types: ["Fairy"],

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "マジカルリボン" },
			cost: ["Fairy"],
			effect: {
				ja: "自分の山札にある好きなカードを3枚まで、手札に加える。そして山札を切る。",
			},
		},
		{
			name: { ja: "ようせいのかぜ" },
			damage: 110,
			cost: ["Fairy", "Colorless", "Colorless"],
		},
		{
			name: { ja: "プリエールGX" },
			cost: ["Fairy", "Colorless", "Colorless"],
			effect: {
				ja: "相手のベンチポケモン2匹と、そのポケモンについているすべてのカードを、相手の手札にもどす。［対戦中、自分はGXワザを1回しか使えない。］",
			},
		},
	],

	weaknesses: [{ type: "Metal", value: "x2" }],
	resistances: [{ type: "Darkness", value: "-20" }],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 561585,
			},
		},
	],

	evolveFrom: {
		ja: "イーブイ",
	},

	retreat: 2,
	rarity: "Ultra Rare",
	dexId: [700],

	suffix: "GX",
};

export default card;
