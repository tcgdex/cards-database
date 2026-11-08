import { Card } from 'models/database/card'
import Set from '../Ultra Prism'

const card: Card = {
	name: {
		'en-us': "Spiritomb",
		'fr-fr': "Spiritomb",
		'es-es': "Spiritomb",
		'it-it': "Spiritomb",
		'pt-br': "Spiritomb",
		'de-de': "Kryppuk"
	},

	illustrator: "Shin Nagasawa",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		442,
	],

	hp: 70,

	types: [
		"Psychic",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Lightless World",
				'fr-fr': "Monde Obscur",
				'es-es': "Mundo sin Luz",
				'it-it': "Mondo Buio",
				'pt-br': "Mundo sem Luz",
				'de-de': "Lichtlose Welt"
			},
			effect: {
				'en-us': "Put 2 Supporter cards from your discard pile into your hand.",
				'fr-fr': "Ajoutez 2 cartes Supporter de votre pile de défausse à votre main.",
				'es-es': "Pon 2 cartas de Partidario de tu pila de descartes en tu mano.",
				'it-it': "Prendi due carte Aiuto dalla tua pila degli scarti e aggiungile alle carte che hai in mano.",
				'pt-br': "Coloque 2 cartas de Apoiador da sua pilha de descarte na sua mão.",
				'de-de': "Nimm 2 Unterstützerkarten aus deinem Ablagestapel auf deine Hand."
			},

		},
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Terrify",
				'fr-fr': "Terrifier",
				'es-es': "Aterrorizar",
				'it-it': "Terrorizzare",
				'pt-br': "Aterrorizar",
				'de-de': "Erschrecken"
			},
			effect: {
				'en-us': "If the Defending Pokémon is a Basic Pokémon, it can’t attack during your opponent’s next turn.",
				'fr-fr': "Si le Pokémon Défenseur est un Pokémon de base, il ne peut pas attaquer pendant le prochain tour de votre adversaire.",
				'es-es': "Si el Pokémon Defensor es un Pokémon Básico, no puede atacar durante el próximo turno de tu rival.",
				'it-it': "Durante il prossimo turno del tuo avversario, il Pokémon difensore non può attaccare se è un Pokémon Base.",
				'pt-br': "Se o Pokémon Defensor for um Pokémon Básico, ele não poderá atacar durante a próxima vez de jogar do seu oponente.",
				'de-de': "Wenn das Verteidigende Pokémon ein Basis-Pokémon ist, kann es während des nächsten Zuges deines Gegners nicht angreifen."
			},
			damage: 10,

		},
	],

	retreat: 1,

	description: {
		'en-us': "It was bound to a fissure in an Odd Keystone as punishment for misdeeds 500 years ago.",
	},

	thirdParty: {
		cardmarket: 315983,
		tcgplayer: 157670
	}
}

export default card
