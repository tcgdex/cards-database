import { Card } from "../../../interfaces";
import Set from "../SM3N";

const card: Card = {
	set: Set,
	name: {
		ja: "アローラコラッタ",
	},

	illustrator: "nagimiso",
	category: "Pokemon",
	hp: 40,
	types: ["Darkness"],

	description: {
		ja: "前歯で ドアを かじり 民家に 侵入。 ヒゲを ひくつかせ 餌を 探しだし 盗んでいくぞ。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "きあいだめ" },
			cost: [],
			effect: {
				ja: "次の自分の番、このポケモンの「かみつく」のダメージは「60」になる。",
			},
		},
		{
			name: { ja: "かみつく" },
			damage: 10,
			cost: ["Darkness"],
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [{ type: "Psychic", value: "-20" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 561034,
			},
		},
	],

	retreat: 1,
	rarity: "Common",
	dexId: [19],
};

export default card;
