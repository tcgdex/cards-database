import { Card } from "../../../interfaces"
import Set from "../Scarlet & Violet"

const card: Card = {
	set: Set,

	name: {
		en: "Rock Chestplate",
		fr: "Plastron Roc",
		es: "Coraza Roca",
		it: "Pettorale di Roccia",
		pt: "Peitoral de Pedra",
		de: "Steinbrustpanzer"
	},

	rarity: "Uncommon",
	category: "Trainer",

	effect: {
		en: "The {F} Pokémon this card is attached to takes 30 less damage from attacks from your opponent's Pokémon (after applying Weakness and Resistance).",
		fr: "Le Pokémon {F} auquel cette carte est attachée subit 30 dégâts de moins provenant des attaques des Pokémon de votre adversaire (après application de la Faiblesse et de la Résistance).",
		es: "Los ataques de los Pokémon de tu rival hacen 30 puntos de daño menos al Pokémon {F} al que esté unida esta carta (después de aplicar Debilidad y Resistencia).",
		it: "Il Pokémon {F} a cui è assegnata questa carta subisce 30 danni in meno dagli attacchi dei Pokémon del tuo avversario, dopo aver applicato debolezza e resistenza.",
		pt: "O Pokémon {F} ao qual esta carta está ligada recebe 30 pontos de dano a menos de ataques dos Pokémon do seu oponente (depois de aplicar Fraqueza e Resistência).",
		de: "Dem {F}-Pokémon, an das diese Karte angelegt ist, werden durch Attacken von Pokémon deines Gegners 30 Schadenspunkte weniger zugefügt (nachdem Schwäche und Resistenz verrechnet wurden)."
	},

	trainerType: "Tool",
	regulationMark: "G",

	variants: {
		holo: false
	},

	illustrator: "Toyste Beach",

	thirdParty: {
		cardmarket: 702488
	}
}

export default card