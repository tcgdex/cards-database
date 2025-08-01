import { Card } from '../../../interfaces'
import Set from '../Cosmic Eclipse'

const card: Card = {
	name: {
		en: "Chaotic Swell",
		fr: "Houle Chaotique",
		es: "Caos Creciente",
		it: "Caos Gravitazionale",
		pt: "Maré Caótica",
		de: "Öde des Chaos"
	},

	illustrator: "Ryo Ueda",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		fr: "Chaque fois qu’un des joueurs joue une carte Stade de sa main, défaussez cette carte Stade après avoir défaussé celle-ci. (La nouvelle carte Stade n’a aucun effet.)",
		en: "Whenever either player plays a Stadium card from their hand, discard that Stadium card after discarding this one. (The new Stadium card has no effect.)",
		es: "Cada vez que algún jugador juegue 1 carta de Estadio de su mano, descarta esa carta de Estadio después de descartar esta. (La nueva carta de Estadio no tiene efecto).",
		it: "Ogni volta che uno dei giocatori gioca una carta Stadio che ha in mano, scarta quella carta dopo aver scartato questa. La nuova carta Stadio non ha effetto.",
		pt: "Sempre que qualquer um dos jogadores jogar uma carta de Estádio da própria mão, descarte aquela carta de Estádio após descartar esta (a nova carta de Estádio não tem efeito).",
		de: "Wenn ein Spieler eine Stadionkarte aus seiner Hand spielt, lege jene Stadionkarte auf den Ablagestapel, nachdem du diese Karte auf den Ablagestapel gelegt hast. (Die neue Stadionkarte hat keinen Effekt.)"
	},

	trainerType: "Stadium",

	thirdParty: {
		cardmarket: 408554
	}
}

export default card
