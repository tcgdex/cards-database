import { Card } from "../../../interfaces";
import Set from "../CP1";

const card: Card = {
	set: Set,
	name: {
		ja: "マグマ団のボスゴドラ",
	},

	illustrator: "TOKIYA",
	category: "Pokemon",
	hp: 140,
	types: ["Fighting"],

	description: {
		ja: "ボスゴドラの 鋼のツノは どんなに 固い 防壁でも 突き破ることが できるのよ！",
	},

	stage: "Stage2",

	attacks: [
		{
			name: { ja: "ロックスタンプ" },
			damage: "40×",
			cost: ["Fighting", "Colorless"],
			effect: {
				ja: "自分の場のポケモンについている[闘]エネルギーを好きなだけトラッシュし、トラッシュした[闘]エネルギーの数x40ダメージ。",
			},
		},
		{
			name: { ja: "がんせきあらし" },
			damage: 120,
			cost: ["Fighting", "Fighting", "Fighting", "Colorless"],
			effect: {
				ja: "ダメカンがのっている相手のベンチポケモン全員にも、それぞれ20ダメージ。［ベンチは弱点・抵抗力の計算をしない。］",
			},
		},
	],

	weaknesses: [{ type: "Grass", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 563734,
			},
		},
	],

	evolveFrom: {
		ja: "マグマ団のコドラ",
	},

	retreat: 4,
	rarity: "Rare",
	dexId: [306],
};

export default card;
