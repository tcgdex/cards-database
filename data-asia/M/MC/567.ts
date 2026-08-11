import { Card } from "../../../interfaces";
import Set from "../MC";

const card: Card = {
	set: Set,
	name: {
		ja: "カビゴン",
	},

	illustrator: "Souichirou Gunjima",
	category: "Pokemon",
	hp: 160,
	types: ["Colorless"],

	description: {
		ja: "胃袋の 消化液は どんな 毒も 消化できる。 落ちているものを 食べても 平気。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "はらごしらえ" },
			cost: ["Colorless"],
			effect: {
				ja: "自分の手札からエネルギーを1枚選び、このポケモンにつける。その後、このポケモンのHPを「60」回復する。",
			},
		},
		{
			name: { ja: "ヘビーインパクト" },
			damage: 160,
			cost: ["Colorless", "Colorless", "Colorless", "Colorless", "Colorless"],
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 863869,
			},
		},
	],

	retreat: 4,
	regulationMark: "H",
	rarity: "None",
	dexId: [143],
};

export default card;
