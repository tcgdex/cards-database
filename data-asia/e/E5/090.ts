import { Card } from "../../../interfaces"
import Set from "../E5"

const card: Card = {
	set: Set,
	name: {
		ja: "クロバット",
	},

	rarity: "Secret Rare",
	category: "Pokemon",
	dexId: [169],
	hp: 80,
	types: ["Colorless"],
	stage: "Stage2",

	abilities: [
		{
			type: "Ability",
			name: {
				ja: "クリスタルタイプ",
			},
			effect: {
				ja: "手からクロバットに草、火、またはサイキックの基本エネルギーカードを取り付けると、クロバットのタイプ（色）はターンの終わりまでそのタイプのエネルギーと同じになります。",
			},
		}],

	attacks: [
		{
			cost: ["Grass", "Fire", "Colorless"],
			name: {
				ja: "毒の炎",
			},
			effect: {
				ja: "コインをひっくり返します。頭の場合、防御するポケモンは燃やされ、毒されます。",
			},
			damage: 20,
		},
		{
			cost: ["Grass", "Psychic", "Psychic"],
			name: {
				ja: "四角い攻撃",
			},
			effect: {
				ja: "4コインをひっくり返します。この攻撃は、ヘッド数の20倍のダメージを与えます。",
			},
		},
	],


	variants: [
		{
			type: "holo",
			subtype: "unlimited",

		},
		{
			type: "holo",
			stamp: ["1st Edition"],
		},
	],
};

export default card
