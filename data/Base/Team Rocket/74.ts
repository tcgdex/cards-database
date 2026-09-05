import { Card } from '../../../interfaces'
import Set from '../Team Rocket'

const card: Card = {
	name: {
		en: "Challenge!",
		fr: "Défi !",
		de: "Herausforderung!"
	},

	illustrator: "Kagemaru Himeno",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		en: "Ask your opponent if he or she accepts your challenge. If your opponent declines (or if both Benches are full), draw 2 cards. If your opponent accepts, each of you searches your decks for any number of Basic Pokémon cards and puts them face down onto your Benches. (A player can't do this if his or her Bench is full.) When you both have finished, shuffle your decks and turn those cards face up.",
		fr: "Demandez à votre adversaire s'il relève le défi. S'il décline votre défi (ou si les 2 Bancs sont pleins), piochez 2 cartes. S'il relève votre défi, chacun d'entre vous cherche dans son deck autant de cartes Pokémon de base que bon lui semble et les place face cachée sur son Banc. (Un joueur ne peut pas faire cela si son Banc est plein). Lorsque vous avez tous deux fini, mélangez vos decks respectifs et dévoilez ces cartes.",
		de: "Frage deinen Gegner, ob er oder sie die Herausforderung annimmt. Falls dein Gegner ablehnt (oder falls beide Bänke voll sind), ziehe zwei Karten. Falls dein Gegner annimmt, durchsucht ihr beide eure Decks nach beliebig vielen Basis-Pokémon-Karten und legt sie mit der Bildseite nach unten auf eure Bänke. (Ein Spieler kann dies nicht tun, falls seine oder ihre Bank voll ist.) Wenn ihr beide fertig seid, mischt eure Decks und dreht die herausgesuchten Karten mit der Bildseite nach oben um."
	},


	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 274127,
				tcgplayer: 84159
			}
		},
		{
			type: "normal",
			stamp: ["1st-edition"],
			thirdParty: {
				cardmarket: 274127,
				tcgplayer: 84159
			}
		}
	]
}

export default card
