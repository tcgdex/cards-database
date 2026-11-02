import { Card } from "../../../interfaces";
import Set from "../SM10b";

const card: Card = {
	set: Set,
	name: {
		ja: "ユクシー",
	},

	illustrator: "kodama",
	category: "Pokemon",
	hp: 70,
	types: ["Psychic"],

	description: {
		ja: "知識の神と 呼ばれている。 目を 合わせた 者の 記憶を 消してしまう 力を 持つという。",
	},

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: { ja: "ひみつのテリトリー" },
			effect: {
				ja: "自分の場に「エムリット」「アグノム」がいるなら、おたがいのポケモン全員の弱点は、すべて「×4」としてダメージ計算をする。",
			},
		},
	],

	attacks: [
		{
			name: { ja: "サイコショット" },
			damage: 30,
			cost: ["Colorless", "Colorless", "Colorless"],
		},
	],

	weaknesses: [{ type: "Psychic", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 557230,
			},
		},
	],

	retreat: 1,
	regulationMark: "C",
	rarity: "Rare",
	dexId: [480],
};

export default card;
