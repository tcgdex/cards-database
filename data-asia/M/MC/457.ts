import { Card } from "../../../interfaces";
import Set from "../MC";

const card: Card = {
	set: Set,
	name: {
		ja: "Nのチョロネコ",
	},

	illustrator: "Keisin",
	category: "Pokemon",
	hp: 70,
	types: ["Darkness"],

	description: {
		ja: "愛くるしい しぐさで 油断させ 寄ってきた 相手を いきなり ツメで ひっかいて 笑っている。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "ちょろまかす" },
			damage: 30,
			cost: ["Darkness", "Colorless"],
			effect: {
				ja: "相手の手札を見て、その中からカードを1枚選び、相手の山札の下にもどす。",
			},
		},
	],

	weaknesses: [{ type: "Grass", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 863759,
			},
		},
	],

	retreat: 1,
	regulationMark: "I",
	rarity: "None",
	dexId: [509],
};

export default card;
