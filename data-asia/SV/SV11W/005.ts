import { Card } from "../../../interfaces";
import Set from "../SV11W";

const card: Card = {
	set: Set,

	name: {
		ja: "エルフーンex",
	},

	illustrator: "5ban Graphics",
	category: "Pokemon",
	hp: 230,
	types: ["Grass"],

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "エナジーギフト" },
			cost: ["Grass"],
			effect: {
				ja: "自分の山札から基本エネルギーを3枚まで選び、自分のポケモンに好きなようにつける。そして山札を切る。",
			},
		},
		{
			name: { ja: "ワンダーコットン" },
			damage: "50×",
			cost: ["Grass"],
			effect: {
				ja: "相手の手札を見て、その中にあるトレーナーズの枚数×50ダメージ。",
			},
		},
	],

	weaknesses: [{ type: "Fire", value: "×2" }],

	retreat: 0,
	regulationMark: "I",
	rarity: "Double rare",
	suffix: "EX",
};

export default card;
