import { Card } from '../../../interfaces'
import Set from '../Expedition Base Set'

const card: Card = {
	name: {
		en: "Feraligatr",
		fr: "Aligatueur",
		de: "Impergator"
	},

	illustrator: "Mitsuhiro Arita",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [160],

	hp: 120,

	types: [
		"Water"
	],

	evolveFrom: {
		en: "Croconaw",
		fr: "Crocrodil",
		de: "Tyracroc"
	},

	stage: "Stage2",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				en: "Major Tsunami",
				fr: "Terrible tsunami",
				de: "Größerer Tsunami"
			},
			effect: {
				en: "Once during your turn (before your attack), if Feraligatr is your Active Pokémon and if your opponent has any Benched Pokémon, your opponent switches his or her Active Pokémon with 1 of his or her Benched Pokémon. Either way, if you have any Benched Pokémon, switch Feraligatr with 1 of them. This power can't be used if Feraligatr is affected by a Special Condition.",
				fr: "Une seule fois pendant votre tour (avant votre attaque), si Aligatueur est votre Pokémon Actif et si votre adversaire a des Pokémon sur son Banc, il échange l'un d'eux contre son Pokémon Actif. Quel que soit le cas, si vous avez des Pokémon sur votre Banc, échangez l'un d'eux contre Aligatueur. Ce pouvoir ne peut pas être utilisé si Aligatueur est affecté par un État spécial.",
				de: "Einmal während deines Zuges (vor deinem Angriff), falls Impergator dein Aktives Pokémon ist und dein Gegner mindestens ein Pokémon auf der Bank hat, tauscht dein Gegner sein Aktives Pokémon mit 1 seiner Pokémon auf der Bank. Unabhängig davon: Falls du mindestens 1 Pokémon auf deiner Bank hast, tausche 1 von diesen mit Impergator. Diese Fähigkeit kann nicht verwendet werden, falls Impergator von einem Speziellen Zustand betroffen ist."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Water",
				"Water",
				"Colorless",
				"Colorless",
			],

			name: {
				en: "Rending Jaws",
				fr: "Coud'mâchoire",
				de: "Reißkiefer"
			},

			effect: {
				en: "If here are no damage counters on the Defending Pokémon, this attack's base damage is 40 instead of 70.",
				fr: "S'il n'y a aucun marqueur de dégâts sur le Pokémon Défenseur, cette attaque inflige 40 dégâts de base au lieu de 70.",
				de: "Falls auf dem Verteidigenden Pokémon keine Schadensmarken sind, ist der Basisschaden dieses Angriffs 40 anstatt 70."
			},

			damage: 70,
		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "x2"
		},
	],
	retreat: 3,


	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 85416,
				cardmarket: 274887
			},
		},
		{
			type: "reverse",
			thirdParty: {
				tcgplayer: 85416,
				cardmarket: 274887
			},
		},
	],
}

export default card
