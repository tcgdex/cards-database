import { Card } from "../../../interfaces";
import Set from "../PMCG4";

const card: Card = {
	set: Set,
	name: {
		ja: "わるいリザードン",
	},
	evolveFrom: {
		ja: "わるいリザード",
	},
	illustrator: "Ken Sugimori",
	rarity: "Holo Rare",
	category: "Pokemon",
	dexId: [6],
	hp: 80,
	types: ["Fire"],
	stage: "Stage2",
	level: 38,
	weight: "90.5 kg",

	description: {
		ja: "とりつかれたように炎の塊を吐き出して、あらゆるものを焼きつくそうとする。",
	},

	attacks: [
		{
			cost: ["Colorless"],
			name: {
				ja: "つめではじく",
			},
			damage: 10,
		},
		{
			cost: ["Fire", "Fire"],
			name: {
				ja: "れんぞくファイヤーボール",
			},
			damage: "50×",
			effect: {
				ja: "このカードについている「炎」エネルギーカードの数だけコインを投げ、「おもて」の数×50のダメージ。その後、「おもて」の数ぶんの「炎」エネルギーカードを、このカードからはがしてトラッシュする。（トラッシュできない時、このワザのダメージは0になる）",
			},
		},
	],

	retreat: 3,

	variants: [
		{
			type: "holo",
			thirdParty: {
				tcgplayer: 575744,
			},
		},
	],

	resistances: [
		{
			type: "Fighting",
			value: "-30",
		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "×2",
		},
	],
};

export default card;
