import { Card } from "models/database/card";
import Set from "../S-P";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "シビビール",
	},

	illustrator: "NC Empire",
	category: "Pokemon",
	hp: 80,
	types: ["Lightning"],

	description: {
		'ja-jp': "食欲 旺盛な ポケモン。 獲物を 見つけると 襲いかかり 電気で しびれさせてから 食べる。",
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: { ja: "でたとこショック" },
			effect: {
				'ja-jp': "自分の番に、このカードを手札から出して進化させたとき、1回使える。コインを1回投げオモテなら、相手のバトルポケモンをマヒにする。",
			},
		},
	],

	attacks: [
		{
			name: { ja: "バチバチ" },
			damage: 30,
			cost: ["Lightning"],
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 666786,
				tcgplayer: 597470,
			},
		},
	],

	evolveFrom: {
		'ja-jp': "シビシラス",
	},

	retreat: 2,
	regulationMark: "F",
	rarity: "Promo",
	dexId: [603],
};

export default card;
