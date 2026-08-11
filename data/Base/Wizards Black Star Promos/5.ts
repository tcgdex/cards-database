import { Card } from '../../../interfaces'
import Set from '../Wizards Black Star Promos'

const card: Card = {
	name: {
		en: "Dragonite",
		fr: "Dragonite",
		de: "Dragoran (Dragonit)"
	},

	illustrator: "Toshinao Aoki",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		149,
	],

	hp: 90,

	types: [
		"Colorless",
	],

	evolveFrom: {
		en: "Dragonair",
		fr: "Draco",
		de: "Dragonir"
	},

	stage: "Stage2",

	abilities: [
		{
			type: "Pokemon Power",
			name: {
				en: "Special Delivery",
				fr: "Livraison spéciale",
				de: "Spezialattacke"
			},
			effect: {
				en: "Once during your turn (before your attack), you may draw a card. If you do, choose a card from your hand and put it on top of your deck. This power can't be used if Dragonite is Asleep, Confused, or Paralyzed.",
				fr: "Une fois durant votre tour (avant votre attaque), vous pouvez tirer une carte. Si vous tirez une carte, choisissez-en une de votre main et placez-la sur le dessus de votre deck. Ce pouvoir ne peut être utilisé si Dragonite est Endormi, Confus ou Paralysé.",
				de: "Wenn du an der Reihe bist (bevor du angreifst), kannst du einmal eine Karte ziehen. Wenn du eine gezogen hast, lege eine Karte aus Deiner Hand auf Deinen Kartenstapel. Diese Power kann nicht eingesetzt werden, wenn Dragonit schläft, verwirrt oder gelähmt ist."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],

			name: {
				en: "Supersonic Flight",
				fr: "Vol supersonique",
				de: "Überschallflug"
			},

			effect: {
				en: "Flip a coin. If tails, this attack does nothing.",
				fr: "Lancez une pièce. Si c'est pile, cette attaque ne fait rien.",
				de: "Wirf eine Münze. Bei Zahl, hat dieser Angriff keine Auswirkungen."
			},

			damage: 60
		},
	],

	resistances: [
		{
			type: "Fighting",
			value: "-30"
		},
	],
	retreat: 2,


	description: {
		en: "This Pokémon can fly is spite of its large bulk. It is said to be able to circumnavigate the earth in just 16 hours.",
		fr: "Ce Pokémon peut voler malgré sa taille imposante. On le dit capable de faire le tour de la Terre en 16 heures à peine.",
		de: "Dieses Pokémon kann trotz seiner großen Gestalt fliegen. Es heißt, es kann die Erde in nur 16 Stunden umfliegen."
	},

	variants: [
		{
			type: "normal",
			stamp: ["1st-movie-inverted"]
		},
		{
			type: "normal",
			stamp: ["1st-movie"],
			thirdParty: {
				tcgplayer: 84909
			},
		}
	]
}

export default card
