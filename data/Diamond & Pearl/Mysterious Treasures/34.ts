import { Card } from '../../../interfaces'
import Set from '../Mysterious Treasures'

const card: Card = {
	name: {
		en: "Slaking",
		fr: "Monaflemit",
		de: "Letarking"
	},

	illustrator: "Kouki Saitou",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		289,
	],

	hp: 140,

	types: [
		"Colorless",
	],

	evolveFrom: {
		en: "Vigoroth",
	},

	stage: "Stage2",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				en: "Energetic Impulse",
				fr: "Impulsion énergique",
				de: "Dynamischer Impuls"
			},
			effect: {
				en: "Once during your turn (before your attack), if Slaking is your Active Pokémon, you may flip a coin. If heads, Slaking's Lazy Blow attack's base damage is 130 during this turn. If tails, Slaking can't attack or retreat during this turn. (If Slaking is no longer your Active Pokémon, this effect ends.)",
				fr: "Une seule fois lors de votre tour (avant votre attaque), si Monaflemit est votre Pokémon Actif, vous pouvez lancer une pièce. Si c'est face, les dégâts de base de l'attaque Coup mou de Monaflemit sont de 130 lors de ce tour. Si c'est pile, Monaflemit ne peut pas attaquer ou battre en retraite lors de ce tour. (Si Monaflemit n'est plus votre Pokémon Actif, cet effet se termine.)",
				de: "Einmal während deines Zuges (vor deinem Angriff) kannst du, wenn Letarking dein Aktives Pokémon ist, 1 Münze werfen. Bei \"Kopf\" beträgt der Grundschaden von Letarkings Angriff Lahmer Schlag in diesem Zug 130 Schadenspunkte. Bei \"Zahl\" kann Letarking in diesem Zug weder angreifen noch sich zurückziehen. (Wenn Letarking nicht mehr dein Aktives Pokémon ist, endet dieser Effekt.)"
			},
		},
	],

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Lazy Blow",
				fr: "Coup mou",
				de: "Lahmer Schlag"
			},

			damage: 50,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "+30"
		},
	],

	description: {
		fr: "Le Pokémon le plus fainéant du monde. Il s'allonge pour économiser ses forces et contre-attaquer."
	},

	thirdParty: {
		cardmarket: 277663,
		tcgplayer: 89291
	}
}

export default card
