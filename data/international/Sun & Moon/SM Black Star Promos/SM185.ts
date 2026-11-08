import { Card } from 'models/database/card'
import Set from '../SM Black Star Promos'

const card: Card = {
	dexId: [157],
	name: {
		'fr-fr': "Typhlosion",
		'en-us': "Typhlosion",
		'es-es': "Typhlosion",
		'it-it': "Typhlosion",
		'pt-br': "Typhlosion",
		'de-de': "Tornupto"
	},
	illustrator: "Hideki Ishikawa",
	rarity: "Promo",
	category: "Pokemon",

	set: Set,

	hp: 150,
	types: [
		"Fire",
	],
	evolveFrom: {
		'fr-fr': "Feurisson",
	},
	stage: "Stage2",


	attacks: [
		{
			cost: [
				"Fire",
			],
			name: {
				'fr-fr': "Explosible",
				'en-us': "Exploder",
				'es-es': "Explosionar",
				'it-it': "Deflagratore",
				'pt-br': "Explosivo",
				'de-de': "Zündstoff"
			},
			effect: {
				'fr-fr': "Cherchez jusqu’à 3 cartes Énergie Fire dans votre deck et attachez-les à vos Pokémon, de la manière que vous voulez. Mélangez ensuite votre deck.",
				'en-us': "Search your deck for up to 3 Fire Energy cards and attach them to your Pokémon in any way you like. Then, shuffle your deck.",
				'es-es': "Busca en tu baraja hasta 3 cartas de Energía Fire y únelas a tus Pokémon de la manera que desees. Después, baraja las cartas de tu baraja.",
				'it-it': "Cerca nel tuo mazzo fino a tre carte Energia Fire e assegnale a piacimento ai tuoi Pokémon. Poi rimischia le carte del tuo mazzo.",
				'pt-br': "Procure por até 3 cartas de Energia Fire no seu baralho e ligue-as aos seus Pokémon como desejar. Em seguida, embaralhe o seu baralho.",
				'de-de': "Durchsuche dein Deck nach bis zu 3 Fire-Energiekarten und lege sie beliebig an deine Pokémon an. Mische anschließend dein Deck."
			},

		},
		{
			cost: [
				"Fire",
				"Fire",
				"Colorless",
			],
			name: {
				'fr-fr': "Enfer Explosif",
				'en-us': "Bursting Inferno",
				'es-es': "Infierno Explosivo",
				'it-it': "Inferno in Fiamme",
				'pt-br': "Inferno em Chamas",
				'de-de': "Flammendes Inferno"
			},
			effect: {
				'fr-fr': "Le Pokémon Actif de votre adversaire est maintenant Brûlé.",
				'en-us': "Your opponent’s Active Pokémon is now Burned.",
				'es-es': "El Pokémon Activo de tu rival pasa a estar Quemado.",
				'it-it': "Il Pokémon attivo del tuo avversario viene bruciato.",
				'pt-br': "O Pokémon Ativo do seu oponente agora está Queimado.",
				'de-de': "Das Aktive Pokémon deines Gegners ist jetzt verbrannt."
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
		'en-us': "It has a secret, devastating move. It rubs its blazing fur together to cause huge explosions.",
	},
}

export default card
