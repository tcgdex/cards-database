import { Card } from "../../../interfaces";
import Set from "../SV11W";

const card: Card = {
	set: Set,

	name: {
		ja: "ギギギアル",
	},

	illustrator: "Amelicart",
	category: "Pokemon",
	hp: 150,
	types: ["Metal"],

	description: {
		ja: "赤い コアは エネルギータンクの 役割。 チャージした エネルギーを トゲから 周囲に 撃ち出す。",
	},

	stage: "Stage2",

	abilities: [
		{
			type: "Ability",
			name: { ja: "ギアコーティング" },
			effect: {
				ja: "このポケモンがいるかぎり、エネルギーがついている自分のポケモン全員が、相手のポケモンから受けるワザのダメージは「-20」される。",
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

	variants: {
		normal: false,
		reverse: true,
		holo: true,
		firstEdition: false,
	},

	evolveFrom: {
		ja: "ギギアル",
	},

	retreat: 3,
	regulationMark: "I",
	rarity: "Rare",
	dexId: [601],
};

export default card;
