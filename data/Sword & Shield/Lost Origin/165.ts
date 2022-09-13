import { Card } from "../../../interfaces"
import Set from "../Lost Origin"

const card: Card = {
	set: Set,

	name: {
		en: "Panic Mask",
		fr: "Masque de Panique",
		es: "Máscara del Pánico",
		it: "Maschera di Panico",
		pt: "Máscara Apavorante",
		de: "Panikmaske"
	},

	rarity: "Uncommon",
	category: "Trainer",

	effect: {
		en: "Prevent all damage done to the Pokémon this card is attached to by attacks from your opponent's Pokémon that have 40 HP or less remaining.",
		fr: "Évitez tous les dégâts infligés au Pokémon auquel cette carte est attachée par les attaques des Pokémon de votre adversaire auxquels il reste 40 PV ou moins.",
		es: "Evita todo el daño infligido al Pokémon al que esté unida esta carta por ataques de los Pokémon de tu rival a los que les queden 40 PS o menos.",
		it: "Previeni tutti i danni inflitti al Pokémon a cui è assegnata questa carta dagli attacchi dei Pokémon del tuo avversario che hanno 40 PS o meno rimanenti.",
		pt: "Previna todo o dano causado ao Pokémon ao qual esta carta está ligada por ataques dos Pokémon do seu oponente que tenham PS restante de 40 ou menos.",
		de: "Verhindere allen Schaden, der dem Pokémon, an das diese Karte angelegt ist, durch Attacken von Pokémon deines Gegners, die 40 oder weniger verbleibende KP haben, zugefügt wird."
	},

	trainerType: "Tool",
	regulationMark: "F",

	variants: {
		"normal": true,
		"reverse": true,
		"holo": false
	}
}

export default card