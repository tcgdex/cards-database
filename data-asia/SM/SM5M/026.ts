import { Card } from "../../../interfaces";
import Set from "../SM5M";

const card: Card = {
	set: Set,
	name: {
		ja: "スコルピ",
	},

	illustrator: "Misa Tsutsui",
	category: "Pokemon",
	hp: 80,
	types: ["Psychic"],

	description: {
		ja: "砂の 中に 隠れて 獲物を 待ち伏せする。 尻尾の ツメから 毒を 出して 獲物を しとめる。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "つめとぎ" },
			cost: ["Psychic"],
			effect: {
				ja: "次の自分の番、このポケモンの「つきさす」のダメージは「90」になる。",
			},
		},
		{
			name: { ja: "つきさす" },
			damage: 30,
			cost: ["Psychic", "Psychic"],
		},
	],

	weaknesses: [{ type: "Psychic", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 559839,
			},
		},
	],

	retreat: 2,
	rarity: "Common",
	dexId: [451],
};

export default card;
