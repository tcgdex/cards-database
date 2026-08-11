import { Card } from "../../../interfaces";
import Set from "../MC";

const card: Card = {
	set: Set,
	name: {
		ja: "カスミのスターミー",
	},

	illustrator: "Natsumi Yoshida",
	category: "Pokemon",
	hp: 100,
	types: ["Water"],

	description: {
		ja: "体を 高速で 回転させ 海を 泳ぎながら 小さな プランクトンを 吸収する。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "サドンフラッシュ" },
			damage: "60+",
			cost: ["Water"],
			effect: {
				ja: "この番に、このポケモンが「カスミのヒトデマン」から進化していたなら、80ダメージ追加。",
			},
		},
	],

	weaknesses: [{ type: "Lightning", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 863452,
			},
		},
	],

	evolveFrom: {
		ja: "カスミのヒトデマン",
	},

	retreat: 1,
	regulationMark: "I",
	rarity: "None",
	dexId: [121],
};

export default card;
