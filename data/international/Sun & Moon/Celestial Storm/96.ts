import { Card } from 'models/database/card'
import Set from '../Celestial Storm'

const card: Card = {
	name: {
		'en-us': "Registeel",
		'fr-fr': "Registeel",
		'es-es': "Registeel",
		'it-it': "Registeel",
		'pt-br': "Registeel",
		'de-de': "Registeel"
	},

	illustrator: "Shin Nagasawa",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		379,
	],

	hp: 120,

	types: [
		"Metal",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: {
				'en-us': "Exoskeleton",
				'fr-fr': "Exosquelette",
				'es-es': "Exosqueleto",
				'it-it': "Esoscheletro",
				'pt-br': "Exo-esqueleto",
				'de-de': "Exoskelett"
			},
			effect: {
				'en-us': "This Pokémon takes 20 less damage from attacks (after applying Weakness and Resistance).",
				'fr-fr': "Tous les dégâts infligés à ce Pokémon par des attaques sont réduits de 10 (après application de la Faiblesse et de la Résistance).",
				'es-es': "Cualquier daño infligido a este Pokémon por ataques se reduce en 10 (después de aplicar Debilidad y Resistencia).",
				'it-it': "I danni inflitti a questo Pokémon dagli attacchi sono ridotti di 10, dopo aver applicato debolezza e resistenza.",
				'pt-br': "Qualquer dano causado a este Pokémon por ataques será reduzido em 10 (após a aplicação de Fraqueza e Resistência).",
				'de-de': "Schaden, der diesem Pokémon durch Angriffe zugefügt wird, wird um 10 Schadenspunkte reduziert (nachdem Schwäche und Resistenz verrechnet wurden)."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Metal",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Silver Fist",
				'fr-fr': "Poing Argenté",
				'es-es': "Puño Plateado",
				'it-it': "Pugno Argentato",
				'pt-br': "Punho Prata",
				'de-de': "Silberfaust"
			},
			effect: {
				'en-us': "If your opponent’s Active Pokémon has an Ability, this attack does 60 more damage.",
				'fr-fr': "Si le Pokémon Actif de votre adversaire a un talent, cette attaque inflige 60 dégâts supplémentaires.",
				'es-es': "Si el Pokémon Activo de tu rival tiene una habilidad, este ataque hace 60 puntos de daño más.",
				'it-it': "Se il Pokémon attivo del tuo avversario ha un’abilità, questo attacco infligge 60 danni in più.",
				'pt-br': "Se o Pokémon Ativo do seu oponente tiver uma Habilidade, este ataque causará 60 pontos de dano a mais.",
				'de-de': "Wenn das Aktive Pokémon deines Gegners eine Fähigkeit hat, fügt diese Attacke 60 Schadenspunkte mehr zu."
			},
			damage: "60+",

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Psychic",
			value: "-20"
		},
	],

	retreat: 3,

	description: {
		'en-us': "Its body is said to be harder than any kind of metal. A study has revealed that its body is hollow.",
	},

	thirdParty: {
		cardmarket: 361339,
		tcgplayer: 170921
	}
}

export default card
