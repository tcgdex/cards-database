import { Card } from "../../../interfaces";
import Set from "../SM7a";

const card: Card = {
	set: Set,
	name: {
		ja: "マギアナ",
	},

	illustrator: "Masakazu Fukuda",
	category: "Pokemon",
	hp: 90,
	types: ["Metal"],

	description: {
		ja: "機械仕掛けの 身体は ただの 器。 ソウルハートと 呼ばれる 人造の 魂が 本体。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "ちいさなおつかい" },
			cost: ["Colorless"],
			effect: {
				ja: "自分の山札にある基本エネルギーを2枚まで、相手に見せてから、手札に加える。そして山札を切る。",
			},
		},
		{
			name: { ja: "エナジープレス" },
			damage: "30+",
			cost: ["Metal", "Colorless"],
			effect: {
				ja: "相手のバトルポケモンについているエネルギーの数x20ダメージ追加。",
			},
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [{ type: "Psychic", value: "-20" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 558930,
			},
		},
	],

	retreat: 1,
	rarity: "Common",
	dexId: [801],
};

export default card;
