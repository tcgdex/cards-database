import { Card } from "../../../interfaces";
import Set from "../SV-P";

const card: Card = {
	set: Set,
	name: {
		ja: "ヤンヤンマ",
	},

	illustrator: "Dsuke",
	category: "Pokemon",
	hp: 60,
	types: ["Grass"],

	description: {
		ja: "大きな 目玉は 動かさなくても あらゆる 方向を 見渡せるので 敵や エサも すぐ 見つけられる。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "サイレントウイング" },
			damage: 20,
			cost: ["Grass", "Colorless"],
			effect: {
				ja: "相手の手札を見る。",
			},
		},
	],

	weaknesses: [{ type: "Lightning", value: "x2" }],
	resistances: [{ type: "Fighting", value: "-30" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 587906,
			},
		},
	],

	retreat: 1,
	regulationMark: "H",
	rarity: "Promo",
	dexId: [193],
};

export default card;
