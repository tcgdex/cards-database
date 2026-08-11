import { Card } from "models/database/card"
import Set from "../Chaos Rising"

const card: Card = {
	set: Set,

	description: {
		'en-us': "Donphan is normally a calm Pokemon, but once it is enraged, it will curl its body into a ball and charge at you while rolling.",
	},


	name: {
		'en-us': "Donphan",
		'fr-fr': "Donphan",
		'es-es': "Donphan",
		'es-mx': "Donphan",
		'de-de': "Donphan",
		'it-it': "Donphan",
		'pt-br': "Donphan"
	},

	illustrator: "Julie Hang",
	rarity: "Common",
	category: "Pokemon",
	dexId: [232],
	hp: 150,
	types: ["Fighting"],

	evolveFrom: {
		'en-us': "Phanpy"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'en-us': "No Reprieve",
			'fr-fr': "Sans Répit",
			'es-es': "Sin Respiro",
			'es-mx': "Sin Tregua",
			'de-de': "Schonungslos",
			'it-it': "Senza Tregua",
			'pt-br': "Sem Trégua"
		},

		cost: ["Fighting"],
		damage: 20,

		effect: {
			'en-us': "During your next turn, attacks used by this Pokémon do 120 more damage to your opponent's Active Pokémon (before applying Weakness and Resistance).",
			'fr-fr': "Pendant votre prochain tour, les attaques utilisées par ce Pokémon infligent 120 dégâts supplémentaires au Pokémon Actif de votre adversaire (avant application de la Faiblesse et de la Résistance).",
			'es-es': "Durante tu próximo turno, los ataques usados por este Pokémon hacen 120 puntos de daño más al Pokémon Activo de tu rival (antes de aplicar Debilidad y Resistencia).",
			'es-mx': "Durante tu próximo turno, los ataques usados por este Pokémon hacen 120 puntos de daño más al Pokémon Activo de tu rival (antes de aplicar Debilidad y Resistencia).",
			'de-de': "Während deines nächsten Zuges fügen die von diesem Pokémon eingesetzten Attacken dem Aktiven Pokémon deines Gegners 120 Schadenspunkte mehr zu (bevor Schwäche und Resistenz verrechnet werden).",
			'it-it': "Durante il tuo prossimo turno, gli attacchi usati da questo Pokémon infliggono 120 danni in più al Pokémon attivo del tuo avversario, prima di aver applicato debolezza e resistenza.",
			'pt-br': "Durante o seu próximo turno, os ataques usados por este Pokémon causarão 120 pontos de dano a mais ao Pokémon Ativo do seu oponente (antes de aplicar Fraqueza e Resistência)."
		}
	}, {
		name: {
			'en-us': "Smashing Headbutt",
			'fr-fr': "Coup d'Boule Fracassant",
			'es-es': "Cabezazo Destructor",
			'es-mx': "Cabezazo Devastador",
			'de-de': "Schmetternde Kopfnuss",
			'it-it': "Bottintesta Distruttivo",
			'pt-br': "Cabeçada Destruidora"
		},

		cost: ["Fighting", "Colorless", "Colorless", "Colorless"],
		damage: 180,

		effect: {
			'en-us': "Discard 2 Energy from this Pokémon.",
			'fr-fr': "Défaussez 2 Énergies de ce Pokémon.",
			'es-es': "Descarta 2 Energías de este Pokémon.",
			'es-mx': "Descarta 2 Energías de este Pokémon.",
			'de-de': "Lege 2 Energien von diesem Pokémon auf deinen Ablagestapel.",
			'it-it': "Scarta due Energie da questo Pokémon.",
			'pt-br': "Descarte 2 Energias deste Pokémon."
		}
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 3,
	regulationMark: "J",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 886437,
				tcgplayer: 693478
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 886437,
				tcgplayer: 693478
			}
		},
	],
}

export default card
