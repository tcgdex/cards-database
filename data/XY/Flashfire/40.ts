import { Card } from '../../../interfaces'
import Set from '../Flashfire'

const card: Card = {
	name: {
		en: "Dusknoir",
		fr: "Noctunoir",
		es: "Dusknoir",
		it: "Dusknoir",
		pt: "Dusknoir",
		de: "Zwirrfinst"
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
		en: "Dusclops",
		fr: "Téraclope",
		es: "Dusclops",
		it: "Dusclops",
		pt: "Dusclops",
		de: "Zwirrklop"
	},

	stage: "Stage2",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Shadow Void",
				fr: "Crevasse d'Ombre",
				es: "Brecha Sombra",
				it: "Vuotoscuro",
				pt: "Vácuo Sombrio",
				de: "Dunkles Nichts"
			},
			effect: {
				en: "As often as you like during your turn (before your attack), you may move 1 damage counter from 1 of your Pokémon to this Pokémon.",
				fr: "Autant de fois que vous le voulez pendant votre tour (avant votre attaque), vous pouvez déplacer un marqueur de dégâts de l'un de vos Pokémon vers ce Pokémon.",
				es: "Todas las veces que quieras durante tu turno (antes de tu ataque), puedes mover 1 contador de daño de 1 de tus Pokémon a este Pokémon.",
				it: "Durante il tuo turno, prima di attaccare, puoi spostare un segnalino danno da uno dei tuoi Pokémon a questo Pokémon tutte le volte che vuoi.",
				pt: "Tantas vezes quanto desejar em sua vez de jogar (antes de atacar), você pode mover 1 contador de danos de 1 dos seus Pokémon para este Pokémon.",
				de: "Beliebig oft während deines Zuges (vor deinem Angriff ) kannst du 1 Schadensmarke von 1 deiner Pokémon auf dieses Pokémon verschieben."
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
				en: "Pain Pellets",
				fr: "Points de Douleur",
				es: "Bolitas de Daño",
				it: "Infliggipena",
				pt: "Projéteis de Dor",
				de: "Kummerkugeln"
			},
			effect: {
				en: "Put damage counters on 1 of your opponent's Pokémon equal to the number of damage counters on this Pokémon.",
				fr: "Placez autant de marqueurs de dégâts sur l'un des Pokémon de votre adversaire qu'il y a de marqueurs de dégâts sur ce Pokémon.",
				es: "Pon un número de contadores de daño en 1 de los Pokémon de tu rival igual al número de contadores de daño en este Pokémon.",
				it: "Metti su uno dei Pokémon del tuo avversario un numero di segnalini danno pari al numero di segnalini danno presenti su questo Pokémon.",
				pt: "Coloque contadores de danos em 1 dos Pokémon do seu oponente em uma quantidade igual ao número de contadores de danos existentes nesse Pokémon.",
				de: "Lege Schadensmarken auf 1 Pokémon deines Gegners entsprechend der Anzahl der Schadensmarken auf diesem Pokémon."
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

	thirdParty: {
		cardmarket: 281523
	}
}

export default card
