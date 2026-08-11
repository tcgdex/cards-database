import { Card } from 'models/database/card'
import Set from '../Cosmic Eclipse'

const card: Card = {
	name: {
		'en-us': "Torkoal",
		'fr-fr': "Chartor",
		'es-es': "Torkoal",
		'it-it': "Torkoal",
		'pt-br': "Torkoal",
		'de-de': "Qurtel"
	},

	illustrator: "Ryota Murayama",
	rarity: "Secret Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		324,
	],

	hp: 110,

	types: [
		"Fire",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Fire",
			],
			name: {
				'en-us': "Fire Fling",
				'fr-fr': "Dégommage Feu",
				'es-es': "Lanzamiento Fuego",
				'it-it': "Fuocolancio",
				'pt-br': "Arremesso de Fogo",
				'de-de': "Feuerwurf"
			},
			effect: {
				'en-us': "Put 4 Fire Energy cards from your discard pile into your hand.",
				'fr-fr': "Ajoutez 4 cartes Énergie Fire de votre pile de défausse à votre main.",
				'es-es': "Pon 4 cartas de Energía Fire de tu pila de descartes en tu mano.",
				'it-it': "Prendi quattro carte Energia Fire dalla tua pila degli scarti e aggiungile alle carte che hai in mano.",
				'pt-br': "Coloque 4 cartas de Energia Fire da sua pilha de descarte na sua mão.",
				'de-de': "Nimm 4 Fire-Energiekarten aus deinem Ablagestapel auf deine Hand."
			},

		},
		{
			cost: [
				"Fire",
				"Fire",
				"Fire",
			],
			name: {
				'en-us': "Kindle",
				'fr-fr': "Enflammer",
				'es-es': "Encendido",
				'it-it': "Infiammare",
				'pt-br': "Inflamar",
				'de-de': "Anzünden"
			},
			effect: {
				'en-us': "Discard an Energy from this Pokémon. If you do, discard an Energy from your opponent’s Active Pokémon.",
				'fr-fr': "Défaussez une Énergie de ce Pokémon. Dans ce cas, défaussez une Énergie du Pokémon Actif de votre adversaire.",
				'es-es': "Descarta 1 Energía de este Pokémon. Si lo haces, descarta 1 Energía del Pokémon Activo de tu rival.",
				'it-it': "Scarta un’Energia assegnata a questo Pokémon. Se lo fai, scarta un’Energia assegnata al Pokémon attivo del tuo avversario.",
				'pt-br': "Descarte 1 Energia deste Pokémon. Se fizer isto, descarte 1 Energia do Pokémon Ativo do seu oponente.",
				'de-de': "Lege 1 Energie von diesem Pokémon auf deinen Ablagestapel. Wenn du das machst, lege 1 Energie vom Aktiven Pokémon deines Gegners auf seinen Ablagestapel."
			},
			damage: 100,

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],

	retreat: 2,

	description: {
		'en-us': "You can tell how it's feeling by the smoke spouting from its shell. Tremendous velocity is a sign of good health.",
	},

	thirdParty: {
		cardmarket: 398524,
		tcgplayer: 201348
	}
}

export default card
