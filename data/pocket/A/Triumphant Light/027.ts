import { Card } from "../../../interfaces"
import Set from "../Triumphant Light"

const card: Card = {
	set: Set,

	name: {
		en: "Electrike",
		fr: "Dynavolt",
		es: "Electrike",
		it: "Electrike",
		de: "Frizelbliz",
		'pt-br': "Electrike",
		ko: "썬더라이"
	},

	illustrator: "Shin Nagasawa",
	rarity: "One Diamond",
	category: "Pokemon",

	dexId: [309],
	hp: 60,
	types: ["Lightning"],

	description: {
		en: "It stores static electricity in its fur for discharging. It gives off sparks if a storm approaches.",
		fr: "Il émet des décharges à partir de l'électricité\nstatique accumulée dans sa fourrure. Il produit\ndes étincelles lorsque le temps devient orageux.",
		es: "Acumula electricidad estática en el pelaje para lanzar descargas.\nCuando va a haber tormenta, suelta chispas por todo el cuerpo.",
		it: "Accumula elettricità statica nella pelliccia e poi la rilascia.\nSe si avvicina una tempesta, emette scintille.",
		de: "In seinem Fell speichert es statische Elektrizität\nfür spätere Entladungen. Braut sich ein Sturm\nzusammen, entlädt es Funken.",
		'pt-br': "Ele armazena eletricidade estática no pelo\npara depois descarregá-la.\nQuando uma tempestade se aproxima, solta fagulhas.",
		ko: "정전기를 털에 비축하여\n방전한다. 폭풍이 가까이 오면\n온몸에서 불꽃을 튀긴다."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Zap Kick",
			fr: "Coup de Pied Ravageur",
			es: "Electropatada",
			it: "Dinamocalcio",
			de: "Stromtritt",
			'pt-br': "Chute Zap",
			ko: "일렉트릭킥"
		},

		damage: 20,
		cost: ["Lightning"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "+20"
	}],

	retreat: 1
}

export default card
