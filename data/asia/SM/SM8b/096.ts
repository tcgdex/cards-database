import { Card } from "models/database/card";
import Set from "../SM8b";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "アローラナッシー",
	},

	illustrator: "Anesaki Dynamic",
	category: "Pokemon",
	hp: 160,
	types: ["Dragon"],

	description: {
		'ja-jp': "伸び伸び 育って サイコパワーは いらなくなり 眠れる ドラゴンの 力が 覚醒 したのだ。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "トロピカルシェイク" },
			damage: "20+",
			cost: ["Grass"],
			effect: {
				'ja-jp': "自分のトラッシュにある基本エネルギーのタイプの数x20ダメージ追加。追加できるダメージはタイプ5種類ぶんまで。",
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
		'ja-jp': "タマタマ",
	},

	retreat: 3,
	rarity: "None",
	dexId: [103],
};

export default card;
