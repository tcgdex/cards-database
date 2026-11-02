import { Card } from "../../../interfaces";
import Set from "../S-P";

const card: Card = {
	set: Set,
	name: {
		ja: "エーフィVMAX",
		'zh-tw': "蓋歐卡V",
	},

	illustrator: "Kouki Saitou",
	category: "Pokemon",
	hp: 310,
	types: ["Psychic"],

	stage: "VMAX",

	abilities: [
		{
			type: "Ability",
			name: { ja: "たいようのけいじ" },
			effect: {
				ja: "このポケモンがいるかぎり、エネルギーがついている自分のポケモン全員は、相手のポケモンが使うワザの効果を受けない。（すでに受けている効果は、なくならない。）",
			},
		},
	],

	attacks: [
		{
			name: {
				ja: "ダイサイコ",
				'zh-tw': "二重飛濺",
			},
			damage: "60×",
			cost: ["Psychic", "Colorless", "Colorless"],
			effect: {
				ja: "相手の場のポケモンについているエネルギーの数×60ダメージ。",
				'zh-tw': "對手的2隻寶可夢各受到50點傷害。[在備戰區不計算弱點・抵抗力。]",
			},
		},
	],

	weaknesses: [{ type: "Darkness", value: "x2" }],
	resistances: [{ type: "Fighting", value: "-30" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 564161,
				tcgplayer: 597387,
			},
		},
	],

	evolveFrom: {
		ja: "エーフィV",
	},

	retreat: 2,
	regulationMark: "E",
	rarity: "Promo",
	dexId: [196],
};

export default card;
