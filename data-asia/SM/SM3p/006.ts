import { Card } from "../../../interfaces";
import Set from "../SM3p";

const card: Card = {
	set: Set,
	name: {
		ja: "キノガッサ",
	},

	illustrator: "Mizue",
	category: "Pokemon",
	hp: 110,
	types: ["Grass"],

	description: {
		ja: "短い 腕は パンチを 出すとき グーンと 伸びる。 プロボクサー 顔負けの テクニックを 持つ。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "じゅくすいほうし" },
			cost: ["Grass"],
			effect: {
				ja: "相手のバトルポケモンをねむりにする。このねむりで投げるコインは2回になり、すべてオモテが出ないと回復しない。",
			},
		},
		{
			name: { ja: "マグナムパンチ" },
			damage: 80,
			cost: ["Colorless", "Colorless", "Colorless"],
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 560164,
			},
		},
	],

	evolveFrom: {
		ja: "キノココ",
	},

	retreat: 2,
	rarity: "Uncommon",
	dexId: [286],
};

export default card;
