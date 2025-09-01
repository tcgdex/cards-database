import { Card } from "../../../interfaces"
import Set from "../PCG4"

const card: Card = {
	set: Set,
	name: {
		ja: "Espeon Ex",
	},

	rarity: "Holo Rare",
	category: "Pokemon",
	dexId: [196],
	hp: 110,
	types: ["Psychic"],
	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: {
				ja: "デボフラッシュ",
			},
			effect: {
				ja: "ターン中に、Pokã©Monの1つを進化させるためにEspeon Exをプレイすると、相手のベンチで1つの進化したPokã©Monを選択し、そのPokã©Monから最高のステージ進化カードを削除し、それを手に戻します。",
			},
		}],

	attacks: [
		{
			cost: ["Colorless", "Colorless"],
			name: {
				ja: "スナップテール",
			},
			effect: {
				ja: "対戦相手のポケモンを1つ選択します。この攻撃は、そのポケモンに30のダメージを与えます。 （ベンチポケモンに衰弱と抵抗を適用しないでください。）",
			},
		},
		{
			cost: ["Psychic", "Colorless", "Colorless"],
			name: {
				ja: "ピループ",
			},
			effect: {
				ja: "対戦相手がプレイしているトレーナーカードごとに60のダメージと30のダメージを与えます。",
			},
		},
	],


	variants: [
		{
			type: "holo",
			stamp: ["1st edition"],
		},
		{
			type: "holo",
			subtype: "unlimited",
		},
	],
};

export default card
