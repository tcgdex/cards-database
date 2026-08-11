import { Card } from 'models/database/card'
import Set from '../Sword & Shield'

const card: Card = {
	name: {
		'en-us': "Sableye V",
		'fr-fr': "Ténéfix V",
		'es-es': "Sableye V",
		'it-it': "Sableye V",
		'pt-br': "Sableye V",
		'de-de': "Zobiris V"
	},

	illustrator: "Eske Yoshinob",
	rarity: "Holo Rare V",
	category: "Pokemon",
	set: Set,
	hp: 170,

	types: [
		"Darkness",
	],

	attacks: [
		{
			cost: [
				"Darkness",
			],
			name: {
				'en-us': "Lode Search",
				'fr-fr': "Recherche du Filon",
				'es-es': "Búsqueda Filón",
				'it-it': "Ricerca Giacimento",
				'pt-br': "Buscar Minérios",
				'de-de': "Juwelensuche"
			},
			effect: {
				'en-us': "Put a Trainer card from your discard pile into your hand.",
				'fr-fr': "Ajoutez à votre main une carte Dresseur de votre pile de défausse.",
				'es-es': "Pon 1 carta de Entrenador de tu pila de descartes en tu mano.",
				'it-it': "Prendi una carta Allenatore dalla tua pila degli scarti e aggiungila a quelle che hai in mano.",
				'pt-br': "Coloque uma carta de Treinador da sua pilha de descarte na sua mão.",
				'de-de': "Nimm 1 Trainerkarte aus deinem Ablagestapel auf deine Hand."
			},

		},
		{
			cost: [
				"Darkness",
				"Darkness",
			],
			name: {
				'en-us': "Crazy Claws",
				'fr-fr': "Griffes Folles",
				'es-es': "Garras Locas",
				'it-it': "Artigli Folli",
				'pt-br': "Garras Desgovernadas",
				'de-de': "Verrückte Krallen"
			},
			effect: {
				'en-us': "This attack does 60 more damage for each damage counter on your opponent's Active Pokémon.",
				'fr-fr': "Cette attaque inflige 60 dégâts supplémentaires pour chaque marqueur de dégâts sur le Pokémon Actif de votre adversaire.",
				'es-es': "Este ataque hace 60 puntos de daño más por cada contador de daño en el Pokémon Activo de tu rival.",
				'it-it': "Questo attacco infligge 60 danni in più per ogni segnalino danno presente sul Pokémon attivo del tuo avversario.",
				'pt-br': "Este ataque causa 60 pontos de dano a mais para cada contador de dano no Pokémon Ativo do seu oponente.",
				'de-de': "Diese Attacke fügt für jede Schadensmarke auf dem Aktiven Pokémon deines Gegners 60 Schadenspunkte mehr zu."
			},
			damage: "10+",

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 2,
	regulationMark: "D",

	variants: {
		normal: false,
		reverse: false,
		holo: true,
		firstEdition: false
	},

	stage: "Basic",
	suffix: "V",
	dexId: [302],

	thirdParty: {
		cardmarket: 436709,
		tcgplayer: 208430
	}
}

export default card
