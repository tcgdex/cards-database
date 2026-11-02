import { Card } from "../../../interfaces";
import Set from "../M6";

const card: Card = {
	set: Set,
	name: {
		ja: "ジャランゴ",
	},

	illustrator: "Scav",
	category: "Pokemon",
	hp: 100,
	types: ["Dragon"],

	description: {
		ja: "ウロコを 力強く 叩きながら 踊り 自らを ふるい立たせる。 雄叫びは 戦いの 合図。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "ダブルスマッシュ" },
			damage: "70×",
			cost: ["Lightning", "Fighting"],
			effect: {
				ja: "コインを2回投げ、オモテの数×70ダメージ。",
			},
		},
	],

	weaknesses: [],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 899954,
				tcgplayer: 709204,
			},
		},
	],

	evolveFrom: {
		ja: "ジャラコ",
	},

	retreat: 2,
	regulationMark: "J",
	rarity: "Common",
	dexId: [783],
};

export default card;
