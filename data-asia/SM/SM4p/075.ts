import { Card } from "../../../interfaces";
import Set from "../SM4p";

const card: Card = {
	set: Set,
	name: {
		ja: "ネマシュ",
	},

	illustrator: "Midori Harada",
	category: "Pokemon",
	hp: 60,
	types: ["Fairy"],

	description: {
		ja: "点滅しながら 発光する 胞子を あたりに ばら撒く。 その光を 見た者は 深い眠りに おちる。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "ゆれるほうし" },
			cost: ["Colorless"],
			effect: {
				ja: "相手のバトルポケモンをねむりにする。",
			},
		},
		{
			name: { ja: "ぶつかる" },
			damage: 10,
			cost: ["Fairy"],
		},
	],

	weaknesses: [{ type: "Metal", value: "x2" }],
	resistances: [{ type: "Darkness", value: "-20" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 560108,
			},
		},
	],

	retreat: 1,
	rarity: "None",
	dexId: [755],
};

export default card;
