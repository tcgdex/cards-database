import { Card } from '../../../interfaces'
import Set from '../Evolving Skies'

const card: Card = {
	set: Set,

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	},

	name: {
		en: "Shopping Center",
		fr: "Galerie Marchande",
		es: "Galería Comercial",
		it: "Galleria Commerciale",
		pt: "Shopping Center",
		de: "Shoppingcenter"
	},

	rarity: "Uncommon",
	category: "Trainer",

	effect: {
		en: "Once during each player’s turn, that player may put a Pokémon Tool attached to 1 of their Pokémon into their hand.",
		fr: "Une fois pendant le tour de chaque joueur, ce joueur peut ajouter à sa main un Outil Pokémon attaché à l’un de ses Pokémon.",
		es: "Una vez durante el turno de cada jugador, ese jugador puede poner 1 Herramienta Pokémon unida a 1 de sus Pokémon en su mano.",
		it: "Una sola volta durante il turno di ciascun giocatore, quel giocatore può prendere una carta Oggetto Pokémon assegnata a uno dei suoi Pokémon e aggiungerla alle carte che ha in mano.",
		pt: "Once during each player’s turn, that player may put a Pokémon Tool attached to 1 of their Pokémon into their hand.",
		de: "Einmal während des Zuges jedes Spielers kann jener Spieler 1 Pokémon-Ausrüstung, die an 1 seiner Pokémon angelegt ist, auf seine Hand nehmen."
	},

	trainerType: "Stadium",
	illustrator: "Oswaldo KATO"
}

export default card