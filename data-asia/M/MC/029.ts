import { Card } from "../../../interfaces";
import Set from "../MC";

const card: Card = {
	set: Set,
	name: {
		ja: "キノガッサ",
	},

	illustrator: "nisimono",
	category: "Pokemon",
	hp: 120,
	types: ["Grass"],

	description: {
		ja: "毒の 胞子を ばらまき 吸いこんで 苦しむ 相手に 強烈な パンチを くらわせる。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "ダメージラッシュ" },
			damage: "30+",
			cost: ["Colorless", "Colorless"],
			effect: {
				ja: "ウラが出るまでコインを投げ、オモテの数×50ダメージ追加。",
			},
		},
		{
			name: { ja: "メガドレイン" },
			damage: 90,
			cost: ["Grass", "Colorless", "Colorless"],
			effect: {
				ja: "このポケモンのHPを「30」回復する。",
			},
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 863320,
			},
		},
	],

	evolveFrom: {
		ja: "キノココ",
	},

	retreat: 2,
	regulationMark: "I",
	rarity: "None",
	dexId: [286],
};

export default card;
