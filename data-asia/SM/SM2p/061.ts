import { Card } from "../../../interfaces";
import Set from "../SM2p";

const card: Card = {
	set: Set,
	name: {
		ja: "カイリキーGX",
	},

	illustrator: "",
	category: "Pokemon",
	hp: 250,
	types: ["Fighting"],

	stage: "Stage2",

	attacks: [
		{
			name: { ja: "ふりおろす" },
			damage: "60+",
			cost: ["Fighting", "Fighting"],
			effect: {
				ja: "相手のバトルポケモンが進化ポケモンなら、60ダメージ追加。",
			},
		},
		{
			name: { ja: "がんばんくずし" },
			damage: 130,
			cost: ["Fighting", "Fighting", "Fighting"],
			effect: {
				ja: "場に出ているスタジアムをトラッシュする。",
			},
		},
		{
			name: { ja: "マッスルパンチGX" },
			damage: 180,
			cost: ["Fighting", "Fighting", "Fighting"],
			effect: {
				ja: "このワザのダメージは抵抗力を計算しない。［対戦中、自分はGXワザを1回しか使えない。］",
			},
		},
	],

	weaknesses: [{ type: "Psychic", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 561331,
			},
		},
	],

	evolveFrom: {
		ja: "ゴーリキー",
	},

	retreat: 3,
	rarity: "Hyper rare",
	dexId: [68],

	suffix: "GX",
};

export default card;
