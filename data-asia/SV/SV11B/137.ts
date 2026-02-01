import { Card } from "../../../interfaces";
import Set from "../SV11B";

const card: Card = {
	set: Set,
	name: {
		ja: "ランドロス",
	},

	illustrator: "SIE NANAHARA",
	category: "Pokemon",
	hp: 130,
	types: ["Fighting"],

	description: {
		ja: "ランドロスが 訪れる 土地は 作物が たくさん 実るため 畑の神様 と 言われている。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "ほうさく" },
			cost: ["Colorless"],
			effect: {
				ja: "自分のトラッシュから「基本エネルギー」を1枚選び、このポケモンにつける。",
			},
		},
		{
			name: { ja: "じしん" },
			damage: 110,
			cost: ["Fighting", "Colorless", "Colorless"],
			effect: {
				ja: "自分のベンチポケモン全員にも、それぞれ10ダメージ。［ベンチは弱点・抵抗力を計算しない。］",
			},
		},
	],

	weaknesses: [{ type: "Grass", value: "x2" }],
	resistances: [],

	variants: [{ type: "holo" }],

	retreat: 2,
	regulationMark: "I",
	rarity: "Illustration rare",
	dexId: [645],

	thirdParty: {
		cardmarket: 829383,
		tcgplayer: 636491,
	},
};

export default card;
