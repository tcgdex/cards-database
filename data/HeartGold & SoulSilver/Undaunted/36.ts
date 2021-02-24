import { Card } from '../../../interfaces'
import Set from '../Undaunted'

const card: Card = {
	name: {
		en: "Scyther",
		fr: "Insecateur",
	},
	illustrator: "Wataru Kawahara/Direc. Shinji Higuchi",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		123,
	],
	hp: 60,
	types: [
		"Grass",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Afterimage Strike",
				fr: "Frap'Invisible",
			},
			effect: {
				en: "During your opponent's next turn, if Scyther would be damaged by an attack, flip a coin. If heads, prevent that attack's damage done to Scyther.",
				fr: "Pendant le prochain tour de votre adversaire, si Insécateur doit subir les dégâts d'une attaque, lancez une pièce. Si c'est face, Insécateur ne subit pas les",
			},
			damage: 20,

		},
	],
	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	retreat: 1,



}

export default card
