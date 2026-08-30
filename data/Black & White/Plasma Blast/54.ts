import { Card } from '../../../interfaces'
import Set from '../Plasma Blast'

const card: Card = {
	name: {
		en: "Archeops",
		fr: "Aéroptéryx",
		es: "Archeops",
		it: "Archeops",
		pt: "Archeops",
		de: "Aeropteryx"
	},

	illustrator: "Kouki Saitou",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		567,
	],

	hp: 120,

	types: [
		"Fighting",
	],

	evolveFrom: {
		en: "Archen",
		fr: "Arkéapti",
		es: "Archen",
		it: "Archen",
		pt: "Archen",
		de: "Flapteryx"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Fighting",
			],
			name: {
				en: "Acrobatics",
				fr: "Acrobatie",
				es: "Acróbata",
				it: "Acrobazia",
				pt: "Acrobático",
				de: "Akrobatik"
			},
			effect: {
				en: "Flip 2 coins. This attack does 20 more damage for each heads.",
				fr: "Lancez 2 pièces. Cette attaque inflige 20 dégâts supplémentaires pour chaque côté face.",
				es: "Lanza 2 monedas. Este ataque hace 20 puntos de daño más por cada cara.",
				it: "Lancia due volte una moneta. Ogni volta che esce testa, questo attacco infligge 20 danni in più.",
				pt: "Jogue 2 moedas. Este ataque causa 20 de danos adicionais para cada cara.",
				de: "Wirf 2 Münzen. Dieser Angriff fügt 20 weitere Schadenspunkte mal der Anzahl „Kopf“ zu."
			},
			damage: 20,

		},
		{
			cost: [
				"Fighting",
				"Fighting",
			],
			name: {
				en: "Swift Dive",
				fr: "Vive Plongée",
				es: "Picado Veloz",
				it: "Picchiata Rapida",
				pt: "Mergulho Rápido",
				de: "Turbotaucher"
			},
			effect: {
				en: "If this Pokémon's remaining HP is 50 or less, this attack's base damage is 50.",
				fr: "S'il reste 50 PV ou moins à ce Pokémon, les dégâts de base de cette attaque sont de 50.",
				es: "Si a este Pokémon le quedan 50 PV o menos, el daño básico de este ataque es 50.",
				it: "Se i PV rimanenti di questo Pokémon diventano 50 o meno, il danno base di questo attacco è 50.",
				pt: "Se o PS restante deste Pokémon for 50 ou menos, o dano base deste ataque é 50.",
				de: "Wenn dieses Pokémon 50 oder weniger verbliebene KP hat, beträgt der Grundschaden dieser Attacke 50 Schadenspunkte."
			},
			damage: 100,

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 0,

	description: {
		en: "It runs better than it flies. It takes off into the sky by running at a speed of 25 mph.",
		fr: "Il est plus doué pour courir que pour voler. Il doit s'élancer à 40 km/h avant de pouvoir s'envoler.",
		es: "Corre a mayor velocidad de la que puede volar. Alcanza una velocidad de 40 km/h antes de alzarse en vuelo hacia el cielo.",
		it: "È più versato nella corsa che nel volo. Si lancia in aria a una velocità di 40 km/h sbattendo le ali.",
		pt: "Corre melhor do que voa. Levanta voo aos céus correndo a uma velocidade de 25 milhas por hora.",
		de: "Zu Fuß ist es schneller als in der Luft. Es muss ein Tempo von 40 km/h erreichen, bevor es sich in die Lüfte aufschwingt."
	},

	variants: [
		{
			type: "holo"
		},
		{
			type: "reverse"
		}
	],

	thirdParty: {
		cardmarket: 281075,
		tcgplayer: 83611
	}
}

export default card
