import { Card } from 'models/database/card'
import Set from '../Stormfront'

const card: Card = {
	name: {
		'en-us': "Rapidash",
		'fr-fr': "Galopa",
		'de-de': "Gallopa"
	},

	illustrator: "Suwama Chiaki",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		78,
	],

	hp: 80,

	types: [
		"Fire",
	],

	evolveFrom: {
		'en-us': "Ponyta",
		'fr-fr': "Ponyta",
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				'en-us': "Burning Mane",
				'fr-fr': "Crinière en flammes",
				'de-de': "Brennende Mähne"
			},
			effect: {
				'en-us': "If Rapidash is your Active Pokémon and is damaged by an opponent's attack (even if Rapidash is Knocked Out), the Attacking Pokémon is now Burned.",
				'fr-fr': "Si Galopa est votre Pokémon Actif et qu'une attaque de votre adversaire lui inflige des dégâts (même si Galopa est mis K.O), le Pokémon Attaquant est maintenant Brûlé.",
				'de-de': "Wenn Gallopa dein Aktives Pokémon ist und durch einen gegnerischen Angriff Schaden erhält (auch wenn Gallopa dadurch kampfunfähig wird), ist das Angreifende Pokémon jetzt verbrannt."
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
				'en-us': "Rear Kick",
				'fr-fr': "Ruade",
				'de-de': "Rückwärtskick"
			},

			damage: 30,

		},
		{
			cost: [
				"Fire",
				"Fire",
			],
			name: {
				'en-us': "Shooting Fire",
				'fr-fr': "Feu fusillant",
				'de-de': "Feuer verschießen"
			},
			effect: {
				'en-us': "Discard 2 Fire Energy attached to Rapidash and choose 1 of your opponent's Pokémon. This attack does 60 damage to that Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
				'fr-fr': "Défaussez 2 Énergies Fire attachées à Galopa et choisissez 1 des Pokémon de votre adversaire. Cette attaque lui inflige 60 dégâts. (Vous ne pouvez pas appliquer la Faiblesse et la Résistance aux Pokémon de Banc.)",
				'de-de': "Lege 2 an Gallopa angelegte -Energien auf deinen Ablagestapel und wähle 1 Pokémon deines Gegners. Dieser Angriff fügt dem gewählten Pokémon 60 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)"
			},

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "+20"
		},
	],

	thirdParty: {
		cardmarket: 278320,
		tcgplayer: 88584
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
