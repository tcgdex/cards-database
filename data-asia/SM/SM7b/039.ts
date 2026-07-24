import { Card } from "../../../interfaces";
import Set from "../SM7b";

const card: Card = {
	set: Set,
	name: {
		ja: "カプ・テテフ",
	},

	illustrator: "Mizue",
	category: "Pokemon",
	hp: 110,
	types: ["Fairy"],

	description: {
		ja: "ヒラヒラ 飛びまわり 不思議に 光る 鱗粉を 振りまく。 触れた者は たちまち 元気を 取り戻すという。",
	},

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: { ja: "チャームチャーム" },
			effect: {
				ja: "自分の番に、自分の手札から名前に「フェアリーチャーム」とつく「ポケモンのどうぐ」を、このポケモンにつけるたび、1回使える。相手のバトルポケモンをこんらんにする。",
			},
		},
	],

	attacks: [
		{
			name: { ja: "マジカルショット" },
			damage: 70,
			cost: ["Fairy", "Colorless", "Colorless"],
		},
	],

	weaknesses: [{ type: "Metal", value: "x2" }],
	resistances: [{ type: "Darkness", value: "-20" }],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 558864,
			},
		},
	],

	retreat: 1,
	rarity: "Rare",
	dexId: [786],
};

export default card;
