import { Card } from '../../../interfaces'
import Set from '../Great Encounters'

const card: Card = {
	name: {
		en: "Swampert",
		fr: "Laggron",
		de: "Sumpex"
	},

	illustrator: "Kouki Saitou",
	rarity: "Rare Holo",
	category: "Pokemon",
	set: Set,

	dexId: [
		260,
	],

	hp: 130,

	types: [
		"Water",
	],

	evolveFrom: {
		en: "Marshtomp",
		fr: "Flobio",
	},

	stage: "Stage2",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				en: "Wash Out",
				fr: "Partir au lavage",
				de: "Wegspülen"
			},
			effect: {
				en: "As often as you like during your turn (before your attack), you may move a Water or Fighting Energy attached to 1 of your Benched Pokémon to your Active Pokémon. This power can't be used if Swampert is affected by a Special Condition.",
				fr: "Autant de fois que vous le voulez lors de votre tour (avant votre attaque), vous pouvez déplacer une Énergie Water ou Fighting attachée à 1 des Pokémon de votre Banc sur votre Pokémon Actif. Ce pouvoir ne peut pas être utilisé si Laggron est affecté par un État Spécial.",
				de: "Beliebig oft während deines Zuges (vor deinem Angriff) kannst du 1 - oder -Energie, die an 1 Pokémon auf deiner Bank angelegt ist, an dein Aktives Pokémon anlegen. Diese Poké-Power kann nicht benutzt werden, wenn Sumpex von einem Speziellen Zustand betroffen ist."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Water",
				"Water",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Hammer Arm",
				fr: "Matro-Poing",
				de: "Hammerarm"
			},
			effect: {
				en: "Discard the top card from your opponent's deck.",
				fr: "Défaussez la carte du dessus du deck de votre adversaire.",
				de: "Lege die oberste Karte vom Deck deines Gegners auf seinen Ablagestapel."
			},
			damage: 80,

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "+30"
		},
	],

	retreat: 2,

	thirdParty: {
		cardmarket: 277911,
		tcgplayer: 89680
	}
}

export default card
