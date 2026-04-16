import { Card } from "../../../interfaces"
import Set from "../White Flare"

const card: Card = {
	dexId: [501],
	set: Set,

	name: {
		en: "Oshawott",
		fr: "Moustillon",
		de: "Ottaro",
		it: "Oshawott",
		pt: "Oshawott",
		es: "Oshawott",
		'es-mx': "Oshawott"
	},

	illustrator: "rika",
	rarity: "Common",
	category: "Pokemon",
	hp: 70,
	types: ["Water"],
	stage: "Basic",

	attacks: [{
		cost: ["Water"],

		name: {
			en: "Tackle",
			fr: "Charge",
			de: "Tackle",
			it: "Azione",
			pt: "Investida",
			es: "Placaje",
			'es-mx': "Tacleada"
		},

		damage: 10
	}, {
		cost: ["Water", "Water"],

		name: {
			en: "Water Gun",
			fr: "Pistolet à O",
			de: "Aquaknarre",
			it: "Pistolacqua",
			pt: "Revólver d'Água",
			es: "Pistola Agua",
			'es-mx': "Chorro de Agua"
		},

		damage: 30
	}],

	retreat: 1,
	regulationMark: "I",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 835941,
				tcgplayer: 642133
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 835941,
				tcgplayer: 642133
			}
		},
		{
			type: "reverse",
			foil: "pokeball",
			thirdParty: {
				cardmarket: 836529,
				tcgplayer: 642377
			}
		},
		{
			type: "reverse",
			foil: "masterball",
			thirdParty: {
				cardmarket: 836530,
				tcgplayer: 642305
			}
		},
		{
			type: "holo",
			foil: "tinsel",
			thirdParty: {
				cardmarket: 836669,
			}
		},
	],
}

export default card
