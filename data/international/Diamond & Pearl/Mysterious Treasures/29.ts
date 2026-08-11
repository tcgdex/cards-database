import { Card } from 'models/database/card'
import Set from '../Mysterious Treasures'

const card: Card = {
	name: {
		'en-us': "Mantine",
		'fr-fr': "Demanta",
		'de-de': "Mantax"
	},

	illustrator: "Masakazu Fukuda",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		226,
	],

	hp: 80,

	types: [
		"Water",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				'en-us': "Jumbo Fin",
				'fr-fr': "Nageoire géante",
				'de-de': "Riesenflosse"
			},
			effect: {
				'en-us': "If Mantyke is anywhere under Mantine, the Retreat Cost for each of your Water Pokémon is ColorlessColorless less.",
				'fr-fr': "Si Babimanta se trouve sous Demanta, le coût de retraite de chacun de vos Pokémon Water est ColorlessColorless de moins.",
				'de-de': "Wenn Mantirps sich an beliebiger Stelle unter Mantax befindet, sind die Rückzugskosten deiner -Pokémon um   reduziert."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Water",
				"Water",
			],
			name: {
				'en-us': "Giant Wave",
				'fr-fr': "Vague géante",
				'de-de': "Riesenwelle"
			},
			effect: {
				'en-us': "Mantine can't use Giant Wave during your next turn.",
				'fr-fr': "Demanta ne peut pas utiliser Vague géante lors de votre prochain tour.",
				'de-de': "Mantax kann Riesenwelle in deinem nächsten Zug nicht einsetzen."
			},
			damage: 50,

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "+20"
		},
	],

	resistances: [
		{
			type: "Fighting",
			value: "-20"
		},
	],
	retreat: 1,


	description: {
		'en-us': "When the waves are calm, one may encounter a swarm of Mantine swimming as if they are in flight.",
		'fr-fr': "Lorsque la mer est calme, il arrive de croiser un banc de Démanta nageant comme s'il volaient."
	},

	thirdParty: {
		cardmarket: 277658,
		tcgplayer: 87183
	},

	variants: [
		{
			type: "normal",
		},
		{
			type: "reverse",
		}
	]
}

export default card
