import { Card } from '../../../interfaces'
import Set from '../Rebel Clash'

const card: Card = {
	name: {
		en: "Oleana",
		fr: "Liv",
		es: "Olivia",
		it: "Olive",
		pt: "Oleana",
		de: "Olivia"
	},

	illustrator: "kirisAki",
	rarity: "Ultra Rare",
	category: "Trainer",
	set: Set,

	effect: {
		en: "You can play this card only if you discard 2 other cards from your hand.\n\nYour opponent reveals their hand. Put a Trainer card you find there on the bottom of their deck.",
		fr: "Vous ne pouvez jouer cette carte que si vous défaussez 2 autres cartes de votre main.\n\nVotre adversaire dévoile sa main. Placez une carte Dresseur que vous y trouvez en dessous de son deck.",
		es: "Puedes jugar esta carta solo si descartas otras 2 cartas de tu mano.\n\nTu rival enseña las cartas de su mano. Pon 1 carta de Entrenador que encuentres entre ellas en la parte inferior de su baraja.",
		it: "Puoi giocare questa carta solo se scarti altre due carte che hai in mano.\n\nIl tuo avversario mostra le carte che ha in mano. Prendi una carta Allenatore presente tra esse e mettila in fondo al suo mazzo.",
		pt: "Você só pode jogar esta carta se descartar outras 2 cartas da sua mão.\n\nSeu oponente revela a própria mão. Coloque 1 carta de Treinador que encontrar lá como a carta de baixo do baralho dele(a).",
		de: "Du kannst diese Karte nur spielen, wenn du 2 andere Karten aus deiner Hand auf deinen Ablagestapel legst.\n\nDein Gegner zeigt dir seine Handkarten. Lege 1 Trainerkarte, die du dort findest, unter sein Deck."
	},

	trainerType: "Supporter",
	regulationMark: "D",

	variants: {
		normal: false,
		reverse: false,
		holo: true,
		firstEdition: false
	}
}

export default card
