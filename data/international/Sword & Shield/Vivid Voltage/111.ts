import { Card } from 'models/database/card'
import Set from '../Vivid Voltage'

const card: Card = {
	dexId: [569],

	name: {
		'en-us': "Garbodor",
		'fr-fr': "Miasmax",
		'es-es': "Garbodor",
		'it-it': "Garbodor",
		'pt-br': "Garbodor",
		'de-de': "Deponitox"
	},

	illustrator: "Hasuno",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,
	hp: 120,

	types: [
		"Darkness",
	],

	evolveFrom: {
		'en-us': "Trubbish",
		'fr-fr': "Miamiasme",
		'es-es': "Trubbish",
		'it-it': "Trubbish",
		'pt-br': "Trubbish",
		'de-de': "Unratütox"
	},

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Trash Cyclone",
				'fr-fr': "Cyclone Immonde",
				'es-es': "Ciclón Basura",
				'it-it': "Ciclone Immondo",
				'pt-br': "Ciclone de Lixo",
				'de-de': "Müllwirbel"
			},
			effect: {
				'en-us': "This attack does 30 damage for each Pokémon Tool card in your discard pile. Then, shuffle those cards into your deck.",
				'fr-fr': "Cette attaque inflige 30 dégâts pour chaque carte Outil Pokémon dans votre pile de défausse. Mélangez ensuite ces cartes avec votre deck.",
				'es-es': "Este ataque hace 30 puntos de daño por cada carta de Herramienta Pokémon en tu pila de descartes. Después, pon esas cartas en tu baraja y barájalas todas.",
				'it-it': "Questo attacco infligge 30 danni per ogni carta Oggetto Pokémon nella tua pila degli scarti. Poi rimischia quelle carte nel tuo mazzo.",
				'pt-br': "Este ataque causa 30 pontos de dano para cada carta de Ferramenta Pokémon na sua pilha de descarte. Em seguida, embaralhe aquelas cartas no seu baralho.",
				'de-de': "Diese Attacke fügt für jede Pokémon-Ausrüstung in deinem Ablagestapel 30 Schadenspunkte zu. Mische jene Karten anschließend in dein Deck."
			},
			damage: "30×",

		},
		{
			cost: [
				"Darkness",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Poison Spray",
				'fr-fr': "Pulvérisation Toxique",
				'es-es': "Aerosol Venenoso",
				'it-it': "Spruzzo Velenoso",
				'pt-br': "Spray de Veneno",
				'de-de': "Giftspray"
			},
			effect: {
				'en-us': "Your opponent's Active Pokémon is now Poisoned.",
				'fr-fr': "Le Pokémon Actif de votre adversaire est maintenant Empoisonné.",
				'es-es': "El Pokémon Activo de tu rival pasa a estar Envenenado.",
				'it-it': "Il Pokémon attivo del tuo avversario viene avvelenato.",
				'pt-br': "O Pokémon Ativo do seu oponente agora está Envenenado.",
				'de-de': "Das Aktive Pokémon deines Gegners ist jetzt vergiftet."
			},
			damage: 80,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	retreat: 3,
	regulationMark: "D",


	stage: "Stage1",

	description: {
		'en-us': "This Pokémon eats trash, which turns into poison inside its body. The main component of the poison depends on what sort of trash was eaten."
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 512265,
				tcgplayer: 226564
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 512265,
				tcgplayer: 226564
			}
		},
	],
}

export default card
