import { Card } from "models/database/card"
import Set from "../M1S"

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "メガガルーラex"
	},
	illustrator: "GOTO minori",
	category: "Pokemon",
	hp: 300,
	types: ["Colorless"],
	stage: "Basic",
	abilities: [{
		type: "Ability",
		name: {
			'ja-jp': "おつかいダッシュ"
		},
		effect: {
			'ja-jp': "このポケモンがバトル場にいるなら、自分の番に1回使える。自分の山札を2枚引く。この特性は別の「おつかいダッシュ」を使った番は使えない。"
		}
	}],
	attacks: [{
		name: {
			'ja-jp': "マシンガンコンボ"
		},
		damage: "200+",
		effect: {
			'ja-jp': "ウラが出るまでコインを投げ、オモテの数×50ダメージ追加。"
		},
		cost: ["Colorless", "Colorless", "Colorless"]
	}],
	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],
	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 840648,
				tcgplayer: 647240,
			},
		},
	],

	retreat: 3,
	regulationMark: "I",
	rarity: "Special illustration rare",
	suffix: "EX",
	dexId: [115]
}

export default card
