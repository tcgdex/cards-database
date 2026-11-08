import { Card } from 'models/database/card'
import Set from '../Unbroken Bonds'

const card: Card = {
	name: {
		'en-us': "Pyukumuku",
		'fr-fr': "Concombaffe",
		'es-es': "Pyukumuku",
		'it-it': "Pyukumuku",
		'pt-br': "Pyukumuku",
		'de-de': "Gufa"
	},

	illustrator: "Asako Ito",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		771,
	],

	hp: 70,

	types: [
		"Water",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Call for Family",
				'fr-fr': "Appel à la Famille",
				'es-es': "Llamar a la Familia",
				'it-it': "Cerca Famiglia",
				'pt-br': "Chamar a Família",
				'de-de': "Familienruf"
			},
			effect: {
				'en-us': "Search your deck for up to 2 Basic Pokémon and put them onto your Bench. Then, shuffle your deck.",
				'fr-fr': "Cherchez jusqu’à 2 Pokémon de base dans votre deck et placez-les sur votre Banc. Mélangez ensuite votre deck.",
				'es-es': "Busca en tu baraja hasta 2 Pokémon Básicos y ponlos en tu Banca. Después, baraja las cartas de tu baraja.",
				'it-it': "Cerca nel tuo mazzo fino a due Pokémon Base e mettili nella tua panchina. Poi rimischia le carte del tuo mazzo.",
				'pt-br': "Procure por até 2 Pokémon Básicos no seu baralho e coloque-os no seu Banco. Em seguida, embaralhe o seu baralho.",
				'de-de': "Durchsuche dein Deck nach bis zu 2 Basis-Pokémon und lege sie auf deine Bank. Mische anschließend dein Deck."
			},

		},
		{
			cost: [
				"Water",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Surprise Fist",
				'fr-fr': "Poing Surprise",
				'es-es': "Puño Sorprendente",
				'it-it': "Pugno a Sorpresa",
				'pt-br': "Punho Surpresa",
				'de-de': "Überraschungsfaust"
			},
			effect: {
				'en-us': "You and your opponent play Rock-Paper-Scissors. If you win, this attack does 60 more damage.",
				'fr-fr': "Jouez à pierre-ciseaux-feuille avec votre adversaire. Si vous gagnez, cette attaque inflige 60 dégâts supplémentaires.",
				'es-es': "Tu rival y tú jugáis a piedra, papel, tijeras. Si ganas tú, este ataque hace 60 puntos de daño más.",
				'it-it': "Tu e il tuo avversario giocate a morra cinese. Se vinci, questo attacco infligge 60 danni in più.",
				'pt-br': "Você e seu oponente jogam “pedra, papel e tesoura”. Se você vencer, este ataque causará 60 pontos de dano a mais.",
				'de-de': "Du und dein Gegner spielt Schere/Stein/Papier. Wenn du gewinnst, fügt diese Attacke 60 Schadenspunkte mehr zu."
			},
			damage: "60+",

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 1,

	description: {
		'en-us': "The tradition known as Pyukumuku chucking started from the custom of throwing Pyukumuku back into the sea after they wash onshore.",
	},

	thirdParty: {
		cardmarket: 372344,
		tcgplayer: 189152
	}
}

export default card
