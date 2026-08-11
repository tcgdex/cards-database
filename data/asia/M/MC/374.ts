import { Card } from "models/database/card";
import Set from "../MC";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "レジロックex",
	},

	illustrator: "Nisota Niso",
	category: "Pokemon",
	hp: 230,
	types: ["Fighting"],

	stage: "Basic",

	attacks: [
		{
			name: { ja: "レジチャージ" },
			cost: ["Colorless"],
			effect: {
				'ja-jp': "自分のトラッシュから「基本[F]エネルギー」を2枚まで選び、このポケモンにつける。",
			},
		},
		{
			name: { ja: "ジャイアントロック" },
			damage: "140+",
			cost: ["Fighting", "Colorless", "Colorless", "Colorless"],
			effect: {
				'ja-jp': "相手のバトルポケモンが2進化ポケモンなら、140ダメージ追加。",
			},
		},
	],

	weaknesses: [{ type: "Grass", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 863676,
			},
		},
	],

	retreat: 3,
	regulationMark: "I",
	rarity: "None",
	dexId: [377],

	suffix: "EX",
};

export default card;
