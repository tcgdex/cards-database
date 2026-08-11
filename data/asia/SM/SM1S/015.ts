import { Card } from "models/database/card";
import Set from "../SM1S";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "パルシェン",
	},

	illustrator: "Yoshinobu Saito",
	category: "Pokemon",
	hp: 120,
	types: ["Water"],

	description: {
		'ja-jp': "硬い殻は ナパーム弾 でも 砕けない。 カラの 中味の 正体は 未だ 不明。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "じごくがため" },
			damage: "30+",
			cost: ["Water", "Colorless"],
			effect: {
				'ja-jp': "コインを1回投げオモテなら、30ダメージ追加。ウラなら、相手のバトルポケモンをマヒにする。",
			},
		},
		{
			name: { ja: "ガードプレス" },
			damage: 80,
			cost: ["Water", "Water", "Colorless"],
			effect: {
				'ja-jp': "次の相手の番、このポケモンが受けるワザのダメージは「-20」される。",
			},
		},
	],

	weaknesses: [{ type: "Grass", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 561691,
			},
		},
	],

	evolveFrom: {
		'ja-jp': "シェルダー",
	},

	retreat: 3,
	rarity: "Common",
	dexId: [91],
};

export default card;
