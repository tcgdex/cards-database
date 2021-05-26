import { Card } from '../../../interfaces'
import Set from '../Team Up'

const card: Card = {
	name: {
		en: "Incineroar-GX",
		fr: "Félinferno-GX",
	},
	illustrator: "5ban Graphics",
	rarity: "Ultra Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		727,
	],
	hp: 250,
	types: [
		"Darkness",
	],
	evolveFrom: {
		en: "Torracat",
		fr: "Matoufeu",
	},

	suffix: "GX",
	abilities: [
		{
			type: "Ability",
			name: {
				en: "Scar Charge",
				fr: "Recharge Balafre",
			},
			effect: {
				en: "Once during your turn (before your attack), you may put 3 damage counters on this Pokémon. If you do, search your deck for up to 3 Darkness Energy cards and attach them to this Pokémon. Then, shuffle your deck.",
				fr: "Une seule fois pendant votre tour (avant votre attaque), vous pouvez placer 3 marqueurs de dégâts sur ce Pokémon. Dans ce cas, cherchez jusqu’à 3 cartes Énergie Darkness dans votre deck et attachez-les à ce Pokémon. Mélangez ensuite votre deck.",
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
				en: "Crushing Punch",
				fr: "Poing Dévastateur",
			},
			effect: {
				en: "Discard a Special Energy from your opponent's Active Pokémon.",
				fr: "Défaussez une Énergie spéciale du Pokémon Actif de votre adversaire.",
			},
			damage: 130,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Darkest Tornado-GX",
				fr: "Dark Rafale-GX",
			},
			effect: {
				en: "This attack does 50 more damage for each damage counter on this Pokémon. (You can't use more than 1 GX attack in a game.)",
				fr: "Cette attaque inflige 50 dégâts supplémentaires pour chaque marqueur de dégâts placé sur ce Pokémon. (Vous ne pouvez utiliser qu’une attaque GX par partie.)",
			},
			damage: 10,

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
