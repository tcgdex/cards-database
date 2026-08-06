import { Card } from "../../../interfaces";
import Set from "../SV-P";

const card: Card = {
	set: Set,
	name: {
		ja: "ミミッキュ",
	},

	illustrator: "Kagemaru Himeno",
	category: "Pokemon",
	hp: 70,
	types: ["Psychic"],

	description: {
		ja: "陽の 当たらない 暗がりに 棲む。 人前に 出るときは ピカチュウに 似せた 布で 全身を 隠す。",
	},

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: { ja: "しんぴのまもり" },
			effect: {
				ja: "このポケモンは、相手の「ポケモンex・V」からワザのダメージを受けない。",
			},
		},
	],

	attacks: [
		{
			name: { ja: "ゴーストアイ" },
			cost: ["Psychic", "Colorless"],
			effect: {
				ja: "相手のバトルポケモンに、ダメカンを7個のせる。",
			},
		},
	],

	weaknesses: [{ type: "Metal", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 766672,
				tcgplayer: 587899,
			},
		},
	],

	retreat: 1,
	regulationMark: "H",
	rarity: "Promo",
	dexId: [778],
};

export default card;
