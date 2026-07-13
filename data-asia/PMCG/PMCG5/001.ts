import { Card } from "../../../interfaces"
import Set from "../PMCG5"

const card: Card = {
	set: Set,
	name: {
		// Brock's Zubat
		ja: "タケシのズバット",
	},

	rarity: "Common",
	category: "Pokemon",
	dexId: [41],
	hp: 40,
	types: ["Grass"],
	stage: "Basic",

	attacks: [
		{
			cost: ["Colorless"],
			name: {
				ja: "翼攻撃",
			},
			damage: 10,
		},
		{
			cost: ["Grass", "Colorless"],
			name: {
				ja: "毒の牙",
			},
			effect: {
				ja: "コインをひっくり返します。頭の場合、防御ポケモンは現在毒されています。",
			},
			damage: 20,
		},
	],


	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 576770
			},
		},
	],
};

export default card
