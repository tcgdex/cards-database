import { Card } from '../../../interfaces'
import Set from '../Ruby & Sapphire'

const card: Card = {
	name: {
		en: "Swampert",
		fr: "Laggron",
		de: "Sumpex"
	},

	illustrator: "Mitsuhiro Arita",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		260,
	],

	hp: 110,

	types: [
		"Water",
	],

	evolveFrom: {
		en: "Marshtomp",
		fr: "Flobio"
	},

	stage: "Stage2",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				en: "Water Call",
				fr: "Appel d'eau",
				de: "Wasserruf"
			},
			effect: {
				en: "Once during your turn (before your attack), you may attach a Water Energy card from your hand to your Active Pokémon. This power can't be used if Swampert is affected by a Special Condition.",
				fr: "Une seule fois pendant votre tour (avant votre attaque), vous pouvez attacher une carte Énergie  de votre main à votre Pokémon Actif. Ce pouvoir ne peut être utilisé si Laggron est affecté par un État Spécial.",
				de: "Während deines Zuges (vor deinem Angriff) kannst du einmal eine  -Energiekarte von deiner Hand an dein Aktives Pokémon anlegen. Diese Poké-Power kann nicht verwendet werden, falls Sumpex von einem Speziellen Zustand betroffen ist."
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
				en: "Hypno Splash",
				fr: "Hypnoplouf",
				de: "Hypnospritzer"
			},
			effect: {
				en: "The Defending Pokémon is now Asleep.",
				fr: "Le Pokémon Défenseur est maintenant Endormi.",
				de: "Das Verteidigende Pokémon schläft jetzt."
			},
			damage: 50,

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],


	retreat: 3,

	thirdParty: {
		cardmarket: 275661,
		tcgplayer: 89675
	},

	variants: [
		{
			type: "holo",
		},
		{
			type: "reverse",
		},
	]
}

export default card
