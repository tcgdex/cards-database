import { Card } from "../../../interfaces";
import Set from "../S-P";

const card: Card = {
	set: Set,
	name: {
		ja: "マニューラ",
	},

	illustrator: "Shin Nagasawa",
	category: "Pokemon",
	hp: 110,
	types: ["Darkness"],

	description: {
		ja: "群れを 成し 獲物を 襲う。 チームプレーで マンムーなどの 大物も たやすく しとめる。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "おいうちクロー" },
			cost: ["Darkness"],
			effect: {
				ja: "相手のベンチポケモン1匹に、そのポケモンにのっているダメカンの数×20ダメージ。［ベンチは弱点・抵抗力を計算しない。］",
			},
		},
		{
			name: { ja: "ツメできりさく" },
			damage: 110,
			cost: ["Darkness", "Darkness", "Colorless"],
		},
	],

	weaknesses: [{ type: "Grass", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 605836,
				tcgplayer: 597434,
			},
		},
	],

	evolveFrom: {
		ja: "ニューラ",
	},

	retreat: 1,
	regulationMark: "F",
	rarity: "Promo",
	dexId: [461],
};

export default card;
