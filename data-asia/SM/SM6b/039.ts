import { Card } from "../../../interfaces";
import Set from "../SM6b";

const card: Card = {
	set: Set,
	name: {
		ja: "ヤミラミ",
	},

	illustrator: "Yukiko Baba",
	category: "Pokemon",
	hp: 70,
	types: ["Darkness"],

	description: {
		ja: "宝石の 瞳が 怪しく 輝くとき 人の 魂を 奪うと 恐れられる ポケモン。",
	},

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: { ja: "ほりさげる" },
			effect: {
				ja: "自分の番に1回使える。自分の山札を上から1枚見て、もとにもどす。のぞむなら、そのカードをトラッシュする。",
			},
		},
	],

	attacks: [
		{
			name: { ja: "かなしばり" },
			damage: 10,
			cost: ["Colorless"],
			effect: {
				ja: "相手のバトルポケモンが持っているワザを1つ選ぶ。次の相手の番、このワザを受けたポケモンは、選ばれたワザを使えない。",
			},
		},
	],

	weaknesses: [],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 559189,
			},
		},
	],

	retreat: 1,
	rarity: "Uncommon",
	dexId: [302],
};

export default card;
