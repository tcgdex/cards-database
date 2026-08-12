import { Card } from '../../../interfaces'
import Set from '../Emerging Powers'

const card: Card = {
	name: {
		en: "Cobalion",
		fr: "Cobaltium",
		es: "Cobalion",
		it: "Cobalion",
		pt: "Cobalion",
		de: "Kobalium"
	},

	illustrator: "5ban Graphics",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		638,
	],

	hp: 110,

	types: [
		"Metal",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Metal",
				"Colorless",
			],
			name: {
				en: "Metal Horns",
				fr: "Cornes de Métal",
				de: "Metallhörner"
			},
			effect: {
				en: "Your opponent switches the Defending Pokémon with 1 of his or her Benched Pokémon.",
				fr: "Votre adversaire échange le Pokémon Défenseur avec 1 de ses Pokémon de Banc.",
				de: "Dein Gegner tauscht das Verteidigende Pokémon gegen 1 Pokémon auf seiner Bank aus."
			},
			damage: 30,

		},
		{
			cost: [
				"Metal",
				"Metal",
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
			type: "Psychic",
			value: "-20"
		},
	],

	retreat: 2,

	description: {
		en: "This legendary Pokémon battled against humans to protect Pokémon. Its personality is calm and composed.",
		de: "Ein Legendäres Pokémon, das sich zum Schutz der Pokémon mit den Menschen anlegte. Eine kühle, gelassene Natur."
	},

	thirdParty: {
		cardmarket: 280042,
		tcgplayer: 84377
	}
}

export default card
