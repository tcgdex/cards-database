import { Card } from '../../../interfaces'
import Set from '../Base Set'

const card: Card = {
	name: {
		en: "Ninetales",
		fr: "Feunard",
		de: "Vulnona"
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
				de: "Lockvogel"
			},
			effect: {
				en: "If your opponent has any Benched Pokémon, choose 1 of them and switch it with the Defending Pokémon.",
				fr: "Si votre adversaire a des Pokémon sur le Banc, choisissez 1 d'entre eux et échangez-le avec le Pokémon Défenseur.",
				de: "Falls Dein Gegner irgendwelche Pokémon auf der Bank hat, wähle eines von ihnen und tausce es mit dem verteidigenden Pokémon aus."
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
				de: "Feuersturm"
			},
			effect: {
				en: "Discard 1 Energy card attached to Ninetales in order to use this attack.",
				fr: "Défaussez 1 carte Énergie  attachée à Feunard pour pouvoir utiliser cette attaque.",
				de: "Entferne eine auf Vulona abgelegte  Energiekarte, um diesen Angriff auszuführen"
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
			stamp: ["1st edition"]
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
		fr: "Très intelligent et rancunier. Attrapez-lui une de ses queues et il vous maudira pour 1000 ans."
	},

	thirdParty: {
		cardmarket: 273707,
		tcgplayer: 42352
	}
}

export default card
