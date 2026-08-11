import { Card } from 'models/database/card'
import Set from '../Fates Collide'

const card: Card = {
	name: {
		'en-us': "Glaceon EX",
		'fr-fr': "Givrali EX",
		'es-es': "Glaceon EX",
		'it-it': "Glaceon EX",
		'pt-br': "Glaceon EX",
		'de-de': "Glaziola EX"
	},

	illustrator: "Ryo Ueda",
	rarity: "Ultra Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		471,
	],

	hp: 170,

	types: [
		"Water",
	],

	suffix: "EX",

	attacks: [
		{
			cost: [
				"Water",
				"Colorless",
			],
			name: {
				'en-us': "Second Bite",
				'fr-fr': "Double Morsure",
				'es-es': "Segundo Mordisco",
				'it-it': "Punto Dolente",
				'pt-br': "Segunda Mordida",
				'de-de': "Wunde Stelle"
			},
			effect: {
				'en-us': "This attack does 10 more damage for each damage counter on your opponent's Active Pokémon.",
				'fr-fr': "Cette attaque inflige 10 dégâts supplémentaires pour chaque marqueur de dégâts placé sur le Pokémon Actif de votre adversaire.",
				'es-es': "Este ataque hace 10 puntos de daño más por cada contador de daño en el Pokémon Activo de tu rival.",
				'it-it': "Questo attacco infligge 10 danni in più per ogni segnalino danno presente sul Pokémon attivo del tuo avversario.",
				'pt-br': "Este ataque causa 10 de danos adicionais para cada contador de danos no Pokémon Ativo do seu oponente.",
				'de-de': "Dieser Angriff fügt 10 weitere Schadenspunkte für jede Schadensmarke auf dem Aktiven Pokémon deines Gegners zu."
			},
			damage: "20+",

		},
		{
			cost: [
				"Water",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Crystal Ray",
				'fr-fr': "Rayon de Cristal",
				'es-es': "Rayo de Cristal",
				'it-it': "Cristalraggio",
				'pt-br': "Raio de Cristal",
				'de-de': "Kristallstrahl"
			},
			effect: {
				'en-us': "During your opponent's next turn, prevent all damage done to this Pokémon by attacks from Evolution Pokémon.",
				'fr-fr': "Pendant le prochain tour de votre adversaire, évitez tous les dégâts infligés à ce Pokémon par des attaques de Pokémon Évolutifs.",
				'es-es': "Durante el próximo turno de tu rival, evita todo el daño infligido a este Pokémon por ataques de Pokémon Evolución.",
				'it-it': "Durante il prossimo turno del tuo avversario, previeni tutti i danni da attacchi inflitti a questo Pokémon dai Pokémon Evoluzione.",
				'pt-br': "Durante a próxima vez de jogar do seu oponente, previna todos os danos causados a este Pokémon por ataques de Pokémon de Evolução.",
				'de-de': "Verhindere allen Schaden, der diesem Pokémon während des nächsten Zuges deines Gegners durch Angriffe von Entwicklungs-Pokémon zugefügt wird."
			},
			damage: 70,

		},
	],

	weaknesses: [
		{
			type: "Metal",
			value: "×2"
		},
	],

	retreat: 2,
	stage: "Basic",

	thirdParty: {
		cardmarket: 289936,
		tcgplayer: 117888
	}
}

export default card
