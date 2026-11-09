import { Card } from "../../../interfaces";
import Set from "../M6";

const card: Card = {
	set: Set,
	name: {
		ja: "メガゴルーグex",
	},

	illustrator: "5ban Graphics",
	category: "Pokemon",
	hp: 350,
	types: ["Psychic"],

	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: { ja: "きどうせいげん" },
			effect: {
				ja: "自分の手札が10枚以上のときにしか、このポケモンはワザが使えない。",
			},
		},
	],

	attacks: [
		{
			name: { ja: "ゴライアスパンチ" },
			damage: 300,
			cost: ["Psychic", "Psychic"],
			effect: {
				ja: "このポケモンにも30ダメージ。",
			},
		},
	],

	weaknesses: [{ type: "Darkness", value: "×2" }],
	resistances: [{ type: "Fighting", value: "-30" }],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 900126,
				tcgplayer: 709246,
				cardtrader: 403176,
			},
		},
	],

	evolveFrom: {
		ja: "ゴビット",
	},

	retreat: 3,
	regulationMark: "J",
	rarity: "Ultra Rare",
	dexId: [623],

	suffix: "EX",
};

export default card;
