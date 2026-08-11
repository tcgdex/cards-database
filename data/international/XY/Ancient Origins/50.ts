import { Card } from 'models/database/card'
import Set from '../Ancient Origins'

const card: Card = {
	name: {
		'en-us': "Metagross",
		'fr-fr': "Métalosse",
		'es-es': "Metagross",
		'it-it': "Metagross",
		'pt-br': "Metagross",
		'de-de': "Metagross"
	},

	illustrator: "Hitoshi Ariga",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		376,
	],

	hp: 150,

	types: [
		"Metal",
	],

	evolveFrom: {
		'en-us': "Metang",
		'fr-fr': "Métang",
		'es-es': "Metang",
		'it-it': "Metang",
		'pt-br': "Metang",
		'de-de': "Metang"
	},

	stage: "Stage2",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Machine Gun Stomp",
				'fr-fr': "Mitraille-Piétinage",
				'es-es': "Pisotón Incesante",
				'it-it': "Pestata Mitra",
				'pt-br': "Pisadura Metralhada",
				'de-de': "Trommelfeuer-Stampfer"
			},
			effect: {
				'en-us': "This attack does 10 more damage for each card in your hand.",
				'fr-fr': "Cette attaque inflige 10 dégâts supplémentaires pour chaque carte dans votre main.",
				'es-es': "Este ataque hace 10 puntos de daño más por cada carta en tu mano.",
				'it-it': "Questo attacco infligge 10 danni in più per ogni carta nella tua mano.",
				'pt-br': "Este ataque causa 10 de danos adicionais para cada card que tiver na mão.",
				'de-de': "Dieser Angriff fügt 10 weitere Schadenspunkte für jede Karte auf deiner Hand zu."
			},
			damage: "20+",

		},
		{
			cost: [
				"Metal",
				"Metal",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Guard Press",
				'fr-fr': "Pression de Garde",
				'es-es': "Presión de Guardia",
				'it-it': "Pressadifesa",
				'pt-br': "Aperto Protetor",
				'de-de': "Schutzdruck"
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

		}
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

	retreat: 4,

	abilities: [{
		type: "Ability",

		name: {
			'en-us': "{title}:",
			'fr-fr': "{title}:",
			'es-es': "{title}:",
			'it-it': "{title}:",
			'pt-br': "{title}:",
			'de-de': "{title}:"
		},

		effect: {
			'en-us': "{title}: This Pokémon may have up to 2 Pokémon Tool cards attached to it.",
			'fr-fr': "{title}: Jusqu'à 2 cartes Outil Pokémon peuvent être attachées à ce Pokémon.",
			'es-es': "{title}: Este Pokémon puede tener hasta 2 cartas de Herramienta Pokémon unidas a él.",
			'it-it': "{title}: Questo Pokémon può avere fino a due carte Oggetto Pokémon assegnate.",
			'pt-br': "{title}: Este Pokémon pode ter até dois cards de Ferramenta Pokémon ligados a ele.",
			'de-de': "{title}: An dieses Pokémon können bis zu 2 Pokémon-Ausrüstungen angelegt sein."
		}
	}],

	description: {
		'en-us': "Metang combined to form it. With four brains, it has the intelligence of a supercomputer.",
	},

	thirdParty: {
		cardmarket: 284230,
		tcgplayer: 101472
	}
}

export default card
