import { Card } from 'models/database/card'
import Set from '../Guardians Rising'

const card: Card = {
	name: {
		'en-us': "Minior",
		'fr-fr': "Météno",
		'es-es': "Minior",
		'it-it': "Minior",
		'pt-br': "Minior",
		'de-de': "Meteno"
	},

	illustrator: "Naoki Saito",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		774,
	],

	hp: 70,

	types: [
		"Fighting",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Swift",
				'fr-fr': "Météores",
				'es-es': "Rapidez",
				'it-it': "Comete",
				'pt-br': "Ataque Veloz",
				'de-de': "Sternschauer"
			},
			effect: {
				'en-us': "This attack’s damage isn’t affected by Weakness, Resistance, or any other effects on your opponent’s Active Pokémon.",
				'fr-fr': "Les dégâts de cette attaque ne sont pas affectés par la Faiblesse, la Résistance ou tout autre effet en action sur le Pokémon Actif de votre adversaire.",
				'es-es': "El daño de este ataque no se ve afectado por Debilidad, Resistencia o cualquier otro efecto en el Pokémon Activo de tu rival.",
				'it-it': "I danni di questo attacco non sono influenzati dalla debolezza, dalla resistenza o da qualsiasi altro effetto presente sul Pokémon attivo del tuo avversario.",
				'pt-br': "O dano deste ataque não é afetado por Fraqueza, Resistência ou quaisquer outros efeitos no Pokémon Ativo do seu oponente.",
				'de-de': "Der Schaden dieser Attacke wird durch Schwäche, Resistenz oder alle anderen Effekte auf dem Aktiven Pokémon deines Gegners nicht verändert."
			},
			damage: 20,

		},
		{
			cost: [
				"Fighting",
				"Fighting",
				"Fighting",
			],
			name: {
				'en-us': "Cosmicsplosion",
				'fr-fr': "Explosion Cosmique",
				'es-es': "Explosión Cósmica",
				'it-it': "Esplodicosmo",
				'pt-br': "Explósmica",
				'de-de': "Kosmiksplosion"
			},
			effect: {
				'en-us': "This Pokémon is Knocked Out.",
				'fr-fr': "Ce Pokémon est K.O.",
				'es-es': "Este Pokémon queda Fuera de Combate.",
				'it-it': "Questo Pokémon viene messo KO.",
				'pt-br': "Este Pokémon é Nocauteado.",
				'de-de': "Dieses Pokémon ist kampfunfähig."
			},
			damage: 190,

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Fighting",
			value: "-20"
		},
	],

	retreat: 1,

	description: {
		'en-us': "It eats dust in the atmosphere. The composition of the dust determines the color of its core.",
	},

	thirdParty: {
		cardmarket: 297692,
		tcgplayer: 130989
	}
}

export default card
