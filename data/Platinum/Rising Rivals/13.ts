import { Card } from '../../../interfaces'
import Set from '../Rising Rivals'

const card: Card = {
	name: {
		en: "Shiftry",
		fr: "Tengalice Niv. 55",
	},
	illustrator: "Kagemaru Himeno",
	rarity: "Rare",
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
			},
			effect: {
				en: "As long as Shiftry is your Active Pokémon, whenever your opponent flips a coin during his or her turn, treat it as tails.",
				fr: "Tant que Tengalice est votre Pokémon Actif, lorsque votre adversaire lance une pièce lors de son tour, considérez que c'est pile.",
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
			},
			effect: {
				en: "If you have the same number of cards in your hand as your opponent, the Defending Pokémon is now Confused.",
				fr: "Si vous possédez le même nombre de cartes en main que votre adversaire, le Pokémon Défenseur est maintenant Confus.",
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
			},
			effect: {
				en: "The Defending Pokémon can't use any Poké-Powers or Poké-Bodies during your opponent's next turn.",
				fr: "Le Pokémon Défenseur ne peut pas utiliser de Poké-Powers ou de Poké-Bodies lors du prochain tour de votre adversaire.",
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



}

export default card
