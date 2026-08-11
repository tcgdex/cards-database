import { Card } from 'models/database/card'
import Set from '../Shining Fates Shiny Vault'

const card: Card = {
	dexId: [245],
	set: Set,

	name: {
		'fr-fr': "Suicune",
		'en-us': "Suicune",
		'es-es': "Suicune",
		'it-it': "Suicune",
		'pt-br': "Suicune",
		'de-de': "Suicune"
	},

	illustrator: "Kagemaru Himeno",
	rarity: "Shiny rare",
	category: "Pokemon",
	hp: 120,
	types: ["Water"],

	attacks: [{
		name: {
			'fr-fr': "Grosse Vague",
			'en-us': "Wave Splash",
			'es-es': "Chapoteo Ondulante",
			'it-it': "Schizzi d'Onda",
			'pt-br': "Onda Borrifante",
			'de-de': "Wellenplatscher"
		},

		damage: 20,
		cost: ["Water"]
	}, {
		name: {
			'fr-fr': "Boucle Aurore",
			'en-us': "Aurora Loop",
			'es-es': "Bucle Aurora",
			'it-it': "Circuito Aurora",
			'pt-br': "Loop da Aurora",
			'de-de': "Auroraschleife"
		},

		effect: {
			'fr-fr': "Ajoutez à votre main 2 Énergies Water attachées à ce Pokémon.",
			'en-us': "Put 2 Water Energy attached to this Pokémon into your hand.",
			'es-es': "Pon 2 Energías Water unidas a este Pokémon en tu mano.",
			'it-it': "Prendi due Energie Water assegnate a questo Pokémon e aggiungile alle carte che hai in mano.",
			'pt-br': "Coloque 2 Energias Water ligadas a este Pokémon na sua mão.",
			'de-de': "Nimm 2 an dieses Pokémon angelegte Water-Energien auf deine Hand."
		},

		damage: 130,
		cost: ["Water", "Water", "Colorless"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "D",
	stage: "Basic",

	description: {
		'en-us': "Said to be the embodiment of north winds, it can instantly purify filthy, murky water."
	},

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 539498,
				tcgplayer: 232371
			}
		},
	],
}

export default card
