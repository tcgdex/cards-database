import { Card } from "../../../interfaces"
import Set from "../Brilliant Stars"

const card: Card = {
	set: Set,

	name: {
		en: "Choice Belt",
		fr: "Ceinture Choix",
		es: "Cinturón Elección",
		it: "Cinturascelta",
		pt: "Cinturão da Escolha",
		de: "Wahlgürtel"
	},

	rarity: "Uncommon",
	category: "Trainer",

	effect: {
		en: "The attacks of the Pokémon this card is attached to do 30 more damage to your opponent's Active Pokémon V (before applying Weakness and Resistance).",
		fr: "Les attaques du Pokémon auquel cette carte est attachée infligent 30 dégâts supplémentaires au Pokémon-V Actif de votre adversaire (avant application de la Faiblesse et de la Résistance).",
		es: "Los ataques del Pokémon al que esté unida esta carta hacen 30 puntos de daño más al Pokémon V Activo de tu rival (antes de aplicar Debilidad y Resistencia).",
		it: "Gli attacchi del Pokémon a cui è assegnata questa carta infliggono 30 danni in più al Pokémon-V attivo del tuo avversario, prima di aver applicato debolezza e resistenza.",
		pt: "Os ataques do Pokémon ao qual esta carta está ligada causam 30 pontos de dano a mais ao Pokémon V Ativo do seu oponente (antes de aplicar Fraqueza e Resistência).",
		de: "Die Attacken des Pokémon, an das diese Karte angelegt ist, fügen dem Aktiven Pokémon-V deines Gegners 30 Schadenspunkte mehr zu (bevor Schwäche und Resistenz verrechnet werden)."
	},

	trainerType: "Tool",
	regulationMark: "F",

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	},

	thirdParty: {
		cardmarket: 608681,
		tcgplayer: 263857
	}
}

export default card