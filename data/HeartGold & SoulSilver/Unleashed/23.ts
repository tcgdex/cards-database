import { Card } from '../../../interfaces'
import Set from '../Unleashed'

const card: Card = {
	name: {
		en: "Roserade",
		fr: "Roserade",
		de: "Roserade"
	},

	illustrator: "Takashi Yamaguchi",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		407,
	],

	hp: 90,

	types: [
		"Grass",
	],

	evolveFrom: {
		en: "Roselia",
		fr: "Roselia",
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				en: "Energy Signal",
				fr: "Signal d’énergie",
				de: "Energiesignal"
			},
			effect: {
				en: "When you attach a Grass Energy card or Psychic Energy card from your hand to Roserade during your turn, you may use this power. If you attach a Grass Energy card, the Defending Pokémon is now Confused. If you attach a Psychic Energy card, the Defending Pokémon is now Poisoned. This power can’t be used if Roserade is affected by a Special Condition.",
				fr: "Lorsque vous attachez une carte Énergie Grass ou Énergie Psychic de votre main à Roserade, vous pouvez utiliser ce pouvoir. Si vous attachez une carte Énergie Grass, le Pokémon Défenseur est maintenant Confus. Si vous attachez une carte Énergie Psychic, le Pokémon Défenseur est maintenant Empoisonné. Ce pouvoir ne peut pas être utilisé si Roserade est affecté par un État Spécial.",
				de: "Wenn du in deinem Zug 1 -Energiekarte oder 1 -Energiekarte aus deiner Hand an Roserade anlegst, kannst du diese Poké-Power verwenden. Wenn du 1 -Energiekarte anlegst, ist das Verteidigende Pokémon jetzt verwirrt. Wenn du 1 -Energiekarte anlegst, ist das Verteidigende Pokémon jetzt vergifet. Diese Poké-Power kann nicht benutzt werden, wenn Roserade von einem Speziellen Zustand betroffen ist."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Grass",
				"Colorless",
			],
			name: {
				en: "Power Blow",
				fr: "Coup puissant",
				de: "Mächtiger Schlag"
			},
			effect: {
				en: "Does 20 damage times the amount of Energy attached to Roserade.",
				fr: "Inflige 20 dégâts multipliés par le nombre de cartes Énergie attachées à Roserade.",
				de: "Dieser Angriff fügt 20 Schadenspunkte mal der Anzahl der an Roserade angelegten Energien zu."
			},
			damage: "20x",

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	retreat: 1,

	description: {
		en: "Its sweet aroma attracts prey. Then it spews poison. The more toxic it is, the sweeter its aroma."
	},

	variants: [
		{
			type: "normal"
		},
		{
			type: "reverse"
		},
	],

	thirdParty: {
		cardmarket: 279179,
		tcgplayer: 88830
	}
}

export default card
