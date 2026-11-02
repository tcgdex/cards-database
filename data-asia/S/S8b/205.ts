import { Card } from "../../../interfaces";
import Set from "../S8b";

const card: Card = {
	set: Set,
	name: {
		ja: "アリアドス",
	},

	illustrator: "Shiburingaru",
	category: "Pokemon",
	hp: 110,
	types: ["Darkness"],

	description: {
		ja: "糸を はいて 獲物を 捕らえる。 夜に なると 巣から 離れて 積極的に 狩りを するぞ。",
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: { ja: "スパイダーネット" },
			effect: {
				ja: "自分の番に、このカードを手札から出して進化させたとき、1回使える。相手のベンチの進化ポケモンを1匹選び、バトルポケモンと入れ替える。",
			},
		},
	],

	attacks: [
		{
			name: { ja: "どくばり" },
			damage: 30,
			cost: ["Darkness", "Colorless"],
			effect: {
				ja: "相手のバトルポケモンをどくにする。",
			},
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 586943,
				tcgplayer: 571457,
			},
		},
	],

	evolveFrom: {
		ja: "イトマル",
	},

	retreat: 2,
	regulationMark: "D",
	rarity: "Character Rare",
	dexId: [168],
};

export default card;
