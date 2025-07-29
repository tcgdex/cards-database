import { Card } from '../../../interfaces'
import Set from '../Stormfront'

const card: Card = {
	name: {
		en: "Bibarel",
		fr: "Castorno",
		de: "Bidifas"
	},

	illustrator: "Kouki Saitou",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		400,
	],

	hp: 100,

	types: [
		"Water",
	],

	evolveFrom: {
		en: "Bidoof",
		fr: "Keunotor",
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Unaware",
				fr: "Inconscient",
				de: "Unkenntnis"
			},
			effect: {
				en: "Prevent all effects of attacks, excluding damage, done to Bibarel.",
				fr: "Prévenez tous les effets d'attaques, dégâts exclus, infligés à Castorno.",
				de: "Verhindere alle Effekte von Angriffen, außer Schaden, die Bidifas zugefügt würden."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Amnesia",
				fr: "Amnésie",
				de: "Amnesie"
			},
			effect: {
				en: "Choose 1 of the Defending Pokémon's attacks. That Pokémon can't use that attack during your opponent's next turn.",
				fr: "Choisissez 1 des attaques du Pokémon Défenseur. Ce Pokémon ne peut pas utiliser cette attaque lors du prochain tour de votre adversaire.",
				de: "Wähle 1 Angriff des Verteidigenden Pokémon. Dieses Pokémon kann im nächsten Zug deines Gegners den gewählten Angriff nicht einsetzen."
			},
			damage: 20,

		},
		{
			cost: [
				"Water",
				"Water",
			],
			name: {
				en: "Surf",
				fr: "Surf",
				de: "Surfer"
			},

			damage: 60,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "+30"
		},
	],

	retreat: 3,

	thirdParty: {
		cardmarket: 278330
	}
}

export default card
