import { Card } from "../../../interfaces";
import Set from "../SM2K";

const card: Card = {
	set: Set,
	name: {
		ja: "キュワワー",
	},

	illustrator: "Sanosuke Sakuma",
	category: "Pokemon",
	hp: 70,
	types: ["Fairy"],

	description: {
		ja: "栄養満点の ツルに 花を くっつける。 花は 活性化し 香しい アロマが 漂いだす。",
	},

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: { ja: "フラワーガード" },
			effect: {
				ja: "このポケモンがいるかぎり、[妖]エネルギーがついている自分のポケモン全員は、特殊状態にならず、受けている特殊状態は、すべて回復する。",
			},
		},
	],

	attacks: [
		{
			name: { ja: "てんしのキッス" },
			damage: 30,
			cost: ["Fairy", "Colorless"],
			effect: {
				ja: "相手は山札を1枚引く。",
			},
		},
	],

	weaknesses: [{ type: "Metal", value: "x2" }],
	resistances: [{ type: "Darkness", value: "-20" }],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 561503,
			},
		},
	],

	retreat: 1,
	rarity: "Rare",
	dexId: [764],
};

export default card;
