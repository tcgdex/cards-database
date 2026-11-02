import { Card } from "../../../interfaces";
import Set from "../S11a";

const card: Card = {
	set: Set,
	name: {
		ja: "ルージュラ",
	},

	illustrator: "HYOGONOSUKE",
	category: "Pokemon",
	hp: 100,
	types: ["Psychic"],

	description: {
		ja: "ガラルの とある 地域では 氷の 女王と 呼んで ルージュラを 恐れ崇めていた。",
	},

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: { ja: "わがままリップ" },
			effect: {
				ja: "このポケモンが、相手の「ポケモンV」からワザのダメージを受けてきぜつしても、相手はサイドをとれない。",
			},
		},
	],

	attacks: [
		{
			name: { ja: "サイコダメージ" },
			damage: "10+",
			cost: ["Colorless", "Colorless"],
			effect: {
				ja: "相手のバトルポケモンにのっているダメカンの数×10ダメージ追加。",
			},
		},
	],

	weaknesses: [{ type: "Darkness", value: "x2" }],
	resistances: [{ type: "Fighting", value: "-30" }],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 673388,
				tcgplayer: 570834,
			},
		},
	],

	retreat: 2,
	regulationMark: "F",
	rarity: "Character Rare",
	dexId: [124],
};

export default card;
