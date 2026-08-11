import { Card } from "../../../interfaces";
import Set from "../SM5M";

const card: Card = {
	set: Set,
	name: {
		ja: "ラムパルド",
	},

	illustrator: "Yoshinobu Saito",
	category: "Pokemon",
	hp: 150,
	types: ["Fighting"],

	description: {
		ja: "復元され 進化した ラムパルドが 逃げだして 頭突きで 高層ビルを 破壊したという 記録が ある。",
	},

	stage: "Stage2",

	attacks: [
		{
			name: { ja: "クリーンヒット" },
			damage: "60+",
			cost: ["Fighting"],
			effect: {
				ja: "相手のバトルポケモンが進化ポケモンなら、60ダメージ追加。",
			},
		},
		{
			name: { ja: "ワイルドボンバー" },
			cost: ["Fighting", "Fighting", "Fighting"],
			effect: {
				ja: "相手のバトルポケモンがたねポケモンなら、そのポケモンをきぜつさせる。",
			},
		},
	],

	weaknesses: [{ type: "Grass", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 559848,
			},
		},
	],

	evolveFrom: {
		ja: "ズガイドス",
	},

	retreat: 2,
	rarity: "Rare",
	dexId: [409],
};

export default card;
