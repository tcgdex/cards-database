import { Card } from '../../../interfaces'
import Set from '../Secret Wonders'

const card: Card = {
	name: {
		en: "Shuckle",
		fr: "Caratroc",
		de: "Pottrott"
	},

	illustrator: "Emi Yoshida",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		213,
	],

	hp: 60,

	types: [
		"Grass",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Pot Shell",
				fr: "Coup de coquillage",
				de: "Topfpanzer"
			},
			effect: {
				en: "Prevent all effects of attacks, including damage, done to Shuckle by your opponent's Pokémon that has any Special Energy cards attached to it.",
				fr: "Prévenez tous les effets d'attaques, dégâts inclus, infligés à Caratroc par les Pokémon de votre adversaire possédant des cartes Énergie spéciale.",
				de: "Verhindere alle Effekte von Angriffen, einschließlich Schaden, die Pottrott von Pokémon deines Gegners, an denen Spezialenergiekarten angelegt sind, zugefügt würden."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Grass",
				"Colorless",
			],
			name: {
				en: "Ferment Poison",
				fr: "Poison effervescent",
				de: "Gärendes Gift"
			},
			effect: {
				en: "The Defending Pokémon is now Poisoned. As long as the Defending Pokémon remains Poisoned by this attack, it can't use any Poké-Body.",
				fr: "Le Pokémon Défenseur est maintenant Empoisonné. Tant que le Pokémon Défenseur reste Empoisonné, il ne peut pas utiliser de Poké-Body.",
				de: "Das Verteidigende Pokémon ist jetzt vergiftet. Solange das Verteidigende Pokémon durch diesen Angriff vergiftet ist, kann es keine Poké-Body benutzen."
			},
			damage: 10,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "+20"
		},
	],

	retreat: 1,

	thirdParty: {
		cardmarket: 277862
	}
}

export default card
