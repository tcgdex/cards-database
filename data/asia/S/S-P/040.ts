import { Card } from "models/database/card";
import Set from "../S-P";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "ポットデスV",
	},

	illustrator: "PLANETA Igarashi",
	category: "Pokemon",
	hp: 170,
	types: ["Psychic"],

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: { ja: "びっくりポット" },
			effect: {
				'ja-jp': "このポケモンが、バトル場で相手のポケモンからワザのダメージを受けたとき、相手の手札からオモテを見ないで1枚選び、そのカードのオモテを見てから、相手の山札の下にもどす。",
			},
		},
	],

	attacks: [
		{
			name: { ja: "サイコトリップ" },
			damage: 100,
			cost: ["Psychic", "Colorless", "Colorless"],
			effect: {
				'ja-jp': "相手のバトルポケモンをこんらんにする。",
			},
		},
	],

	weaknesses: [{ type: "Darkness", value: "x2" }],
	resistances: [{ type: "Fighting", value: "-30" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 463114,
				tcgplayer: 597260,
			},
		},
	],

	retreat: 1,
	regulationMark: "D",
	rarity: "Promo",
	dexId: [855],
};

export default card;
