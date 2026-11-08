import { Card } from "models/database/card"
import Set from "../SV4a"

const card: Card = {
	set: Set,

	name: {
		'ja-jp': "マネネ",
		'zh-tw': "魔尼尼",
		'th-th': "มาเนเน",
		'id-id': "Mime Jr."
	},

	illustrator: "HYOGONOSUKE",
	category: "Pokemon",
	dexId: [439],
	hp: 30,
	types: ["Psychic"],

	description: {
		'ja-jp': "相手の 動きを そっくりに 真似を して 戸惑わせている あいだに さっさと 逃げるのだ。",
		'zh-tw': "可以分毫不差地模仿對手的動作，趁對手迷惑的時候迅速逃走。",
		'th-th': "จะเลียนแบบการเคลื่อนไหวของอีกฝ่ายให้เหมือนเปี๊ยบ และในช่วงที่อีกฝ่ายกำลังสับสนก็จะรีบหนีไป",
		'id-id': "Mime Jr. menirukan gerakan lawan dengan mirip. Ia langsung melarikan diri ketika lawan tersebut jadi bingung olehnya."
	},

	stage: "Basic",

	attacks: [{


		name: {
			'ja-jp': "マネマネごっこ",
			'zh-tw': "扮家家酒",
			'th-th': "ติ๊ต่าง",
			'id-id': "Main Mime Mime"
		},

		effect: {
			'ja-jp': "相手は相手自身の場のポケモンが持っているワザを1つ選ぶ。選ばれたワザをこのワザとして使う。",
			'zh-tw': "對手選擇對手自己的場上寶可夢持有的1個招式。被選擇的招式作為這個招式使用。",
			'th-th': "ฝ่ายตรงข้ามเลือกท่าต่อสู้ที่โปเกมอนบนกระดานฝ่ายตรงข้ามเองมี 1 ท่า นำท่าต่อสู้ที่ถูกเลือกไว้มาใช้เป็นท่าต่อสู้นี้ได้",
			'id-id': "Lawan memilih 1 serangan yang dimiliki Pokémon di Arenanya. Gunakan serangan yang telah dipilih sebagai serangan ini."
		}
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
			type: "normal",
			thirdParty: {
				cardmarket: 746467,
				tcgplayer: 567481,
			},
		},
		{
			type: "reverse",
			thirdParty: {
				tcgplayer: 577344,
			},
		},
	],

	retreat: 0,
	regulationMark: "G"
}

export default card