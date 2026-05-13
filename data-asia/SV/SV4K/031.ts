import { Card } from "../../../interfaces"
import Set from "../SV4K"

const card: Card = {
	set: Set,

	name: {
		ja: "デスカーンex",
		'zh-tw': "死神棺ex",
		th: "เดธคานex",
		ko: "데스니칸 ex"
	},

	illustrator: "kawayoo",
	rarity: "Double rare",
	category: "Pokemon",
	hp: 260,
	types: ["Psychic"],
	stage: "Stage1",
	suffix: "EX",

	abilities: [{
		type: "Ability",

		name: {
			ja: "こがねのひつぎ",
			'zh-tw': "金色棺木",
			th: "โลงทอง",
			ko: "황금 관"
		},

		effect: {
			ja: "このポケモンが、相手のポケモンからワザのダメージを受けてきぜつしたとき、自分の山札から好きなカードを1枚選び、手札に加える。そして山札を切る。",
			'zh-tw': "這隻寶可夢受到對手的寶可夢招式的傷害而【昏厥】時，從自己的牌庫任意選擇1張卡加入手牌。並且重洗牌庫。",
			th: "เมื่อโปเกมอนนี้ ได้รับแดเมจของท่าต่อสู้จากโปเกมอนฝ่ายตรงข้ามและ[หมดสภาพ]แล้ว เลือกการ์ดที่ชอบ 1 ใบจากสำรับการ์ดฝ่ายเรา นำขึ้นมือ แล้วสับสำรับการ์ด",
			ko: "이 포켓몬이 상대의 포켓몬으로부터 기술의 데미지를 받아 기절했을 때 자신의 덱에서 원하는 카드를 1장 선택해서 패로 가져온다. 그리고 덱을 섞는다."
		}
	}],

	attacks: [{
		cost: ["Psychic", "Psychic"],

		name: {
			ja: "ホロウハンズ",
			'zh-tw': "陰森之手",
			th: "ฮอลโลว์แฮนด์",
			ko: "할로우핸즈"
		},

		damage: 110,

		effect: {
			ja: "ダメカン5個を、相手のベンチポケモンに好きなようにのせる。",
			'zh-tw': "將5個傷害指示物以任意方式放置於對手的備戰寶可夢身上。",
			th: "วางตัวนับแดเมจ 5 ตัว บนโปเกมอนบนเบนช์ฝ่ายตรงข้ามตามชอบ",
			ko: "데미지 카운터 5개를 상대의 벤치 포켓몬에게 원하는 대로 올린다."
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

	retreat: 2,
	regulationMark: "G",

	thirdParty: {
		cardmarket: 741354
	}
}

export default card