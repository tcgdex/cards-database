import { Card } from 'models/database/card'
import Set from '../Battle Styles'

const card: Card = {
	dexId: [405],
	set: Set,

	name: {
		'en-us': "Luxray",
		'fr-fr': "Luxray",
		'es-es': "Luxray",
		'it-it': "Luxray",
		'pt-br': "Luxray",
		'de-de': "Luxtra"
	},

	illustrator: "Kazuma Koda",
	rarity: "Holo Rare",
	category: "Pokemon",
	hp: 150,
	types: ["Lightning"],

	evolveFrom: {
		'en-us': "Luxio",
		'fr-fr': "Luxio",
		'es-es': "Luxio",
		'it-it': "Luxio",
		'pt-br': "Luxio",
		'de-de': "Luxio"
	},

	attacks: [{
		name: {
			'en-us': "Electrostep",
			'fr-fr': "Électro-Pas",
			'es-es': "Electropaso",
			'it-it': "Elettropasso",
			'pt-br': "Passo Elétrico",
			'de-de': "Elektroschritt"
		},

		effect: {
			'en-us': "This attack does 40 damage to 1 of your opponent's Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.) Switch this Pokémon with 1 of your Benched Pokémon.",
			'fr-fr': "Cette attaque inflige 40 dégâts à l'un des Pokémon de votre adversaire. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.) Échangez ce Pokémon contre l'un de vos Pokémon de Banc.",
			'es-es': "Este ataque hace 40 puntos de daño a 1 de los Pokémon de tu rival. (No apliques Debilidad y Resistencia a los Pokémon en Banca). Cambia este Pokémon por 1 de tus Pokémon en Banca.",
			'it-it': "Questo attacco infligge 40 danni a uno dei Pokémon del tuo avversario. Non applicare debolezza e resistenza ai Pokémon in panchina. Scambia questo Pokémon con uno della tua panchina.",
			'pt-br': "Este ataque causa 40 pontos de dano a 1 dos Pokémon do seu oponente (não aplique Fraqueza e Resistência aos Pokémon no Banco). Troque este Pokémon por 1 dos seus Pokémon no Banco.",
			'de-de': "Diese Attacke fügt 1 Pokémon deines Gegners 40 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.) Tausche dieses Pokémon gegen 1 Pokémon auf deiner Bank aus."
		},

		cost: ["Lightning"]
	}, {
		name: {
			'en-us': "Scar Strikes",
			'fr-fr': "Acharnement",
			'es-es': "Golpes en la Cicatriz",
			'it-it': "Sfregiocolpi",
			'pt-br': "Golpe na Ferida",
			'de-de': "Narbenschläge"
		},

		effect: {
			'en-us': "If your opponent's Active Pokémon already has any damage counters on it, this attack does 100 more damage.",
			'fr-fr': "Si le Pokémon Actif de votre adversaire a déjà des marqueurs de dégâts, cette attaque inflige 100 dégâts supplémentaires.",
			'es-es': "Si el Pokémon Activo de tu rival ya tiene algún contador de daño sobre él, este ataque hace 100 puntos de daño más.",
			'it-it': "Se il Pokémon attivo del tuo avversario ha già dei segnalini danno, questo attacco infligge 100 danni in più.",
			'pt-br': "Se o Pokémon Ativo do seu oponente já tiver algum contador de dano nele, este ataque causará 100 pontos de dano a mais.",
			'de-de': "Wenn auf dem Aktiven Pokémon deines Gegners mindestens 1 Schadensmarke liegt, fügt diese Attacke 100 Schadenspunkte mehr zu."
		},

		damage: "100+",
		cost: ["Lightning", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "E",


	stage: "Stage2",

	description: {
		'en-us': "Luxray's ability to see through objects comes in handy when it's scouting for danger."
	},

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 545351,
				tcgplayer: 234200
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 545351,
				tcgplayer: 234200
			}
		},
	],
}

export default card
