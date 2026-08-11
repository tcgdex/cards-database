import { Card } from "../../../interfaces";
import Set from "../MC";

const card: Card = {
	set: Set,
	name: {
		ja: "タンドン",
	},

	illustrator: "Aya Kusube",
	category: "Pokemon",
	hp: 80,
	types: ["Fighting"],

	description: {
		ja: "晴れた 日は 草原に 出てきて 走りまわり 車輪のような 脚に 巻きこんだ 草を 食べる。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "ころがりタックル" },
			damage: 10,
			cost: ["Fighting"],
		},
		{
			name: { ja: "パワージェム" },
			damage: 30,
			cost: ["Fighting", "Colorless"],
		},
	],

	weaknesses: [{ type: "Grass", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 863711,
			},
		},
	],

	retreat: 3,
	regulationMark: "H",
	rarity: "None",
	dexId: [837],
};

export default card;
