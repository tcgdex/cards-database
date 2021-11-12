import { Card } from '../../../interfaces'
import Set from '../Legend Maker'

const card: Card = {
	name: {
		en: "Kabutops",
		fr: "Kabutops"
	},
	illustrator: "Mitsuhiro Arita",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		141,
	],
	hp: 110,
	types: [
		"Fighting",
	],
	evolveFrom: {
		en: "Kabuto",
	},
	stage: "Stage2",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Ancient Shell",
				fr: "Coquillage ancien"
			},
			effect: {
				en: "As long as you have Omanyte or Omastar in play, damage done to Kabutops by attacks is reduced by 20 (after applying Weakness and Resistance).",
				fr: "Tant qu'Amonita ou Amonistar sont en jeu, les dégâts infligés à Kabutops par des attaques sont réduits de 20 (après application de la Faiblesse et de la Résistance)."
			},
		},
	],
	attacks: [
		{
			cost: [
				"Fighting",
			],
			name: {
				en: "Energy Stream",
				fr: "Courant d'énergie"
			},
			effect: {
				en: "Search your discard pile for a basic Energy card and attach it to Kabutops.",
				fr: "Choisissez dans votre deck une carte Énergie de base et attachez-la à Kabutops."
			},
			damage: 30,

		},
		{
			cost: [
				"Fighting",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Extra Claws",
				fr: "Griffes supplémentaires"
			},
			effect: {
				en: "If the Defending Pokémon is Pokémon-ex, this attack does 50 damage plus 30 more damage.",
				fr: "Si le Pokémon Défenseur est un Pokémon-ex, cette attaque inflige 50 dégâts plus 30 dégâts supplémentaires."
			},
			damage: "50+",

		},
	],
	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],





}

export default card
