import { Card } from "../../../interfaces";
import Set from "../SM10a";

const card: Card = {
	set: Set,
	name: {
		ja: "アローラガラガラ",
	},

	illustrator: "Masakazu Fukuda",
	category: "Pokemon",
	hp: 120,
	types: ["Psychic"],

	description: {
		ja: "緑 豊かな アローラ地方は ガラガラに とって 過酷な 土地。 生きのびるため 炎を 操る。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "みたまくずし" },
			cost: [],
			effect: {
				ja: "相手の山札を上から1枚トラッシュする。トラッシュしたカードがポケモンなら、相手のバトルポケモンに、そのポケモンのHPぶんのダメージを与える。",
			},
		},
		{
			name: { ja: "ホネなぐり" },
			damage: 60,
			cost: ["Psychic", "Colorless"],
		},
	],

	weaknesses: [{ type: "Darkness", value: "x2" }],
	resistances: [{ type: "Fighting", value: "-20" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 557292,
			},
		},
	],

	evolveFrom: {
		ja: "カラカラ",
	},

	retreat: 2,
	regulationMark: "C",
	rarity: "Uncommon",
	dexId: [105],
};

export default card;
