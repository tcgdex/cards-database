import { Card } from "../../../interfaces";
import Set from "../SM4S";

const card: Card = {
	set: Set,
	name: {
		ja: "パンプジン",
	},

	illustrator: "kirisAki",
	category: "Pokemon",
	hp: 120,
	types: ["Psychic"],

	description: {
		ja: "新月の 夜に 不気味な 声で 歌いながら 街中を さまよう。 その歌を 聞くと のろわれる。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "あやしいひかり" },
			cost: ["Psychic"],
			effect: {
				ja: "相手のバトルポケモンをこんらんにする。",
			},
		},
		{
			name: { ja: "パンプキンボム" },
			damage: "10+",
			cost: ["Colorless", "Colorless"],
			effect: {
				ja: "ダメージを与える前に、自分の場にある「ポケモンのどうぐ」を好きなだけトラッシュし、その枚数x40ダメージ追加。",
			},
		},
	],

	weaknesses: [{ type: "Darkness", value: "x2" }],
	resistances: [{ type: "Fighting", value: "-20" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 560337,
			},
		},
	],

	evolveFrom: {
		ja: "バケッチャ",
	},

	retreat: 3,
	rarity: "Uncommon",
	dexId: [711],
};

export default card;
