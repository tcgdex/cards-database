import { Card } from "../../../interfaces";
import Set from "../M6a";

const card: Card = {
	set: Set,
	name: {
		ja: "ルナアーラ",
	},

	illustrator: "Bun Toujo",
	category: "Pokemon",
	hp: 160,
	types: ["Psychic"],

	description: {
		ja: "月を 誘いし 獣 という 名前を もつ。 あらゆる 光を エネルギーに 変えて 生きている。",
	},

	stage: "Stage2",

	attacks: [
		{
			name: { ja: "ミッドナイトレイ" },
			damage: "20+",
			cost: ["Psychic"],
			effect: {
				ja: "自分のトラッシュにあるエネルギーの枚数×20ダメージ追加。",
			},
		},
		{
			name: { ja: "ルナブラスト" },
			damage: 120,
			cost: ["Psychic", "Colorless", "Colorless"],
		},
	],

	weaknesses: [{ type: "Darkness", value: "x2" }],
	resistances: [{ type: "Fighting", value: "-30" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 908244,
			},
		},
	],

	evolveFrom: {
		ja: "コスモウム",
	},

	retreat: 2,
	regulationMark: "J",
	rarity: "None",
	dexId: [792],
};

export default card;
