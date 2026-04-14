import { Card } from "../../../interfaces"
import Set from "../M1S"

const card: Card = {
	set: Set,
	name: {
		ja: "バネブー"
	},
	illustrator: "toi8",
	category: "Pokemon",
	hp: 70,
	types: ["Psychic"],
	description: {
		ja: "跳ねていないと死んでしまう。頭に乗せている真珠がサイコパワーを増幅させるのだ。"
	},
	stage: "Basic",
	attacks: [{
		name: {
			ja: "トリプルスピン"
		},
		damage: "10×",
		effect: {
			ja: "コインを3回投げ、オモテの数×10ダメージ。"
		},
		cost: ["Psychic"]
	}],
	weaknesses: [{
		type: "Darkness",
		value: "×2"
	}],
	resistances: [{
		type: "Fighting",
		value: "-30"
	}],
	retreat: 1,
	regulationMark: "I",
	rarity: "Common",
	dexId: [325]
}

export default card
