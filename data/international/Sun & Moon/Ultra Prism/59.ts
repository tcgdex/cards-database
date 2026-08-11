import { Card } from 'models/database/card'
import Set from '../Ultra Prism'

const card: Card = {
	name: {
		'en-us': "Cresselia",
		'fr-fr': "Cresselia",
		'es-es': "Cresselia",
		'it-it': "Cresselia",
		'pt-br': "Cresselia",
		'de-de': "Cresselia"
	},

	illustrator: "chibi",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		488,
	],

	hp: 120,

	types: [
		"Psychic",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Psychic",
			],
			name: {
				'en-us': "Lunar Payback",
				'fr-fr': "Vengeance Lunaire",
				'es-es': "Venganza Lunar",
				'it-it': "Rivincita Lunare",
				'pt-br': "Retaliação da Lua",
				'de-de': "Lunar-Rache"
			},
			effect: {
				'en-us': "Discard an Energy from this Pokémon. If you do, switch all damage counters on this Pokémon with those on your opponent’s Active Pokémon.",
				'fr-fr': "Défaussez une Énergie de ce Pokémon. Dans ce cas, échangez tous les marqueurs de dégâts de ce Pokémon avec ceux du Pokémon Actif de votre adversaire.",
				'es-es': "Descarta 1 Energía de este Pokémon. Si lo haces, cambia todos los contadores de daño de este Pokémon por los del Pokémon Activo de tu rival.",
				'it-it': "Scarta un’Energia assegnata a questo Pokémon. Se lo fai, scambia tutti i segnalini danno presenti su questo Pokémon con quelli sul Pokémon attivo del tuo avversario.",
				'pt-br': "Descarte 1 Energia deste Pokémon. Se fizer isto, troque todos os contadores de dano neste Pokémon por aqueles no Pokémon Ativo do seu oponente.",
				'de-de': "Lege 1 Energie von diesem Pokémon auf deinen Ablagestapel. Wenn du das machst, tausche alle Schadensmarken auf diesem Pokémon gegen jene auf dem Aktiven Pokémon deines Gegners aus."
			},

		},
		{
			cost: [
				"Psychic",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Psychic",
				'fr-fr': "Psyko",
				'es-es': "Psíquico",
				'it-it': "Psichico",
				'pt-br': "Psíquico",
				'de-de': "Psychokinese"
			},
			effect: {
				'en-us': "This attack does 20 more damage times the amount of Energy attached to your opponent’s Active Pokémon.",
				'fr-fr': "Cette attaque inflige 20 dégâts supplémentaires multipliés par le nombre d’Énergies attachées au Pokémon Actif de votre adversaire.",
				'es-es': "Este ataque hace 20 puntos de daño más por cada Energía unida al Pokémon Activo de tu rival.",
				'it-it': "Questo attacco infligge 20 danni in più per ogni Energia assegnata al Pokémon attivo del tuo avversario.",
				'pt-br': "Este ataque causa 20 pontos de dano a mais vezes a quantidade de Energia ligada ao Pokémon Ativo do seu oponente.",
				'de-de': "Diese Attacke fügt 20 Schadenspunkte mehr mal der Anzahl der an das Aktive Pokémon deines Gegners angelegten Energien zu."
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

	description: {
		'en-us': "Those who sleep holding Cresselia's feather are assured of joyful dreams. It is said to represent the crescent moon.",
	},

	thirdParty: {
		cardmarket: 315989,
		tcgplayer: 157676
	}
}

export default card
