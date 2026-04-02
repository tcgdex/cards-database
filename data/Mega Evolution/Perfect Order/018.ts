import { Card } from "../../../interfaces"
import Set from "../Perfect Order"

const card: Card = {
	set: Set,

	dexId: [86],

	name: {
		en: "Seel",
		fr: "Otaria",
		es: "Seel",
		'es-mx': "Seel",
		de: "Jurob",
		it: "Seel",
		pt: "Seel"
	},

	illustrator: "Kanami Ogata",
	rarity: "Common",
	category: "Pokemon",
	hp: 80,
	types: ["Water"],
	stage: "Basic",

	attacks: [{
		cost: ["Water"],

		name: {
			en: "Rain Splash",
			fr: "Pluie Éclaboussante",
			es: "Golpe de Lluvia",
			'es-mx': "Salpicalluvia",
			de: "Regenplatscher",
			it: "Spruzzapioggia",
			pt: "Chuva Borrifante"
		},

		damage: 10
	}, {
		cost: ["Water", "Water"],

		name: {
			en: "Wave Splash",
			fr: "Grosse Vague",
			es: "Chapoteo Ondulante",
			'es-mx': "Acuasalpicadura",
			de: "Wellenplatscher",
			it: "Schizzi d'Onda",
			pt: "Onda Borrifante"
		},

		damage: 30
	}],

	retreat: 2,
	regulationMark: "J",

	variants: [
		{
			type: "normal"
		},
		{
			type: "reverse"
		}
	],

	thirdParty: {
		tcgplayer: 684372,
		cardmarket: 877430
	}
}

export default card
