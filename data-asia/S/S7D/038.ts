import { Card } from "../../../interfaces";
import Set from "../S7D";

const card: Card = {
	set: Set,
	name: {
		ja: "ゾウドウ",
		'zh-tw': "銅象",
	},

	illustrator: "Oswaldo KATO",
	category: "Pokemon",
	hp: 100,
	types: ["Metal"],

	description: {
		ja: "力仕事なら お任せ。 銅の 体は 雨で 錆び 鮮やかな 緑に 変わる。",
		'zh-tw': "擅長需要力氣的工作。銅質的身體會因雨水而生鏽，轉變成鮮豔的綠色。",
	},

	stage: "Basic",

	attacks: [
		{
			name: {
				ja: "ころがる",
				'zh-tw': "滾動",
			},
			damage: 10,
			cost: ["Colorless"],
		},
		{
			name: {
				ja: "10まんばりき",
				'zh-tw': "十萬馬力",
			},
			damage: 80,
			cost: ["Metal", "Colorless", "Colorless"],
			effect: {
				ja: "このポケモンにも20ダメージ。",
				'zh-tw': "這隻寶可夢也受到20點傷害。",
			},
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [{ type: "Grass", value: "-30" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 571621,
				tcgplayer: 569361,
			},
		},
	],

	retreat: 3,
	regulationMark: "E",
	rarity: "Common",
	dexId: [878],
};

export default card;
