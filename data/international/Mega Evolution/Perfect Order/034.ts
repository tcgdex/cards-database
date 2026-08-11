import { Card } from "models/database/card"
import Set from "../Perfect Order"

const card: Card = {
	set: Set,

	dexId: [678],

	name: {
		'en-us': "Meowstic",
		'fr-fr': "Mistigrix",
		'es-es': "Meowstic",
		'es-mx': "Meowstic",
		'de-de': "Psiaugon",
		'it-it': "Meowstic",
		'pt-br': "Meowstic"
	},

	evolveFrom: {
		'en-us': "Espurr",
		'fr-fr': "Psystigri",
		'es-es': "Espurr",
		'es-mx': "Espurr",
		'de-de': "Psiau",
		'it-it': "Espurr",
		'pt-br': "Espurr",
	},

	illustrator: "Kannnu",
	rarity: "Uncommon",
	category: "Pokemon",
	hp: 100,
	types: ["Psychic"],
	stage: "Stage1",

	attacks: [{
		cost: ["Psychic"],

		name: {
			'en-us': "Perplex",
			'fr-fr': "Affolement",
			'es-es': "Desconcierto",
			'es-mx': "Desconcierto",
			'de-de': "Perplex",
			'it-it': "Sconcerto",
			'pt-br': "Perplexo"
		},

		effect: {
			'en-us': "Your opponent's Active Pokémon is now Confused.",
			'fr-fr': "Le Pokémon Actif de votre adversaire est maintenant Confus.",
			'es-es': "El Pokémon Activo de tu rival pasa a estar Confundido.",
			'es-mx': "El Pokémon Activo de tu rival ahora está Confundido.",
			'de-de': "Das Aktive Pokémon deines Gegners ist jetzt verwirrt.",
			'it-it': "Il Pokémon attivo del tuo avversario viene confuso.",
			'pt-br': "O Pokémon Ativo do seu oponente agora está Confuso."
		}
	}, {
		cost: ["Psychic"],

		name: {
			'en-us': "Psychic",
			'fr-fr': "Psyko",
			'es-es': "Psíquico",
			'es-mx': "Fuerza Psíquica",
			'de-de': "Psychokinese",
			'it-it': "Psichico",
			'pt-br': "Psíquico"
		},

		effect: {
			'en-us': "This attack does 30 more damage for each Energy attached to your opponent's Active Pokémon.",
			'fr-fr': "Cette attaque inflige 30 dégâts supplémentaires pour chaque Énergie attachée au Pokémon Actif de votre adversaire.",
			'es-es': "Este ataque hace 30 puntos de daño más por cada Energía unida al Pokémon Activo de tu rival.",
			'es-mx': "Este ataque hace 30 puntos de daño más por cada Energía unida al Pokémon Activo de tu rival.",
			'de-de': "Diese Attacke fügt für jede an das Aktive Pokémon deines Gegners angelegte Energie 30 Schadenspunkte mehr zu.",
			'it-it': "Questo attacco infligge 30 danni in più per ogni Energia assegnata al Pokémon attivo del tuo avversario.",
			'pt-br': "Este ataque causa 30 pontos de dano a mais para cada Energia ligada ao Pokémon Ativo do seu oponente."
		},

		damage: "30+"
	}],

	weaknesses: [
		{
			type: "Darkness",
			value: "×2",
		},
	],
	resistances: [
		{
			type: "Fighting",
			value: "-30",
		},
	],
	retreat: 1,
	regulationMark: "J",

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 684419,
				cardmarket: 877448
			}
		},
		{
			type: "reverse",
			thirdParty: {
				tcgplayer: 684419,
				cardmarket: 877448
			}
		}
	],

}

export default card
