import { Card } from "models/database/card"
import Set from "../PMCG6"

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "イマクニ？のドードー",
	},
	illustrator: "Tomoaki Imakuni",

	rarity: "Hyper rare",
	category: "Pokemon",
	dexId: [84],
	hp: 50,
	types: ["Colorless"],
	stage: "Basic",

	abilities: [
		{
			type: "Pokemon Power",
			name: {
				'ja-jp': "熱狂的な脱出",
			},
			effect: {
				'ja-jp': "Doduoが退却したら、このカードを持って投げます。Doduoが逃げているからです。スナップでカードを水平に投げて、最も遠い距離を獲得します！",
			},
		}],

	attacks: [
		{
			cost: ["Colorless", "Colorless"],
			name: {
				'ja-jp': "調和します",
			},
			effect: {
				'ja-jp': "この攻撃を使用した瞬間から、歌を歌い始めなければなりません。 （歌が歌われている間、ゲームは続きます。）曲が終了すると、この攻撃は30ダメージを与えます。",
			},
			damage: 30,
		},
	],


	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 575361
			},
		},
	],
};

export default card
