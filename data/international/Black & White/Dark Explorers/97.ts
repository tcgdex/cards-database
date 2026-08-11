import { Card } from 'models/database/card'
import Set from '../Dark Explorers'

const card: Card = {
	name: {
		'en-us': "Old Amber Aerodactyl",
		'fr-fr': "Vieil Ambre Ptéra",
		'es-es': "Ámbar Viejo Aerodactyl",
		'it-it': "Ambra Antica di Aerodactyl",
		'pt-br': "Âmbar Velho de Aerodactyl",
		'de-de': "Altbernstein Aerodactyl"
	},

	illustrator: "Ryo Ueda",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,
	trainerType: "Item",

	effect: {
		'en-us': "Look at the bottom 7 cards of your deck. You may reveal an Aerodactyl you find there and put it onto your Bench. Shuffle the other cards back into your deck.",
		'fr-fr': "Regardez les 7 cartes du dessous de votre deck. Vous pouvez montrer un Ptéra que vous y trouvez et le placer sur votre Banc. Mélangez les autres cartes avec votre deck.",
		'es-es': "Mira las 7 últimas cartas de tu baraja. Puedes enseñar un Aerodactyl que encuentres entre ellas y ponerlo en tu Banca. Pon el resto de cartas de nuevo en tu baraja y barájalas todas.",
		'it-it': "Guarda le ultime sette carte del tuo mazzo. Puoi mostrare un Aerodactyl che hai trovato e aggiungerlo alla tua panchina. Poi rimischia le altre carte nel tuo mazzo.",
		'pt-br': "Olhe os 7 cards de baixo do seu baralho. Você poderá revelar um Aerodactyl que encontrar lá e colocá-lo em seu Banco. Embaralhe os demais cards de volta.",
		'de-de': "Schau dir die untersten 7 Karten deines Decks an. Falls du dort ein Aerodactyl findest, kannst du es deinem Gegner zeigen und auf deine Bank legen. Mische die anderen Karten anschließend in dein Deck."
	},

	thirdParty: {
		cardmarket: 280425,
		tcgplayer: 87850
	}
}

export default card
