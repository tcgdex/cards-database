import { Card } from "../../../interfaces";
import Set from "../S8b";

const card: Card = {
	set: Set,
	name: {
		ja: "カラマネロ",
	},

	illustrator: "Fumie Kittaka",
	category: "Pokemon",
	hp: 120,
	types: ["Psychic"],

	description: {
		ja: "歴史を 変えるほどの 大事件は カラマネロの 催眠能力が かかわっていたと いわれている。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "れんげきテンタクル" },
			damage: "40×",
			cost: ["Psychic"],
			effect: {
				ja: "自分の手札から「れんげき」のカードを好きなだけ相手に見せて、その枚数×40ダメージ。その後、見せた「れんげき」のカードを山札にもどして切る。",
			},
		},
	],

	weaknesses: [{ type: "Darkness", value: "x2" }],
	resistances: [{ type: "Fighting", value: "-30" }],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 586938,
				tcgplayer: 571451,
			},
		},
	],

	evolveFrom: {
		ja: "マーイーカ",
	},

	retreat: 3,
	regulationMark: "E",
	rarity: "Character Rare",
	dexId: [687],
};

export default card;
