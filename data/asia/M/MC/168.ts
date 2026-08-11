import { Card } from "../../../interfaces";
import Set from "../MC";

const card: Card = {
	set: Set,
	name: {
		ja: "オーダイル",
	},

	illustrator: "GOSSAN",
	category: "Pokemon",
	hp: 180,
	types: ["Water"],

	description: {
		ja: "普段は ゆっくりとした 動きだが 獲物に かみつくときは 目にも 止まらない スピードだ。",
	},

	stage: "Stage2",

	abilities: [
		{
			type: "Ability",
			name: { ja: "トレントハート" },
			effect: {
				ja: "自分の番に1回使える。このポケモンにダメカンを5個のせる。その場合、この番、このポケモンが使うワザの、相手のバトルポケモンへのダメージは「+120」される。",
			},
		},
	],

	attacks: [
		{
			name: { ja: "おおなみ" },
			damage: 160,
			cost: ["Water", "Water"],
			effect: {
				ja: "次の自分の番、このポケモンは「おおなみ」が使えない。",
			},
		},
	],

	weaknesses: [{ type: "Lightning", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 863464,
			},
		},
	],

	evolveFrom: {
		ja: "アリゲイツ",
	},

	retreat: 3,
	regulationMark: "H",
	rarity: "None",
	dexId: [160],
};

export default card;
