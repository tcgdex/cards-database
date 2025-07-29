import { Card } from '../../../interfaces'
import Set from '../XY'

const card: Card = {
	name: {
		en: "Rhyhorn",
		fr: "Rhinocorne",
		es: "Rhyhorn",
		it: "Rhyhorn",
		pt: "Rhyhorn",
		de: "Rihorn"
	},

	illustrator: "MAHOU",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		111,
	],

	hp: 80,

	types: [
		"Fighting",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Fighting",
			],
			name: {
				en: "Dig Out",
				fr: "Excavation",
				es: "Cavar",
				it: "Scavata",
				pt: "Escavar",
				de: "Freischaufeln"
			},
			effect: {
				en: "Discard the top card of your deck. If that card is a Fighting Energy card, attach it to this Pokémon.",
				fr: "Défaussez la carte du dessus de votre deck. Si c'est une carte Énergie Fighting, attachez-la à ce Pokémon.",
				es: "Descarta la primera carta de tu baraja. Si es una carta de Energía Fighting, únela a este Pokémon.",
				it: "Scarta la carta in cima al tuo mazzo. Se è una carta Energia Fighting, assegnala a questo Pokémon.",
				pt: "Descarte o card de cima do seu baralho. Se esse card for um card de Energia Fighting, ligue-o a este Pokémon.",
				de: "Lege die oberste Karte deines Decks auf deinen Ablagestapel. Handelt es sich um eine Fighting-Energiekarte, lege sie an dieses Pokémon an."
			},
			damage: 10,

		},
		{
			cost: [
				"Fighting",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Horn Drill",
				fr: "Empal'Korne",
				es: "Perforador",
				it: "Perforcorno",
				pt: "Chifre Broca",
				de: "Hornbohrer"
			},

			damage: 40,

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 3,

	thirdParty: {
		cardmarket: 281397
	}
}

export default card
