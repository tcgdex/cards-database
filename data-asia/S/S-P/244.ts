import { Card } from "../../../interfaces";
import Set from "../S-P";

const card: Card = {
	set: Set,
	name: {
		ja: "ワンパチ",
	},

	illustrator: "sui",
	category: "Pokemon",
	hp: 60,
	types: ["Lightning"],

	description: {
		ja: "おやつに 釣られて 人の 仕事を 手伝う 食いしん坊。 パチパチと 電気を まとって ひた走る。",
	},

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: { ja: "ボールさがし" },
			effect: {
				ja: "自分の番に、このカードを手札からベンチに出したとき、1回使える。自分のトラッシュから「モンスターボール」と「スーパーボール」をそれぞれ1枚まで選び、相手に見せて、手札に加える。",
			},
		},
	],

	attacks: [
		{
			name: { ja: "はねまわる" },
			damage: 20,
			cost: ["Colorless", "Colorless"],
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 585974,
				tcgplayer: 597425,
			},
		},
	],

	retreat: 1,
	regulationMark: "E",
	rarity: "Promo",
	dexId: [835],
};

export default card;
