import { Card } from 'models/database/card'
import Set from '../Rising Rivals'

const card: Card = {
	name: {
		'en-us': "Shiftry",
		'fr-fr': "Tengalice Niv. 55",
		'de-de': "Tengulist"
	},

	illustrator: "Kagemaru Himeno",
	rarity: "Holo Rare",
	category: "Pokemon",
	set: Set,

	dexId: [275],

	hp: 130,

	types: [
		"Darkness"
	],

	evolveFrom: {
		'en-us': "Nuzleaf",
		'fr-fr': "Pifeuil"
	},

	stage: "Stage2",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				'en-us': "Unlucky Wind",
				'fr-fr': "Vent malchanceux",
				'de-de': "Unglücksböen"
			},
			effect: {
				'en-us': "As long as Shiftry is your Active Pokémon, whenever your opponent flips a coin during his or her turn, treat it as tails.",
				'fr-fr': "Tant que Tengalice est votre Pokémon Actif, lorsque votre adversaire lance une pièce lors de son tour, considérez que c'est pile.",
				'de-de': "Solange Tengulist dein Aktives Pokémon ist, wird jedes Mal, wenn dein Gegner in seinem Zug eine Münze wirft, das Ergebnis des Münzwurfs als \"Zahl\" gezählt."
			}
		},
	],

	attacks: [
		{
			cost: [
				"Darkness",
				"Colorless",
			],
			name: {
				'en-us': "Conform",
				'fr-fr': "Se conformer",
				'de-de': "Anpasser"
			},
			effect: {
				'en-us': "If you have the same number of cards in your hand as your opponent, the Defending Pokémon is now Confused.",
				'fr-fr': "Si vous possédez le même nombre de cartes en main que votre adversaire, le Pokémon Défenseur est maintenant Confus.",
				'de-de': "Wenn du die gleiche Anzahl Karten auf der Hand hast wie dein Gegner, ist das Verteidigende Pokémon jetzt verwirrt."
			},
			damage: 40,

		},
		{
			cost: [
				"Darkness",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Seal Off",
				'fr-fr': "Interdire d'accès",
				'de-de': "Abriegeln"
			},
			effect: {
				'en-us': "The Defending Pokémon can't use any Poké-Powers or Poké-Bodies during your opponent's next turn.",
				'fr-fr': "Le Pokémon Défenseur ne peut pas utiliser de Poké-Powers ou de Poké-Bodies lors du prochain tour de votre adversaire.",
				'de-de': "Das Verteidigende Pokémon kann im nächsten Zug deines Gegners keine Poké-Power oder Poké-Body benutzen."
			},
			damage: 60,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "+30"
		},
	],
	resistances: [
		{
			type: "Psychic",
			value: "-20"
		},
	],
	retreat: 1,

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 278587,
				tcgplayer: 89158
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 278587,
				tcgplayer: 89158
			}
		},
	],

}

export default card
