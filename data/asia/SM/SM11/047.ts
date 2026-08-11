import { Card } from "../../../interfaces";
import Set from "../SM11";

const card: Card = {
	set: Set,
	name: {
		ja: "キノガッサ",
	},

	illustrator: "Atsuko Nishida",
	category: "Pokemon",
	hp: 120,
	types: ["Fighting"],

	description: {
		ja: "短い 腕は パンチを 出すとき グーンと 伸びる。 プロボクサー 顔負けの テクニックを 持つ。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "キノコのほうし" },
			cost: ["Grass"],
			effect: {
				ja: "相手のバトルポケモンをねむりにする。",
			},
		},
		{
			name: { ja: "ねこみをおそう" },
			damage: "30+",
			cost: ["Grass"],
			effect: {
				ja: "相手のバトルポケモンがねむりなら、90ダメージ追加。",
			},
		},
	],

	weaknesses: [{ type: "Psychic", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 557009,
			},
		},
	],

	evolveFrom: {
		ja: "キノココ",
	},

	retreat: 2,
	regulationMark: "C",
	rarity: "Uncommon",
	dexId: [286],
};

export default card;
