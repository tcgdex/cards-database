import { Card } from 'models/database/card'
import Set from '../Chilling Reign'

const card: Card = {
	set: Set,

	name: {
		'fr-fr': "Bastien",
		'en-us': "Brawly",
		'es-es': "Marcial",
		'it-it': "Rudi",
		'pt-br': "Brawly",
		'de-de': "Kamillo"
	},

	illustrator: "Sanosuke Sakuma",
	rarity: "Ultra Rare",
	category: "Trainer",

	effect: {
		'fr-fr': "Cherchez dans votre deck jusqu'à 3 Pokémon Mille Poings de base, puis placez-les sur votre Banc. Mélangez ensuite votre deck.",
		'en-us': "Search your deck for up to 3 Basic Rapid Strike Pokémon and put them onto your Bench. Then, shuffle your deck.",
		'es-es': "Busca en tu baraja hasta 3 Pokémon Golpe Fluido Básicos y ponlos en tu Banca. Después, baraja las cartas de tu baraja.",
		'it-it': "Cerca nel tuo mazzo fino a tre Pokémon Base Colpo Rapido e mettili nella tua panchina. Poi rimischia le carte del tuo mazzo.",
		'pt-br': "Procure por até 3 Pokémon Golpe Fluido Básicos no seu baralho e coloque-os no seu Banco. Em seguida, embaralhe o seu baralho.",
		'de-de': "Durchsuche dein Deck nach bis zu 3 Basis-Fließender-Angriff-Pokémon und lege sie auf deine Bank. Mische anschließend dein Deck."
	},

	trainerType: "Supporter",
	regulationMark: "E",


	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 567296,
				tcgplayer: 241818
			}
		},
	],
}

export default card
