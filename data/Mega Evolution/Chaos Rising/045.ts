import { Card } from "../../../interfaces"
import Set from "../Chaos Rising"

const card: Card = {
	set: Set,


	name: {
		en: "Donphan",
		fr: "Donphan",
		es: "Donphan",
		'es-mx': "Donphan",
		de: "Donphan",
		it: "Donphan",
		pt: "Donphan"
	},

	illustrator: "Julie Hang",
	rarity: "Common",
	category: "Pokemon",
	dexId: [232],
	hp: 150,
	types: ["Fighting"],

	evolveFrom: {
		en: "Phanpy"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			en: "No Reprieve",
			fr: "Sans Répit",
			es: "Sin Respiro",
			'es-mx': "Sin Tregua",
			de: "Schonungslos",
			it: "Senza Tregua",
			pt: "Sem Trégua"
		},

		cost: ["Fighting"],
		damage: 20,

		effect: {
			en: "During your next turn, attacks used by this Pokémon do 120 more damage to your opponent's Active Pokémon (before applying Weakness and Resistance).",
			fr: "Pendant votre prochain tour, les attaques utilisées par ce Pokémon infligent 120 dégâts supplémentaires au Pokémon Actif de votre adversaire (avant application de la Faiblesse et de la Résistance).",
			es: "Durante tu próximo turno, los ataques usados por este Pokémon hacen 120 puntos de daño más al Pokémon Activo de tu rival (antes de aplicar Debilidad y Resistencia).",
			'es-mx': "Durante tu próximo turno, los ataques usados por este Pokémon hacen 120 puntos de daño más al Pokémon Activo de tu rival (antes de aplicar Debilidad y Resistencia).",
			de: "Während deines nächsten Zuges fügen die von diesem Pokémon eingesetzten Attacken dem Aktiven Pokémon deines Gegners 120 Schadenspunkte mehr zu (bevor Schwäche und Resistenz verrechnet werden).",
			it: "Durante il tuo prossimo turno, gli attacchi usati da questo Pokémon infliggono 120 danni in più al Pokémon attivo del tuo avversario, prima di aver applicato debolezza e resistenza.",
			pt: "Durante o seu próximo turno, os ataques usados por este Pokémon causarão 120 pontos de dano a mais ao Pokémon Ativo do seu oponente (antes de aplicar Fraqueza e Resistência)."
		}
	}, {
		name: {
			en: "Smashing Headbutt",
			fr: "Coup d'Boule Fracassant",
			es: "Cabezazo Destructor",
			'es-mx': "Cabezazo Devastador",
			de: "Schmetternde Kopfnuss",
			it: "Bottintesta Distruttivo",
			pt: "Cabeçada Destruidora"
		},

		cost: ["Fighting", "Colorless", "Colorless", "Colorless"],
		damage: 180,

		effect: {
			en: "Discard 2 Energy from this Pokémon.",
			fr: "Défaussez 2 Énergies de ce Pokémon.",
			es: "Descarta 2 Energías de este Pokémon.",
			'es-mx': "Descarta 2 Energías de este Pokémon.",
			de: "Lege 2 Energien von diesem Pokémon auf deinen Ablagestapel.",
			it: "Scarta due Energie da questo Pokémon.",
			pt: "Descarte 2 Energias deste Pokémon."
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
	],
}

export default card
