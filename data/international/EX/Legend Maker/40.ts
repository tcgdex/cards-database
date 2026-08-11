import { Card } from 'models/database/card'
import Set from '../Legend Maker'

const card: Card = {
	name: {
		'en-us': "Misdreavus",
		'fr-fr': "Feuforêve",
		'de-de': "Traunfugil"
	},

	illustrator: "Yukiko Baba",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		200,
	],

	hp: 50,

	types: [
		"Psychic",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				'en-us': "Deep Sleep",
				'fr-fr': "Gros dodo",
				'de-de': "Tiefer Schlaf"
			},
			effect: {
				'en-us': "As long as Misdreavus is your Active Pokémon, each player flips 2 coins for his or her Pokémon that is Asleep between turns. If either coin is tails, that Pokémon is still Asleep.",
				'fr-fr': "Tant que Feuforêve est votre Pokémon Actif, chaque joueur lance 2 pièces pour son Pokémon Endormi entre deux tours. Si une des pièces est pile, ce Pokémon reste Endormi.",
				'de-de': "Solange Traunfugil dein Aktives Pokémon ist, wirft jeder Spieler für jedes seiner Pokémon, das schläft, am Ende jedes Zuges 2 Münzen. Wenn mindestens eine davon \"Zahl\" zeigt, schläft das betreffende Pokémon weiter."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Return Trance",
				'fr-fr': "Retour de transe",
				'de-de': "Wiederbringende Trance"
			},
			effect: {
				'en-us': "Return an Energy card attached to Misdreavus to your hand. The Defending Pokémon is now Asleep.",
				'fr-fr': "Reprenez dans votre main une carte Énergie attachée à Feuforêve. Le Pokémon Défenseur est maintenant Endormi.",
				'de-de': "Nimm eine an Traunfugil angelegte Energiekarte zurück auf die Hand. Das Verteidigende Pokémon schläft jetzt."
			},

		},
		{
			cost: [
				"Psychic",
			],
			name: {
				'en-us': "Dream Eater",
				'fr-fr': "Dévorêve",
				'de-de': "Traumfresser"
			},
			effect: {
				'en-us': "If the Defending Pokémon is not Asleep, this attack does nothing.",
				'fr-fr': "Si le Pokémon Défenseur n'est pas Endormi, cette attaque est sans effet.",
				'de-de': "Du kannst diesen Angriff nur dann einsetzen, wenn das Verteidigende Pokémon schläft."
			},
			damage: 30,

		},
	],

	weaknesses: [
		{
			type: "Darkness",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Fighting",
			value: "-30"
		},
	],

	
	retreat: 1,

	thirdParty: {
		cardmarket: 276917,
		tcgplayer: 87505
	},

	variants: [
		{
			type: "normal"
		},
		{
			type: "normal",
			stamp: ["set-logo"]
		}
	]
}

export default card
