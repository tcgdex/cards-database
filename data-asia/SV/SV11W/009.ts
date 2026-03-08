import { Card } from "../../../interfaces";
import Set from "../SV11W";

const card: Card = {
	set: Set,

	name: {
		ja: "アギルダー",
	},

	illustrator: "Saboteri",
	category: "Pokemon",
	hp: 100,
	types: ["Grass"],

	description: {
		ja: "体が 乾くと 弱ってしまう。 薄い 膜を 何重も 巻いて 乾燥を 防いでいるのだ。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "アシッドボム" },
			damage: 50,
			cost: ["Grass"],
			effect: {
				ja: "コインを1回投げオモテなら、相手のバトルポケモンについているエネルギーを1個選び、トラッシュする。",
			},
		},
	],

	weaknesses: [{ type: "Fire", value: "×2" }],

	variants: [
		{
			type: "normal",
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
		ja: "チョボマキ",
	},

	retreat: 1,
	regulationMark: "I",
	rarity: "Uncommon",
	dexId: [617],

	thirdParty: {
		cardmarket: 828982,
		tcgplayer: 636562,
	},
};

export default card;
