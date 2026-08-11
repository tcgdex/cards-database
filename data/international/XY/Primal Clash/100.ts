import { Card } from 'models/database/card'
import Set from '../Primal Clash'

const card: Card = {
	name: {
		'en-us': "Aegislash",
		'fr-fr': "Exagide",
		'es-es': "Aegislash",
		'it-it': "Aegislash",
		'pt-br': "Aegislash",
		'de-de': "Durengard"
	},

	illustrator: "Kouki Saitou",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		681,
	],

	hp: 140,

	types: [
		"Metal",
	],

	evolveFrom: {
		'en-us': "Doublade",
		'fr-fr': "Dimoclès",
		'es-es': "Doublade",
		'it-it': "Doublade",
		'pt-br': "Doublade",
		'de-de': "Duokles"
	},

	stage: "Stage2",

	abilities: [
		{
			type: "Ability",
			name: {
				'en-us': "Miracle Guard",
				'fr-fr': "Garde Miracle",
				'es-es': "Defensa Milagrosa",
				'it-it': "Guardia Miracolosa",
				'pt-br': "Guarda Milagroso",
				'de-de': "Wunderschutz"
			},
			effect: {
				'en-us': "Each of your Pokémon has no Weakness.",
				'fr-fr': "Aucun de vos Pokémon n'a de Faiblesse.",
				'es-es': "Ninguno de tus Pokémon tiene Debilidad.",
				'it-it': "Nessuno dei tuoi Pokémon ha debolezza.",
				'pt-br': "Seus Pokémon não têm Fraqueza.",
				'de-de': "Keins deiner Pokémon hat eine Schwäche."
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
				'en-us': "Protect Charge",
				'fr-fr': "Recharge Protectrice",
				'es-es': "Carga Protectora",
				'it-it': "Carica Protettiva",
				'pt-br': "Carga Protetora",
				'de-de': "Schützender Sturmangriff"
			},
			effect: {
				'en-us': "During your opponent's next turn, any damage done to this Pokémon by attacks is reduced by 20 (after applying Weakness and Resistance).",
				'fr-fr': "Pendant le prochain tour de votre adversaire, tous les dégâts infligés à ce Pokémon par des attaques sont réduits de 20 (après application de la Faiblesse et de la Résistance).",
				'es-es': "Durante el próximo turno de tu rival, cualquier daño infligido a este Pokémon por ataques se reduce en 20 (después de aplicar Debilidad y Resistencia).",
				'it-it': "Durante il prossimo turno del tuo avversario, i danni inflitti a questo Pokémon dagli attacchi sono ridotti di 20, dopo aver applicato debolezza e resistenza.",
				'pt-br': "Durante a próxima vez de jogar do seu oponente, qualquer dano causado a este Pokémon por ataques será reduzido em 20 (após a aplicação de Fraqueza e Resistência).",
				'de-de': "Während des nächsten Zuges deines Gegners wird Schaden, der diesem Pokémon durch Angriffe zugefügt wird, um 20 Schadenspunkte reduziert (nachdem Schwäche und Resistenz verrechnet wurden)."
			},
			damage: 80,

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
		'en-us': "Apparently, it can detect the innate qualities of leadership. According to legend, whoever it recognizes is destined to become king.",
	},

	thirdParty: {
		cardmarket: 273631,
		tcgplayer: 95998
	}
}

export default card
