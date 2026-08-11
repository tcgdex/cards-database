import { Card } from "../../../interfaces";
import Set from "../SM10";

const card: Card = {
	set: Set,
	name: {
		ja: "ニョロモ",
	},

	illustrator: "Midori Harada",
	category: "Pokemon",
	hp: 50,
	types: ["Water"],

	description: {
		ja: "危険なのに 陸に 上がりたがる。 まだ よちよち歩き なので 敵に 見つかると 慌てて 水の中へ。",
	},

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: { ja: "ぐるりんぱ" },
			effect: {
				ja: "後攻プレイヤーの最初の自分の番にだけ1回使える。相手のバトルポケモンをこんらんにする。",
			},
		},
	],

	attacks: [
		{
			name: { ja: "みずまき" },
			damage: 10,
			cost: ["Water"],
		},
	],

	weaknesses: [{ type: "Grass", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 557375,
			},
		},
	],

	retreat: 1,
	regulationMark: "C",
	rarity: "Common",
	dexId: [60],
};

export default card;
