import { Card } from "models/database/card";
import Set from "../SM11";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "ラティオスGX",
	},

	illustrator: "Yoshinobu Saito",
	category: "Pokemon",
	hp: 170,
	types: ["Psychic"],

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: { ja: "パワーバインド" },
			effect: {
				'ja-jp': "自分の場のポケモンの数が4匹以下なら、このポケモンはワザが使えない。",
			},
		},
	],

	attacks: [
		{
			name: { ja: "タッグパージ" },
			damage: 120,
			cost: ["Psychic", "Colorless", "Colorless"],
			effect: {
				'ja-jp': "次の相手の番、このポケモンは「TAG TEAM」のポケモンからワザのダメージを受けない。",
			},
		},
		{
			name: { ja: "クリアビジョンGX" },
			cost: ["Psychic"],
			effect: {
				'ja-jp': "この対戦が終わるまで、相手のポケモンはGXワザが使えない。［対戦中、自分はGXワザを1回しか使えない。］",
			},
		},
	],

	weaknesses: [{ type: "Psychic", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 556996,
			},
		},
	],

	retreat: 0,
	regulationMark: "C",
	rarity: "Double rare",
	dexId: [381],

	suffix: "GX",
};

export default card;
