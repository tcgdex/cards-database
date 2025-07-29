import { Card } from '../../../interfaces'
import Set from '../Undaunted'

const card: Card = {
	name: {
		en: "Raticate",
		fr: "Rattatac",
		de: "Rattikarl"
	},

	illustrator: "Sachiko Adachi",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		20,
	],

	hp: 80,

	types: [
		"Colorless",
	],

	evolveFrom: {
		en: "Rattata",
		fr: "Rattata",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Razor-Sharp Incisors",
				fr: "Incisives aiguisées",
				de: "Scharfe Schneidezähne"
			},
			effect: {
				en: "Does 10 damage times the number of damage counters on the Defending Pokémon.",
				fr: "Inflige 10 dégâts multipliés par le nombre de marqueurs de dégât sur le Pokémon Défenseur.",
				de: "Dieser Angriff fügt 10 Schadenspunkte für jede Schadensmarke auf dem Verteidigenden Pokémon zu."
			},
			damage: "10x",

		},
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Gnaw Up",
				fr: "Rongetout",
				de: "Zernagen"
			},
			effect: {
				en: "Discard a Special Energy card attached to the Defending Pokémon.",
				fr: "Défaussez une carte Énergie spéciale attachée au Pokémon Défenseur.",
				de: "Lege 1 Spezialenergiekarte, die am Verteidigenden Pokémon angelegt ist, auf den Ablagestapel deines Gegners."
			},
			damage: 30,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	retreat: 0,

	description: {
		en: "Its whiskers help it to maintain balance. Its fangs never stop growing, so it gnaws to pare them down."
	},

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	},

	thirdParty: {
		cardmarket: 279287
	}
}

export default card
