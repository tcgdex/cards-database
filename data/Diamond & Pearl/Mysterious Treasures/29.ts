import { Card } from '../../../interfaces'
import Set from '../Mysterious Treasures'

const card: Card = {
	name: {
		en: "Mantine",
		fr: "Demanta",
		de: "Mantax"
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
				en: "Jumbo Fin",
				fr: "Nageoire géante",
				de: "Riesenflosse"
			},
			effect: {
				en: "If Mantyke is anywhere under Mantine, the Retreat Cost for each of your Water Pokémon is ColorlessColorless less.",
				fr: "Si Babimanta se trouve sous Demanta, le coût de retraite de chacun de vos Pokémon Water est ColorlessColorless de moins.",
				de: "Wenn Mantirps sich an beliebiger Stelle unter Mantax befindet, sind die Rückzugskosten deiner -Pokémon um   reduziert."
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
				en: "Giant Wave",
				fr: "Vague géante",
				de: "Riesenwelle"
			},
			effect: {
				en: "Mantine can't use Giant Wave during your next turn.",
				fr: "Demanta ne peut pas utiliser Vague géante lors de votre prochain tour.",
				de: "Mantax kann Riesenwelle in deinem nächsten Zug nicht einsetzen."
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

	description: {
		fr: "Lorsque la mer est calme, il arrive de croiser un banc de Démanta nageant comme s'il volaient."
	},

	thirdParty: {
		cardmarket: 277658,
		tcgplayer: 87183
	}
}

export default card
