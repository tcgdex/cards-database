import { Card } from "models/database/card"
import Set from "../M1S"

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "ヌケニン"
	},
	illustrator: "Tetsu Kayama",
	category: "Pokemon",
	hp: 60,
	types: ["Psychic"],
	description: {
		'ja-jp': "ハネを動かさずに飛びまわる。体の中は空っぽで息をしない不思議なポケモン。"
	},
	stage: "Basic",
	abilities: [{
		type: "Ability",
		name: {
			'ja-jp': "もろいぬけがら"
		},
		effect: {
			'ja-jp': "このポケモンが、相手の「ポケモンex」からワザのダメージを受けてきぜつしても、相手はサイドをとれない。"
		}
	}],
	attacks: [{
		name: {
			'ja-jp': "ダメージビート"
		},
		damage: "20×",
		effect: {
			'ja-jp': "相手のバトルポケモンにのっているダメカンの数×20ダメージ。"
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
	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 840631,
				tcgplayer: 647230,
			},
		},
	],

	retreat: 0,
	regulationMark: "I",
	rarity: "Illustration rare",
	dexId: [292]
}

export default card
