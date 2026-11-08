import { Card } from 'models/database/card'
import Set from '../SWSH Black Star Promos'

const card: Card = {
	set: Set,

	name: {
		'fr-fr': "Pikachu V",
		'en-us': "Pikachu V",
		'es-es': "Pikachu V",
		'it-it': "Pikachu V",
		'de-de': "Pikachu V",
		'pt-br': "Pikachu V"
	},

	illustrator: "PLANETA Tsuji",
	rarity: "Promo",
	category: "Pokemon",
	hp: 190,
	types: ["Lightning"],

	attacks: [{
		name: {
			'fr-fr': "Chargeur",
			'en-us': "Charge",
			'es-es': "Carga",
			'it-it': "Sottocarica",
			'de-de': "Ladevorgang",
			'pt-br': "Carga"
		},

		effect: {
			'fr-fr': "Cherchez dans votre deck jusqu'à 2 cartes Énergie {L}, puis attachez-les à ce Pokémon. Mélangez ensuite votre deck.",
			'en-us': "Search your deck for up to 2 {L} Energy cards and attach them to this Pokémon. Then, shuffle your deck.",
			'es-es': "Busca en tu baraja hasta 2 cartas de Energía {L} y únelas a este Pokémon. Después, baraja las cartas de tu baraja.",
			'it-it': "Cerca nel tuo mazzo fino a due carte Energia {L} e assegnale a questo Pokémon. Poi rimischia le carte del tuo mazzo.",
			'de-de': "Durchsuche dein Deck nach bis zu 2 {L}-Energiekarten und lege sie an dieses Pokémon an. Mische anschließend dein Deck.",
			'pt-br': "Procure por até 2 cartas de Energia {L} no seu baralho e ligue-as a este Pokémon. Em seguida, embaralhe o seu baralho."
		},

		cost: ["Lightning"]
	}, {
		name: {
			'fr-fr': "Tonnerre",
			'en-us': "Thunderbolt",
			'es-es': "Rayo",
			'it-it': "Fulmine",
			'de-de': "Donnerblitz",
			'pt-br': "Relâmpago"
		},

		effect: {
			'fr-fr': "Défaussez toute l'Énergie de ce Pokémon.",
			'en-us': "Discard all Energy from this Pokémon.",
			'es-es': "Descarta todas las Energías de este Pokémon.",
			'it-it': "Scarta tutte le Energie da questo Pokémon.",
			'de-de': "Lege alle Energien von diesem Pokémon auf deinen Ablagestapel.",
			'pt-br': "Descarte todas as Energias deste Pokémon."
		},

		damage: 200,
		cost: ["Lightning", "Lightning", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1,
	stage: "Basic",
	dexId: [25],

	variants: {
		normal: false,
		reverse: false,
		holo: true,
		firstEdition: false
	},

	regulationMark: "D",
	suffix: "V",

	thirdParty: {
		cardmarket: 496545,
		tcgplayer: 232434
	}
}

export default card
