import { Card } from '../../../interfaces'
import Set from '../Neo Discovery'

const card: Card = {
	name: {
		en: "Kabuto",
		fr: "Kabuto",
		de: "Kabuto"
	},

	illustrator: "Yuka Morii",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		140,
	],

	hp: 50,

	types: [
		"Water",
	],

	stage: "Stage1",

	abilities: [
		{
			type: "Pokemon Power",
			name: {
				en: "Revive Friends",
				fr: "Réanimation",
				de: "Revive Friends"
			},
			effect: {
				en: "Once during your turn (before you attack), you may flip a coin. If heads, search your deck for a card named Kabuto and put it on your Bench. Shuffle your deck afterward. Treat the new Kabuto as a Basic Pokémon. This power can't be used if Kabuto is Asleep, Confused, or Paralyzed (or if your Bench is full).",
				fr: "Une fois pendant votre tour (avant votre attaque), vous pouvez lancer une pièce. Si c'est face, cherchez dans votre deck une carte Kabuto et placez-la sur votre Banc. Mélangez ensuite votre deck. Utilisez le nouveau Kabuto comme un Pokémon de base. Ce pouvoir ne peut pas être utilisé si Kabuto est Endormi, Confus ou Paralysé (ou si votre Banc est plein).",
				de: "Once during your turn (before your attack), you may flip a coin. If heads, search your deck for a card named Kabuto and put it on your Bench. Shuffle your deck afterward. Treat the new Kabuto as a Basic Pokémon. This power can't be used if Kabuto is Asleep, Confused, or Paralyzed (or if your Bench is full)."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Fighting",
				"Colorless",
			],
			name: {
				en: "Work Together",
				fr: "Synergie",
				de: "Work Together"
			},
			effect: {
				en: "Flip a coin. If heads, this attack does 10 damage plus 10 more damage for each Omanyte, Omastar, Kabuto, and Kabutops on your Bench.",
				fr: "Lancez une pièce. Si c'est face, cette attaque fait 10 dégâts plus 10 dégâts supplémentaires pour chaque Amonita, Amonistar, Kabuto et Kabutops sur votre Banc.",
				de: "Flip a coin. If heads, this attack does 10 damage plus 10 more damage for each Omanyte, Omastar, Kabuto, and Kabutops on your Bench."
			},
			damage: "10+",

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	description: {
		fr: "Parfois, ces Pokémon sont devenus des fossiles en voulant se cacher au fond de l'océan."
	},

	thirdParty: {
		cardmarket: 274517,
		tcgplayer: 86383
	},

	variants: [
		{
			type: "normal"
		},
		{
			type: "normal",
			stamp: ["1st-edition"]
		}
	]
}

export default card

