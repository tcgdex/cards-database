import { Card } from '../../../interfaces'
import Set from '../Sandstorm'

const card: Card = {
	name: {
		en: "Growlithe",
		fr: "Caninos",
		de: "Fukano"
	},

	illustrator: "Hajime Kusajima",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		58,
	],

	hp: 50,

	types: [
		"Fire",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Fire Veil",
				fr: "Voile feu",
				de: "Feuerschleier"
			},
			effect: {
				en: "If Growlithe is your Active Pokémon and is damaged by an opponent's attack (even if Growlithe is Knocked Out), the Attacking Pokémon is now Burned.",
				fr: "Si Caninos est votre Pokémon Actif et qu'une attaque de votre adversaire lui inflige des dégâts (même si Caninos est mis K.O), le Pokémon Attaquant est maintenant Brûlé.",
				de: "Wenn Fukano dein Aktives Pokémon ist und ihm Schaden durch einen gegnerischen Angriff zugefügt wird (auch wenn Arkani kampfunfähig wird), ist das Angreifende Pokémon jetzt verbrannt."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Fire",
				"Colorless",
			],
			name: {
				en: "Flare",
				fr: "Intimidation",
				de: "Flackern"
			},

			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],

	
	retreat: 1,

	thirdParty: {
		cardmarket: 275842,
		tcgplayer: 85951
	},

	variants: [
		{
			type: "normal",
		},
		{
			type: "reverse",
		},
	]
}

export default card
