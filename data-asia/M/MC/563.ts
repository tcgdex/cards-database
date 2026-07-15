import { Card } from "../../../interfaces";
import Set from "../MC";

const card: Card = {
	set: Set,
	name: {
		ja: "ケンタロス",
	},

	illustrator: "yuu",
	category: "Pokemon",
	hp: 130,
	types: ["Colorless"],

	description: {
		ja: "獲物に 狙いを つけると 尻尾で 体を 叩きながら まっすぐ 突っ込んでくる。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "つのでつく" },
			damage: 30,
			cost: ["Colorless"],
		},
		{
			name: { ja: "クリーンヒット" },
			damage: "50+",
			cost: ["Colorless", "Colorless"],
			effect: {
				ja: "相手のバトルポケモンが進化ポケモンなら、50ダメージ追加。",
			},
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 863865,
			},
		},
	],

	retreat: 2,
	regulationMark: "I",
	rarity: "None",
	dexId: [128],
};

export default card;
