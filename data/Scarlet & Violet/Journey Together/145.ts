import { Card } from "../../../interfaces"
import Set from "../Journey Together"

const card: Card = {
	set: Set,

	name: {
		en: "Black Belt's Training",
		fr: "Entraînement de Karatéka",
		es: "Entrenamiento de Karateka",
		de: "Schwarzgurt-Training",
		it: "Allenamento di Cinturanera",
		pt: "Treino de Faixa Preta",
		'es-mx': "Entrenamiento de Karateka"
	},

	rarity: "Common",
	category: "Trainer",

	effect: {
		en: "During this turn, attacks used by your Pokémon do 40 more damage to your opponent's Active Pokémon ex (before applying Weakness and Resistance).",
		fr: "Pendant ce tour, les attaques utilisées par vos Pokémon infligent 40 dégâts supplémentaires au Pokémon-ex Actif de votre adversaire (avant application de la Faiblesse et de la Résistance).",
		es: "Durante este turno, los ataques usados por tus Pokémon hacen 40 puntos de daño más al Pokémon ex Activo de tu rival (antes de aplicar Debilidad y Resistencia).",
		de: "Während dieses Zuges fügen die von deinen Pokémon eingesetzten Attacken dem Aktiven Pokémon-ex deines Gegners 40 Schadenspunkte mehr zu (bevor Schwäche und Resistenz verrechnet werden).",
		it: "Durante questo turno, gli attacchi usati dai tuoi Pokémon infliggono 40 danni in più al Pokémon-ex attivo del tuo avversario, prima di aver applicato debolezza e resistenza.",
		pt: "Durante este turno, os ataques usados pelos seus Pokémon causarão 40 pontos de dano a mais ao Pokémon ex Ativo do seu oponente (antes de aplicar Fraqueza e Resistência).",
		'es-mx': "Durante este turno, los ataques usados por tus Pokémon hacen 40 puntos de daño más al Pokémon ex Activo de tu rival (antes de aplicar Debilidad y Resistencia)."
	},

	trainerType: "Supporter",
	regulationMark: "H",

	variants: {
		"firstEdition": false,
		"holo": false,
		"normal": true
		"reverse": true,
		"wPromo": false,
		}
}

export default card
