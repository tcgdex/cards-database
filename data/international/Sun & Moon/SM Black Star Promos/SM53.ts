import { Card } from 'models/database/card'
import Set from '../SM Black Star Promos'

const card: Card = {
	name: {
		'en-us': "Dhelmise",
		'fr-fr': "Sinistrail",
		'es-es': "Dhelmise",
		'it-it': "Dhelmise",
		'pt-br': "Dhelmise",
		'de-de': "Moruda"
	},

	illustrator: "Kouki Saitou",
	rarity: "Promo",
	category: "Pokemon",
	set: Set,

	dexId: [
		781,
	],

	hp: 120,

	types: [
		"Psychic",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: {
				'en-us': "Steelworker",
				'fr-fr': "Expert Acier",
				'es-es': "Acero Templado",
				'it-it': "Tempracciaio",
				'pt-br': "Trabalhador de Aço",
				'de-de': "Stahlprofi"
			},
			effect: {
				'en-us': "Your Metal Pokémon’s attacks do 10 more damage to your opponent’s Active Pokémon (before applying Weakness and Resistance).",
				'fr-fr': "Les attaques de vos Pokémon Metal infligent 10 dégâts supplémentaires au Pokémon Actif de votre adversaire (avant application de la Faiblesse et de la Résistance).",
				'es-es': "Los ataques de tus Pokémon Metal hacen 10 puntos de daño más al Pokémon Activo de tu rival (antes de aplicar Debilidad y Resistencia).",
				'it-it': "Gli attacchi dei tuoi Pokémon Metal infliggono 10 danni in più al Pokémon attivo del tuo avversario, prima di aver applicato debolezza e resistenza.",
				'pt-br': "Os ataques dos seus Pokémon Metal causam 10 pontos de dano a mais ao Pokémon Ativo do seu oponente (antes de aplicar Fraqueza e Resistência).",
				'de-de': "Die Attacken deiner Metal-Pokémon fügen dem Aktiven Pokémon deines Gegners 10 Schadenspunkte mehr zu (bevor Schwäche und Resistenz verrechnet werden)."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Psychic",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Anchor Shot",
				'fr-fr': "Ancrage",
				'es-es': "Anclaje",
				'it-it': "Colpo d’Ancora",
				'pt-br': "Tiro de Âncora",
				'de-de': "Ankerschuss"
			},
			effect: {
				'en-us': "The Defending Pokémon can’t retreat during your opponent’s next turn.",
				'fr-fr': "Le Pokémon Défenseur ne peut pas battre en retraite pendant le prochain tour de votre adversaire.",
				'es-es': "El Pokémon Defensor no puede retirarse durante el próximo turno de tu rival.",
				'it-it': "Durante il prossimo turno del tuo avversario, il Pokémon difensore non può ritirarsi.",
				'pt-br': "O Pokémon Defensor não poderá recuar durante a próxima vez de jogar do seu oponente.",
				'de-de': "Das Verteidigende Pokémon kann sich während des nächsten Zuges deines Gegners nicht zurückziehen."
			},
			damage: 70,

		},
	],

	weaknesses: [
		{
			type: "Darkness",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Fighting",
			value: "-20"
		},
	],

	retreat: 2,

	description: {
		'en-us': "Swinging its massive anchor, it can KO Wailord in a single blow. What appears to be green seaweed is actually its body.",
	},
}

export default card
