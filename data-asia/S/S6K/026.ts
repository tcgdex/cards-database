import { Card } from "../../../interfaces";
import Set from "../S6K";

const card: Card = {
	set: Set,
	name: {
		ja: "ゴースト",
		'zh-tw': "鬼斯通",
	},

	illustrator: "Kagemaru Himeno",
	category: "Pokemon",
	hp: 80,
	types: ["Psychic"],

	description: {
		ja: "暗闇で だれもいないのに 見られているような 気がしたら そこに ゴーストが いるのだ。",
		'zh-tw': "如果黑暗中空無一人，但你卻感覺被什麼盯上了，那麼鬼斯通一定就在那裡。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: {
				ja: "おにび",
				'zh-tw': "鬼火",
			},
			damage: 30,
			cost: ["Psychic"],
		},
	],

	weaknesses: [{ type: "Darkness", value: "x2" }],
	resistances: [{ type: "Fighting", value: "-30" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 560775,
				tcgplayer: 569254,
			},
		},
	],

	evolveFrom: {
		ja: "ゴース",
	},

	retreat: 1,
	regulationMark: "E",
	rarity: "Uncommon",
	dexId: [93],
};

export default card;
