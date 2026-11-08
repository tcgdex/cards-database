import { Card } from 'models/database/card'
import Set from '../Guardians Rising'

const card: Card = {
	name: {
		'en-us': "Machoke",
		'fr-fr': "Machopeur",
		'es-es': "Machoke",
		'it-it': "Machoke",
		'pt-br': "Machoke",
		'de-de': "Maschock"
	},

	illustrator: "Kouki Saitou",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		67,
	],

	hp: 100,

	types: [
		"Fighting",
	],

	evolveFrom: {
		'en-us': "Machop",
		'fr-fr': "Machoc",
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: {
				'en-us': "Daunting Pose",
				'fr-fr': "Attitude Patibulaire",
				'es-es': "Pose Intimidante",
				'it-it': "Posa Imponente",
				'pt-br': "Pose Intimidante",
				'de-de': "Ablehnende Haltung"
			},
			effect: {
				'en-us': "Prevent all damage done to your Benched Pokémon by your opponent’s attacks. Your opponent’s attacks and Abilities can’t put damage counters on your Benched Pokémon.",
				'fr-fr': "Évitez tous les dégâts infligés à vos Pokémon de Banc par les attaques de votre adversaire. Les attaques et les talents de votre adversaire ne peuvent pas placer de marqueurs de dégâts sur vos Pokémon de Banc.",
				'es-es': "Evita todo el daño infligido a tus Pokémon en Banca por ataques de tu rival. Los ataques y las habilidades de tu rival no pueden poner contadores de daño en tus Pokémon en Banca.",
				'it-it': "Previeni tutti i danni inflitti ai tuoi Pokémon in panchina dagli attacchi del tuo avversario. Gli attacchi e le abilità del tuo avversario non possono farti assegnare segnalini danno ai tuoi Pokémon in panchina.",
				'pt-br': "Previne todo o dano causado aos seus Pokémon no Banco pelos ataques do seu oponente. Os ataques e as Habilidades do seu oponente não podem colocar contadores de dano nos seus Pokémon no Banco.",
				'de-de': "Verhindere allen Schaden, der den Pokémon auf deiner Bank durch Attacken deines Gegners zugefügt wird. Durch Attacken und Fähigkeiten deines Gegners können keine Schadensmarken auf die Pokémon auf deiner Bank gelegt werden."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Fighting",
				"Fighting",
			],
			name: {
				'en-us': "Cross Chop",
				'fr-fr': "Coup-Croix",
				'es-es': "Tajo Cruzado",
				'it-it': "Incrocolpo",
				'pt-br': "Golpe Cruzado",
				'de-de': "Kreuzhieb"
			},
			effect: {
				'en-us': "Flip a coin. If heads, this attack does 30 more damage.",
				'fr-fr': "Lancez une pièce. Si c’est face, cette attaque inflige 30 dégâts supplémentaires.",
				'es-es': "Lanza 1 moneda. Si sale cara, este ataque hace 30 puntos de daño más.",
				'it-it': "Lancia una moneta. Se esce testa, questo attacco infligge 30 danni in più.",
				'pt-br': "Jogue 1 moeda. Se sair cara, este ataque causará 30 pontos de dano a mais.",
				'de-de': "Wirf 1 Münze. Bei Kopf fügt diese Attacke 30 Schadenspunkte mehr zu."
			},
			damage: "30+",

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 3,

	description: {
		'en-us': "As a result of its continual workouts, it has developed tremendous power. It uses that power to help people with their work.",
	},

	thirdParty: {
		cardmarket: 297525,
		tcgplayer: 130974
	}
}

export default card
