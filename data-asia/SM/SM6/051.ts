import { Card } from "../../../interfaces";
import Set from "../SM6";

const card: Card = {
	set: Set,
	name: {
		ja: "ディアンシー",
	},

	illustrator: "kawayoo",
	category: "Pokemon",
	hp: 120,
	types: ["Fighting"],

	description: {
		ja: "両手の すきまで 空気中の 炭素を 圧縮して たくさんの ダイヤを 一瞬で 生み出す。",
	},

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: { ja: "プリンセスエール" },
			effect: {
				ja: "このポケモンがベンチにいるかぎり、自分の[闘]ポケモンが使うワザの、相手のバトルポケモンへのダメージは「+20」される。",
			},
		},
	],

	attacks: [
		{
			name: { ja: "ダイヤレイン" },
			damage: 90,
			cost: ["Fighting", "Fighting", "Fighting"],
			effect: {
				ja: "自分のベンチポケモン全員のHPを、それぞれ「30」回復する。",
			},
		},
	],

	weaknesses: [{ type: "Grass", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 559596,
			},
		},
	],

	retreat: 2,
	rarity: "Rare Holo",
	dexId: [719],
};

export default card;
