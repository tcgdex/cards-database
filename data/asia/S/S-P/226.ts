import { Card } from "../../../interfaces";
import Set from "../S-P";

const card: Card = {
	set: Set,
	name: {
		ja: "ウッウ",
		'zh-tw': "化石翼龍",
	},

	illustrator: "Mitsuhiro Arita",
	category: "Pokemon",
	hp: 90,
	types: ["Water"],

	description: {
		ja: "食いしん坊で エサの サシカマスを 丸飲みするが たまに 間違えて ほかの ポケモンに 食らいつく。",
		'zh-tw': "古代的凶猛寶可夢。據說即使是當今的科學， 也無法將牠完美地復原。",
	},

	stage: "Basic",

	attacks: [
		{
			name: {
				ja: "さんれんづき",
				'zh-tw': "直擊彈",
			},
			damage: "60×",
			cost: ["Water", "Water", "Water"],
			effect: {
				ja: "コインを3回投げ、オモテの数×60ダメージ。",
				'zh-tw': "對手的1隻寶可夢受到50點傷害。[在備戰區不計算弱點・抵抗力。]",
			},
		},
	],

	weaknesses: [{ type: "Lightning", value: "x2" }],
	resistances: [{ type: "Fighting", value: "-30" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 573771,
				tcgplayer: 597409,
			},
		},
	],

	retreat: 1,
	regulationMark: "E",
	rarity: "Promo",
	dexId: [845],
};

export default card;
