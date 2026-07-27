import { Card } from "../../../interfaces";
import Set from "../SM8b";

const card: Card = {
	set: Set,
	name: {
		ja: "ヤレユータン",
	},

	illustrator: "Akira Komayama",
	category: "Pokemon",
	hp: 120,
	types: ["Colorless"],

	description: {
		ja: "ジャングル奥地の 木の上に 棲む。 まれに 海辺に 現れて ヤドキングと 知恵比べを する。",
	},

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: { ja: "さいはい" },
			effect: {
				ja: "自分の番に1回使える。自分の手札が3枚になるように、山札を引く。",
			},
		},
	],

	attacks: [
		{
			name: { ja: "サイコキネシス" },
			damage: "60+",
			cost: ["Colorless", "Colorless", "Colorless"],
			effect: {
				ja: "相手のバトルポケモンについているエネルギーの数x20ダメージ追加。",
			},
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 551516,
			},
		},
	],

	retreat: 2,
	rarity: "Ultra Rare",
	dexId: [765],
};

export default card;
