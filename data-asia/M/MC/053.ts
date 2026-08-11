import { Card } from "../../../interfaces";
import Set from "../MC";

const card: Card = {
	set: Set,
	name: {
		ja: "ビリジオン",
	},

	illustrator: "Anesaki Dynamic",
	category: "Pokemon",
	hp: 120,
	types: ["Grass"],

	description: {
		ja: "コバルオン テラキオンと ともに イッシュ地方の ポケモンたちを 守り続けた 伝説が 残る。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "リーフドレイン" },
			damage: 30,
			cost: ["Grass", "Colorless"],
			effect: {
				ja: "このポケモンのHPを「30」回復する。",
			},
		},
		{
			name: { ja: "スライスブレード" },
			damage: 100,
			cost: ["Grass", "Colorless", "Colorless"],
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 863344,
			},
		},
	],

	retreat: 1,
	regulationMark: "H",
	rarity: "None",
	dexId: [640],
};

export default card;
