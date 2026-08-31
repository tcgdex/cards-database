import { Card } from "../../../interfaces";
import Set from "../M6";

const card: Card = {
	set: Set,
	name: {
		ja: "メガカラマネロex",
	},

	illustrator: "5ban Graphics",
	category: "Pokemon",
	hp: 320,
	types: ["Darkness"],

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "サイコマリオネット" },
			damage: "70×",
			cost: ["Darkness", "Darkness"],
			effect: {
				ja: "相手のベンチポケモンの数×70ダメージ。",
			},
		},
		{
			name: { ja: "ぶきみなねんぱ" },
			damage: 200,
			cost: ["Darkness", "Darkness", "Darkness"],
			effect: {
				ja: "相手のバトルポケモンをこんらんにする。",
			},
		},
	],

	weaknesses: [{ type: "Grass", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 900127,
				tcgplayer: 709247,
			},
		},
	],

	evolveFrom: {
		ja: "マーイーカ",
	},

	retreat: 2,
	regulationMark: "J",
	rarity: "Mega Hyper Rare",
	dexId: [687],

	suffix: "EX",
};

export default card;
