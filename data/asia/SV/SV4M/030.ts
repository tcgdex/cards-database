import { Card } from "models/database/card"
import Set from "../SV4M"

const card: Card = {
	set: Set,

	name: {
		'ja-jp': "パンプジン",
		'zh-tw': "南瓜怪人",
		'th-th': "พัมพ์จิน",
		'ko-kr': "펌킨인"
	},

	illustrator: "nisimono",
	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [711],
	hp: 110,
	types: ["Psychic"],

	description: {
		'ja-jp': "新月の 夜 玄関の ドアを パンプジンが ノックする。 開けた 人を あの世へ 連れて行くのだ。",
		'zh-tw': "南瓜怪人會在朔月的夜裡去別人家門口敲門。開了門的人會被牠帶往另一個世界。",
		'th-th': "พัมพ์จินจะมาเคาะประตูบ้านในคืนพระจันทร์ข้างขึ้น ใครที่เปิดประตูจะถูกพาไปยังโลกหลังความตาย",
		'ko-kr': "초승달이 뜨는 밤이 되면 펌킨인이 현관문을 노크한다. 그리고는 열어준 사람을 저세상으로 데리고 간다."
	},

	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			'ja-jp': "どっきりパンプキン",
			'zh-tw': "整人南瓜",
			'th-th': "ฟักทองทำสะดุ้ง",
			'ko-kr': "깜짝 펌프킨"
		},

		effect: {
			'ja-jp': "このポケモンが、相手のポケモンからワザのダメージを受けてきぜつしたとき、相手の手札からオモテを見ないで2枚選び、トラッシュする。",
			'zh-tw': "這隻寶可夢受到對手的寶可夢招式的傷害而【昏厥】時，在不看正面的情況下，從對手的手牌選擇2張，將其丟棄。",
			'th-th': "เมื่อโปเกมอนนี้ ได้รับแดเมจของท่าต่อสู้จากโปเกมอนฝ่ายตรงข้ามและ[หมดสภาพ]แล้ว เลือกการ์ด 2 ใบจากบนมือฝ่ายตรงข้ามโดยไม่ดูหน้าการ์ด ทิ้งที่ตำแหน่งทิ้งการ์ด",
			'ko-kr': "이 포켓몬이 상대의 포켓몬으로부터 기술의 데미지를 받아 기절했을 때 상대의 패에서 앞면을 보지 않고 2장 선택해서 트래쉬한다."
		}
	}],

	attacks: [{
		cost: ["Psychic", "Colorless", "Colorless"],

		name: {
			'ja-jp': "かげしばり",
			'zh-tw': "影子束縛",
			'th-th': "จับเงา",
			'ko-kr': "그림자묶기"
		},

		damage: 100,

		effect: {
			'ja-jp': "次の相手の番、このワザを受けたポケモンは、にげられない。",
			'zh-tw': "在下個對手的回合，受到這個招式的寶可夢無法撤退。",
			'th-th': "เทิร์นถัดไปของฝ่ายตรงข้าม โปเกมอนที่ได้รับท่าต่อสู้นี้ จะหนีไม่ได้",
			'ko-kr': "상대의 다음 차례에 이 기술을 받은 포켓몬은 후퇴할 수 없다."
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
				cardmarket: 741857,
				tcgplayer: 565990,
			},
		},
	],

	retreat: 2,
	regulationMark: "G",
}

export default card