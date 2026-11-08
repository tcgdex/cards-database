import { Card } from 'models/database/card'
import Set from '../Flashfire'

const card: Card = {
	name: {
		'en-us': "Dusknoir",
		'fr-fr': "Noctunoir",
		'es-es': "Dusknoir",
		'it-it': "Dusknoir",
		'pt-br': "Dusknoir",
		'de-de': "Zwirrfinst"
	},

	illustrator: "Suwama Chiaki",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		477,
	],

	hp: 130,

	types: [
		"Psychic",
	],

	evolveFrom: {
		'en-us': "Dusclops",
		'fr-fr': "Téraclope",
		'es-es': "Dusclops",
		'it-it': "Dusclops",
		'pt-br': "Dusclops",
		'de-de': "Zwirrklop"
	},

	stage: "Stage2",

	abilities: [
		{
			type: "Ability",
			name: {
				'en-us': "Shadow Void",
				'fr-fr': "Crevasse d'Ombre",
				'es-es': "Brecha Sombra",
				'it-it': "Vuotoscuro",
				'pt-br': "Vácuo Sombrio",
				'de-de': "Dunkles Nichts"
			},
			effect: {
				'en-us': "As often as you like during your turn (before your attack), you may move 1 damage counter from 1 of your Pokémon to this Pokémon.",
				'fr-fr': "Autant de fois que vous le voulez pendant votre tour (avant votre attaque), vous pouvez déplacer un marqueur de dégâts de l'un de vos Pokémon vers ce Pokémon.",
				'es-es': "Todas las veces que quieras durante tu turno (antes de tu ataque), puedes mover 1 contador de daño de 1 de tus Pokémon a este Pokémon.",
				'it-it': "Durante il tuo turno, prima di attaccare, puoi spostare un segnalino danno da uno dei tuoi Pokémon a questo Pokémon tutte le volte che vuoi.",
				'pt-br': "Tantas vezes quanto desejar em sua vez de jogar (antes de atacar), você pode mover 1 contador de danos de 1 dos seus Pokémon para este Pokémon.",
				'de-de': "Beliebig oft während deines Zuges (vor deinem Angriff ) kannst du 1 Schadensmarke von 1 deiner Pokémon auf dieses Pokémon verschieben."
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
				'en-us': "Pain Pellets",
				'fr-fr': "Points de Douleur",
				'es-es': "Bolitas de Daño",
				'it-it': "Infliggipena",
				'pt-br': "Projéteis de Dor",
				'de-de': "Kummerkugeln"
			},
			effect: {
				'en-us': "Put damage counters on 1 of your opponent's Pokémon equal to the number of damage counters on this Pokémon.",
				'fr-fr': "Placez autant de marqueurs de dégâts sur l'un des Pokémon de votre adversaire qu'il y a de marqueurs de dégâts sur ce Pokémon.",
				'es-es': "Pon un número de contadores de daño en 1 de los Pokémon de tu rival igual al número de contadores de daño en este Pokémon.",
				'it-it': "Metti su uno dei Pokémon del tuo avversario un numero di segnalini danno pari al numero di segnalini danno presenti su questo Pokémon.",
				'pt-br': "Coloque contadores de danos em 1 dos Pokémon do seu oponente em uma quantidade igual ao número de contadores de danos existentes nesse Pokémon.",
				'de-de': "Lege Schadensmarken auf 1 Pokémon deines Gegners entsprechend der Anzahl der Schadensmarken auf diesem Pokémon."
			},

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

	retreat: 3,

	description: {
		'en-us': "It is said to take lost spirits into its pliant body and guide them home.",
	},

	thirdParty: {
		cardmarket: 281523,
		tcgplayer: 91173
	}
}

export default card
