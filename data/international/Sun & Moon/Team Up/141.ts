import { Card } from '../../../interfaces'
import Set from '../Team Up'

const card: Card = {
	name: {
		en: "Evelyn",
		fr: "Vesper",
		es: "Vésper",
		it: "Vespera",
		pt: "Véspera",
		de: "Soir"
	},

	illustrator: "Megumi Mizutani",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		fr: "Vous ne pouvez jouer cette carte que si le Pokémon Actif de votre adversaire est un Pokémon de Niveau 1.\n\nPiochez 4 cartes.",
		en: "You can play this card only if your opponent’s Active Pokémon is a Stage 1 Pokémon.\n\nDraw 4 cards.",
		es: "Puedes jugar esta carta solo si el Pokémon Activo de tu rival es un Pokémon de Fase 1.\n\nRoba 4 cartas.",
		it: "Puoi giocare questa carta solo se il Pokémon attivo del tuo avversario è un Pokémon di Fase 1.\n\nPesca quattro carte.",
		pt: "Você só pode jogar esta carta se o Pokémon Ativo do seu oponente for um Pokémon Estágio 1.\n\nCompre 4 cartas.",
		de: "Du kannst diese Karte nur spielen, wenn das Aktive Pokémon deines Gegners ein Phase-1-Pokémon ist.\n\nZiehe 4 Karten."
	},

	trainerType: "Supporter",

	thirdParty: {
		cardmarket: 369067,
		tcgplayer: 183935
	}
}

export default card
