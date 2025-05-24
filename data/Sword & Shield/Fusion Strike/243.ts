import { Card } from "../../../interfaces"
import Set from "../Fusion Strike"

const card: Card = {
	set: Set,

	name: {
		en: "Spongy Gloves",
		fr: "Gants Spongieux",
		es: "Guantes Esponjosos",
		it: "Guanti Spugnosi",
		pt: "Luvas Esponjosas",
		de: "Schwammhandschuhe"
	},

	rarity: "Uncommon",
	category: "Trainer",

	effect: {
		en: "The attacks of the Pokémon this card is attached to do 30 more damage to your opponent's Active {W} Pokémon (before applying Weakness and Resistance).",
		fr: "Les attaques du Pokémon auquel cette carte est attachée infligent 30 dégâts supplémentaires au Pokémon {W} Actif de votre adversaire (avant application de la Faiblesse et de la Résistance).",
		es: "Los ataques del Pokémon al que esté unida esta carta hacen 30 puntos de daño más al Pokémon {W} Activo de tu rival (antes de aplicar Debilidad y Resistencia).",
		it: "Gli attacchi del Pokémon a cui è assegnata questa carta infliggono 30 danni in più al Pokémon attivo {W} del tuo avversario, prima di aver applicato debolezza e resistenza.",
		pt: "Os ataques do Pokémon ao qual esta carta está ligada causam 30 pontos de dano a mais ao Pokémon {W} Ativo do seu oponente (antes de aplicar Fraqueza e Resistência).",
		de: "Die Attacken des Pokémon, an das diese Karte angelegt ist, fügen dem Aktiven {W}-Pokémon deines Gegners 30 Schadenspunkte mehr zu (bevor Schwäche und Resistenz verrechnet werden)."
	},

	trainerType: "Tool",
	regulationMark: "E",
	illustrator: "Toyste Beach",

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	}
}

export default card