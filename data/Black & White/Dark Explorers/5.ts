import { Card } from '../../../interfaces'
import Set from '../Dark Explorers'

const card: Card = {
	name: {
		en: "Carnivine",
		fr: "Vortente",
		es: "Carnivine",
		it: "Carnivine",
		pt: "Carnivine",
		de: "Venuflibis"
	},

	illustrator: "Yukiko Baba",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		455,
	],

	hp: 90,

	types: [
		"Grass",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Grass",
			],
			name: {
				en: "Lure Poison",
				fr: "Appât Vénéneux",
				de: "Lockendes Gift"
			},
			effect: {
				en: "Switch the Defending Pokémon with 1 of your opponent's Benched Pokémon. The new Defending Pokémon is now Poisoned.",
				fr: "Échangez le Pokémon Défenseur avec 1 des Pokémon de Banc de votre adversaire. Le nouveau Pokémon Défenseur est maintenant Empoisonné.",
				de: "Tausche das Verteidigende Pokémon gegen 1 Pokémon auf der Bank deines Gegners aus. Das neue Verteidigende Pokémon ist jetzt vergiftet."
			},

		},
		{
			cost: [
				"Grass",
				"Grass",
				"Colorless",
			],
			name: {
				en: "Spit Squall",
				fr: "Rafale de Crachats",
				de: "Spuckschwall"
			},
			effect: {
				en: "Your opponent puts the Defending Pokémon and all cards attached to it into his or her hand.",
				fr: "Votre adversaire reprend le Pokémon Défenseur et toutes les cartes qui lui sont attachées dans sa main.",
				de: "Dein Gegner nimmt das Verteidigende Pokémon und alle daran angelegten Karten zurück auf seine Hand."
			},

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Water",
			value: "-20"
		},
	],

	retreat: 2,

	description: {
		en: "It binds itself to trees on marshes. It attracts prey with its sweet-smelling drool and gulps them down.",
		de: "Klammert sich an Bäume in Sümpfen. Lockt Beute mit seinem süßlichen Speichel an und schluckt sie dann."
	},

	thirdParty: {
		cardmarket: 280333,
		tcgplayer: 84106
	}
}

export default card
