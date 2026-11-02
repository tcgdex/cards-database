import { Card } from "../../../interfaces";
import Set from "../M6a";

const card: Card = {
	set: Set,
	name: {
		ja: "ジャランゴ",
	},

	illustrator: "Jiro Sasumo",
	category: "Pokemon",
	hp: 90,
	types: ["Dragon"],

	description: {
		ja: "ウロコを 力強く 叩きながら 踊り 自らを ふるい立たせる。 雄叫びは 戦いの 合図。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "するどいキバ" },
			damage: 20,
			cost: ["Colorless"],
		},
		{
			name: { ja: "ドラゴンクロー" },
			damage: 70,
			cost: ["Lightning", "Fighting"],
		},
	],

	weaknesses: [],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 908268,
			},
		},
	],

	evolveFrom: {
		ja: "ジャラコ",
	},

	retreat: 2,
	regulationMark: "J",
	rarity: "None",
	dexId: [783],
};

export default card;
