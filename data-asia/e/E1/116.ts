import { Card } from "../../../interfaces"
import Set from "../E1"

const card: Card = {
	set: Set,
	name: {
		ja: "アラカザム",
	},

	rarity: "Holo Rare",
	category: "Pokemon",
	dexId: [65],
	hp: 100,
	types: ["Psychic"],
	stage: "Stage2",

	abilities: [
		{
			type: "Ability",
			name: {
				ja: "PSYMIMIC",
			},
			effect: {
				ja: "ターン中に、アラカザムの通常の攻撃の代わりに、相手のポクモンの攻撃を1つ選択できます。 Alakazamは、エネルギーカードの廃棄など、その攻撃を使用するために必要なエネルギーコストなどの攻撃をコピーします。 （ポクモンがどんなタイプであっても、アラカザムのタイプはまだ精神的です。）アラカザムが特別な状態の影響を受けている場合、この力は使用できません。",
			},
		}],

	attacks: [
		{
			cost: ["Psychic", "Colorless", "Colorless"],
			name: {
				ja: "シンクロブラスト",
			},
			effect: {
				ja: "Alakazamと防御ポケモンに同じ数のエネルギーカードが添付されていない場合、この攻撃のベースダメージは80ではなく20です。",
			},
			damage: 80,
		},
	],

	retreat: 2,

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
