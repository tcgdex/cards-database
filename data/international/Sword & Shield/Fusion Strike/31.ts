import { Card } from "models/database/card"
import Set from "../Fusion Strike"

const card: Card = {
	dexId: [38],
	set: Set,

	name: {
		'en-us': "Ninetales",
		'fr-fr': "Feunard",
		'es-es': "Ninetales",
		'it-it': "Ninetales",
		'pt-br': "Ninetales",
		'de-de': "Vulnona"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 120,
	types: ["Fire"],

	evolveFrom: {
		'en-us': "Vulpix",
		'fr-fr': "Goupix",
		'es-es': "Vulpix",
		'it-it': "Vulpix",
		'pt-br': "Vulpix",
		'de-de': "Vulpix"
	},

	stage: "Stage1",
	weaknesses: [
		{
			type: "Water",
			value: "×2",
		},
	],
	retreat: 2,
	regulationMark: "E",
	illustrator: "Tika Matsuno",

	description: {
		'en-us': "Very smart and very vengeful. Grabbing one of its many tails could result in a 1,000-year curse."
	},

	abilities: [{
		type: "Ability",

		name: {
			'en-us': "Byway of the Nine-Tailed Fox",
			'fr-fr': "Sentier du Renard à Neuf Queues",
			'de-de': "Weg des neunschweifigen Fuchses",
			'es-es': "Senda del Zorro de Nueve Colas",
			'pt-br': "Atalho da Raposa de Nove Caudas",
			'it-it': "Scorciatoia della Volpe a Nove Code"
		},

		effect: {
			'en-us': "The Retreat Cost of each of your Pokémon that has any {R} Energy attached is {C}{C} less.",
			'fr-fr': "Le Coût de Retraite de chacun de vos Pokémon auquel de l'Énergie {R} est attachée est diminué de {C}{C}.",
			'de-de': "Die Rückzugskosten jedes deiner Pokémon, an das mindestens 1 {R}-Energie angelegt ist, verringern sich um {C}{C}.",
			'es-es': "El Coste de Retirada de cada uno de tus Pokémon que tenga alguna Energía {R} unida a él es de {C}{C} menos.",
			'pt-br': "O custo de Recuo de cada um dos seus Pokémon que tiver alguma Energia {R} ligada a ele é {C}{C} a menos.",
			'it-it': "Il costo di ritirata di ciascuno dei tuoi Pokémon che ha delle Energie {R} assegnate è ridotto di {C}{C}."
		}
	}],

	attacks: [{
		cost: ["Fire", "Colorless"],

		name: {
			'en-us': "Flame Tail",
			'fr-fr': "Queue de Flammes",
			'de-de': "Flammenschweif",
			'es-es': "Cola de Fuego",
			'pt-br': "Cauda de Chamas",
			'it-it': "Codafiamma"
		},

		damage: 60
	}],


	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 582165,
				tcgplayer: 253128
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 582165,
				tcgplayer: 253128
			}
		},
	],
}

export default card
