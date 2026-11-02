import { Card } from "../../../interfaces";
import Set from "../MC";

const card: Card = {
	set: Set,
	name: {
		ja: "ドクロッグ",
	},

	illustrator: "Hasuno",
	category: "Pokemon",
	hp: 130,
	types: ["Fighting"],

	description: {
		ja: "柔らかい 体で 相手の 攻撃を かわしながら ふところに 飛び込み 毒の トゲを 突き刺す。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "とつげき" },
			damage: 70,
			cost: ["Fighting"],
			effect: {
				ja: "このポケモンにも20ダメージ。",
			},
		},
	],

	weaknesses: [{ type: "Psychic", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 863686,
			},
		},
	],

	evolveFrom: {
		ja: "グレッグル",
	},

	retreat: 1,
	regulationMark: "I",
	rarity: "None",
	dexId: [454],
};

export default card;
