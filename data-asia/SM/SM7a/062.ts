import { Card } from "../../../interfaces";
import Set from "../SM7a";

const card: Card = {
	set: Set,
	name: {
		ja: "マグカルゴGX",
	},

	illustrator: "5ban Graphics",
	category: "Pokemon",
	hp: 210,
	types: ["Fire"],

	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: { ja: "クラッシュチャージ" },
			effect: {
				ja: "自分の番に1回使える。自分の山札を上から1枚トラッシュし、そのカードが基本エネルギーなら、自分のポケモンにつける。",
			},
		},
	],

	attacks: [
		{
			name: { ja: "ようがんりゅう" },
			damage: "50+",
			cost: ["Fire", "Fire", "Colorless"],
			effect: {
				ja: "このポケモンについている基本エネルギーを好きなだけトラッシュし、その枚数x50ダメージ追加。",
			},
		},
		{
			name: { ja: "マッグバンGX" },
			cost: ["Fire"],
			effect: {
				ja: "相手の山札を上から5枚トラッシュする。［対戦中、自分はGXワザを1回しか使えない。］",
			},
		},
	],

	weaknesses: [{ type: "Water", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 558950,
			},
		},
	],

	evolveFrom: {
		ja: "マグマッグ",
	},

	retreat: 3,
	rarity: "Ultra Rare",
	dexId: [219],

	suffix: "GX",
};

export default card;
