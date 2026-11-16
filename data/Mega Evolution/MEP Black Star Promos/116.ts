import { Card } from "../../../interfaces"
import Set from "../MEP Black Star Promos"

const card: Card = {
	set: Set,

	name: {
		en: "Seel",
		fr: "Otaria",
		es: "Seel",
		'es-mx': "Seel",
		de: "Jurob",
		it: "Seel",
		pt: "Seel"
	},

	illustrator: "cochi8i",
	rarity: "Promo",
	category: "Pokemon",
	hp: 80,
	types: ["Water"],
	stage: "Basic",
	dexId: [86],

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

	weaknesses: [
		{
			type: "Lightning",
			value: "x2",
		},
	],
	retreat: 2,
	regulationMark: "J",

	variants: [
		{
			type: "holo"
		}
	],

}

export default card
