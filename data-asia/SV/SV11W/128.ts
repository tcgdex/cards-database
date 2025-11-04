import { Card } from "../../../interfaces";
import Set from "../SV11W";

const card: Card = {
	set: Set,
	name: {
		ja: "ダゲキ",
	},

	illustrator: "nagimiso",
	category: "Pokemon",
	hp: 110,
	types: ["Fighting"],

	description: {
		ja: "ダゲキが 修業する 山から 大岩や 大木に こぶしを 打ちつける 音が 聞こえてくる。",
	},

	stage: "Basic",

	attacks: [
		{ name: { ja: "ひじうち" }, damage: 30, cost: ["Fighting"] },
		{
			name: { ja: "ライジングチョップ" },
			damage: 90,
			cost: ["Fighting"],
			effect: {
				ja: "相手のバトルポケモンが「ポケモンex」でないなら、このワザは失敗。このワザのダメージは弱点・抵抗力を計算しない。",
			},
		},
	],

	weaknesses: [{ type: "Psychic", value: "x2" }],

	variants: {
		normal: false,
		reverse: false,
		holo: true,
		firstEdition: false,
	},

	retreat: 1,
	regulationMark: "I",
	rarity: "Illustration rare",
	dexId: [539],
};

export default card;
