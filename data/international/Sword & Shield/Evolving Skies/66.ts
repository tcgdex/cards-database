import { Card } from 'models/database/card'
import Set from '../Evolving Skies'

const card: Card = {
	set: Set,


	name: {
		'en-us': "Wobbuffet",
		'fr-fr': "Qulbutoké",
		'es-es': "Wobbuffet",
		'it-it': "Wobbuffet",
		'pt-br': "Wobbuffet",
		'de-de': "Woingenau"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 120,
	types: ["Psychic"],
	stage: "Basic",
	illustrator: "Anesaki Dynamic",

	attacks: [{
		name: {
			'en-us': "Mirror Pain",
			'fr-fr': "Douleur Miroir",
			'es-es': "Dolor Espejo",
			'it-it': "Pena Riflessa",
			'pt-br': "Mirror Pain",
			'de-de': "Schmerzspiegel"
		},

		effect: {
			'en-us': "Put damage counters on your opponent's Active Pokémon equal to the number of damage counters on 1 of your Benched Pokémon.",
			'fr-fr': "Placez autant de marqueurs de dégâts sur le Pokémon Actif de votre adversaire qu'il y a de marqueurs de dégâts sur l'un de vos Pokémon de Banc.",
			'es-es': "Pon una cantidad de contadores de daño en el Pokémon Activo de tu rival equivalente a la cantidad de contadores de daño en 1 de tus Pokémon en Banca.",
			'it-it': "Metti sul Pokémon attivo del tuo avversario un numero di segnalini danno pari al numero di segnalini danno presenti su uno dei Pokémon della tua panchina.",
			'pt-br': "Put damage counters on your opponent's Active Pokémon equal to the number of damage counters on 1 of your Benched Pokémon.",
			'de-de': "Lege Schadensmarken auf das Aktive Pokémon deines Gegners entsprechend der Anzahl der Schadensmarken auf 1 Pokémon auf deiner Bank."
		},

		cost: ["Colorless", "Colorless"]
	}, {
		name: {
			'en-us': "Headbutt Bounce",
			'fr-fr': "Culbute Surprise",
			'es-es': "Bote Cabezazo",
			'it-it': "Rimbalzo Bottintesta",
			'pt-br': "Headbutt Bounce",
			'de-de': "Abrupter Kopfstoß"
		},

		damage: 70,
		cost: ["Psychic", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Darkness",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "-30"
	}],

	retreat: 2,

	description: {
		'en-us': "To keep its pitch-black tail hidden, it lives quietly in the darkness. It is never first to attack."
	},

	dexId: [202],
	regulationMark: "E",

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 574114,
				tcgplayer: 246840
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 574114,
				tcgplayer: 246840
			}
		},
	],
}

export default card
