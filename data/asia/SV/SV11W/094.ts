import { Card } from "models/database/card";
import Set from "../SV11W";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "アギルダー",
	},

	illustrator: "Taiga Kasai",
	category: "Pokemon",
	hp: 100,
	types: ["Grass"],

	description: {
		'ja-jp': "体が 乾くと 弱ってしまう。 薄い 膜を 何重も 巻いて 乾燥を 防いでいるのだ。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "アシッドボム" },
			damage: 50,
			cost: ["Grass"],
			effect: {
				'ja-jp': "コインを1回投げオモテなら、相手のバトルポケモンについているエネルギーを1個選び、トラッシュする。",
			},
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],

	variants: [
		{
			type: "holo",
		},
	],

	evolveFrom: {
		'ja-jp': "チョボマキ",
	},

	retreat: 1,
	regulationMark: "I",
	rarity: "Illustration rare",
	dexId: [617],
	thirdParty: {
		cardmarket: 829449,
		tcgplayer: 636647,
	},
};

export default card;
