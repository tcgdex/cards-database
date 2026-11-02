import { Card } from "../../../interfaces";
import Set from "../SM3H";

const card: Card = {
	set: Set,
	name: {
		ja: "ヨルノズク",
	},

	illustrator: "Sekio",
	category: "Pokemon",
	hp: 90,
	types: ["Colorless"],

	description: {
		ja: "両目は 特殊な つくり。 わずかな 光を 集めては 暗闇でも まわりを 見分ける。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "さいみんはどう" },
			damage: 30,
			cost: ["Colorless"],
			effect: {
				ja: "相手のバトルポケモンをねむりにする。",
			},
		},
		{
			name: { ja: "やしゅう" },
			damage: 70,
			cost: ["Colorless", "Colorless", "Colorless"],
			effect: {
				ja: "相手の手札を見て、その中にあるポケモンを、1枚トラッシュする。",
			},
		},
	],

	weaknesses: [{ type: "Lightning", value: "x2" }],
	resistances: [{ type: "Fighting", value: "-20" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 561108,
			},
		},
	],

	evolveFrom: {
		ja: "ホーホー",
	},

	retreat: 1,
	rarity: "Uncommon",
	dexId: [164],
};

export default card;
