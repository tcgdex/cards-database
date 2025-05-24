import { Card } from "../../../interfaces"
import Set from "../Prismatic Evolutions"

const card: Card = {
	set: Set,

	name: {
		en: "Haban Berry",
		fr: "Baie Fraigo",
		es: "Baya Anjiro",
		pt: "Fruta Meraçá",
		it: "Baccahaban",
		de: "Terirobeere"
	},

	rarity: "Common",
	category: "Trainer",

	effect: {
		en: "If the Pokémon this card is attached to is damaged by an attack from your opponent's {N} Pokémon, it takes 60 less damage (after applying Weakness and Resistance), and discard this card.",
		fr: "Si le Pokémon auquel cette carte est attachée subit les dégâts d'une attaque de l'un des Pokémon {N} de votre adversaire, il subit 60 dégâts de moins (après application de la Faiblesse et de la Résistance), et vous défaussez cette carte.",
		es: "Si el Pokémon al que está unida esta carta resulta dañado por un ataque de los Pokémon {N} de tu rival, ese ataque le hace 60 puntos de daño menos (después de aplicar Debilidad y Resistencia), y descartas esta carta.",
		pt: "Se o Pokémon ao qual esta carta está ligada for danificado por um ataque dos Pokémon {N} do seu oponente, ele receberá 60 pontos de dano a menos (depois de aplicar Fraqueza e Resistência), e descarte esta carta.",
		it: "Se il Pokémon a cui è assegnata questa carta viene danneggiato da un attacco di un Pokémon {N} del tuo avversario, subisce 60 danni in meno, dopo aver applicato debolezza e resistenza, e tu scarti questa carta.",
		de: "Wenn das Pokémon, an das diese Karte angelegt ist, durch eine Attacke von {N}-Pokémon deines Gegners Schaden erhält, werden ihm 60 Schadenspunkte weniger zugefügt (nachdem Schwäche und Resistenz verrechnet wurden), und du legst diese Karte auf deinen Ablagestapel."
	},

	trainerType: "Tool",
	regulationMark: "H",
	illustrator: "Studio Bora Inc."
}

export default card