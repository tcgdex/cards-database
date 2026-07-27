import { Card } from "../../../interfaces";
import Set from "../SM3N";

const card: Card = {
	set: Set,
	name: {
		ja: "ネマシュ",
	},

	illustrator: "Hitoshi Ariga",
	category: "Pokemon",
	hp: 60,
	types: ["Fairy"],

	description: {
		ja: "点滅しながら 発光する 胞子を あたりに ばら撒く。 その光を 見た者は 深い眠りに おちる。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "ぶつかる" },
			damage: 10,
			cost: ["Colorless"],
		},
	],

	weaknesses: [{ type: "Metal", value: "x2" }],
	resistances: [{ type: "Darkness", value: "-20" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 561039,
			},
		},
	],

	retreat: 1,
	rarity: "Common",
	dexId: [755],
};

export default card;
