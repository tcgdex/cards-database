import { Card } from "../../../interfaces";
import Set from "../SM4S";

const card: Card = {
	set: Set,
	name: {
		ja: "ゴーゴート",
	},

	illustrator: "You Iribi",
	category: "Pokemon",
	hp: 120,
	types: ["Grass"],

	description: {
		ja: "ツノを 握る わずかな 違いから トレーナーの 気持ちを 読み取るので 一体となって 走れるのだ。",
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: { ja: "そうしょく" },
			effect: {
				ja: "このポケモンが使うワザの、相手の[草]ポケモンへのダメージは「+80」される。",
			},
		},
	],

	attacks: [
		{
			name: { ja: "ウッドホーン" },
			damage: 80,
			cost: ["Grass", "Colorless", "Colorless"],
			effect: {
				ja: "このポケモンのHPを「20」回復する。",
			},
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 560317,
			},
		},
	],

	evolveFrom: {
		ja: "メェークル",
	},

	retreat: 2,
	rarity: "Rare",
	dexId: [673],
};

export default card;
