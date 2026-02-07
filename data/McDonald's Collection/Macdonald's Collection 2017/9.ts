import { Card } from '../../../interfaces'
import Set from '../Macdonald\'s Collection 2017'

const card: Card = {
	dexId: [
		50,
	],
	set: Set,
	variants: [
		{ type: 'holo', size: 'standard' }
	],
	name: {
		en: "Alolan Diglett",
		fr: "Taupiqueur d'Alola",
	},
	rarity: "None",
	category: "Pokemon",
	hp: 50,
	types: [
		"Metal",
	],
	stage: "Basic",
	thirdParty: {
		tcgplayer: 152689,
	},
	attacks: [
		{
			cost: [],
			name: {
				fr: "Spéléologue",
			},
			effect: {
				fr: "Regardez les 3 cartes du dessus de votre deck et replacez-les dans l'ordre de votre choix.",
			},
		},
		{
			cost: [
				"Metal",
			],
			name: {
				fr: "Coud'Boue",
			},
			damage: "10",
		},
	],
}

export default card
