import { Card } from "../../../interfaces"
import Set from "../PMCG6"

const card: Card = {
	set: Set,
	name: {
		ja: "Imakuni？ 's doduo",
	},

	rarity: "Hyper Rare",
	category: "Pokemon",
	dexId: [84],
	hp: 50,
	types: ["Colorless"],
	stage: "Basic",

	abilities: [
		{
			type: "Pokemon Power",
			name: {
				ja: "熱狂的な脱出",
			},
			effect: {
				ja: "Doduoが退却したら、このカードを持って投げます。Doduoが逃げているからです。スナップでカードを水平に投げて、最も遠い距離を獲得します！",
			},
		}],

	attacks: [
		{
			cost: ["Colorless", "Colorless"],
			name: {
				ja: "調和します",
			},
			effect: {
				ja: "この攻撃を使用した瞬間から、歌を歌い始めなければなりません。 （歌が歌われている間、ゲームは続きます。）曲が終了すると、この攻撃は30ダメージを与えます。",
			},
			damage: 30,
		},
	],


	variants: [
		{
			type: "normal",
		},
	],
};

export default card
