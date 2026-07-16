import { Card } from "../../../interfaces";
import Set from "../SM11";

const card: Card = {
	set: Set,
	name: {
		ja: "テラキオン",
	},

	illustrator: "Anesaki Dynamic",
	category: "Pokemon",
	hp: 140,
	types: ["Fighting"],

	description: {
		ja: "巨大な 城壁を 一撃で 突破するほどの 突進力。 伝説で 語られる ポケモン。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "がんくつおう" },
			damage: "50+",
			cost: ["Fighting", "Colorless", "Colorless"],
			effect: {
				ja: "自分のベンチポケモン全員にダメカンがのっているなら、150ダメージ追加。",
			},
		},
		{
			name: { ja: "ロックスマッシュ" },
			damage: 110,
			cost: ["Fighting", "Fighting", "Colorless", "Colorless"],
		},
	],

	weaknesses: [{ type: "Grass", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 557015,
			},
		},
	],

	retreat: 4,
	regulationMark: "C",
	rarity: "Rare",
	dexId: [639],
};

export default card;
