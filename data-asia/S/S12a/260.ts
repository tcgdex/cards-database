import { Card } from "../../../interfaces";
import Set from "../S12a";

const card: Card = {
	set: Set,
	name: {
		ja: "オリジンディアルガVSTAR",
	},

	illustrator: "AKIRA EGAWA",
	category: "Pokemon",
	hp: 280,
	types: ["Metal"],

	stage: "VSTAR",

	attacks: [
		{
			name: { ja: "メタルブラスト" },
			damage: "40+",
			cost: ["Colorless"],
			effect: {
				ja: "このポケモンについている[M]エネルギーの数×40ダメージ追加。",
			},
		},
		{
			name: { ja: "スタークロノス" },
			damage: 220,
			cost: ["Metal", "Metal", "Metal", "Metal", "Colorless"],
			effect: {
				ja: "この番が終わったら、もう1回自分の番を始める。［対戦中、自分はVSTARパワーを1回しか使えない。］",
			},
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [{ type: "Grass", value: "-30" }],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 687822,
				tcgplayer: 571790,
			},
		},
	],

	evolveFrom: {
		ja: "nullV",
	},

	retreat: 3,
	regulationMark: "F",
	rarity: "Secret Rare",
	dexId: [483],
};

export default card;
