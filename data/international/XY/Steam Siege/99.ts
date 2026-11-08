import { Card } from 'models/database/card'
import Set from '../Steam Siege'

const card: Card = {
	name: {
		'en-us': "Captivating Poké Puff",
		'fr-fr': "Pofiterole Envoûtante",
		'es-es': "Pokélito Cautivador",
		'it-it': "Pokébignè Incantato",
		'pt-br': "Pokélina Cativante",
		'de-de': "Bezauberndes Pofflé"
	},

	illustrator: "Toyste Beach",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		'fr-fr': "Votre adversaire montre sa main. Placez tout nombre de Pokémon de base que vous y trouvez sur le Banc de votre adversaire.",
		'en-us': "Your opponent reveals his or her hand. Put any number of Basic Pokémon you find there onto your opponent's Bench.",
		'es-es': "Tu rival enseña las cartas de su mano. Pon tantos Pokémon Básicos que encuentres entre ellas como quieras en la Banca de tu rival.",
		'it-it': "Il tuo avversario mostra le carte che ha in mano. Prendi un numero qualsiasi di Pokémon Base presenti tra quelle carte e mettili nella sua panchina.",
		'pt-br': "Seu oponente revela a própria mão. Coloque qualquer número de Pokémon Básico que encontrar lá no Banco do seu oponente.",
		'de-de': "Dein Gegner deckt seine Handkarten auf. Lege beliebig viele Basis-Pokémon, die du dort findest, auf die Bank deines Gegners."
	},

	trainerType: "Item",

	thirdParty: {
		cardmarket: 290996
	}
}

export default card
