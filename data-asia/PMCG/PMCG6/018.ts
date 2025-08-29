import { Card } from "../../../interfaces"
import Set from "../PMCG6"

const card: Card = {
	set: Set,
	name: {
		ja: "コガのビードリル",
	},

	rarity: "Holo Rare",
	category: "Pokemon",
	dexId: [15],
	hp: 80,
	types: ["Grass"],
	stage: "Stage2",

	attacks: [
		{
			cost: ["Grass", "Grass"],
			name: {
				ja: "神経毒",
			},
			effect: {
				ja: "コインをひっくり返します。頭の場合、防御するポケモンは今や麻痺し、毒されます。",
			},
			damage: 20,
		},
		{
			cost: ["Colorless", "Colorless", "Colorless"],
			name: {
				ja: "ハイパー針",
			},
			effect: {
				ja: "コインをひっくり返します。尾の場合、この攻撃は何もしません。いずれにせよ、KogaのBeedrillが遊び続ける限り、この攻撃を再び使用することはできません（KogaのBeedrillをベンチに置くことでも、再び使用できません）。",
			},
			damage: 70,
		},
	],


	variants: [
		{
			type: "holo",
		},
	],
};

export default card
