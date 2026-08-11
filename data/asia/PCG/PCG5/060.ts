import { Card } from "../../../interfaces"
import Set from "../PCG5"

const card: Card = {
	set: Set,
	name: {
		ja: "アエロダクチル",
	},

	rarity: "Holo Rare",
	category: "Pokemon",
	dexId: [142],
	hp: 70,
	types: ["Colorless"],
	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: {
				ja: "反応性保護",
			},
			effect: {
				ja: "対戦相手のPokã©Monからの攻撃によってAerodactylに与えられた損傷は、Aerodactylに取り付けられた各Reactエネルギーカードに対して（脱力感と抵抗を適用した後）10削減されます。",
			},
		}],

	attacks: [
		{
			cost: ["Colorless"],
			name: {
				ja: "パワーブロー",
			},
			effect: {
				ja: "アエロダクチルに付着した各エネルギーに対して、10ダメージに加えて10ダメージを与えます。",
			},
		},
		{
			cost: ["Colorless", "Colorless", "Colorless"],
			name: {
				ja: "スピードストローク",
			},
			effect: {
				ja: "対戦相手の次のターン中に、対戦相手のポケモンエクスからの攻撃によってアエロダクチルに行われる損傷を含むすべての効果を防​​ぎます。",
			},
			damage: 40,
		},
	],


	variants: [
		{
			type: "normal",
			subtype: "unlimited",
		},
		{
			type: "normal",
			stamp: ["1st edition"],
		},
	],
};

export default card
