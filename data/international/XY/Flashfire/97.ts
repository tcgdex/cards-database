import { Card } from 'models/database/card'
import Set from '../Flashfire'

const card: Card = {
	name: {
		'en-us': "Startling Megaphone",
		'fr-fr': "Mégaphone Surprise",
		'es-es': "Megáfono Ensordecedor",
		'it-it': "Megafono Assordante",
		'pt-br': "Megafone Assustador",
		'de-de': "Schock-Megafon"
	},

	illustrator: "Toyste Beach",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		'fr-fr': "Défaussez toutes les cartes Outil Pokémon attachées à chacun des Pokémon de votre adversaire.",
		'en-us': "Discard all Pokémon Tool cards attached to each of your opponent's Pokémon.",
		'es-es': "Descarta todas las cartas de Herramienta Pokémon unidas a cada uno de los Pokémon de tu rival.",
		'it-it': "Scarta tutte le carte Oggetto Pokémon assegnate ai Pokémon del tuo avversario.",
		'pt-br': "Descarte todos os cards de Ferramenta Pokémon ligados aos Pokémon do oponente.",
		'de-de': "Lege alle an gegnerische Pokémon angelegte Pokémon-Ausrüstungen auf den Ablagestapel deines Gegners."
	},

	trainerType: "Item",

	thirdParty: {
		cardmarket: 281580,
		tcgplayer: 91234
	}
}

export default card
