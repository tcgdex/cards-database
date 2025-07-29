import { Card } from '../../../interfaces'
import Set from '../Boundaries Crossed'

const card: Card = {
	name: {
		en: "Aspertia City Gym",
		fr: "Arène de Pavonnay",
		es: "Gimnasio Engobe",
		it: "Palestra di Alisopoli",
		pt: "Ginásio da Cidade de Aspertia",
		de: "Eventura City-Arena"
	},

	illustrator: "Ryo Ueda",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		fr: "Ajoute 20 PV à chacun des Pokémon Colorless en jeu (les vôtres et ceux de votre adversaire).",
		en: "Each Colorless Pokémon in play (both yours and your opponent’s) gets +20 HP.",
		es: "Cada Pokémon Colorless en juego (tanto tuyos como de tu rival) obtiene 20 PV más.",
		it: "Ciascun Pokémon Colorless in gioco, sia tuo che del tuo avversario, ha 20 PV in più.",
		pt: "Cada Pokémon Colorless em jogo (tanto seu quanto do seu oponente) recebe +20 PS.",
		de: "Jedes Colorless-Pokémon im Spiel (deine und die deines Gegners) erhält +20 KP."
	},

	trainerType: "Stadium",

	thirdParty: {
		cardmarket: 280714
	}
}

export default card
