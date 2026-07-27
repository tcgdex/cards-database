import { Card } from "../../../interfaces";
import Set from "../S-P";

const card: Card = {
	set: Set,
	name: {
		ja: "ドガース",
		'zh-tw': "千面避役VMAX",
	},

	illustrator: "miki kudo",
	category: "Pokemon",
	hp: 70,
	types: ["Darkness"],

	description: {
		ja: "汚い 空気が ごちそう。 むかしの ガラル地方には いまより たくさんの ドガースが いたという。",
	},

	stage: "Basic",

	attacks: [
		{
			name: {
				ja: "スモッグ",
				'zh-tw': "超極巨漩澴盤渦",
			},
			damage: 20,
			cost: ["Darkness", "Colorless"],
			effect: {
				ja: "相手のバトルポケモンをどくにする。",
				'zh-tw': "若希望，選擇1個這隻寶可夢身上附加的能量，放回手牌。這個情況下，增加70點傷害。",
			},
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 570875,
				tcgplayer: 597378,
			},
		},
	],

	retreat: 1,
	regulationMark: "E",
	rarity: "Promo",
	dexId: [109],
};

export default card;
