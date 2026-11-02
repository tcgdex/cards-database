import { Card } from "../../../interfaces";
import Set from "../SV6a";

const card: Card = {
	set: Set,
	name: {
		ja: "ヨノワール",
		'zh-tw': "黑夜魔靈",
	},

	illustrator: "danciao",
	category: "Pokemon",
	hp: 160,
	types: ["Psychic"],

	description: {
		ja: "この世と あの世を 行ったり来たり。 さまよう 魂を 吸い込んで 運ぶと いわれ 恐れられている。",
		'zh-tw': "在這個世界與另一個世界間往返。 據說會吸入並帶走遊蕩的靈魂， 因此遭到人們畏懼。",
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
			name: {
				ja: "かげしばり",
				'zh-tw': "‌[特性]咒詛炸彈",
			},
			damage: 150,
			cost: ["Psychic", "Psychic", "Colorless"],
			effect: {
				ja: "次の相手の番、このワザを受けたポケモンは、にげられない。",
				'zh-tw': "在自己的回合時可使用1次，若使用，則將這隻寶可夢【昏厥】。在對手的1隻寶可夢身上放置13個傷害指示物。",
			},
		},
	],

	weaknesses: [{ type: "Darkness", value: "x2" }],
	resistances: [{ type: "Fighting", value: "-30" }],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 773769,
				tcgplayer: 566271,
			},
		},
	],

	evolveFrom: {
		ja: "サマヨール",
	},

	retreat: 3,
	regulationMark: "H",
	rarity: "Rare",
	dexId: [477],
};

export default card;
