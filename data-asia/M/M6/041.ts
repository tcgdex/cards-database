import { Card } from "../../../interfaces";
import Set from "../M6";

const card: Card = {
	set: Set,
	name: {
		ja: "ニドラン♀",
	},

	illustrator: "tayu",
	category: "Pokemon",
	hp: 60,
	types: ["Darkness"],

	description: {
		ja: "オスよりも 匂いに 敏感。 ヒゲで 風向きを 確認しながら 風下で エサを 探すのだ。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "ともだちをさがす" },
			cost: ["Colorless"],
			effect: {
				ja: "自分の山札からポケモンを1枚選び、相手に見せて、手札に加える。そして山札を切る。",
			},
		},
		{
			name: { ja: "かじる" },
			damage: 10,
			cost: ["Darkness"],
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 899944,
				tcgplayer: 709194,
			},
		},
	],

	retreat: 1,
	regulationMark: "J",
	rarity: "Common",
	dexId: [29],
};

export default card;
