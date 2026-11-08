import { Card } from "models/database/card"
import Set from "../Mega Evolution"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Premium Power Pro",
		'fr-fr': "Puissance Premium Pro",
		'de-de': "Premium Power Pro",
		'it-it': "Potenza Premium Pro",
		'es-es': "Potencia Prémium Plus",
		'pt-br': "Suplemento Premium Pro",
		'es-mx': "Protepoder Prémium"
	},

	illustrator: "Toyste Beach",
	rarity: "Ultra Rare",
	category: "Trainer",

	effect: {
		'en-us': "During this turn, attacks used by your {F} Pokémon do 30 more damage to your opponent's Active Pokémon (before applying Weakness and Resistance).",
		'fr-fr': "Pendant ce tour, les attaques utilisées par vos Pokémon {F} infligent 30 dégâts supplémentaires au Pokémon Actif de votre adversaire (avant application de la Faiblesse et de la Résistance).",
		'de-de': "Während dieses Zuges fügen die von deinen {F}-Pokémon eingesetzten Attacken dem Aktiven Pokémon deines Gegners 30 Schadenspunkte mehr zu (bevor Schwäche und Resistenz verrechnet werden).",
		'it-it': "Durante questo turno, gli attacchi usati dai tuoi Pokémon {F} infliggono 30 danni in più al Pokémon attivo del tuo avversario, prima di aver applicato debolezza e resistenza.",
		'es-es': "Durante este turno, los ataques usados por tus Pokémon {F} hacen 30 puntos de daño más al Pokémon Activo de tu rival (antes de aplicar Debilidad y Resistencia).",
		'pt-br': "Durante este turno, os ataques usados pelos seus Pokémon {F} causarão 30 pontos de dano a mais ao Pokémon Ativo do seu oponente (antes de aplicar Fraqueza e Resistência).",
		'es-mx': "Durante este turno, los ataques usados por tus Pokémon {F} hacen 30 puntos de daño más al Pokémon Activo de tu rival (antes de aplicar Debilidad y Resistencia)."
	},

	trainerType: "Item",
	regulationMark: "I",

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 851245,
				tcgplayer: 654513
			}
		},
	],
}

export default card
