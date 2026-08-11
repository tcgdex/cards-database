import { Card } from "models/database/card";
import Set from "../SV11W";

const card: Card = {
	set: Set,

	name: {
		'ja-jp': "ダイケンキ",
	},

	illustrator: "rika",
	category: "Pokemon",
	hp: 160,
	types: ["Water"],

	description: {
		'ja-jp': "よろいに 仕込まれた 剣の 一振りで 相手を 倒す。 ひとにらみで 敵を 黙らせる。",
	},

	stage: "Stage2",

	abilities: [
		{
			type: "Ability",
			name: { ja: "げきりゅうのうず" },
			effect: {
				'ja-jp': "自分の番に1回使える。自分のバトルポケモンをベンチポケモンと入れ替える。その後、相手は相手自身のバトルポケモンをベンチポケモンと入れ替える。",
			},
		},
	],

	attacks: [
		{
			name: { ja: "エナジースラッシュ" },
			damage: "30+",
			cost: ["Water"],
			effect: {
				'ja-jp': "このポケモンについているエネルギーの数×50ダメージ追加。",
			},
		},
	],

	weaknesses: [{ type: "Lightning", value: "×2" }],

	variants: [
		{
			type: "holo",
		},
		{
			type: "reverse",
			foil: "pokeball",
		},
		{
			type: "reverse",
			foil: "masterball",
		},
	],

	evolveFrom: {
		'ja-jp': "フタチマル",
	},

	retreat: 2,
	regulationMark: "I",
	rarity: "Rare",
	dexId: [503],

	thirdParty: {
		cardmarket: 829022,
		tcgplayer: 636573,
	},
};

export default card;
