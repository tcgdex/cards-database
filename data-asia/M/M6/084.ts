import { Card } from "../../../interfaces";
import Set from "../M6";

const card: Card = {
	set: Set,
	name: {
		ja: "グラードン",
	},

	illustrator: "Ryota Murayama",
	category: "Pokemon",
	hp: 150,
	types: ["Fighting"],

	description: {
		ja: "高熱で 水を 蒸発させて 大地を 広げたと 言われている。 カイオーガと 激しく 戦った。"
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "かいりき" },
			damage: 40,
			cost: ["Fighting", "Colorless"],
		},
		{
			name: { ja: "あらぶるだいち" },
			damage: "100+",
			cost: ["Fighting", "Fighting", "Colorless"],
			effect: {
				ja: "名前に「伝説」とつくスタジアムが場に出ているなら、170ダメージ追加。",
			},
		},
	],

	weaknesses: [{ type: "Grass", value: "×2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 900110,
				tcgplayer: 709237,
				cardtrader: 403167,
			},
		},
	],

	retreat: 4,
	regulationMark: "J",
	rarity: "Illustration rare",
	dexId: [383],
};

export default card;
