import { Card } from '../../../interfaces'
import Set from '../Mysterious Treasures'

const card: Card = {
	name: {
		en: "Nidoqueen",
		fr: "Nidoqueen",
		de: "Nidoqueen"
	},

	illustrator: "Kagemaru Himeno",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		31,
	],

	hp: 120,

	types: [
		"Psychic",
	],

	evolveFrom: {
		en: "Nidorina",
	},

	stage: "Stage2",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Mother Pheromone",
				fr: "Mère phéromone",
				de: "Mutter-Pheromone"
			},
			effect: {
				en: "The attack cost of your Nidoran ♀, Nidorina, Nidoran ♂, Nidorino, and Nidoking's attack is Colorless less.",
				fr: "Le Coût d'attaque de l'attaque de votre Nidoran♀, Nidorina, Nidoran♂, Nidorino, Nidoking est Colorless de moins.",
				de: "Die Angriffe deiner Nidoran ♀, Nidorina, Nidoran ♂, Nidorino und Nidoking kosten  weniger."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Psychic",
				"Psychic",
				"Colorless",
			],
			name: {
				en: "Give Aid",
				fr: "Clôturer",
				de: "Hilfe leisten"
			},
			effect: {
				en: "If you have the same number of or less Benched Pokémon than your opponent, this attack's base damage is 50 instead of 90.",
				fr: "Si vous autant ou moins de Pokémon de Banc que votre adversaire, les dégâts de base de cette attaque sont de 50 au lieu de 90.",
				de: "Wenn du nicht mehr Pokémon auf der Bank hast als dein Gegner, beträgt der Grundschaden dieses Angriffs 50 Schadenspunkte anstelle von 90 Schadenspunkten."
			},
			damage: 90,

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "+30"
		},
	],

	resistances: [
		{
			type: "Lightning",
			value: "-20"
		},
	],

	description: {
		fr: "Son corps est recouvert d'écailles solides. Il donnera sa vie pour secourir les petits de son terrier."
	}
}

export default card
