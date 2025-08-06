import { Card } from '../../../interfaces'
import Set from '../Rising Rivals'

const card: Card = {
	name: {
		en: "Shiftry",
		fr: "Tengalice Niv. 55",
		de: "Tengulist"
	},

	illustrator: "Kagemaru Himeno",
	rarity: "Rare Holo",
	category: "Pokemon",
	set: Set,

	dexId: [
		275,
	],

	hp: 130,

	types: [
		"Darkness",
	],

	evolveFrom: {
		en: "Nuzleaf",
		fr: "Pifeuil",
	},

	stage: "Stage2",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Unlucky Wind",
				fr: "Vent malchanceux",
				de: "Unglücksböen"
			},
			effect: {
				en: "As long as Shiftry is your Active Pokémon, whenever your opponent flips a coin during his or her turn, treat it as tails.",
				fr: "Tant que Tengalice est votre Pokémon Actif, lorsque votre adversaire lance une pièce lors de son tour, considérez que c'est pile.",
				de: "Solange Tengulist dein Aktives Pokémon ist, wird jedes Mal, wenn dein Gegner in seinem Zug eine Münze wirft, das Ergebnis des Münzwurfs als \"Zahl\" gezählt."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Darkness",
				"Colorless",
			],
			name: {
				en: "Conform",
				fr: "Se conformer",
				de: "Anpasser"
			},
			effect: {
				en: "If you have the same number of cards in your hand as your opponent, the Defending Pokémon is now Confused.",
				fr: "Si vous possédez le même nombre de cartes en main que votre adversaire, le Pokémon Défenseur est maintenant Confus.",
				de: "Wenn du die gleiche Anzahl Karten auf der Hand hast wie dein Gegner, ist das Verteidigende Pokémon jetzt verwirrt."
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
				en: "Seal Off",
				fr: "Interdire d'accès",
				de: "Abriegeln"
			},
			effect: {
				en: "The Defending Pokémon can't use any Poké-Powers or Poké-Bodies during your opponent's next turn.",
				fr: "Le Pokémon Défenseur ne peut pas utiliser de Poké-Powers ou de Poké-Bodies lors du prochain tour de votre adversaire.",
				de: "Das Verteidigende Pokémon kann im nächsten Zug deines Gegners keine Poké-Power oder Poké-Body benutzen."
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

	thirdParty: {
		cardmarket: 278587,
		tcgplayer: 89158
	}
}

export default card
