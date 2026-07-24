import { Card } from "../../../interfaces";
import Set from "../SM11";

const card: Card = {
	set: Set,
	name: {
		ja: "ラティオスGX",
	},

	illustrator: "ConceptLab",
	category: "Pokemon",
	hp: 170,
	types: ["Psychic"],

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: { ja: "パワーバインド" },
			effect: {
				ja: "自分の場のポケモンの数が4匹以下なら、このポケモンはワザが使えない。",
			},
		},
	],

	attacks: [
		{
			name: { ja: "タッグパージ" },
			damage: 120,
			cost: ["Psychic", "Colorless", "Colorless"],
			effect: {
				ja: "次の相手の番、このポケモンは「TAG TEAM」のポケモンからワザのダメージを受けない。",
			},
		},
		{
			name: { ja: "クリアビジョンGX" },
			cost: ["Psychic"],
			effect: {
				ja: "この対戦が終わるまで、相手のポケモンはGXワザが使えない。［対戦中、自分はGXワザを1回しか使えない。］",
			},
		},
	],

	weaknesses: [{ type: "Psychic", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 557061,
			},
		},
	],

	retreat: 0,
	regulationMark: "C",
	rarity: "Ultra Rare",
	dexId: [381],

	suffix: "GX",
};

export default card;
