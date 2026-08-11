import { Card } from "models/database/card";
import Set from "../MC";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "ギギギアル",
	},

	illustrator: "Amelicart",
	category: "Pokemon",
	hp: 150,
	types: ["Metal"],

	description: {
		'ja-jp': "赤い コアは エネルギータンクの 役割。 チャージした エネルギーを トゲから 周囲に 撃ち出す。",
	},

	stage: "Stage2",

	abilities: [
		{
			type: "Ability",
			name: { ja: "ギアコーティング" },
			effect: {
				'ja-jp': "このポケモンがいるかぎり、[M]エネルギーがついている自分のポケモン全員が、相手のポケモンから受けるワザのダメージは「-20」される。",
			},
		},
	],

	attacks: [
		{
			name: { ja: "ぶちかます" },
			damage: 120,
			cost: ["Metal", "Colorless", "Colorless"],
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [{ type: "Grass", value: "-30" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 863810,
			},
		},
	],

	evolveFrom: {
		'ja-jp': "ギギアル",
	},

	retreat: 3,
	regulationMark: "I",
	rarity: "None",
	dexId: [601],
};

export default card;
