import { Card } from "models/database/card";
import Set from "../MC";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "ビリジオン",
	},

	illustrator: "Felicia Chen",
	category: "Pokemon",
	hp: 120,
	types: ["Grass"],

	description: {
		'ja-jp': "仲間を 守るため 人間に 戦いを 挑んだ ポケモン。 伝説で 語り継がれている。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "ギガドレイン" },
			damage: 30,
			cost: ["Grass"],
			effect: {
				'ja-jp': "相手のバトルポケモンに与えたダメージぶん、このポケモンのHPを回復する。",
			},
		},
		{
			name: { ja: "エメラルドブレード" },
			damage: 130,
			cost: ["Grass", "Grass", "Colorless"],
			effect: {
				'ja-jp': "次の自分の番、このポケモンはワザが使えない。",
			},
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 863345,
			},
		},
	],

	retreat: 1,
	regulationMark: "I",
	rarity: "None",
	dexId: [640],
};

export default card;
