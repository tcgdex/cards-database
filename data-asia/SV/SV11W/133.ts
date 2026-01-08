import { Card } from "../../../interfaces";
import Set from "../SV11W";

const card: Card = {
	set: Set,
	name: {
		ja: "テラキオン",
	},

	illustrator: "Shiburingaru",
	category: "Pokemon",
	hp: 140,
	types: ["Fighting"],

	description: {
		ja: "人間 同士の 戦争によって 住処を 失った ポケモンたちを 守るため 人間と 戦った。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "かたきうち" },
			damage: "50+",
			cost: ["Fighting", "Colorless"],
			effect: {
				ja: "前の相手の番に、ワザのダメージで、自分のポケモンがきぜつしていたなら、80ダメージ追加。",
			},
		},
		{
			name: { ja: "ランドクラッシュ" },
			damage: 100,
			cost: ["Fighting", "Fighting", "Colorless"],
		},
	],

	weaknesses: [{ type: "Grass", value: "x2" }],

	variants: [
		{
			type: "holo",
		},
	],

	retreat: 3,
	regulationMark: "I",
	rarity: "Illustration rare",
	dexId: [639],
	thirdParty: {
		cardmarket: 829492,
		tcgplayer: 636686,
	},
};

export default card;
