import { Card } from "../../../interfaces";
import Set from "../S8b";

const card: Card = {
	set: Set,
	name: {
		ja: "レックウザVMAX",
	},

	illustrator: "PLANETA Mochizuki",
	category: "Pokemon",
	hp: 320,
	types: ["Dragon"],

	stage: "VMAX",

	abilities: [
		{
			type: "Ability",
			name: { ja: "そうくうのはどう" },
			effect: {
				ja: "自分の番に1回使える。自分の手札をすべてトラッシュし、山札を3枚引く。",
			},
		},
	],

	attacks: [
		{
			name: { ja: "ダイバースト" },
			damage: "20+",
			cost: ["Fire", "Lightning"],
			effect: {
				ja: "このポケモンについている[炎]または[雷]タイプのどちらかの基本エネルギーを好きなだけトラッシュし、その枚数×80ダメージ追加。",
			},
		},
	],

	weaknesses: [],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 587082,
				tcgplayer: 571535,
			},
		},
	],

	evolveFrom: {
		ja: "レックウザV",
	},

	retreat: 2,
	regulationMark: "E",
	rarity: "Secret Rare",
	dexId: [384],
};

export default card;
