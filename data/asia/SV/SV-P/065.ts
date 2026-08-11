import { Card } from "../../../interfaces";
import Set from "../SV-P";

const card: Card = {
	set: Set,
	name: {
		ja: "ブースター",
		'zh-tw': "蕾荷",
	},

	illustrator: "YU NAGABA",
	category: "Pokemon",
	hp: 120,
	types: ["Fire"],

	description: {
		ja: "吸いこんだ 空気を 体内の 炎袋に 送りこみ １７００度の 炎にして 吹く。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "ほのおのうず" },
			damage: 120,
			cost: ["Fire", "Fire", "Colorless"],
			effect: {
				ja: "このポケモンについているエネルギーを2個選び、トラッシュする。",
			},
		},
	],

	weaknesses: [{ type: "Water", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 708480,
				tcgplayer: 587823,
			},
		},
	],

	evolveFrom: {
		ja: "イーブイ",
	},

	retreat: 2,
	regulationMark: "G",
	rarity: "Promo",
	dexId: [136],
};

export default card;
