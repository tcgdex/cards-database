import { Card } from "../../../interfaces";
import Set from "../SM6";

const card: Card = {
	set: Set,
	name: {
		ja: "アローラナッシー",
	},

	illustrator: "Satoshi Shirai",
	category: "Pokemon",
	hp: 160,
	types: ["Grass"],

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

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 559547,
			},
		},
	],

	evolveFrom: {
		ja: "タマタマ",
	},

	retreat: 3,
	rarity: "Rare",
	dexId: [103],
};

export default card;
