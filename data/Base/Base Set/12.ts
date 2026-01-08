import { Card } from '../../../interfaces'
import Set from '../Base Set'

const card: Card = {
	name: {
		en: "Ninetales",
		fr: "Feunard",
		de: "Vulnona",
		it: "Ninetales"
	},

	illustrator: "Ken Sugimori",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		38,
	],

	hp: 80,

	types: [
		"Fire",
	],

	evolveFrom: {
		en: "Vulpix",
		it: "Vulpix"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Lure",
				fr: "Leurre",
				de: "Lockvogel",
				it: "Esca"
			},
			effect: {
				en: "If your opponent has any Benched Pokémon, choose 1 of them and switch it with the Defending Pokémon.",
				fr: "Si votre adversaire a des Pokémon sur le Banc, choisissez 1 d'entre eux et échangez-le avec le Pokémon Défenseur.",
				de: "Falls Dein Gegner irgendwelche Pokémon auf der Bank hat, wähle eines von ihnen und tausce es mit dem verteidigenden Pokémon aus.",
				it: "Se il tuo avversario ha dei Pokémon in Panchina, scegliene uno e scambialo con il Pokémon Difensore"
			},

		},
		{
			cost: [
				"Fire",
				"Fire",
				"Fire",
				"Fire",
			],
			name: {
				en: "Fire Blast",
				fr: "Déflagration",
				de: "Feuersturm",
				it: "Fuocobomba"
			},
			effect: {
				en: "Discard 1 Energy card attached to Ninetales in order to use this attack.",
				fr: "Défaussez 1 carte Énergie  attachée à Feunard pour pouvoir utiliser cette attaque.",
				de: "Entferne eine auf Vulona abgelegte  Energiekarte, um diesen Angriff auszuführen",
				it: "Scarta una carta Energia Fuoco assegnata a Ninetales per poter usare questo attacco."
			},
			damage: 80,

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],

	variants: [
		{
			type: "holo",
			subtype: "unlimited",
		},
		{
			type: "holo",
			subtype: "shadowless",
			stamp: ["1st-edition"]
		},
		{
			type: "holo",
			subtype: "shadowless",
		},
		{
			type: "holo",
			subtype: "1999-2000-copyright",
		}
	],


	description: {
		fr: "Très intelligent et rancunier. Attrapez-lui une de ses queues et il vous maudira pour 1000 ans.",
		it: "Molto intelligente, ma anche molto vendicativo. Chi osa afferrare una delle sue numerose code viene punito con una maledizione che durerà 1.000 anni. LIV 32 N.38"
	},

	thirdParty: {
		cardmarket: 273707,
		tcgplayer: 42352
	}
}

export default card
