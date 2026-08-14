import { Card } from '../../../interfaces'
import Set from '../Emerging Powers'

const card: Card = {
	name: {
		en: "Virizion",
		fr: "Viridium",
		es: "Virizion",
		it: "Virizion",
		pt: "Virizion",
		de: "Viridium"
	},

	illustrator: "5ban Graphics",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		640,
	],

	hp: 100,

	types: [
		"Grass",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Grass",
				"Colorless",
			],
			name: {
				en: "Giga Drain",
				fr: "Giga-Sangsue",
				de: "Gigasauger"
			},
			effect: {
				en: "Heal from this Pokémon the same amount of damage you did to the Defending Pokémon.",
				fr: "Soignez à ce Pokémon la même quantité de dégâts que vous avez infligée au Pokémon Défenseur.",
				de: "Heile bei diesem Pokémon genauso viel Schaden, wie du dem Verteidigenden Pokémon zugefügt hast."
			},
			damage: 30,

		},
		{
			cost: [
				"Grass",
				"Grass",
				"Colorless",
			],
			name: {
				en: "Sacred Sword",
				fr: "Lame Sainte",
				de: "Sanctoklinge"
			},
			effect: {
				en: "This Pokémon can't use Sacred Sword during your next turn.",
				fr: "Ce Pokémon ne peut pas utiliser Lame Sainte pendant votre prochain tour.",
				de: "Dieses Pokémon kann während deines nächsten Zuges Sanctoklinge nicht einsetzen."
			},
			damage: 100,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Water",
			value: "-20"
		},
	],

	retreat: 1,

	description: {
		en: "This Pokémon fought humans in order to protect its friends. Legends about it continue to be passed down.",
		de: "Es kämpfte einst gegen die Menschen, um seine Freunde zu beschützen. Nun erzählt man sich Legenden von ihm."
	},

	thirdParty: {
		cardmarket: 279982,
		tcgplayer: 90387
	}
}

export default card
