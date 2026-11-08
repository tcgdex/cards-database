import { Card } from 'models/database/card'
import Set from '../Stormfront'

const card: Card = {
	name: {
		'en-us': "Roserade",
		'fr-fr': "Roserade",
		'de-de': "Roserade"
	},

	illustrator: "Mitsuhiro Arita",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		407,
	],

	hp: 90,

	types: [
		"Psychic",
	],

	evolveFrom: {
		'en-us': "Roselia",
		'fr-fr': "Roselia",
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				'en-us': "Hidden Poison",
				'fr-fr': "Poison caché",
				'de-de': "Verborgenes Gift"
			},
			effect: {
				'en-us': "If Roserade is your Active Pokémon and is damaged by an opponent's attack (even if Roserade is Knocked Out), the Defending Pokémon is now Poisoned.",
				'fr-fr': "Si Roserade est votre Pokémon Actif et qu'une attaque de votre adversaire lui inflige des dégâts (même si Roserade est K.O), le Pokémon Attaquant est maintenant Empoisonné.",
				'de-de': "Wenn Roserade dein Aktives Pokémon ist und durch einen gegnerischen Angriff Schaden erhält (auch wenn Roserade dadurch kampfunfähig wird), ist das Angreifende Pokémon jetzt vergiftet."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Bowed Whip",
				'fr-fr': "Fouet courbé",
				'de-de': "Bogenpeitsche"
			},
			effect: {
				'en-us': "Choose 1 of your opponent's Pokémon. This attack does 30 damage to that Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.) Flip a coin. If heads, discard an Energy card attached to that Pokémon.",
				'fr-fr': "Choisissez 1 des Pokémon de votre adversaire. Cette attaque lui inflige 30 dégâts. (Vous ne pouvez pas appliquer la Faiblesse et la Résistance aux Pokémon de Banc.) Lancez une pièce. Si c'est face, défaussez une carte Énergie attachée à ce Pokémon.",
				'de-de': "Wähle 1 Pokémon deines Gegners. Dieser Angriff fügt dem gewählten Pokémon 30 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.) Wirf 1 Münze. Bei \"Kopf\" lege 1 Energiekarte, die am gewählten Pokémon angelegt ist, auf den Ablagestapel deines Gegners."
			},

		},
		{
			cost: [
				"Psychic",
				"Psychic",
				"Colorless",
			],
			name: {
				'en-us': "Deep Poison",
				'fr-fr': "Poison profond",
				'de-de': "Tiefengift"
			},
			effect: {
				'en-us': "If the Defending Pokémon is Poisoned, this attack does 50 damage plus 30 more damage.",
				'fr-fr': "Si le Pokémon Défenseur est Empoisonné, cette attaque inflige 50 dégâts plus 30 dégâts supplémentaires.",
				'de-de': "Wenn das Verteidigende Pokémon vergiftet ist, fügt dieser Angriff 50 Schadenspunkte plus 30 weitere Schadenspunkte zu."
			},
			damage: "50+",

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "+20"
		},
	],

	retreat: 1,

	thirdParty: {
		cardmarket: 278321,
		tcgplayer: 88828
	},

	variants: [
		{
			type: "normal"
		},
		{
			type: "reverse"
		}
	]
}

export default card
