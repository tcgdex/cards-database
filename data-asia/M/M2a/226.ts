import { Card } from "../../../interfaces";
import Set from "../M2a";

const card: Card = {
	set: Set,
	name: {
		ja: "メガサーナイトex",
	},

	illustrator: "Saboteri",
	category: "Pokemon",
	hp: 360,
	types: ["Psychic"],

	stage: "Stage2",

	attacks: [
		{
			name: { ja: "あふれるねがい" },
			cost: ["Psychic"],
			effect: {
				ja: "自分のベンチポケモン全員に、山札から「基本[P]エネルギー」を1枚ずつつける。そして山札を切る。",
			},
		},
		{
			name: { ja: "メガシンフォニア" },
			damage: "50×",
			cost: ["Psychic"],
			effect: {
				ja: "自分のポケモン全員についている[P]エネルギーの数×50ダメージ。",
			},
		},
	],

	weaknesses: [{ type: "Darkness", value: "x2" }],
	resistances: [{ type: "Fighting", value: "-30" }],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 861469,
			},
		},
	],

	evolveFrom: {
		ja: "キルリア",
	},

	retreat: 2,
	regulationMark: "I",
	rarity: "Ultra Rare",
	dexId: [282],

	suffix: "EX",
};

export default card;
