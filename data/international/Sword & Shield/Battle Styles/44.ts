import { Card } from 'models/database/card'
import Set from '../Battle Styles'

const card: Card = {
	dexId: [125],
	set: Set,

	name: {
		'en-us': "Electabuzz",
		'fr-fr': "Élektek",
		'es-es': "Electabuzz",
		'it-it': "Electabuzz",
		'pt-br': "Electabuzz",
		'de-de': "Elektek"
	},

	illustrator: "Hasuno",
	rarity: "Common",
	category: "Pokemon",
	hp: 80,
	types: ["Lightning"],

	attacks: [{
		name: {
			'en-us': "Haymaker",
			'fr-fr': "Coup de Poing Fracassant",
			'es-es': "Golpazo",
			'it-it': "Pugno Tremendo",
			'pt-br': "Golpe Arrasador",
			'de-de': "Schwinger"
		},

		effect: {
			'en-us': "During your next turn, this Pokémon can't use Haymaker.",
			'fr-fr': "Pendant votre prochain tour, ce Pokémon ne peut pas utiliser Coup de Poing Fracassant.",
			'es-es': "Durante tu próximo turno, este Pokémon no puede usar Golpazo.",
			'it-it': "Durante il tuo prossimo turno, questo Pokémon non può usare Pugno Tremendo.",
			'pt-br': "Durante o seu próximo turno, este Pokémon não poderá usar Golpe Arrasador.",
			'de-de': "Während deines nächsten Zuges kann dieses Pokémon Schwinger nicht einsetzen."
		},

		damage: 30,
		cost: ["Lightning"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "E",


	stage: "Basic",

	description: {
		'en-us': "While it's often blamed for power outages, the truth is the cause of outages is more often an error on the part of the electric company."
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 545331,
				tcgplayer: 234192
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 545331,
				tcgplayer: 234192
			}
		},
	],
}

export default card
