import { Card } from "models/database/card";
import Set from "../SM2p";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "ゴーリキー",
	},

	illustrator: "Kouki Saitou",
	category: "Pokemon",
	hp: 100,
	types: ["Fighting"],

	description: {
		'ja-jp': "きたえにきたえた 結果 凄まじい パワーを 手にいれた。 その力を 活かし 人の仕事を 手伝う。",
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: { ja: "におうだち" },
			effect: {
				'ja-jp': "このポケモンがいるかぎり、自分のベンチポケモン全員は、相手のワザのダメージを受けず、相手のワザや特性の効果によるダメカンものらない。",
			},
		},
	],

	attacks: [
		{
			name: { ja: "クロスチョップ" },
			damage: "30+",
			cost: ["Fighting", "Fighting"],
			effect: {
				'ja-jp': "コインを1回投げオモテなら、30ダメージ追加。",
			},
		},
	],

	weaknesses: [{ type: "Psychic", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 561255,
			},
		},
	],

	evolveFrom: {
		'ja-jp': "ワンリキー",
	},

	retreat: 3,
	rarity: "None",
	dexId: [67],
};

export default card;
