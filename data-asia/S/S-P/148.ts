import { Card } from "../../../interfaces";
import Set from "../S-P";

const card: Card = {
	set: Set,
	name: {
		ja: "ゲノセクト",
		'zh-tw': "高級球",
	},

	illustrator: "kawayoo",
	category: "Pokemon",
	hp: 120,
	types: ["Grass"],

	description: {
		ja: "３億年前に いた ポケモン。 プラズマ団に 改造 され 背中に 砲台を つけられた。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "ちょくげきだん" },
			cost: ["Grass", "Colorless"],
			effect: {
				ja: "相手のポケモン1匹に、50ダメージ。［ベンチは弱点・抵抗力を計算しない。］",
			},
		},
		{
			name: { ja: "テクノバスター" },
			damage: 120,
			cost: ["Grass", "Grass", "Colorless"],
			effect: {
				ja: "次の自分の番、このポケモンはワザが使えない。",
			},
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 525420,
				tcgplayer: 597347,
			},
		},
	],

	retreat: 2,
	regulationMark: "D",
	rarity: "Promo",
	dexId: [649],
};

export default card;
