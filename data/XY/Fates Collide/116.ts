import { Card } from '../../../interfaces'
import Set from '../Fates Collide'

const card: Card = {
	name: {
		en: "Glaceon EX",
		fr: "Givrali EX",
		es: "Glaceon EX",
		it: "Glaceon EX",
		pt: "Glaceon EX",
		de: "Glaziola EX"
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
				en: "Second Bite",
				fr: "Double Morsure",
				es: "Segundo Mordisco",
				it: "Punto Dolente",
				pt: "Segunda Mordida",
				de: "Wunde Stelle"
			},
			effect: {
				en: "This attack does 10 more damage for each damage counter on your opponent's Active Pokémon.",
				fr: "Cette attaque inflige 10 dégâts supplémentaires pour chaque marqueur de dégâts placé sur le Pokémon Actif de votre adversaire.",
				es: "Este ataque hace 10 puntos de daño más por cada contador de daño en el Pokémon Activo de tu rival.",
				it: "Questo attacco infligge 10 danni in più per ogni segnalino danno presente sul Pokémon attivo del tuo avversario.",
				pt: "Este ataque causa 10 de danos adicionais para cada contador de danos no Pokémon Ativo do seu oponente.",
				de: "Dieser Angriff fügt 10 weitere Schadenspunkte für jede Schadensmarke auf dem Aktiven Pokémon deines Gegners zu."
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
				en: "Crystal Ray",
				fr: "Rayon de Cristal",
				es: "Rayo de Cristal",
				it: "Cristalraggio",
				pt: "Raio de Cristal",
				de: "Kristallstrahl"
			},
			effect: {
				en: "During your opponent's next turn, prevent all damage done to this Pokémon by attacks from Evolution Pokémon.",
				fr: "Pendant le prochain tour de votre adversaire, évitez tous les dégâts infligés à ce Pokémon par des attaques de Pokémon Évolutifs.",
				es: "Durante el próximo turno de tu rival, evita todo el daño infligido a este Pokémon por ataques de Pokémon Evolución.",
				it: "Durante il prossimo turno del tuo avversario, previeni tutti i danni da attacchi inflitti a questo Pokémon dai Pokémon Evoluzione.",
				pt: "Durante a próxima vez de jogar do seu oponente, previna todos os danos causados a este Pokémon por ataques de Pokémon de Evolução.",
				de: "Verhindere allen Schaden, der diesem Pokémon während des nächsten Zuges deines Gegners durch Angriffe von Entwicklungs-Pokémon zugefügt wird."
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
		cardmarket: 289846
	}
}

export default card
