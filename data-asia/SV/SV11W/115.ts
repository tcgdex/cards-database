import { Card } from "../../../interfaces";
import Set from "../SV11W";

const card: Card = {
	set: Set,
	name: {
		ja: "マッギョ",
	},

	illustrator: "Toshinao Aoki",
	category: "Pokemon",
	hp: 110,
	types: ["Lightning"],

	description: {
		ja: "皮膚が 硬いので 相撲取りに 踏まれても 平気。 電気を 流すとき 笑い顔に なる。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "マッドボルト" },
			damage: "20+",
			cost: ["Colorless"],
			effect: {
				ja: "このポケモンにエネルギーがついているなら、20ダメージ追加。",
			},
		},
		{
			name: { ja: "はねまわる" },
			damage: 50,
			cost: ["Lightning", "Colorless"],
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],

	variants: {
		normal: false,
		reverse: false,
		holo: true,
		firstEdition: false,
	},

	retreat: 2,
	regulationMark: "I",
	rarity: "Illustration rare",
	dexId: [618],
};

export default card;
