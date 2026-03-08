import { Card } from "../../../interfaces"
import Set from "../PCG5"

const card: Card = {
	set: Set,
	name: {
		ja: "ピンシル",
	},

	rarity: "Rare",
	category: "Pokemon",
	dexId: [127],
	hp: 70,
	types: ["Grass"],
	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: {
				ja: "輝くホーン",
			},
			effect: {
				ja: "ピンシルがあなたがプレイしている唯一のポカモンである限り、あなたの相手の基本的なポカモンは攻撃できません。",
			},
		}],

	attacks: [
		{
			cost: ["Colorless"],
			name: {
				ja: "助けを求めて泣きます",
			},
			effect: {
				ja: "デッキを検索して、草のポケモン（ポケモンエクスを除く）を検索し、相手に見せて、手に入れてください。その後、デッキをシャッフルします。",
			},
		},
		{
			cost: ["Grass", "Colorless"],
			name: {
				ja: "オーバーヘッドトス",
			},
			effect: {
				ja: "ベンチ付きポケモンの1つに20のダメージを与えます。 （ベンチポケモンに衰弱と抵抗を適用しないでください。）",
			},
			damage: 30,
		},
	],

	retreat: 1,

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
