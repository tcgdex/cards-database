import { Card } from '../../../interfaces'
import Set from '../Roaring Skies'

const card: Card = {
	name: {
		en: "Shedinja",
		fr: "Munja",
		es: "Shedinja",
		it: "Shedinja",
		pt: "Shedinja",
		de: "Ninjatom"
	},

	illustrator: "Aya Kusube",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		292,
	],

	hp: 30,

	types: [
		"Grass",
	],

	evolveFrom: {
		en: "Nincada",
		fr: "Ningale",
		es: "Nincada",
		it: "Nincada",
		pt: "Nincada",
		de: "Nincada"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Grass",
			],
			name: {
				en: "Cursed Rain",
				fr: "Pluie Ensorcelée",
				es: "Lluvia Maldita",
				it: "Pioggia Maledetta",
				pt: "Chuva Amaldiçoada",
				de: "Verfluchter Regen"
			},
			effect: {
				en: "Put 1 damage counter on each of your opponent's Pokémon. Switch this Pokémon with 1 of your Benched Pokémon.",
				fr: "Placez 1 marqueur de dégâts sur chacun des Pokémon de votre adversaire. Échangez ce Pokémon avec l'un de vos Pokémon de Banc.",
				es: "Pon 1 contador de daño en cada uno de los Pokémon de tu rival. Cambia este Pokémon por 1 de tus Pokémon en Banca.",
				it: "Metti un segnalino danno su ciascuno dei Pokémon del tuo avversario. Scambia questo Pokémon con uno della tua panchina.",
				pt: "Coloque 1 contador de danos em cada um dos Pokémon do seu oponente. Troque este Pokémon por 1 dos seus Pokémon no Banco.",
				de: "Lege 1 Schadensmarke auf jedes Pokémon deines Gegners. Tausche dieses Pokémon gegen 1 Pokémon auf deiner Bank aus."
			},

		},
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Hopeless Scream",
				fr: "Cri de Désespoir",
				es: "Grito Desesperado",
				it: "Urla Disperate",
				pt: "Grito do Desespero",
				de: "Schrei der Verzweiflung"
			},
			effect: {
				en: "This attack does 50 damage times the number of damage counters on this Pokémon.",
				fr: "Cette attaque inflige 50 dégâts multipliés par le nombre de marqueurs de dégâts placés sur ce Pokémon.",
				es: "Este ataque hace 50 puntos de daño por cada contador de daño en este Pokémon.",
				it: "Questo attacco infligge 50 danni per ogni segnalino danno presente su questo Pokémon.",
				pt: "Este ataque causa 50 de danos vezes o número de contadores de danos neste Pokémon.",
				de: "Dieser Angriff fügt 50 Schadenspunkte für jede Schadensmarke auf diesem Pokémon zu."
			},
			damage: "50×",

		},
	],

	retreat: 1,

	thirdParty: {
		cardmarket: 282679,
		tcgplayer: 98047
	}
}

export default card
