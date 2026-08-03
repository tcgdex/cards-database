import { Card } from "../../../interfaces";
import Set from "../S6H";

const card: Card = {
	set: Set,
	name: {
		ja: "はくばバドレックスV",
		'zh-tw': "白馬蕾冠王V",
	},

	illustrator: "D.A.G Inc.",
	category: "Pokemon",
	hp: 210,
	types: ["Water"],

	stage: "Basic",

	attacks: [
		{
			name: {
				ja: "つきさす",
				'zh-tw': "迴轉攻擊",
			},
			damage: 40,
			cost: ["Water"],
		},
		{
			name: { ja: "ブリザードランス" },
			damage: 200,
			cost: ["Water", "Water", "Colorless"],
			effect: {
				ja: "このポケモンについているエネルギーを2個選び、トラッシュする。",
			},
		},
	],

	weaknesses: [{ type: "Metal", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 560443,
				tcgplayer: 569159,
			},
		},
	],

	retreat: 2,
	regulationMark: "E",
	rarity: "Double rare",
	dexId: [898],
};

export default card;
