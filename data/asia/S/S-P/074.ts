import { Card } from "../../../interfaces";
import Set from "../S-P";

const card: Card = {
	set: Set,
	name: {
		ja: "ゾウドウ",
		'zh-tw': "噴火龍GX",
	},

	illustrator: "0313",
	category: "Pokemon",
	hp: 100,
	types: ["Metal"],

	description: {
		ja: "５トンの 荷物を もっても 平気な 力持ち ポケモン。 鼻を 使って 土を 掘る。",
	},

	stage: "Basic",

	attacks: [
		{
			name: {
				ja: "かいりき",
				'zh-tw': "翅膀攻擊",
			},
			damage: 60,
			cost: ["Metal", "Colorless", "Colorless"],
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [{ type: "Grass", value: "-30" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 525100,
				tcgplayer: 597285,
			},
		},
	],

	retreat: 3,
	regulationMark: "D",
	rarity: "Promo",
	dexId: [878],
};

export default card;
