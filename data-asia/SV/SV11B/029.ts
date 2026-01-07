import { Card } from "../../../interfaces";
import Set from "../SV11B";

const card: Card = {
	set: Set,
	name: {
		ja: "ツンベアー",
	},

	illustrator: "OOYAMA",
	category: "Pokemon",
	hp: 150,
	types: ["Water"],

	description: {
		ja: "吐く 息を 自在に 凍らせる。 泳ぎが 得意で 北の 海を 泳ぎまわり 獲物を 捕まえる。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "れんぞくずつき" },
			damage: "50x",
			cost: ["Colorless"],
			effect: {
				ja: "ウラが出るまでコインを投げ、オモテの数×50ダメージ。",
			},
		},
		{
			name: { ja: "ぜったいれいど" },
			damage: 150,
			cost: ["Water", "Water", "Water", "Colorless"],
			effect: {
				ja: "次の相手の番、このワザを受けたポケモンは、ワザが使えない。",
			},
		},
	],

	weaknesses: [{ type: "Metal", value: "x2" }],

	variants: {
		normal: false,
		reverse: true,
		holo: true,
		firstEdition: false,
	},

	evolveFrom: {
		ja: "クマシュン",
	},

	retreat: 3,
	regulationMark: "I",
	rarity: "Rare",
	dexId: [614],
};

export default card;
