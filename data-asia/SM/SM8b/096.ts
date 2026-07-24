import { Card } from "../../../interfaces";
import Set from "../SM8b";

const card: Card = {
	set: Set,
	name: {
		ja: "アローラナッシー",
	},

	illustrator: "Anesaki Dynamic",
	category: "Pokemon",
	hp: 160,
	types: ["Dragon"],

	description: {
		ja: "伸び伸び 育って サイコパワーは いらなくなり 眠れる ドラゴンの 力が 覚醒 したのだ。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "トロピカルシェイク" },
			damage: "20+",
			cost: ["Grass"],
			effect: {
				ja: "自分のトラッシュにある基本エネルギーのタイプの数x20ダメージ追加。追加できるダメージはタイプ5種類ぶんまで。",
			},
		},
	],

	weaknesses: [{ type: "Fairy", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 550976,
			},
		},
	],

	evolveFrom: {
		ja: "タマタマ",
	},

	retreat: 3,
	rarity: "None",
	dexId: [103],
};

export default card;
