import { Card } from 'models/database/card'
import Set from '../Steam Siege'

const card: Card = {
	name: {
		'en-us': "Cobalion",
		'fr-fr': "Cobaltium",
		'es-es': "Cobalion",
		'it-it': "Cobalion",
		'pt-br': "Cobalion",
		'de-de': "Kobalium"
	},

	illustrator: "kirisAki",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		638,
	],

	hp: 120,

	types: [
		"Metal",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Metal",
			],
			name: {
				'en-us': "Quick Guard",
				'fr-fr': "Prévention",
				'es-es': "Anticipo",
				'it-it': "Anticipo",
				'pt-br': "Prevenção",
				'de-de': "Rapidschutz"
			},
			effect: {
				'en-us': "Prevent all damage done to this Pokémon by attacks from Basic Pokémon during your opponent's next turn. This Pokémon can't use Quick Guard during your next turn.",
				'fr-fr': "Évitez tous les dégâts infligés à ce Pokémon par des attaques de Pokémon de base pendant le prochain tour de votre adversaire. Ce Pokémon ne peut pas utiliser Prévention pendant votre prochain tour.",
				'es-es': "Evita todo el daño infligido a este Pokémon por ataques de Pokémon Básicos durante el próximo turno de tu rival. Este Pokémon no puede usar Anticipo durante tu próximo turno.",
				'it-it': "Previeni tutti i danni da attacchi inflitti a questo Pokémon dai Pokémon Base durante il prossimo turno del tuo avversario. Durante il tuo prossimo turno, questo Pokémon non può usare Anticipo.",
				'pt-br': "Previne todos os danos causados a este Pokémon por ataques de Pokémon Básicos durante a próxima vez de jogar do seu oponente. Este Pokémon não poderá usar Prevenção durante sua próxima vez de jogar.",
				'de-de': "Verhindere allen Schaden, der diesem Pokémon während des nächsten Zuges deines Gegners durch Angriffe von Basis-Pokémon zugefügt wird. Dieses Pokémon kann Rapidschutz während deines nächsten Zuges nicht einsetzen."
			},

		},
		{
			cost: [
				"Metal",
				"Metal",
			],
			name: {
				'en-us': "Revenge Blast",
				'fr-fr': "Explo-Vengeance",
				'es-es': "Estallido Venganza",
				'it-it': "Vendicabomba",
				'pt-br': "Raio de Vingança",
				'de-de': "Rachestoß"
			},
			effect: {
				'en-us': "This attack does 30 more damage for each Prize card your opponent has taken.",
				'fr-fr': "Cette attaque inflige 30 dégâts supplémentaires pour chaque carte Récompense que votre adversaire a récupérée.",
				'es-es': "Este ataque hace 30 puntos de daño más por cada carta de Premio que haya tomado tu rival.",
				'it-it': "Questo attacco infligge 30 danni in più per ogni carta Premio presa dal tuo avversario.",
				'pt-br': "Este ataque causa 30 de danos adicionais para cada card de Prêmio conquistado por seu oponente.",
				'de-de': "Dieser Angriff fügt 30 weitere Schadenspunkte für jede Preiskarte zu, die dein Gegner bereits genommen hat."
			},
			damage: "30+",

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

	retreat: 2,

	description: {
		'en-us': "It has a body and heart of steel. It worked with its allies to punish people when they hurt Pokémon.",
	},

	thirdParty: {
		cardmarket: 291640,
		tcgplayer: 121203
	}
}

export default card
