import { Card } from '../../../interfaces'
import Set from '../Crimson Invasion'

const card: Card = {
	name: {
		en: "Haunter",
		fr: "Spectrum",
		es: "Haunter",
		it: "Haunter",
		pt: "Haunter",
		de: "Alpollo"
	},

	illustrator: "Eri Yamaki",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		93,
	],

	hp: 70,

	types: [
		"Psychic",
	],

	evolveFrom: {
		en: "Gastly",
		fr: "Fantominus",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Psychic",
			],
			name: {
				en: "Pain Amplifier",
				fr: "Amplificateur de Douleur",
				es: "Amplificador de Dolor",
				it: "Aumentapena",
				pt: "Ampliador da Dor",
				de: "Schmerzverstärker"
			},
			effect: {
				en: "Put 2 damage counters on each of your opponent’s Pokémon that has any damage counters on it.",
				fr: "Placez 2 marqueurs de dégâts sur chacun des Pokémon de votre adversaire ayant au moins un marqueur de dégâts.",
				es: "Pon 2 contadores de daño en cada uno de los Pokémon de tu rival que tenga algún contador de daño sobre él.",
				it: "Metti due segnalini danno su ciascuno dei Pokémon del tuo avversario che abbia dei segnalini danno.",
				pt: "Coloque 2 contadores de dano em cada um dos Pokémon do seu oponente que tiver algum contador de dano nele.",
				de: "Lege 2 Schadensmarken auf jedes Pokémon deines Gegners, auf dem mindestens 1 Schadensmarke liegt."
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

	retreat: 1,

	thirdParty: {
		cardmarket: 311887,
		tcgplayer: 149060
	}
}

export default card
