import { Card } from '../../../interfaces'
import Set from '../Neo Destiny'

const card: Card = {
	name: {
		en: "Unown [Q]",
		fr: "Zarbi Q",
		de: "Icognito Q"
	},

	illustrator: "CR CG gangs",
	rarity: "Uncommon",
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
				en: "[Quicken]",
				fr: "Quicken",
				de: "Quicken"
			},
			effect: {
				en: "Once during your turn (before your attack), you may flip a coin. If heads, prevent all effects of attacks, including damage, done to any of your Pokémon with Unown in its name during your opponent's next turn. If you have more than 1 Unown Q in play, use only 1 [Quicken] each turn. This power can be used even if Unown Q is Asleep, Confused, or Paralyzed.",
				fr: "Une fois pendant votre tour (avant votre attaque), vous pouvez lancer une pièce. Si c'est face, prévenez tous les effets d'attaques, y compris les dégâts, infligés à vos Pokémon Zarbi pendant le prochain tour de votre adversaire. Si vous avez plus d'un Zarbi [Q] en jeu, utilisez seulement 1 [Quicken] à chaque tour. Ce pouvoir fonctionne même si Zarbi [Q] est Endormi, Confus ou Paralysé.",
				de: "Du kannst immer einmal in deinem Zug (vor deinem Angriff) eine Münze werden. Verhindere bei \"Kopf\" alle Auswirkungen von Angriffen (einschließlich Schaden), die allen deinen Pokémon mit \"Icognito\" in ihren Namen im nächsten Zug deines Gegners zugefügt werden. Wenn du mehr als ein Icognito Q im Spiel hast, verwende nur ein Quicken pro Zug. Diese Power kann selbst dann verwendet werden, wenn icognito Q schläft, verwirrt oder gelähmt ist."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Psychic",
			],
			name: {
				en: "Hidden Power",
				fr: "Puissance cachée",
				de: "Kraftreserve"
			},

			damage: 10,

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	description: {
		fr: "On pense que la variété des types de ce Pokémon particulier est le résultat d'une adaptation due à un caprice de l'évolution, chacun possédant une capacité différente."
	},

	thirdParty: {
		cardmarket: 274711,
		tcgplayer: 90229
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
