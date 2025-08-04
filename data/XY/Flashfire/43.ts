import { Card } from '../../../interfaces'
import Set from '../Flashfire'

const card: Card = {
	name: {
		en: "Meowstic",
		fr: "Mistigrix",
		es: "Meowstic",
		it: "Meowstic",
		pt: "Meowstic",
		de: "Psiaugon"
	},

	illustrator: "5ban Graphics",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		678,
	],

	hp: 90,

	types: [
		"Psychic",
	],

	evolveFrom: {
		en: "Espurr",
		fr: "Psystigri",
		es: "Espurr",
		it: "Espurr",
		pt: "Espurr",
		de: "Psiau"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Psychic",
			],
			name: {
				en: "Ear Influence",
				fr: "Influence Otique",
				es: "Influencia Auditiva",
				it: "Drizzorecchio",
				pt: "Orelhas Controladoras",
				de: "Ohrenspiel"
			},
			effect: {
				en: "Move as many damage counters on your opponent's Pokémon as you like to any of your opponent's other Pokémon in any way you like.",
				fr: "Déplacez autant de marqueurs de dégâts que vous voulez des Pokémon de votre adversaire vers les autres Pokémon de votre adversaire, de la manière que vous voulez.",
				es: "Mueve tantos contadores de daño como quieras de los Pokémon de tu rival a cualquiera de los otros Pokémon de tu rival de la manera que desees.",
				it: "Distribuisci a piacimento i segnalini danno presenti sui Pokémon del tuo avversario.",
				pt: "Mova tantos contadores de danos dos Pokémon do seu oponente quanto desejar para quaisquer outros Pokémon do seu oponente do jeito que quiser.",
				de: "Verschiebe beliebig viele Schadensmarken auf den Pokémon deines Gegners in beliebiger Weise auf seine anderen Pokémon."
			},

		},
		{
			cost: [
				"Psychic",
				"Psychic",
				"Psychic",
			],
			name: {
				en: "Psychic",
				fr: "Psyko",
				es: "Psíquico",
				it: "Psichico",
				pt: "Psíquico",
				de: "Psychokinese"
			},
			effect: {
				en: "This attack does 10 more damage for each Energy attached to your opponent's Active Pokémon.",
				fr: "Cette attaque inflige 10 dégâts supplémentaires pour chaque Énergie attachée au Pokémon Actif de votre adversaire.",
				es: "Este ataque hace 10 puntos de daño más por cada Energía unida al Pokémon Activo de tu rival.",
				it: "Questo attacco infligge 10 danni in più per ogni Energia assegnata al Pokémon attivo del tuo avversario.",
				pt: "Esse ataque causa 10 de danos adicionais para cada Energia ligada ao Pokémon Ativo do seu oponente.",
				de: "Dieser Angriff fügt 10 weitere Schadenspunkte für jede Energie zu, die an das Aktive Pokémon deines Gegners angelegt ist."
			},
			damage: "60+",

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 1,

	thirdParty: {
		cardmarket: 281526,
		tcgplayer: 91176
	}
}

export default card
