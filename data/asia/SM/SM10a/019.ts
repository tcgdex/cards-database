import { Card } from "../../../interfaces";
import Set from "../SM10a";

const card: Card = {
	set: Set,
	name: {
		ja: "カラカラ",
	},

	illustrator: "otumami",
	category: "Pokemon",
	hp: 60,
	types: ["Fighting"],

	description: {
		ja: "亡くした 母親を 思い 夜に 泣き叫ぶが そのせいで 天敵の バルジーナに 見つかってしまう。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "なきごえ" },
			cost: ["Colorless"],
			effect: {
				ja: "次の相手の番、このワザを受けたポケモンが使うワザのダメージは「-20」される。",
			},
		},
		{
			name: { ja: "ホネブーメラン" },
			damage: "20×",
			cost: ["Colorless", "Colorless"],
			effect: {
				ja: "コインを2回投げ、オモテの数×20ダメージ。",
			},
		},
	],

	weaknesses: [{ type: "Grass", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 557298,
			},
		},
	],

	retreat: 1,
	regulationMark: "C",
	rarity: "Common",
	dexId: [104],
};

export default card;
