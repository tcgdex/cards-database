import { Card } from '../../../interfaces'
import Set from '../Legend Maker'

const card: Card = {
	name: {
		en: "Misdreavus",
		fr: "Feuforêve"
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
				en: "Deep Sleep",
				fr: "Gros dodo"
			},
			effect: {
				en: "As long as Misdreavus is your Active Pokémon, each player flips 2 coins for his or her Pokémon that is Asleep between turns. If either coin is tails, that Pokémon is still Asleep.",
				fr: "Tant que Feuforêve est votre Pokémon Actif, chaque joueur lance 2 pièces pour son Pokémon Endormi entre deux tours. Si une des pièces est pile, ce Pokémon reste Endormi."
			},
		},
	],
	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Return Trance",
				fr: "Retour de transe"
			},
			effect: {
				en: "Return an Energy card attached to Misdreavus to your hand. The Defending Pokémon is now Asleep.",
				fr: "Reprenez dans votre main une carte Énergie attachée à Feuforêve. Le Pokémon Défenseur est maintenant Endormi."
			},

		},
		{
			cost: [
				"Psychic",
			],
			name: {
				en: "Dream Eater",
				fr: "Dévorêve"
			},
			effect: {
				en: "If the Defending Pokémon is not Asleep, this attack does nothing.",
				fr: "Si le Pokémon Défenseur n'est pas Endormi, cette attaque est sans effet."
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




}

export default card
