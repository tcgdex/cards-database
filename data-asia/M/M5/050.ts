import { Card } from "../../../interfaces";
import Set from "../M5";

const card: Card = {
	set: Set,
	name: {
		ja: "カラマネロ",
	},

	illustrator: "Naoki Saito",
	category: "Pokemon",
	hp: 120,
	types: ["Darkness"],

	description: {
		ja: "ポケモンで 一番 強力な 催眠術を 使う。 相手を 意のままに 操ってしまうのだ。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "まどわす" },
			cost: ["Darkness"],
			effect: {
				ja: "相手のバトルポケモンをこんらんにする。",
			},
		},
		{
			name: { ja: "ブレインクラッシュ" },
			damage: 130,
			cost: ["Darkness"],
			effect: {
				ja: "相手のバトルポケモンがこんらんでないなら、このワザは失敗。",
			},
		},
	],

	weaknesses: [{ type: "Grass", value: "x2" }],
	resistances: [],

	variants: [{ type: "normal" }],

	evolveFrom: {
		ja: "マーイーカ",
	},

	retreat: 2,
	regulationMark: "J",
	rarity: "Uncommon",
	dexId: [687],

	thirdParty: {
		cardmarket: 888305,
	},
};

export default card;
