import { Card } from "../../../interfaces";
import Set from "../SV11W";

const card: Card = {
	set: Set,

	name: {
		ja: "アーケオス",
	},

	illustrator: "Haru Akasaka",
	category: "Pokemon",
	hp: 140,
	types: ["Fighting"],

	description: {
		ja: "地上で 助走を つけてから 飛び立つ。 仲間と 協力して 獲物を しとめる 知能を 持つ。",
	},

	stage: "Stage2",

	abilities: [
		{
			type: "Ability",
			name: { ja: "げんしのつばさ" },
			effect: {
				ja: "このポケモンがバトル場にいるなら、自分の番に1回使える。相手の進化しているポケモンを1匹選び、「進化カード」を1枚はがして退化させる。はがしたカードは、相手の手札にもどす。",
			},
		},
	],

	attacks: [
		{
			name: { ja: "いわおとし" },
			damage: 100,
			cost: ["Fighting", "Colorless"],
		},
	],

	weaknesses: [{ type: "Grass", value: "x2" }],

	variants: {
		normal: false,
		reverse: true,
		holo: true,
		firstEdition: false,
	},

	evolveFrom: {
		ja: "アーケン",
	},

	retreat: 1,
	regulationMark: "I",
	rarity: "Rare",
	dexId: [567],
};

export default card;
