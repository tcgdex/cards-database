import { Card } from "../../../interfaces";
import Set from "../S-P";

const card: Card = {
	set: Set,
	name: {
		ja: "トゲチック",
	},

	illustrator: "Narumi Sato",
	category: "Pokemon",
	hp: 80,
	types: ["Psychic"],

	description: {
		ja: "心優しい 人の 前に 幸せを もたらすため 姿を 現すと 言われている。",
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: { ja: "しあわせボイス" },
			effect: {
				ja: "自分の番に、このカードを手札から出して進化させたとき、1回使える。自分のバトルポケモンのHPを「30」回復する。",
			},
		},
	],

	attacks: [
		{
			name: { ja: "ようせいのかぜ" },
			damage: 30,
			cost: ["Psychic", "Colorless"],
		},
	],

	weaknesses: [{ type: "Metal", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 650952,
				tcgplayer: 597453,
			},
		},
	],

	evolveFrom: {
		ja: "トゲピー",
	},

	retreat: 1,
	rarity: "Promo",
	dexId: [176],
};

export default card;
