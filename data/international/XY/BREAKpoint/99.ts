import { Card } from '../../../interfaces'
import Set from '../BREAKpoint'

const card: Card = {
	name: {
		en: "Fighting Fury Belt",
		fr: "Ceinture Furie Combative",
		es: "Faldón Furia Luchadora",
		it: "Cintura Furialotta",
		pt: "Cinto de Luta Furiosa",
		de: "Kampfgeistgürtel"
	},

	illustrator: "Toyste Beach",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		fr: "Ajoutez 40 PV au Pokémon de base auquel cette carte est attachée et ses attaques infligent 10 dégâts supplémentaires au Pokémon Actif de votre adversaire (avant application de la Faiblesse et de la Résistance).",
		en: "The Basic Pokémon this card is attached to gets +40 HP and its attacks do 10 more damage to your opponent's Active Pokémon (before applying Weakness and Resistance).",
		es: "El Pokémon Básico al que esté unida esta carta obtiene 40 PS más y sus ataques hacen 10 puntos de daño más al Pokémon Activo de tu rival (antes de aplicar Debilidad y Resistencia).",
		it: "Il Pokémon Base a cui è assegnata questa carta ha 40 PS in più e i suoi attacchi infliggono 10 danni in più al Pokémon attivo del tuo avversario, prima di aver applicato debolezza e resistenza.",
		pt: "O Pokémon Básico ao qual este card está ligado recebe +40 PS e os seus ataques causam 10 de danos adicionais ao Pokémon Ativo do seu oponente (antes da aplicação de Fraqueza e Resistência)",
		de: "Das Basis-Pokémon, an das diese Karte angelegt ist, erhält 40 zusätzliche KP und seine Angriffe fügen dem Aktiven Pokémon deines Gegners 10 weitere Schadenspunkte zu (bevor Schwäche und Resistenz verrechnet werden)."
	},

	trainerType: "Tool",

	thirdParty: {
		cardmarket: 288274,
		tcgplayer: 111570
	}
}

export default card
