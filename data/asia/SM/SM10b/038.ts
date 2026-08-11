import { Card } from "../../../interfaces";
import Set from "../SM10b";

const card: Card = {
	set: Set,
	name: {
		ja: "ホーホー",
	},

	illustrator: "Misa Tsutsui",
	category: "Pokemon",
	hp: 60,
	types: ["Colorless"],

	description: {
		ja: "毎日 必ず 決まったリズムで 首を かしげる。 昔の人は 時計の 代わりに 飼っていた。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "エアスラッシュ" },
			damage: 30,
			cost: ["Colorless", "Colorless"],
			effect: {
				ja: "このポケモンについているエネルギーを、1個トラッシュする。",
			},
		},
	],

	weaknesses: [{ type: "Lightning", value: "x2" }],
	resistances: [{ type: "Fighting", value: "-20" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 557239,
			},
		},
	],

	retreat: 1,
	regulationMark: "C",
	rarity: "Common",
	dexId: [163],
};

export default card;
