import { Card } from "models/database/card"
import Set from "../Mega Evolution"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Tinkaton",
		'fr-fr': "Forgelina",
		'de-de': "Granforgita",
		'it-it': "Tinkaton",
		'es-es': "Tinkaton",
		'pt-br': "Tinkaton",
		'es-mx': "Tinkaton"
	},

	illustrator: "toriyufu",
	rarity: "Uncommon",
	category: "Pokemon",
	hp: 160,
	types: ["Metal"],
	evolveFrom: {
		'en-us': "Tinkatuff",
		'fr-fr': "Forgella",
		'de-de': "Tafforgita",
		'it-it': "Tinkatuff",
		'es-es': "Tinkatuff",
		'pt-br': "Tinkatuff",
		'es-mx': "Tinkatuff"
	},
	stage: "Stage2",
	dexId: [959],

	attacks: [{
		cost: ["Metal"],

		name: {
			'en-us': "Windup Swing",
			'fr-fr': "Frappe Tournoyante",
			'de-de': "Aufziehschwung",
			'it-it': "Colpo Caricato",
			'es-es': "Impacto Mecánico",
			'pt-br': "Impulsão de Corda",
			'es-mx': "Tremendo Impacto"
		},

		effect: {
			'en-us': "This attack does 60 less damage for each Energy attached to your opponent's Active Pokémon.",
			'fr-fr': "Cette attaque inflige 60 dégâts de moins pour chaque Énergie attachée au Pokémon Actif de votre adversaire.",
			'de-de': "Diese Attacke fügt für jede an das Aktive Pokémon deines Gegners angelegte Energie 60 Schadenspunkte weniger zu.",
			'it-it': "Questo attacco infligge 60 danni in meno per ogni Energia assegnata al Pokémon attivo del tuo avversario.",
			'es-es': "Este ataque hace 60 puntos de daño menos por cada Energía unida al Pokémon Activo de tu rival.",
			'pt-br': "Este ataque causa 60 pontos de dano a menos para cada Energia ligada ao Pokémon Ativo do seu oponente.",
			'es-mx': "Este ataque hace 60 puntos de daño menos por cada Energía unida al Pokémon Activo de tu rival."
		},

		damage: "240-"
	}],

	weaknesses: [
		{
			type: "Fire",
			value: "×2",
		},
	],
	resistances: [
		{
			type: "Grass",
			value: "-30",
		},
	],
	retreat: 2,
	regulationMark: "I",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 851169,
				tcgplayer: 654437
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 851169,
				tcgplayer: 654437
			}
		},
	],
}

export default card
