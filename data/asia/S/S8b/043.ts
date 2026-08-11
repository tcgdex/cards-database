import { Card } from "../../../interfaces";
import Set from "../S8b";

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
				'zh-tw': "突刺",
			},
			damage: 40,
			cost: ["Water"],
		},
		{
			name: {
				ja: "ブリザードランス",
				'zh-tw': "雪矛",
			},
			damage: 200,
			cost: ["Water", "Water", "Colorless"],
			effect: {
				ja: "このポケモンについているエネルギーを2個選び、トラッシュする。",
				'zh-tw': "選擇2個這隻寶可夢身上附加的能量，將其丟棄。",
			},
		},
	],

	weaknesses: [{ type: "Metal", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 586559,
				tcgplayer: 571296,
			},
		},
	],

	retreat: 2,
	regulationMark: "E",
	rarity: "Double rare",
	dexId: [898],
};

export default card;
