import { Card } from '../../../interfaces'
import Set from '../Undaunted'

const card: Card = {
	name: {
		en: "Umbreon",
		fr: "Noctali",
		de: "Nachtara"
	},

	illustrator: "Hideaki Hakozaki",
	rarity: "Rare PRIME",
	category: "Pokemon",
	set: Set,

	dexId: [
		197,
	],

	hp: 100,

	types: [
		"Darkness",
	],

	evolveFrom: {
		en: "Eevee",
		fr: "Evoli",
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				en: "Cloud-Covered Moon",
				fr: "Lune nuageuse",
				de: "Wolkenverhangener Mond"
			},
			effect: {
				en: "Once during your turn (before your attack), if Umbreon is your Active Pokémon, you may flip a coin. If heads, return Umbreon and all cards attached to it to your hand. This power can’t be used if Umbreon is affected by a Special Condition.",
				fr: "Une seule fois pendant votre tour (avant votre attaque), si Noctali est votre Pokémon Actif, vous pouvez lancer une pièce. Si c’est face, reprenez Noctali dans votre main, ainsi que toutes les cartes qui lui sont attachées. Ce pouvoir ne peut pas être utilisé si Noctali est affecté par un État Spécial.",
				de: "Einmal während deines Zuges (vor deinem Angriff) kannst du, falls Nachtara dein Aktives Pokémon ist, eine Münze werfen. Nimm bei \"Kopf\" Nachtara und alle an ihm angelegten Karten auf deine Hand zurück. Diese Poké-Power kann nicht benutzt werden, wenn Nachtara von einem Speziellen Zustand betroffen ist."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Darkness",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Evoblast",
				fr: "Evorafale",
				de: "Evo-Schlag"
			},
			effect: {
				en: "Does 50 damage plus 10 more damage for each of your Pokémon in play that evolves from Eevee.",
				fr: "Inflige 50 dégâts plus 10 dégâts supplémentaires pour chacun de vos Pokémon en jeu qui est une évolution d’Evoli.",
				de: "Dieser Angriff fügt 50 Schadenspunkte plus 10 weitere Schadenspunkte für jedes deiner Pokémon im Spiel, das sich aus Evoli entwickelt, zu."
			},
			damage: "50+",

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

	retreat: 1,
	suffix: "Prime",

	variants: {
		normal: false,
		reverse: false,
		holo: true,
		firstEdition: false
	},

	thirdParty: {
		cardmarket: 279263,
		tcgplayer: 90146
	}
}

export default card
