import { Card } from "../../../interfaces";
import Set from "../SM12a";

const card: Card = {
	set: Set,
	name: {
		ja: "ルカリオ&メルメタルGX",
	},

	illustrator: "",
	category: "Pokemon",
	hp: 260,
	types: ["Metal"],

	stage: "Basic",

	attacks: [
		{
			name: { ja: "こうてつのこぶし" },
			damage: 50,
			cost: ["Colorless", "Colorless"],
			effect: {
				ja: "自分の山札にある[鋼]エネルギーを1枚、このポケモンにつける。そして山札を切る。",
			},
		},
		{
			name: { ja: "ヘビーインパクト" },
			damage: 150,
			cost: ["Metal", "Metal", "Colorless", "Colorless"],
		},
		{
			name: { ja: "フルメタルウォールGX" },
			cost: ["Colorless"],
			effect: {
				ja: "この対戦が終わるまで、自分の[鋼]ポケモン全員が、相手のポケモンから受けるワザのダメージは、すべて「-30」される。追加でエネルギーが1個ついているなら、相手のバトルポケモンについているエネルギーを、すべてトラッシュする。［対戦中、自分はGXワザを1回しか使えない。］",
			},
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [{ type: "Psychic", value: "-20" }],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 547211,
			},
		},
	],

	retreat: 3,
	regulationMark: "C",
	rarity: "Secret Rare",
	dexId: [448, 809],

	suffix: "TAG TEAM-GX",
};

export default card;
