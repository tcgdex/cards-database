import { Card } from "models/database/card"
import Set from "../Lost Origin Trainer Gallery"

const card: Card = {
	dexId: [25],
	set: Set,

	name: {
		'en-us': "Pikachu V",
		'fr-fr': "Pikachu V",
		'es-es': "Pikachu V",
		'it-it': "Pikachu V",
		'pt-br': "Pikachu V",
		'de-de': "Pikachu V"
	},

	illustrator: "Ryota Murayama",
	rarity: "Ultra Rare",
	category: "Pokemon",
	hp: 190,
	types: ["Lightning"],
	stage: "Basic",
	suffix: "V",

	attacks: [{
		cost: ["Lightning"],

		name: {
			'en-us': "Charge",
			'fr-fr': "Chargeur",
			'es-es': "Carga",
			'it-it': "Sottocarica",
			'pt-br': "Carga",
			'de-de': "Ladevorgang"
		},

		effect: {
			'en-us': "Search your deck for up to 2 Lightning Energy cards and attach them to this Pokémon. Then, shuffle your deck.",
			'fr-fr': "Cherchez dans votre deck jusqu'à 2 cartes Énergie Lightning, puis attachez-les à ce Pokémon. Mélangez ensuite votre deck.",
			'es-es': "Busca en tu baraja hasta 2 cartas de Energía Lightning y únelas a este Pokémon. Después, baraja las cartas de tu baraja.",
			'it-it': "Cerca nel tuo mazzo fino a due carte Energia Lightning e assegnale a questo Pokémon. Poi rimischia le carte del tuo mazzo.",
			'pt-br': "Procure por até 2 cartas de Energia Lightning no seu baralho e ligue-as a este Pokémon. Em seguida, embaralhe o seu baralho.",
			'de-de': "Durchsuche dein Deck nach bis zu 2 Lightning-Energiekarten und lege sie an dieses Pokémon an. Mische anschließend dein Deck."
		}
	}, {
		cost: ["Lightning", "Lightning", "Colorless"],

		name: {
			'en-us': "Thunderbolt",
			'fr-fr': "Tonnerre",
			'es-es': "Rayo",
			'it-it': "Fulmine",
			'pt-br': "Relâmpago",
			'de-de': "Donnerblitz"
		},

		effect: {
			'en-us': "Discard all Energy from this Pokémon.",
			'fr-fr': "Défaussez toute l'Énergie de ce Pokémon.",
			'es-es': "Descarta todas las Energías de este Pokémon.",
			'it-it': "Scarta tutte le Energie da questo Pokémon.",
			'pt-br': "Descarte todas as Energias deste Pokémon.",
			'de-de': "Lege alle Energien von diesem Pokémon auf deinen Ablagestapel."
		},

		damage: 200
	}],

	retreat: 1,
	regulationMark: "D",


	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 674234,
				tcgplayer: 284278
			}
		},
	],
}

export default card
