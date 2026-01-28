import { Card } from "../../../interfaces"
import Set from "../M1S"

const card: Card = {
	set: Set,
	name: {
		ja: "メガガルーラex"
	},
	illustrator: "5ban Graphics",
	category: "Pokemon",
	hp: 300,
	types: ["Colorless"],
	stage: "Basic",
	abilities: [{
		type: "Ability",
		name: {
			ja: "おつかいダッシュ"
		},
		effect: {
			ja: "このポケモンがバトル場にいるなら、自分の番に1回使える。自分の山札を2枚引く。この特性は別の「おつかいダッシュ」を使った番は使えない。"
		}
	}],
	attacks: [{
		name: {
			ja: "マシンガンコンボ"
		},
		damage: "200+",
		effect: {
			ja: "ウラが出るまでコインを投げ、オモテの数×50ダメージ追加。"
		},
		cost: ["Colorless", "Colorless", "Colorless"]
	}],
	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],
	retreat: 3,
	regulationMark: "I",
	rarity: "Secret Rare",
	suffix: "EX",
	dexId: [115]
}

export default card
