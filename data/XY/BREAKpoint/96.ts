import { Card } from '../../../interfaces'
import Set from '../BREAKpoint'

const card: Card = {
	name: {
		en: "All-Night Party",
		fr: "Célébration Nocturne",
		es: "Fiesta Nocturna",
		it: "Festa Notturna",
		pt: "Festa a Noite Toda",
		de: "Durchfeiern"
	},

	illustrator: "Hitoshi Ariga",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		fr: "Une seule fois pendant le tour de chaque joueur, si le Pokémon Actif de ce joueur est Endormi, il peut retirer cet État Spécial et soigner 30 dégâts au Pokémon.",
		en: "Once during each player's turn, if that player's Active Pokémon is Asleep, he or she may remove that Special Condition and heal 30 damage from that Pokémon.",
		es: "Una vez durante el turno de cada jugador, si el Pokémon Activo de ese jugador está Dormido, puede eliminar esa Condición Especial y curar 30 puntos de daño a ese Pokémon.",
		it: "Una sola volta durante il turno di ciascun giocatore, se il Pokémon attivo del giocatore è addormentato, quel giocatore può rimuovere tale condizione speciale e curare quel Pokémon da 30 danni.",
		pt: "Uma vez durante a vez de jogar de cada jogador, se o Pokémon Ativo daquele jogador estiver Adormecido, o jogador pode remover aquela Condição Especial e curar 30 de danos daquele Pokémon.",
		de: "Einmal während seines Zuges kann jeder Spieler, wenn sein Aktives Pokémon schläft, diesen Speziellen Zustand entfernen und 30 Schadenspunkte bei diesem Pokémon heilen."
	},

	trainerType: "Stadium",

	thirdParty: {
		cardmarket: 288271
	}
}

export default card
