import { Card } from "models/database/card"
import Set from "../Destined Rivals"

const card: Card = {
	dexId: [308],
	set: Set,

	name: {
		'en-us': "Medicham",
		'fr-fr': "Charmina",
		'de-de': "Meditalis",
		'it-it': "Medicham",
		'es-es': "Medicham",
		'pt-br': "Medicham",
		'es-mx': "Medicham"
	},


	illustrator: "Whisker",

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 120,
	types: ["Fighting"],
	evolveFrom: {
		'en-us': "Meditite",
		'fr-fr': "Méditikka",
		'de-de': "Meditie",
		'it-it': "Meditite",
		'es-es': "Meditite",
		'pt-br': "Meditite",
		'es-mx': "Meditite"
	},
	stage: "Stage1",

	attacks: [{
		cost: ["Fighting"],

		name: {
			'en-us': "Harmonious Spirit Palm",
			'fr-fr': "Paume Esprit Harmonieux",
			'de-de': "Harmonische Mentalhand",
			'it-it': "Palmospirito Armonioso",
			'es-es': "Palma del Espíritu Armonioso",
			'pt-br': "Palma do Espírito Harmonioso",
			'es-mx': "Palma del Espíritu Armonioso"
		},

		effect: {
			'en-us': "If this Pokémon and your opponent's Active Pokémon have the same amount of Energy attached, this attack does 120 more damage.",
			'fr-fr': "Si ce Pokémon et le Pokémon Actif de votre adversaire ont autant d'Énergies attachées, cette attaque inflige 120 dégâts supplémentaires.",
			'de-de': "Wenn an dieses Pokémon genauso viel Energie angelegt ist wie an das Aktive Pokémon deines Gegners, fügt diese Attacke 120 Schadenspunkte mehr zu.",
			'it-it': "Se questo Pokémon e il Pokémon attivo del tuo avversario hanno la stessa quantità di Energie assegnate, questo attacco infligge 120 danni in più.",
			'es-es': "Si este Pokémon y el Pokémon Activo de tu rival tienen la misma cantidad de Energías unidas, este ataque hace 120 puntos de daño más.",
			'pt-br': "Se este Pokémon e o Pokémon Ativo do seu oponente tiverem a mesma quantidade de Energia ligada a eles, este ataque causará 120 pontos de dano a mais.",
			'es-mx': "Si este Pokémon y el Pokémon Activo de tu rival tienen la misma cantidad de Energías unidas, este ataque hace 120 puntos de daño más."
		},

		damage: "50+"
	}],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "I",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 825974,
				tcgplayer: 632908
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 825974,
				tcgplayer: 632908
			}
		},
	],
}

export default card
