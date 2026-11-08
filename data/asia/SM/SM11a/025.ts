import { Card } from "models/database/card";
import Set from "../SM11a";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "ヨノワール",
	},

	illustrator: "Eske Yoshinob",
	category: "Pokemon",
	hp: 160,
	types: ["Psychic"],

	description: {
		'ja-jp': "弾力のある 体の 中に 行き場のない 魂を 取りこんで あの世に 連れていくと 言われる。",
	},

	stage: "Stage2",

	abilities: [
		{
			type: "Ability",
			name: { ja: "しのこくいん" },
			effect: {
				'ja-jp': "このポケモンが、バトル場で相手のポケモンからワザのダメージを受けてきぜつしたとき、ダメカン4個を、相手のポケモンに好きなようにのせる。",
			},
		},
	],

	attacks: [
		{
			name: { ja: "じこあんじ" },
			damage: 60,
			cost: ["Psychic"],
			effect: {
				'ja-jp': "次の自分の番、このポケモンの「じこあんじ」のダメージは「+60」される。",
			},
		},
	],

	weaknesses: [{ type: "Darkness", value: "x2" }],
	resistances: [{ type: "Fighting", value: "-20" }],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 556625,
			},
		},
	],

	evolveFrom: {
		'ja-jp': "サマヨール",
	},

	retreat: 3,
	regulationMark: "C",
	rarity: "Rare",
	dexId: [477],
};

export default card;
