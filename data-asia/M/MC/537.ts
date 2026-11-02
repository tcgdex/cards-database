import { Card } from "../../../interfaces";
import Set from "../MC";

const card: Card = {
	set: Set,
	name: {
		ja: "アローラ ナッシーex",
	},

	illustrator: "aky CG Works",
	category: "Pokemon",
	hp: 300,
	types: ["Dragon"],

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "トロピカルフィーバー" },
			damage: 150,
			cost: ["Grass", "Water"],
			effect: {
				ja: "自分の手札から基本エネルギーを好きなだけ選び、自分のポケモンに好きなようにつける。",
			},
		},
		{
			name: { ja: "ブンブンスフェーン" },
			cost: ["Grass", "Water", "Fighting"],
			effect: {
				ja: "コインを1回投げオモテなら、相手のバトル場のたねポケモンをきぜつさせる。ウラなら、相手のベンチのたねポケモンを1匹選び、きぜつさせる。",
			},
		},
	],

	weaknesses: [],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 863839,
			},
		},
	],

	evolveFrom: {
		ja: "タマタマ",
	},

	retreat: 3,
	regulationMark: "H",
	rarity: "None",
	dexId: [103],

	suffix: "EX",
};

export default card;
