import { Card } from "../../../interfaces";
import Set from "../SM8b";

const card: Card = {
	set: Set,
	name: {
		ja: "マーシャドー",
	},

	illustrator: "Emi Ando",
	category: "Pokemon",
	hp: 70,
	types: ["Psychic"],

	description: {
		ja: "影の中に 潜むことが でき 人前に 姿を みせないので その存在は 幻 だった。",
	},

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: { ja: "やぶれかぶれ" },
			effect: {
				ja: "自分の番に、このカードを手札からベンチに出したとき、1回使える。おたがいのプレイヤーは、それぞれ手札をすべて山札にもどして切る。その後、それぞれ山札を4枚引く。",
			},
		},
	],

	attacks: [
		{
			name: { ja: "シャドーパンチ" },
			damage: 30,
			cost: ["Psychic", "Colorless"],
			effect: {
				ja: "このワザのダメージは抵抗力を計算しない。",
			},
		},
	],

	weaknesses: [{ type: "Darkness", value: "x2" }],
	resistances: [{ type: "Fighting", value: "-20" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 550736,
			},
		},
	],

	retreat: 1,
	rarity: "None",
	dexId: [802],
};

export default card;
