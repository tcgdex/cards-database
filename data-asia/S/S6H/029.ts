import { Card } from "../../../interfaces";
import Set from "../S6H";

const card: Card = {
	set: Set,
	name: {
		ja: "ガラル ギャロップV",
		'zh-tw': "伽勒爾 烈焰馬V",
	},

	illustrator: "Saki Hayashiro",
	category: "Pokemon",
	hp: 210,
	types: ["Psychic"],

	stage: "Basic",

	attacks: [
		{
			name: {
				ja: "リブラホーン",
				'zh-tw': "電光一閃",
			},
			cost: ["Colorless", "Colorless"],
			effect: {
				ja: "相手のポケモン1匹に、そのポケモンの残りHPが「100」になるように、ダメカンをのせる。",
				'zh-tw': "擲1次硬幣若為正面，則增加20點傷害。",
			},
		},
		{
			name: { ja: "サイコキネシス" },
			damage: "60+",
			cost: ["Psychic", "Psychic"],
			effect: {
				ja: "相手のバトルポケモンについているエネルギーの数×30ダメージ追加。",
			},
		},
	],

	weaknesses: [{ type: "Darkness", value: "x2" }],
	resistances: [{ type: "Fighting", value: "-30" }],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 560445,
				tcgplayer: 569161,
			},
		},
	],

	retreat: 1,
	regulationMark: "E",
	rarity: "Double rare",
	dexId: [78],
};

export default card;
