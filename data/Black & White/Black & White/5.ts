import { Card } from '../../../interfaces'
import Set from '../Black & White'

const card: Card = {
	name: {
		en: "Serperior",
		fr: "Majaspic",
		es: "Serperior",
		it: "Serperior",
		pt: "Serperior",
		de: "Serpiroyal"
	},

	illustrator: "Kagemaru Himeno",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		497,
	],

	hp: 130,

	types: [
		"Grass",
	],

	evolveFrom: {
		en: "Servine",
		fr: "Lianaja",
		de: "Efoserp"
	},

	stage: "Stage2",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Vine Whip",
				fr: "Fouet Lianes",
				de: "Rankenhieb"
			},

			damage: 40,

		},
		{
			cost: [
				"Grass",
				"Grass",
			],
			name: {
				en: "Leaf Storm",
				fr: "Tempêteverte",
				de: "Blättersturm"
			},
			effect: {
				en: "Heal 20 damage from each of your Grass Pokémon.",
				fr: "Soignez 20 dégâts à chacun de vos Pokémon Grass.",
				de: "Heile 20 Schadenspunkte bei jedem deiner {G}-Pokémon."
			},
			damage: 60,

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

	retreat: 0,

	description: {
		en: "They raise their heads to intimidate opponents but only give it their all when fighting a powerful opponent.",
		de: "Versetzt Gegner in Ehrfurcht, indem es den Kopf weit in die Höhe streckt. Zeigt nur starken Gegnern seine wahre Macht."
	},

	thirdParty: {
		cardmarket: 279743,
		tcgplayer: 89069
	}
}

export default card
