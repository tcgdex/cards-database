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
		en: "Full Face Guard",
		fr: "Casque Intégral",
		es: "Escafandra",
		it: "Difesa Integrale",
		pt: "Proteção Facial Completa",
		de: "Gesichtsschutz"
	},

	rarity: "Uncommon",
	category: "Trainer",

	effect: {
		en: "If the Pokémon this card is attached to has no Abilities, it takes 20 less damage from attacks from your opponent's Pokémon (after applying Weakness and Resistance).",
		fr: "Si le Pokémon auquel cette carte est attachée n'a pas de talent, il subit 20 dégâts de moins provenant des attaques des Pokémon de votre adversaire (après application de la Faiblesse et de la Résistance).",
		es: "Si el Pokémon al que está unida esta carta no tiene ninguna habilidad, los ataques de los Pokémon de tu rival le hacen 20 puntos de daño menos (después de aplicar Debilidad y Resistencia).",
		it: "Se il Pokémon a cui è assegnata questa carta non ha abilità, subisce 20 danni in meno dagli attacchi dei Pokémon del tuo avversario, dopo aver applicato debolezza e resistenza.",
		pt: "Se o Pokémon ao qual esta carta está ligada não tiver Habilidades, ele receberá 20 pontos de dano a menos de ataques dos Pokémon do seu oponente (depois de aplicar Fraqueza e Resistência).",
		de: "Wenn das Pokémon, an das diese Karte angelegt ist, keine Fähigkeiten hat, werden ihm durch Attacken der Pokémon deines Gegners 20 Schadenspunkte weniger zugefügt (nachdem Schwäche und Resistenz verrechnet wurden)."
	},

	trainerType: "Tool",
	illustrator: "AYUMI ODASHIMA",
	regulationMark: "E"
}

export default card
