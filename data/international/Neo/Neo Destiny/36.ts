import { Card } from 'models/database/card'
import Set from '../Neo Destiny'

const card: Card = {
	name: {
		'en-us': "Dark Haunter",
		'fr-fr': "Spectrum obscur",
		'de-de': "Dunkles Alpollo"
	},

	illustrator: "Aya Kusube",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		93,
	],

	hp: 50,

	types: [
		"Psychic",
	],

	evolveFrom: {
		'en-us': "Gastly",
		'fr-fr': "Fantominus"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Psychic",
			],
			name: {
				'en-us': "Call Back",
				'fr-fr': "Retour",
				'de-de': "Rückruf"
			},
			effect: {
				'en-us': "Put a Baby Pokémon or Basic Pokémon card from your opponent's discard pile onto his or her Bench. Put 1 damage counter on that Pokémon. (You can't use this attack if your Bench is full.)",
				'fr-fr': "Placez une carte Bébé Pokémon ou Pokémon de base de la pile de défausse de votre adversaire sur son Banc. Placez un marqueur de dégâts sur ce Pokémon. (Vous ne pouvez pas utiliser cette attaque si le Banc de votre adversaire est plein.)",
				'de-de': "Lege eine Baby-Pokémon- oder Basis-Pokémonkarte vom Ablagestapel deines Gegner auf seine Bank. Lege eine Schadensmarke auf dieses Pokémon. (du kannst diesen Angriff nicht verwenden, solange seine Bank voll ist.)"
			},

		},
		{
			cost: [
				"Psychic",
				"Psychic",
			],
			name: {
				'en-us': "Surround",
				'fr-fr': "Encerclement",
				'de-de': "Umzingeln"
			},
			effect: {
				'en-us': "Flip a coin. If heads, the Defending Pokémon is now Asleep. If tails, the Defending Pokémon can't retreat during your opponent's next turn.",
				'fr-fr': "Lancez une pièce. Si c'est face, le Pokémon Défenseur est maintenant Endormi. Si c'est pile, le Pokémon Défenseur ne peut pas battre en retraite pendant le prochain tour de votre adversaire.",
				'de-de': "Wirf eine Münze. Bei 'Kopf' schläft das verteidigende Pokémon während des nächsten Zuges deines Gegners nicht zurückziehen."
			},
			damage: 20,

		},
	],

	resistances: [
		{
			type: "Fighting",
			value: "-30"
		},
	],

	description: {
		'en-us': "It silently hunts its prey in dark rooms.",
		'fr-fr': "Il chasse sa proie silencieusement dans les salles obscures."
	},


	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 274688,
				tcgplayer: 84609
			}
		},
		{
			type: "normal",
			stamp: ["1st-edition"],
			thirdParty: {
				cardmarket: 274688,
				tcgplayer: 84609
			}
		}
	]
}

export default card
