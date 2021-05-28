import { Card } from '../../../interfaces'
import Set from '../Lost Thunder'

const card: Card = {
	name: {
		en: "Tyranitar-GX",
		fr: "Tyranocif-GX",
	},
	illustrator: "5ban Graphics",
	rarity: "Ultra Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		248,
	],
	hp: 250,
	types: [
		"Darkness",
	],
	evolveFrom: {
		en: "Pupitar",
		fr: "Ymphect",
	},

	suffix: "GX",
	abilities: [
		{
			type: "Ability",
			name: {
				en: "Lost Out",
				fr: "Perdu à Jamais",
			},
			effect: {
				en: "If your opponent's Pokémon is Knocked Out by damage from this Pokémon's attacks, put that Pokémon and all cards attached to it in the Lost Zone instead of the discard pile.",
				fr: "Si le Pokémon de votre adversaire est mis K.O. par les dégâts des attaques de ce Pokémon, placez ce Pokémon-là et toutes les cartes qui lui sont attachées dans la Zone Perdue au lieu de les défausser.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Darkness",
				"Darkness",
				"Colorless",
			],
			name: {
				en: "Dusty Ruckus",
				fr: "Chahut Poussiéreux",
			},
			effect: {
				en: "This attack does 30 damage to each of your opponent's Benched Basic Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
				fr: "Cette attaque inflige 30 dégâts à chacun des Pokémon de Banc de base de votre adversaire. (N’appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
			},
			damage: 130,

		},
		{
			cost: [
				"Darkness",
				"Darkness",
				"Colorless",
			],
			name: {
				en: "Lay the Smackdown-GX",
				fr: "À Plate Couture-GX",
			},
			effect: {
				en: "This attack's damage isn't affected by any effects on your opponent's Active Pokémon. (You can't use more than 1 GX attack in a game.)",
				fr: "Les dégâts de cette attaque ne sont affectés par aucun effet en action sur le Pokémon Actif de votre adversaire. (Vous ne pouvez utiliser qu’une attaque GX par partie.)",
			},
			damage: 220,

		},
	],
	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Psychic",
			value: "-20"
		},
	],
	retreat: 3,



}

export default card
