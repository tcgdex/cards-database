import { Card } from 'models/database/card'
import Set from '../Lost Thunder'

const card: Card = {
	name: {
		'en-us': "Lanturn",
		'fr-fr': "Lanturn",
		'es-es': "Lanturn",
		'it-it': "Lanturn",
		'pt-br': "Lanturn",
		'de-de': "Lanturn"
	},

	illustrator: "Ken Sugimori",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		171,
	],

	hp: 110,

	types: [
		"Lightning",
	],

	evolveFrom: {
		'en-us': "Chinchou",
		'fr-fr': "Loupio",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Salvage",
				'fr-fr': "Trouvaille",
				'es-es': "Rescatar",
				'it-it': "Ritrovamento",
				'pt-br': "Resgatar",
				'de-de': "Freilegen"
			},
			effect: {
				'en-us': "Shuffle 4 Item cards from your discard pile into your deck.",
				'fr-fr': "Mélangez 4 cartes Objet de votre pile de défausse avec votre deck.",
				'es-es': "Pon 4 cartas de Objeto de tu pila de descartes en tu baraja y barájalas todas.",
				'it-it': "Rimischia quattro carte Strumento dalla tua pila degli scarti nel tuo mazzo.",
				'pt-br': "Embaralhe 4 cartas de Item da sua pilha de descarte no seu baralho.",
				'de-de': "Mische 4 Itemkarten aus deinem Ablagestapel in dein Deck."
			},

		},
		{
			cost: [
				"Lightning",
				"Colorless",
			],
			name: {
				'en-us': "Signal Beam",
				'fr-fr': "Rayon Signal",
				'es-es': "Doble Rayo",
				'it-it': "Segnoraggio",
				'pt-br': "Feixe Sinalizador",
				'de-de': "Ampelleuchte"
			},
			effect: {
				'en-us': "Your opponent’s Active Pokémon is now Confused.",
				'fr-fr': "Le Pokémon Actif de votre adversaire est maintenant Confus.",
				'es-es': "El Pokémon Activo de tu rival pasa a estar Confundido.",
				'it-it': "Il Pokémon attivo del tuo avversario viene confuso.",
				'pt-br': "O Pokémon Ativo do seu oponente agora está Confuso.",
				'de-de': "Das Aktive Pokémon deines Gegners ist jetzt verwirrt."
			},
			damage: 50,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Metal",
			value: "-20"
		},
	],

	retreat: 2,

	description: {
		'en-us': "This Pokémon flashes a bright light that blinds its prey. This creates an opening for it to deliver an electrical attack.",
	},

	thirdParty: {
		cardmarket: 365712,
		tcgplayer: 178883
	}
}

export default card
