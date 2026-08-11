import { Card } from 'models/database/card'
import Set from '../Detective Pikachu'

const card: Card = {
	name: {
		'en-us': "Mewtwo",
		'fr-fr': "Mewtwo",
		'es-es': "Mewtwo",
		'it-it': "Mewtwo",
		'pt-br': "Mewtwo",
		'de-de': "Mewtu"
	},

	illustrator: "MPC Film",
	rarity: "Ultra Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		150,
	],

	hp: 130,

	types: [
		"Psychic",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Psychic",
				"Colorless",
			],
			name: {
				'en-us': "Psyjack",
				'fr-fr': "Détournement Psy",
				'es-es': "Secuestro Psíquico",
				'it-it': "Sequestro Psichico",
				'pt-br': "Tomada Psíquica",
				'de-de': "Mentale Entführung"
			},
			effect: {
				'en-us': "Choose 1 of your opponent’s Active Pokémon’s attacks. That Pokémon can’t use that attack during your opponent’s next turn.",
				'fr-fr': "Choisissez l’une des attaques du Pokémon Actif de votre adversaire. Ce Pokémon ne peut pas utiliser cette attaque pendant le prochain tour de votre adversaire.",
				'es-es': "Elige 1 de los ataques del Pokémon Activo de tu rival. Ese Pokémon no puede usar ese ataque durante el próximo turno de tu rival.",
				'it-it': "Scegli un attacco del Pokémon attivo del tuo avversario. Durante il prossimo turno del tuo avversario, quel Pokémon non potrà utilizzarlo.",
				'pt-br': "Escolha 1 dos ataques do Pokémon Ativo do seu oponente. Aquele Pokémon não poderá usar aquele ataque durante a próxima vez de jogar do seu oponente.",
				'de-de': "Wähle 1 Attacke des Aktiven Pokémon deines Gegners. Jenes Pokémon kann jene Attacke während des nächsten Zuges deines Gegners nicht einsetzen."
			},
			damage: 30,

		},
		{
			cost: [
				"Psychic",
				"Psychic",
				"Colorless",
			],
			name: {
				'en-us': "Break Burn",
				'fr-fr': "Brûlure Brisante",
				'es-es': "Quiebre Quemadura",
				'it-it': "Sconfitta Cocente",
				'pt-br': "Queimadura Destruidora",
				'de-de': "Bruchbrand"
			},
			effect: {
				'en-us': "Discard 2 Psychic Energy from this Pokémon.",
				'fr-fr': "Défaussez 2 Énergies Psychic de ce Pokémon.",
				'es-es': "Descarta 2 Energías Psychic de este Pokémon.",
				'it-it': "Scarta due Energie Psychic assegnate a questo Pokémon.",
				'pt-br': "Descarte 2 Energias Psychic deste Pokémon.",
				'de-de': "Lege 2 Psychic-Energien von diesem Pokémon auf deinen Ablagestapel."
			},
			damage: 130,

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 2,

	description: {
		'en-us': "This Pokémon was created by years of horrific gene splicing and DNA engineering experiments.",
	},

	thirdParty: {
		cardmarket: 370775,
		tcgplayer: 186020
	}
}

export default card
