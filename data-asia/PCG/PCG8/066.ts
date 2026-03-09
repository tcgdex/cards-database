import { Card } from "../../../interfaces"
import Set from "../PCG8"

const card: Card = {
	set: Set,
	name: {
		ja: "Aggron Ex",
	},

	rarity: "Holo Rare",
	category: "Pokemon",
	dexId: [306],
	hp: 150,
	types: ["Metal"],
	stage: "Stage2",

	abilities: [
		{
			type: "Ability",
			name: {
				ja: "威圧的な鎧",
			},
			effect: {
				ja: "Aggron ExがあなたのアクティブなPokã©Monである限り、あなたの相手の基本的なPokã©Monは、Pokã©PowersまたはPokã©-Bodiesを攻撃または使用することはできません。",
			},
		}],

	attacks: [
		{
			cost: ["Colorless", "Colorless", "Colorless"],
			name: {
				ja: "分割爆弾",
			},
			effect: {
				ja: "対戦相手のポケモンの2つを選択してください。この攻撃は、それぞれに30のダメージを与えます。 （ベンチポケモンに衰弱と抵抗を適用しないでください。）",
			},
		},
		{
			cost: ["Metal", "Metal", "Colorless", "Colorless"],
			name: {
				ja: "メガ・バーン",
			},
			effect: {
				ja: "次のターン中、Aggron ExはMega Burnを使用できません。",
			},
			damage: 100,
		},
	],

	retreat: 4,

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
