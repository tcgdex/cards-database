import { Card } from '../../../interfaces'
import Set from '../Team Up'

const card: Card = {
	name: {
		en: "Charmander",
		fr: "Salamèche",
		es: "Charmander",
		it: "Charmander",
		pt: "Charmander",
		de: "Glumanda"
	},

	illustrator: "Naoyo Kimura",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		4,
	],

	hp: 50,

	types: [
		"Fire",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Fire",
			],
			name: {
				en: "Scratch",
				fr: "Griffe",
				es: "Arañazo",
				it: "Graffio",
				pt: "Arranhão",
				de: "Kratzer"
			},

			damage: 10,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Reprisal",
				fr: "Revanche",
				es: "Tomar Represalias",
				it: "Rappresaglia",
				pt: "Retaliar",
				de: "Repressalie"
			},
			effect: {
				en: "This attack does 20 damage for each damage counter on this Pokémon.",
				fr: "Cette attaque inflige 20 dégâts pour chaque marqueur de dégâts placé sur ce Pokémon.",
				es: "Este ataque hace 20 puntos de daño por cada contador de daño en este Pokémon.",
				it: "Questo attacco infligge 20 danni per ogni segnalino danno presente su questo Pokémon.",
				pt: "Este ataque causa 20 pontos de dano para cada contador de dano neste Pokémon.",
				de: "Diese Attacke fügt 20 Schadenspunkte mal der Anzahl der Schadensmarken auf diesem Pokémon zu."
			},
			damage: "20×",

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
		cardmarket: 368944,
		tcgplayer: 183782
	}
}

export default card
