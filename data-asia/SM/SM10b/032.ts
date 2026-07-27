import { Card } from "../../../interfaces";
import Set from "../SM10b";

const card: Card = {
	set: Set,
	name: {
		ja: "ベベノム",
	},

	illustrator: "Shin Nagasawa",
	category: "Pokemon",
	hp: 70,
	types: ["Psychic"],

	description: {
		ja: "異世界に おいては 旅立ちの パートナーに 選ばれるほど 親しまれている ウルトラビースト。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "とばす" },
			damage: 10,
			cost: ["Colorless"],
		},
		{
			name: { ja: "ラストシーン" },
			damage: "50+",
			cost: ["Psychic", "Colorless", "Colorless"],
			effect: {
				ja: "おたがいのサイドの残り枚数が、それぞれ1枚なら、130ダメージ追加。",
			},
		},
	],

	weaknesses: [{ type: "Psychic", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 557233,
			},
		},
	],

	retreat: 1,
	regulationMark: "C",
	rarity: "Common",
	dexId: [803],
};

export default card;
