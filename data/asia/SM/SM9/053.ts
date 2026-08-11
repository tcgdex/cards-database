import { Card } from "models/database/card";
import Set from "../SM9";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "オコリザル",
	},

	illustrator: "Anesaki Dynamic",
	category: "Pokemon",
	hp: 90,
	types: ["Fighting"],

	description: {
		'ja-jp': "怒らせた 相手を 許さず 追い続ける。 叩きのめして 動かなくなっても まだ 許さない。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "けたぐり" },
			damage: 30,
			cost: ["Fighting"],
		},
		{
			name: { ja: "ぶちこわす" },
			damage: "80+",
			cost: ["Fighting", "Colorless", "Colorless"],
			effect: {
				'ja-jp': "場にスタジアムが出ているなら、80ダメージ追加。その後、そのスタジアムをトラッシュする。",
			},
		},
	],

	weaknesses: [{ type: "Psychic", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 558379,
			},
		},
	],

	evolveFrom: {
		'ja-jp': "マンキー",
	},

	retreat: 1,
	regulationMark: "C",
	rarity: "Uncommon",
	dexId: [57],
};

export default card;
