import { Card } from "../../../interfaces";
import Set from "../SV6a";

const card: Card = {
	set: Set,
	name: {
		ja: "ヨノワール",
	},

	illustrator: "James Turner",
	category: "Pokemon",
	hp: 160,
	types: ["Psychic"],

	description: {
		ja: "この世と あの世を 行ったり来たり。 さまよう 魂を 吸い込んで 運ぶと いわれ 恐れられている。",
	},

	stage: "Stage2",

	abilities: [
		{
			type: "Ability",
			name: { ja: "カースドボム" },
			effect: {
				ja: "自分の番に1回使えて、使ったなら、このポケモンをきぜつさせる。相手のポケモン1匹に、ダメカンを13個のせる。",
			},
		},
	],

	attacks: [
		{
			name: { ja: "かげしばり" },
			damage: 150,
			cost: ["Psychic", "Psychic", "Colorless"],
			effect: {
				ja: "次の相手の番、このワザを受けたポケモンは、にげられない。",
			},
		},
	],

	weaknesses: [{ type: "Darkness", value: "x2" }],
	resistances: [{ type: "Fighting", value: "-30" }],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 773819,
				tcgplayer: 566321,
			},
		},
	],

	evolveFrom: {
		ja: "サマヨール",
	},

	retreat: 3,
	regulationMark: "H",
	rarity: "Illustration rare",
	dexId: [477],
};

export default card;
