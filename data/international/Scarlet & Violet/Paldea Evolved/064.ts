import { Card } from "models/database/card"
import Set from "../Paldea Evolved"

const card: Card = {
	dexId: [26],
	set: Set,

	name: {
		'fr-fr': "Raichu",
		'en-us': "Raichu",
		'es-es': "Raichu",
		'it-it': "Raichu",
		'pt-br': "Raichu",
		'de-de': "Raichu"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 140,
	types: ["Lightning"],
	evolveFrom: {
		'fr-fr': "Pikachu-ex",
		'en-us': "Pikachu ex",
		'es-es': "Pikachu ex",
		'it-it': "Pikachu-ex",
		'pt-br': "Pikachu ex",
		'de-de': "Pikachu-ex"
	},
	stage: "Stage1",

	attacks: [{
		cost: ["Colorless"],

		name: {
			'fr-fr': "Électrocharge",
			'en-us': "Electrocharge",
			'es-es': "Electrocarga",
			'it-it': "Carica Voltaica",
			'pt-br': "Eletrocarga",
			'de-de': "Elektroladung"
		},

		effect: {
			'fr-fr': "Cherchez dans votre deck jusqu'à 2 cartes Énergie {L} de base, puis attachez-les à ce Pokémon. Mélangez ensuite votre deck.",
			'en-us': "Search your deck for up to 2 Basic {L} Energy cards and attach them to this Pokémon. Then, shuffle your deck.",
			'es-es': "Busca en tu baraja hasta 2 cartas de Energía {L} Básica y únelas a este Pokémon. Después, baraja las cartas de tu baraja.",
			'it-it': "Cerca nel tuo mazzo fino a due carte Energia base {L} e assegnale a questo Pokémon. Poi rimischia le carte del tuo mazzo.",
			'pt-br': "Procure por até 2 cartas de Energia {L} Básica no seu baralho e ligue-as a este Pokémon. Em seguida, embaralhe o seu baralho.",
			'de-de': "Durchsuche dein Deck nach bis zu 2 Basis-{L}-Energiekarten und lege sie an dieses Pokémon an. Mische anschließend dein Deck."
		}
	}, {
		cost: ["Lightning", "Lightning", "Colorless"],

		name: {
			'fr-fr': "Tonnerre",
			'en-us': "Thunderbolt",
			'es-es': "Rayo",
			'it-it': "Fulmine",
			'pt-br': "Relâmpago",
			'de-de': "Donnerblitz"
		},

		effect: {
			'fr-fr': "Défaussez toutes les Énergies de ce Pokémon.",
			'en-us': "Discard all Energy from this Pokémon.",
			'es-es': "Descarta todas las Energías de este Pokémon.",
			'it-it': "Scarta tutte le Energie da questo Pokémon.",
			'pt-br': "Descarte todas as Energias deste Pokémon.",
			'de-de': "Lege alle Energien von diesem Pokémon auf deinen Ablagestapel."
		},

		damage: 200
	}],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "G",

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 715539,
				tcgplayer: 497475,
				cardtrader: 248679
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 715539,
				tcgplayer: 497475,
				cardtrader: 248679
			}
		},
	],

	suffix: "ex",
	illustrator: "Teeziro",

	description: {
		'en-us': "Its tail discharges electricity into the ground, protecting it from getting shocked.",
	},
}

export default card
