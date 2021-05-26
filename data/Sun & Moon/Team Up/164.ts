import { Card } from '../../../interfaces'
import Set from '../Team Up'

const card: Card = {
	name: {
		en: "Gengar & Mimikyu-GX",
		fr: "Ectoplasma et Mimiqui-GX",
	},
	illustrator: "5ban Graphics",
	rarity: "Ultra Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		94,
	],
	hp: 240,
	types: [
		"Psychic",
	],


	suffix: "TAG TEAM-GX",

	attacks: [
		{
			cost: [
				"Psychic",
				"Psychic",
			],
			name: {
				en: "Poltergeist",
				fr: "Règle des ESCOUADES",
			},
			effect: {
				en: "Your opponent reveals their hand. This attack does 50 damage for each Trainer card you find there.",
			},
			damage: 50,

		},
		{
			cost: [
				"Psychic",
			],
			name: {
				en: "Horror House-GX",
				fr: "Poltergeist",
			},
			effect: {
				en: "Your opponent can't play any cards from their hand during their next turn. If this Pokémon has at least 1 extra Psychic Energy attached to it (in addition to this attack's cost), each player draws cards until they have 7 cards in their hand. (You can't use more than 1 GX attack in a game.)",
				fr: "Votre adversaire dévoile sa main. Cette attaque inflige 50 dégâts pour chaque carte Dresseur que vous y trouvez.",
			},
			damage: "50×",

		},
		{
			cost: [
				"Psychic",
			],
			name: {
				fr: "Maison Terrifiante-GX",
			},
			effect: {
				fr: "Votre adversaire ne peut pas jouer de carte de sa main pendant son prochain tour. Si au moins une Énergie Psychic supplémentaire est attachée à ce Pokémon (en plus du coût de cette attaque), chaque joueur pioche jusqu’à avoir 7 cartes en main. (Vous ne pouvez utiliser qu’une attaque GX par partie.)",
			},

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
			value: "-20"
		},
	],
	retreat: 2,



}

export default card
