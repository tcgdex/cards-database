import { Card } from "../../../interfaces";
import Set from "../M-P";

const card: Card = {
	set: Set,
	name: {
		ja: "ホルビー",
	},

	illustrator: "Hitoshi Ariga",
	category: "Pokemon",
	hp: 60,
	types: ["Colorless"],

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: { ja: "Ω（オメガ）連打" },
			effect: {
				ja: "このポケモンは、ワザを2回連続で使える。（1回目で相手のバトルポケモンがきぜつしたなら、次のポケモンが出た後、2回目を使う。）",
			},
		},
	],

	attacks: [
		{
			name: { ja: "ほるほる" },
			cost: ["Colorless"],
			effect: {
				ja: "相手の山札を上から1枚トラッシュする。",
			},
		},
		{
			name: { ja: "たがやす" },
			cost: ["Colorless"],
			effect: {
				ja: "自分のトラッシュから好きなカードを1枚選び、相手に見せてから、山札にもどす。そして山札を切る。",
			},
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 864268,
			},
		},
	],

	retreat: 2,
	rarity: "Promo",
	dexId: [659],
};

export default card;
