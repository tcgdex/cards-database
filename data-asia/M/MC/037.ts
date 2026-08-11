import { Card } from "../../../interfaces";
import Set from "../MC";

const card: Card = {
	set: Set,
	name: {
		ja: "リーフィア",
	},

	illustrator: "Kuroimori",
	category: "Pokemon",
	hp: 120,
	types: ["Grass"],

	description: {
		ja: "若い リーフィアほど ツンとくる 青臭い 匂い。 年老いると 落ち葉のような 匂いになる。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "わかばのめぐみ" },
			cost: ["Colorless"],
			effect: {
				ja: "自分の手札から「基本[G]エネルギー」を1枚選び、ベンチポケモンにつける。その後、つけたポケモンのHPをすべて回復する。",
			},
		},
		{
			name: { ja: "ソーラービーム" },
			damage: 70,
			cost: ["Grass", "Colorless"],
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 863328,
			},
		},
	],

	evolveFrom: {
		ja: "イーブイ",
	},

	retreat: 1,
	regulationMark: "H",
	rarity: "None",
	dexId: [470],
};

export default card;
