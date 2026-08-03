import { Card } from "../../../interfaces";
import Set from "../S10P";

const card: Card = {
	set: Set,
	name: {
		ja: "ヒードランV",
	},

	illustrator: "Studio Bora Inc.",
	category: "Pokemon",
	hp: 220,
	types: ["Fire"],

	stage: "Basic",

	attacks: [
		{
			name: { ja: "ねつでこがす" },
			damage: 30,
			cost: ["Fire", "Colorless"],
			effect: {
				ja: "相手のバトルポケモンをやけどにする。",
			},
		},
		{
			name: { ja: "マグマフォール" },
			damage: "90+",
			cost: ["Fire", "Fire", "Colorless"],
			effect: {
				ja: "場に自分のスタジアムが出ているなら、90ダメージ追加。",
			},
		},
	],

	weaknesses: [{ type: "Water", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 651335,
				tcgplayer: 569915,
			},
		},
	],

	retreat: 3,
	regulationMark: "F",
	rarity: "Ultra Rare",
	dexId: [485],
};

export default card;
