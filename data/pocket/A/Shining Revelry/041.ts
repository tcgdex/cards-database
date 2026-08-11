import { Card } from "models/database/card"
import Set from "../Shining Revelry"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Hitmonchan",
		'fr-fr': "Tygnon",
		'es-es': "Hitmonchan",
		'it-it': "Hitmonchan",
		'de-de': "Nockchan",
		'pt-br': "Hitmonchan",
		'ko-kr': "홍수몬"
	},

	illustrator: "Tomokazu Komiya",
	rarity: "One Diamond",
	category: "Pokemon",

	dexId: [107],
	hp: 90,
	types: ["Fighting"],

	description: {
		'en-us': "Its punches slice the air. They are launched at such high speed, even a slight graze could cause a burn.",
		'fr-fr': "Ses poings fendent l'air. Ils sont si rapides\nqu'un simple frôlement peut causer une brûlure.",
		'es-es': "Sus puñetazos cortan el aire. Son tan veloces que\nel mínimo roce podría causar una quemadura.",
		'it-it': "I suoi pugni fendono l'aria a una tale velocità che\nbasta venire sfiorati per riportare una scottatura.",
		'de-de': "Seine Fäuste zerschneiden regelrecht die Luft.\nSie sind so schnell, dass selbst die geringste\nBerührung Verbrennungen verursacht.",
		'pt-br': "Seus murros cortam o ar. São tão\nvelozes que um simples toque pode\ncausar uma queimadura.",
		'ko-kr': "주변의 공기를 가르는 펀치.\n스치기만 해도 화상을 입을 정도로\n펀치 스피드가 매우 빠르다."
	},

	stage: "Basic",

	attacks: [{
		name: {
			'en-us': "Magnum Punch",
			'fr-fr': "Poing Magnum",
			'es-es': "Puño Mágnum",
			'it-it': "Superpugno",
			'de-de': "Magnum-Schlag",
			'pt-br': "Soco Magnum",
			'ko-kr': "매그넘펀치"
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