import { Card } from '../../../interfaces'
import Set from '../Sandstorm'

const card: Card = {
	name: {
		en: "Golduck",
		fr: "Akwakwak",
		de: "Entoron"
	},

	illustrator: "Hajime Kusajima",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [55],

	hp: 70,

	types: [
		"Water"
	],

	evolveFrom: {
		en: "Psyduck",
		fr: "Psykokwak",
		de: "Enton"
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				en: "Chaos Flash",
				fr: "Flash chaotique",
				de: "Chaosblitz"
			},
			effect: {
				en: "Once during your turn (before your attack), if Golduck is your Active Pokémon, you may flip a coin. If heads, the Defending Pokémon (choose 1 if there are 2) is now Confused. This power can't be used if Golduck is affected by a Special Condition.",
				fr: "Une seule fois pendant votre tour (avant votre attaque), si Akwakwak est votre Pokémon Actif, vous pouvez lancer une pièce. Si c'est face, le Pokémon Défenseur (choisissez en un s'il y en a deux) est maintenant Confus. Ce pouvoir ne peut pas être utilisé si Akwakwak est affecté par un État Spécial.",
				de: "Einmal während deines Zuges (vor deinem Angriff), wenn Entoron dein Aktives Pokémon ist, kannst du eine Münze werfen. Bei „Kopf“ ist das Verteidigende Pokémon (wähle 1, falls es 2 gibt) jetzt verwirrt. Diese Poké-Power kann nicht verwendet werden, falls Entoron von einem Speziellen Zustand betroffen ist."
			}
		},
	],

	attacks: [
		{
			cost: [
				"Water",
				"Psychic",
			],
			name: {
				en: "Special Blow",
				fr: "Coup spécial",
				de: "Spezialschlag"
			},
			effect: {
				en: "If the Defending Pokémon has any Special Energy cards attached to it, this attack does 30 damage plus 40 more damage.",
				fr: "Si le Pokémon Défenseur possède une ou plusieurs cartes Énergie Spéciales, cette attaque inflige 70 dégâts.",
				de: "Falls an dem Verteidigenden Pokémon Spezialenergiekarten angelegt sind, fügt dieser Angriff 30 Schadenspunkte plus 40 weitere Schadenspunkte zu."
			},
			damage: "30+",

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],

	
	retreat: 1,


	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 275794,
				tcgplayer: 85810
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 275794,
				tcgplayer: 85810
			}
		},
	],

}

export default card
