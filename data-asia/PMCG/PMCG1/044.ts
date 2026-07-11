import { Card } from "../../../interfaces"
import Set from "../PMCG1"

const card: Card = {
	set: Set,
	name: {
		// Gastly
		ja: "ゴース",
	},

	rarity: "Common",
	category: "Pokemon",
	dexId: [92],
	hp: 30,
	types: ["Psychic"],
	stage: "Basic",

	attacks: [
		{
			cost: ["Psychic"],
			name: {
				ja: "睡眠ガス",
			},
			effect: {
				ja: "コインをひっくり返します。頭の場合、防御するポケモンは今眠っています。",
			},

		},
		{
			cost: ["Psychic", "Colorless"],
			name: {
				ja: "Destiny Bond",
			},
			effect: {
				ja: "この攻撃を使用するために、ガストリーに取り付けられた1つのサイキックエネルギーカードを捨てます。相手の次のターン中にポケモンが激しくノックアウトした場合、そのポケモンをノックアウトします。",
			},

		},
	],


	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 575578
			},
		},
		{
			type: "normal",
			subtype: "no-rarity",
			thirdParty: {
				tcgplayer: 577005
			}
		}
	],
};

export default card
