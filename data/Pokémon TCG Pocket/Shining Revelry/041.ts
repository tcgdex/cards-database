import { Card } from "../../../interfaces"
import Set from "../Shining Revelry"

const card: Card = {
	set: Set,

	name: {
		en: "Hitmonchan",
		fr: "Tygnon",
		es: "Hitmonchan",
		it: "Hitmonchan",
		de: "Nockchan",
		'pt-br': "Hitmonchan",
		ko: "홍수몬"
	},

	illustrator: "Tomokazu Komiya",
	rarity: "One Diamond",
	category: "Pokemon",
	hp: 90,
	types: ["Fighting"],

	description: {
		en: "Its punches slice the air. They are launched at such high speed, even a slight graze could cause a burn.",
		fr: "Ses poings fendent l'air. Ils sont si rapides\nqu'un simple frôlement peut causer une brûlure.",
		es: "Sus puñetazos cortan el aire. Son tan veloces que\nel mínimo roce podría causar una quemadura.",
		it: "I suoi pugni fendono l'aria a una tale velocità che\nbasta venire sfiorati per riportare una scottatura.",
		de: "Seine Fäuste zerschneiden regelrecht die Luft.\nSie sind so schnell, dass selbst die geringste\nBerührung Verbrennungen verursacht.",
		'pt-br': "Seus murros cortam o ar. São tão\nvelozes que um simples toque pode\ncausar uma queimadura.",
		ko: "주변의 공기를 가르는 펀치.\n스치기만 해도 화상을 입을 정도로\n펀치 스피드가 매우 빠르다."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Magnum Punch",
			fr: "Poing Magnum",
			es: "Puño Mágnum",
			it: "Superpugno",
			de: "Magnum-Schlag",
			'pt-br': "Soco Magnum",
			ko: "매그넘펀치"
		},

		damage: 90,
		cost: ["Fighting", "Fighting", "Fighting"]
	}],

	weaknesses: [{
		type: "Psychic",
		value: "+20"
	}],

	retreat: 1
}

export default card