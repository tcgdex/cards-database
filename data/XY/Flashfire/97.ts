import { Card } from '../../../interfaces'
import Set from '../Flashfire'

const card: Card = {
	name: {
		en: "Startling Megaphone",
		fr: "Mégaphone Surprise",
		es: "Megáfono Ensordecedor",
		it: "Megafono Assordante",
		pt: "Megafone Assustador",
		de: "Schock-Megafon"
	},

	illustrator: "Toyste Beach",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		fr: "Défaussez toutes les cartes Outil Pokémon attachées à chacun des Pokémon de votre adversaire.",
		en: "Discard all Pokémon Tool cards attached to each of your opponent's Pokémon.",
		es: "Descarta todas las cartas de Herramienta Pokémon unidas a cada uno de los Pokémon de tu rival.",
		it: "Scarta tutte le carte Oggetto Pokémon assegnate ai Pokémon del tuo avversario.",
		pt: "Descarte todos os cards de Ferramenta Pokémon ligados aos Pokémon do oponente.",
		de: "Lege alle an gegnerische Pokémon angelegte Pokémon-Ausrüstungen auf den Ablagestapel deines Gegners."
	},

	trainerType: "Item",

	thirdParty: {
		cardmarket: 281580
	}
}

export default card
