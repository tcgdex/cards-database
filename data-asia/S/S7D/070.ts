import { Card } from "../../../interfaces";
import Set from "../S7D";

const card: Card = {
	set: Set,
	name: {
		ja: "ゴルーグV",
	},

	illustrator: "Oswaldo KATO",
	category: "Pokemon",
	hp: 220,
	types: ["Psychic"],

	stage: "Basic",

	attacks: [
		{
			name: { ja: "メガトンパンチ" },
			damage: 80,
			cost: ["Psychic", "Colorless", "Colorless"],
		},
		{
			name: { ja: "リワインドビーム" },
			damage: 180,
			cost: ["Psychic", "Psychic", "Colorless", "Colorless"],
			effect: {
				ja: "相手の進化しているバトルポケモンから、「進化カード」を1枚はがして退化させる。はがしたカードは、相手の手札にもどす。",
			},
		},
	],

	weaknesses: [{ type: "Darkness", value: "x2" }],
	resistances: [{ type: "Fighting", value: "-30" }],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 572052,
				tcgplayer: 569393,
			},
		},
	],

	retreat: 3,
	regulationMark: "E",
	rarity: "Ultra Rare",
	dexId: [623],
};

export default card;
