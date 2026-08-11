import { Card } from 'models/database/card'
import Set from '../Forbidden Light'

const card: Card = {
	name: {
		'en-us': "Eneporter",
		'fr-fr': "Énéporteur",
		'es-es': "Portaenergía",
		'it-it': "Energitrasporto",
		'pt-br': "Eneportal",
		'de-de': "Enetransporter"
	},

	illustrator: "Toyste Beach",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		'fr-fr': "Déplacez une Énergie spéciale de l’un des Pokémon de votre adversaire vers un autre de ses Pokémon.",
		'en-us': "Move a Special Energy from 1 of your opponent’s Pokémon to another of their Pokémon.",
		'es-es': "Mueve 1 Energía Especial de 1 de los Pokémon de tu rival a otro de sus Pokémon.",
		'it-it': "Sposta un’Energia speciale da uno dei Pokémon del tuo avversario a un altro dei suoi Pokémon.",
		'pt-br': "Mova 1 Energia Especial de 1 dos Pokémon do seu oponente para outro Pokémon dele(a).",
		'de-de': "Verschiebe 1 Spezial-Energie von 1 Pokémon deines Gegners auf 1 anderes seiner Pokémon."
	},

	trainerType: "Item",

	thirdParty: {
		cardmarket: 355619,
		tcgplayer: 165785
	}
}

export default card
