import { Card } from "../../../interfaces";
import Set from "../SM1M";

const card: Card = {
	set: Set,
	name: {
		ja: "グランブル",
	},

	illustrator: "Suwama Chiaki",
	category: "Pokemon",
	hp: 110,
	types: ["Fairy"],

	description: {
		ja: "ブルー 以上に 臆病。 見た目との ギャップが うけて 若い 女性に 大人気。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "くらいつく" },
			damage: 30,
			cost: ["Fairy"],
			effect: {
				ja: "次の相手の番、このワザを受けたポケモンは、にげられない。",
			},
		},
		{
			name: { ja: "やりかえす" },
			damage: "50+",
			cost: ["Fairy", "Colorless", "Colorless"],
			effect: {
				ja: "このポケモンにダメカンがのっているなら、80ダメージ追加。",
			},
		},
	],

	weaknesses: [{ type: "Metal", value: "x2" }],
	resistances: [{ type: "Darkness", value: "-20" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 561642,
			},
		},
	],

	evolveFrom: {
		ja: "ブルー",
	},

	retreat: 2,
	rarity: "Common",
	dexId: [210],
};

export default card;
