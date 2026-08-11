import { Card } from "models/database/card"
import Set from "../Temporal Forces"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Bianca's Devotion",
		'fr-fr': "Dévouement de Bianca",
		'es-es': "Devoción de Bel",
		'it-it': "Dedizione di Belle",
		'pt-br': "Dedicação da Bianca",
		'de-de': "Bells Hingabe"
	},

	rarity: "Special illustration rare",
	category: "Trainer",

	effect: {
		'en-us': "Heal all damage from 1 of your Pokémon that has 30 HP or less remaining.",
		'fr-fr': "Soignez tous les dégâts de l'un de vos Pokémon auquel il reste 30 PV ou moins.",
		'es-es': "Cura todos los puntos de daño a uno de tus Pokémon a los que le queden 30 PS o menos.",
		'it-it': "Cura uno dei tuoi Pokémon che ha 30 PS o meno rimanenti da tutti i danni.",
		'pt-br': "Cure todo o dano de 1 dos seus Pokémon que tiver PS restante de 30 ou menos.",
		'de-de': "Heile allen Schaden bei 1 deiner Pokémon, das 30 oder weniger verbleibende KP hat."
	},

	trainerType: "Supporter",
	regulationMark: "H",

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 760839,
				tcgplayer: 542930
			}
		},
	],

	illustrator: "Cona Nitanda",

}

export default card