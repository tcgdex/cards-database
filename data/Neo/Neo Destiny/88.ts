import { Card } from '../../../interfaces'
import Set from '../Neo Destiny'

const card: Card = {
	name: {
		en: "Unown [T]",
		fr: "Zarbi T",
		de: "Icognito T"
	},

	illustrator: "CR CG gangs",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		201,
	],

	hp: 40,

	types: [
		"Psychic",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Pokemon Power",
			name: {
				en: "[Tell]",
				fr: "[Tell]",
				de: "Tell [Tell]"
			},
			effect: {
				en: "Once during your turn (before your attack), you may flip a coin. If heads, look at your opponent's hand and show your hand to your opponent. This power can be used even if Unown T is Asleep, Confused, or Paralyzed.",
				fr: "Une fois pendant votre tour (avant votre attaque), vous pouvez lancer une pièce. Si c'est face, regardez la main de votre adversaire et montrez-lui la vôtre. Ce pouvoir fonctionne même si Zarbi [T] est Endormi, Confus ou Paralysé.",
				de: "Du kannst immer einmal in deinem Zug (vor deinem Angriff) eine Münze werfen. Schaue dir bei „Kopf“ die Karten auf der Hand deines Gegners an und zeige die Karten auf deiner Hand deinem Gegner. Diese Fähigkeit kann selbst dann verwendet werden, wenn Icognito [T] schläft, verwirrt oder gelähmt ist."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Psychic",
				"Colorless",
			],
			name: {
				en: "Hidden Power",
				fr: "Puissance cachée",
				de: "Kraftreserve"
			},

			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],
	retreat: 1,


	description: {
		en: "It is believed that the variety of types of this Pokémon were created by evolutionary adaptation, as each possesses a different ability.",
		fr: "On pense que la variété des types de ce Pokémon particulier est le résultat d'une adaptation due à un caprice de l'évolution, chacun possédant une capacité différente.",
		de: "Es wird behauptet, dass die verschiedenen Sorten dieses Pokémon sich durch Anpassung entwickelt haben, da alle unterschiedliche Fähigkeiten besitzen."
	},


	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 274740,
				tcgplayer: 90234
			}
		},
		{
			type: "normal",
			stamp: ["1st-edition"],
			thirdParty: {
				cardmarket: 274740,
				tcgplayer: 90234
			}
		}
	]
}

export default card
