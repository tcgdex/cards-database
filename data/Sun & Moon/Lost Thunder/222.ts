import { Card } from '../../../interfaces'
import Set from '../Lost Thunder'

const card: Card = {
	name: {
		en: "Sigilyph-GX",
		fr: "Cryptéro-GX",
	},
	illustrator: "PLANETA Otani",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		561,
	],
	hp: 170,
	types: [
		"Psychic",
	],


	suffix: "GX",
	abilities: [
		{
			type: "Ability",
			name: {
				en: "Mirror Counter",
				fr: "Riposte Miroir",
			},
			effect: {
				en: "If this Pokémon is your Active Pokémon and is damaged by an attack from your opponent's Pokémon-GX or Pokémon-EX (even if this Pokémon is Knocked Out), put damage counters on the Attacking Pokémon equal to the damage done to this Pokémon.",
				fr: "Si ce Pokémon est votre Pokémon Actif et qu’il subit les dégâts d’une attaque d’un Pokémon-GX ou Pokémon-EX de votre adversaire (même si ce Pokémon est mis K.O.), placez des marqueurs de dégâts sur le Pokémon Attaquant équivalents au nombre de dégâts infligés à ce Pokémon.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Psychic",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Sonic Wing",
				fr: "Aile Supersonique",
			},
			effect: {
				en: "This attack's damage isn't affected by Resistance.",
				fr: "Les dégâts de cette attaque ne sont pas affectés par la Résistance.",
			},
			damage: 80,

		},
		{
			cost: [
				"Psychic",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Intercept-GX",
				fr: "Interception-GX",
			},
			effect: {
				en: "This attack does 60 damage times the amount of Energy attached to your opponent's Active Pokémon. (You can't use more than 1 GX attack in a game.)",
				fr: "Cette attaque inflige 60 dégâts multipliés par le nombre d’Énergies attachées au Pokémon Actif de votre adversaire. (Vous ne pouvez utiliser qu’une attaque GX par partie.)",
			},
			damage: 60,

		},
	],
	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Fightning",
			value: "-20"
		},
	],
	retreat: 2,



}

export default card
