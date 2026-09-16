import { Card } from "../../../interfaces";
import Set from "../M6a";

const card: Card = {
	set: Set,
	name: {
		ja: "わるいバンギラス",
	},

	illustrator: "Nakaoka",
	category: "Pokemon",
	hp: 120,
	types: ["Darkness"],

	stage: "Stage2",

	attacks: [
		{
			name: { ja: "おしつぶす" },
			damage: "10+",
			cost: ["Colorless"],
			effect: {
				ja: "自分のエネルギー×10ダメージを追加する。",
			},
		},
		{
			name: { ja: "スピンテール" },
			cost: ["Darkness", "Colorless", "Colorless"],
			effect: {
				ja: "相手のポケモン全員に、それぞれ20ダメージ。",
			},
		},
		{
			name: { ja: "かみちぎる" },
			damage: "70+",
			cost: ["Darkness", "Darkness", "Colorless", "Colorless", "Colorless"],
			effect: {
				ja: "相手がポケモンexなら、50ダメージを追加する。",
			},
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [{ type: "Psychic", value: "-30" }],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 908322,
			},
		},
	],

	retreat: 2,
	rarity: "Classic Collection",
	dexId: [248],
};

export default card;
