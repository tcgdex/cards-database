import { Card } from "models/database/card"
import Set from "../Silver Tempest"

const card: Card = {
	dexId: [643],
	set: Set,

	name: {
		'en-us': "Reshiram V",
		'fr-fr': "Reshiram V",
		'es-es': "Reshiram V",
		'it-it': "Reshiram V",
		'pt-br': "Reshiram V",
		'de-de': "Reshiram V"
	},

	illustrator: "N-DESIGN Inc.",
	rarity: "Holo Rare V",
	category: "Pokemon",
	hp: 220,
	types: ["Fire"],
	stage: "Basic",
	suffix: "V",

	attacks: [{
		cost: ["Fire"],

		name: {
			'en-us': "Sparkling Wing",
			'fr-fr': "Aile Scintillante",
			'es-es': "Ala Centelleante",
			'it-it': "Ala Sfavillante",
			'pt-br': "Asa Cintilante",
			'de-de': "Funkelnde Flügel"
		},

		effect: {
			'en-us': "Search your deck for up to 2 basic Energy cards and attach them to 1 of your Pokémon. Then, shuffle your deck.",
			'fr-fr': "Cherchez dans votre deck jusqu'à 2 cartes Énergie de base, puis attachez-les à l'un de vos Pokémon. Mélangez ensuite votre deck.",
			'es-es': "Busca en tu baraja hasta 2 cartas de Energía Básica y únelas a 1 de tus Pokémon. Después, baraja las cartas de tu baraja.",
			'it-it': "Cerca nel tuo mazzo fino a due carte Energia base e assegnale a uno dei tuoi Pokémon. Poi rimischia le carte del tuo mazzo.",
			'pt-br': "Procure por até 2 cartas de Energia básica no seu baralho e ligue-as a 1 dos seus Pokémon. Em seguida, embaralhe o seu baralho.",
			'de-de': "Durchsuche dein Deck nach bis zu 2 Basis-Energiekarten und lege sie an 1 deiner Pokémon an. Mische anschließend dein Deck."
		}
	}, {
		cost: ["Fire", "Fire", "Colorless"],

		name: {
			'en-us': "White Blaze",
			'fr-fr': "Brasier Blanc",
			'es-es': "Llamarada Blanca",
			'it-it': "Fiammata Bianca",
			'pt-br': "Labareda Branca",
			'de-de': "Weißer Brand"
		},

		effect: {
			'en-us': "Flip a coin. If tails, during your next turn, this Pokémon can't attack.",
			'fr-fr': "Lancez une pièce. Si c'est pile, pendant votre prochain tour, ce Pokémon ne peut pas attaquer.",
			'es-es': "Lanza 1 moneda. Si sale cruz, este Pokémon no puede atacar durante tu próximo turno.",
			'it-it': "Lancia una moneta. Se esce croce, durante il tuo prossimo turno, questo Pokémon non può attaccare.",
			'pt-br': "Jogue 1 moeda. Se sair coroa, durante o seu próximo turno, este Pokémon não poderá atacar.",
			'de-de': "Wirf 1 Münze. Bei Zahl kann dieses Pokémon während deines nächsten Zuges nicht angreifen."
		},

		damage: 200
	}],

	weaknesses: [
		{
			type: "Water",
			value: "×2",
		},
	],
	retreat: 2,
	regulationMark: "F",


	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 682065,
				tcgplayer: 451655
			}
		},
	],
}

export default card
