import { Card } from 'models/database/card'
import Set from '../Furious Fists'

const card: Card = {
	name: {
		'en-us': "Fossil Researcher",
		'fr-fr': "Chercheur de Fossiles",
		'es-es': "Investigador de Fósiles",
		'it-it': "Ricercatore di Fossili",
		'pt-br': "Pesquisador de Fósseis",
		'de-de': "Fossilforscher"
	},

	illustrator: "Naoki Saito",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		'fr-fr': "Cherchez une combinaison de jusqu'à 2 Amagara ou Ptyranidur dans votre deck et placez-les sur votre Banc. Mélangez ensuite votre deck.",
		'en-us': "Search your deck for up to 2 in any combination of Amaura or Tyrunt and put them onto your Bench. Shuffle your deck afterward.",
		'es-es': "Busca en tu baraja hasta 2 Amaura o Tyrunt, en cualquier combinación, y ponlos en tu Banca. Baraja las cartas de tu baraja después.",
		'it-it': "Cerca nel tuo mazzo fino a due Amaura o Tyrunt, in qualsiasi combinazione, e mettili nella tua panchina. Poi rimischia le carte del tuo mazzo.",
		'pt-br': "Procure em seu baralho até 2 Amaura ou Tyrunt em qualquer combinação e coloque-os em seu Banco. Em seguida, embaralhe seus cards.",
		'de-de': "Durchsuche dein Deck nach einer beliebigen Kombination aus bis zu 2 Amarino oder Balgoras und lege sie auf deine Bank. Mische anschließend dein Deck."
	},

	trainerType: "Supporter",

	thirdParty: {
		cardmarket: 281756,
		tcgplayer: 92273
	}
}

export default card
