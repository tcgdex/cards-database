import { Card } from "../../../interfaces";
import Set from "../SV11W";

const card: Card = {
	set: Set,

	name: {
		ja: "ダストダス",
	},

	illustrator: "OKUBO",
	category: "Pokemon",
	hp: 140,
	types: ["Darkness"],

	description: {
		ja: "左腕で 相手を 絞めつけて 口から 吐き出す 悪臭の 毒ガスで とどめを 刺すのだ。",
	},

	stage: "Stage1",

	attacks: [
		{ name: { ja: "ガスでつつむ" }, damage: 40, cost: ["Darkness"] },
		{
			name: { ja: "ダストシュート" },
			damage: 120,
			cost: ["Darkness", "Darkness", "Colorless"],
			effect: { ja: "相手のバトルポケモンをどくにする。" },
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false,
	},

	evolveFrom: {
		ja: "ヤブクロン",
	},

	retreat: 3,
	regulationMark: "I",
	rarity: "Uncommon",
	dexId: [569],
};

export default card;
