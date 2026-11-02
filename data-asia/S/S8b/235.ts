import { Card } from "../../../interfaces";
import Set from "../S8b";

const card: Card = {
	set: Set,
	name: {
		ja: "こくばバドレックスV",
	},

	illustrator: "Oswaldo KATO",
	category: "Pokemon",
	hp: 210,
	types: ["Psychic"],

	stage: "Basic",

	attacks: [
		{
			name: { ja: "シャドーミスト" },
			damage: 10,
			cost: ["Psychic"],
			effect: {
				ja: "次の相手の番、相手は手札から、「特殊エネルギー」を出してつけられず「スタジアム」も出せない。",
			},
		},
		{
			name: { ja: "アストラルビット" },
			cost: ["Colorless", "Colorless", "Colorless"],
			effect: {
				ja: "相手のポケモン2匹に、それぞれダメカンを5個のせる。",
			},
		},
	],

	weaknesses: [{ type: "Darkness", value: "x2" }],
	resistances: [{ type: "Fighting", value: "-30" }],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 587033,
				tcgplayer: 571487,
			},
		},
	],

	retreat: 2,
	regulationMark: "E",
	rarity: "Character Super Rare",
	dexId: [898],
};

export default card;
