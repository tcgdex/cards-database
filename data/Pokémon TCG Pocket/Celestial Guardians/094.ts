import { Card } from "../../../interfaces"
import Set from "../Celestial Guardians"

const card: Card = {
	set: Set,

	name: {
		en: "Timburr",
		fr: "Charpenti",
		es: "Timburr",
		it: "Timburr",
		de: "Praktibalk",
		'pt-br': "Timburr",
		ko: "으랏차"
	},

	illustrator: "Mizue",
	rarity: "One Diamond",
	category: "Pokemon",

	dexId: [532],
	hp: 60,
	types: ["Fighting"],

	description: {
		en: "It loves helping out with construction projects. It loves it so much that if rain causes work to halt, it swings its log around and throws a tantrum.",
		fr: "Il aime donner un coup de main sur les chantiers.\nLorsque le travail cesse à cause de la pluie,\nil brandit sa poutre de colère.",
		es: "Le gusta ayudar en labores de construcción.\nCuando la lluvia obliga a interrumpir las\nobras, blande con furia su viga de madera.",
		it: "Gli piace dare una mano nei lavori edili, e quando vengono\ninterrotti per la pioggia, si sfoga facendo roteare la sua trave.",
		de: "Es hilft gern auf Baustellen aus. Bleiben diese bei Regen\ngeschlossen, macht es seinem Ärger Luft, indem es\nseinen Holzbalken schwingt.",
		'pt-br': "Adora ajudar em projetos de construções. Adora tanto\nque, se a chuva interromper o trabalho, balança\nsua madeira para todos os lados e faz birra.",
		ko: "건축 일을 돕는 것을 좋아한다.\n비가 내려서 공사를 쉬는 날에는\n각목을 휘두르며 날뛴다."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Corkscrew Punch",
			fr: "Poing Tire-Bouchon",
			es: "Puño Tirabuzón",
			it: "Pugno Rotante",
			de: "Korkenzieherhieb",
			'pt-br': "Soco Saca-rolha",
			ko: "쥐어박기"
		},

		damage: 20,
		cost: ["Fighting"]
	}],

	weaknesses: [{
		type: "Psychic",
		value: "+20"
	}],

	retreat: 1,
	boosters: ["lunala"]
}

export default card