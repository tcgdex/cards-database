import { Card } from "../../../interfaces";
import Set from "../SM5M";

const card: Card = {
	set: Set,
	name: {
		ja: "ギラティナ",
	},

	illustrator: "Masakazu Fukuda",
	category: "Pokemon",
	hp: 160,
	types: ["Psychic"],

	description: {
		ja: "暴れ者 ゆえ 追い出されたが 破れた世界と 言われる 場所で 静かに 元の世界を 見ていた。",
	},

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: { ja: "カオティックスター" },
			effect: {
				ja: "自分の番に、このカードを手札からベンチに出したとき、1回使える。自分の手札にある[超]エネルギーを2枚、このポケモンにつける。",
			},
		},
	],

	attacks: [
		{
			name: { ja: "クライシスダイブ" },
			damage: 160,
			cost: ["Psychic", "Psychic", "Psychic", "Psychic"],
			effect: {
				ja: "このポケモンについているエネルギーを、2個トラッシュする。",
			},
		},
	],

	weaknesses: [{ type: "Darkness", value: "x2" }],
	resistances: [{ type: "Fighting", value: "-20" }],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 559843,
			},
		},
	],

	retreat: 2,
	rarity: "Rare Holo",
	dexId: [487],
};

export default card;
