import { Card } from "../../../interfaces"
import Set from "../M1S"

const card: Card = {
	set: Set,
	name: {
		ja: "ヌケニン"
	},
	illustrator: "IKEDA Saki",
	category: "Pokemon",
	hp: 60,
	types: ["Psychic"],
	description: {
		ja: "ハネを動かさずに飛びまわる。体の中は空っぽで息をしない不思議なポケモン。"
	},
	stage: "Basic",
	abilities: [{
		type: "Ability",
		name: {
			ja: "もろいぬけがら"
		},
		effect: {
			ja: "このポケモンが、相手の「ポケモンex」からワザのダメージを受けてきぜつしても、相手はサイドをとれない。"
		}
	}],
	attacks: [{
		name: {
			ja: "ダメージビート"
		},
		damage: "20×",
		effect: {
			ja: "相手のバトルポケモンにのっているダメカンの数×20ダメージ。"
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
	retreat: 0,
	regulationMark: "I",
	rarity: "Uncommon",
	dexId: [292]
}

export default card
