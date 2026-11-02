import { Card } from "../../../interfaces";
import Set from "../SM5p";

const card: Card = {
	set: Set,
	name: {
		ja: "デンジュモク",
	},

	illustrator: "Shin Nagasawa",
	category: "Pokemon",
	hp: 120,
	types: ["Lightning"],

	description: {
		ja: "ウルトラホールから 出現した。 発電所を 襲撃 したため 電気が エネルギーと おもわれる。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "せんこうだん" },
			damage: 20,
			cost: ["Lightning"],
			effect: {
				ja: "相手のバトルポケモンをこんらんにする。",
			},
		},
		{
			name: { ja: "ケーブルグラム" },
			damage: 100,
			cost: ["Lightning", "Lightning", "Colorless"],
			effect: {
				ja: "自分のサイドの残り枚数が3枚なら、相手のバトルポケモンをマヒにする。",
			},
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [{ type: "Metal", value: "-20" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 559766,
			},
		},
	],

	retreat: 1,
	rarity: "None",
	dexId: [796],
};

export default card;
