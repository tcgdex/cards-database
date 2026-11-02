import { Card } from "../../../interfaces";
import Set from "../MF";

const card: Card = {
	set: Set,
	name: {
		ja: "クレセリア",
	},

	illustrator: "KEIICHIRO ITO",
	category: "Pokemon",
	hp: 120,
	types: ["Psychic"],

	description: {
		ja: "飛行するときは ベールのような 羽から 光る 粒子を 出す。 三日月の化身と 呼ばれている。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "オーロラゲイン" },
			damage: 30,
			cost: ["Psychic", "Colorless"],
			effect: {
				ja: "このポケモンのHPを「30」回復する。",
			},
		},
		{
			name: { ja: "ルナブラスト" },
			damage: 100,
			cost: ["Psychic", "Colorless", "Colorless"],
		},
	],

	weaknesses: [{ type: "Darkness", value: "x2" }],
	resistances: [{ type: "Fighting", value: "-30" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 908377,
			},
		},
	],

	retreat: 1,
	regulationMark: "J",
	rarity: "None",
	dexId: [488],
};

export default card;
