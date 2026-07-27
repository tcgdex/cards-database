import { Card } from "../../../interfaces";
import Set from "../SM5S";

const card: Card = {
	set: Set,
	name: {
		ja: "ヤレユータン",
	},

	illustrator: "Kouki Saitou",
	category: "Pokemon",
	hp: 120,
	types: ["Colorless"],

	description: {
		ja: "ジャングル奥地の 木の上に 棲む。 まれに 海辺に 現れて ヤドキングと 知恵比べを する。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "リソースマネージメント" },
			cost: ["Colorless"],
			effect: {
				ja: "自分のトラッシュにある好きなカードを3枚、相手に見せてから、好きな順番に入れ替えて、山札の下にもどす。",
			},
		},
		{
			name: { ja: "うんちく" },
			damage: 60,
			cost: ["Colorless", "Colorless", "Colorless"],
			effect: {
				ja: "相手のバトルポケモンをこんらんにする。",
			},
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 560006,
			},
		},
	],

	retreat: 2,
	rarity: "Common",
	dexId: [765],
};

export default card;
