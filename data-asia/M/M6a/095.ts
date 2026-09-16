import { Card } from "../../../interfaces";
import Set from "../M6a";

const card: Card = {
	set: Set,
	name: {
		ja: "カビゴン",
	},

	illustrator: "Aya Kusube",
	category: "Pokemon",
	hp: 160,
	types: ["Colorless"],

	description: {
		ja: "胃袋の 消化液は どんな 毒も 消化できる。 落ちているものを 食べても 平気。",
	},

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: { ja: "グッドスリープ" },
			effect: {
				ja: "このポケモンがねむりのとき、ポケモンチェックで、このポケモンがねむりから回復しなかったなら、このポケモンのHPを、すべて回復する。",
			},
		},
	],

	attacks: [
		{
			name: { ja: "たおれこむ" },
			damage: 130,
			cost: ["Colorless", "Colorless", "Colorless"],
			effect: {
				ja: "このポケモンをねむりにする。",
			},
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 908273,
			},
		},
	],

	retreat: 4,
	regulationMark: "J",
	rarity: "None",
	dexId: [143],
};

export default card;
