import { Card } from '../../../interfaces'
import Set from '../Cosmic Eclipse'

const card: Card = {
	name: {
		en: "Victini",
		fr: "Victini",
		es: "Victini",
		it: "Victini",
		pt: "Victini",
		de: "Victini"
	},

	illustrator: "Saya Tsuruta",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		494,
	],

	hp: 70,

	types: [
		"Fire",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Victory Heal",
				fr: "Guérison Victoire",
				es: "Curación Victoria",
				it: "Curavittoria",
				pt: "Cura da Vitória",
				de: "Triumphheilung"
			},
			effect: {
				en: "Once during your turn (before your attack), you may heal 20 damage from 1 of your Benched Pokémon.",
				fr: "Une seule fois pendant votre tour (avant votre attaque), vous pouvez soigner 20 dégâts à l’un de vos Pokémon de Banc.",
				es: "Una vez durante tu turno (antes de tu ataque), puedes curar 20 puntos de daño a 1 de tus Pokémon en Banca.",
				it: "Una sola volta durante il tuo turno, prima di attaccare, puoi curare uno dei tuoi Pokémon in panchina da 20 danni.",
				pt: "Uma vez durante a sua vez de jogar (antes de atacar), você pode curar 20 pontos de dano de 1 dos seus Pokémon no Banco.",
				de: "Einmal während deines Zuges (bevor du angreifst) kannst du 20 Schadenspunkte bei 1 Pokémon auf deiner Bank heilen."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Fire",
				"Colorless",
			],
			name: {
				en: "Combustion",
				fr: "Fournaise",
				es: "Combustión",
				it: "Fuoco Continuo",
				pt: "Combustão",
				de: "Glühen"
			},

			damage: 30,

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],

	retreat: 1,

	thirdParty: {
		cardmarket: 407799
	}
}

export default card
