import { Card } from "../../../interfaces";
import Set from "../SV-P";

const card: Card = {
	set: Set,
	name: {
		ja: "ザルード",
	},

	illustrator: "Uninori",
	category: "Pokemon",
	hp: 120,
	types: ["Grass"],

	description: {
		ja: "群れを つくり 密林で 暮らす。 とても 攻撃的で 森にすむ ポケモンたちから 恐れられている。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "もぎとる" },
			cost: ["Grass"],
			effect: {
				ja: "自分の山札から「基本[G]エネルギー」を3枚まで選び、相手に見せて、手札に加える。そして山札を切る。",
			},
		},
		{
			name: { ja: "ハンマーウィップ" },
			damage: 130,
			cost: ["Grass", "Grass", "Grass"],
			effect: {
				ja: "次の自分の番、このポケモンはワザが使えない。",
			},
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 770947,
				tcgplayer: 587905,
			},
		},
	],

	retreat: 2,
	regulationMark: "H",
	rarity: "Promo",
	dexId: [893],
};

export default card;
