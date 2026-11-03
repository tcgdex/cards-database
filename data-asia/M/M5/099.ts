import { Card } from "../../../interfaces";
import Set from "../M5";

const card: Card = {
	set: Set,
	name: {
		ja: "メガダークライex",
	},

	illustrator: "5ban Graphics",
	category: "Pokemon",
	hp: 280,
	types: ["Darkness"],

	stage: "Basic",

	attacks: [
		{
			name: { ja: "ナイトレイド" },
			damage: "110+",
			cost: ["Darkness", "Darkness"],
			effect: {
				ja: "自分のベンチポケモンにダメカンがのっているなら、110ダメージ追加。",
			},
		},
		{
			name: { ja: "アビスアイ" },
			cost: ["Darkness", "Darkness", "Darkness"],
			effect: {
				ja: "相手のバトルポケモンが特殊状態なら、そのポケモンをきぜつさせる。",
			},
		},
	],

	weaknesses: [{ type: "Grass", value: "×2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 888644,
				cardtrader: 391505,
				tcgplayer: 694998,
			},
		},
	],

	retreat: 2,
	regulationMark: "J",
	rarity: "Ultra Rare",
	dexId: [491],

	suffix: "EX",
};

export default card;
