import { Card } from '../../../interfaces'
import Set from '../Team Up'

const card: Card = {
	name: {
		en: "Dana",
		fr: "Méridia",
		es: "Meridia",
		it: "Meridia",
		pt: "Diana",
		de: "Journée"
	},

	illustrator: "Megumi Mizutani",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		fr: "Vous ne pouvez jouer cette carte que si le Pokémon Actif de votre adversaire est un Pokémon de Niveau 2.\n\nCherchez jusqu’à 2 cartes dans votre deck, puis ajoutez-les à votre main. Mélangez ensuite votre deck.",
		en: "You can play this card only if your opponent’s Active Pokémon is a Stage 2 Pokémon.\n\nSearch your deck for up to 2 cards and put them into your hand. Then, shuffle your deck.",
		es: "Puedes jugar esta carta solo si el Pokémon Activo de tu rival es un Pokémon de Fase 2.\n\nBusca en tu baraja hasta 2 cartas y ponlas en tu mano. Después, baraja las cartas de tu baraja.",
		it: "Puoi giocare questa carta solo se il Pokémon attivo del tuo avversario è un Pokémon di Fase 2.\n\nCerca nel tuo mazzo fino a due carte e aggiungile alle carte che hai in mano. Poi rimischia le carte del tuo mazzo.",
		pt: "Você só pode jogar esta carta se o Pokémon Ativo do seu oponente for um Pokémon Estágio 2.\n\nProcure por até 2 cartas no seu baralho e coloque-as na sua mão. Em seguida, embaralhe o seu baralho.",
		de: "Du kannst diese Karte nur spielen, wenn das Aktive Pokémon deines Gegners ein Phase-2-Pokémon ist.\n\nDurchsuche dein Deck nach bis zu 2 Karten und nimm sie auf deine Hand. Mische anschließend dein Deck."
	},

	trainerType: "Supporter",

	thirdParty: {
		cardmarket: 369064,
		tcgplayer: 183927
	}
}

export default card
