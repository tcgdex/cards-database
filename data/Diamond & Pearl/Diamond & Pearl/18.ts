import { Card } from '../../../interfaces'
import Set from '../Diamond & Pearl'

const card: Card = {
	name: {
		en: "Azumarill",
		fr: "Azumarill",
		de: "Azumarill"
	},

	illustrator: "Naoyo Kimura",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		184,
	],

	hp: 80,

	types: [
		"Water",
	],

	evolveFrom: {
		en: "Marill",
		fr: "Marill",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Defense Curl",
				fr: "Boul'armure",
				de: "Einigler"
			},
			effect: {
				en: "Flip a coin. If heads, prevent all damage done to Azumarill during your opponent's next turn.",
				fr: "Lancez une pièce. Si c'est face, prévenez tous dégâts infligés à Azumarill lors du prochain tour de votre adversaire.",
				de: "Wirf eine Müntze. Bei \"Kopf\" verhindere alle Schaden, der Azumarill während des nächsten Zuges deines Gegners zugefügt wird."
			},

		},
		{
			cost: [
				"Water",
				"Water",
			],
			name: {
				en: "Bubble Pump",
				fr: "Pompe à bulles",
				de: "Blubbpumpe"
			},
			effect: {
				en: "If Azumarill has 3 or more Energy attached to it, this attack does 40 damage plus 20 more damage. If Azurill is anywhere under Azumarill, flip a coin. If heads, the Defending Pokémon is now Paralyzed.",
				fr: "Si Azumarill possède au moins 3 Énergies, cette attaque inflige 40 dégâts plus 20 dégâts supplémentaires. Si Azurill se trouve sous Azumarill, lancez une pièce. Si c'est face, le Pokémon Défenseur est maintenant Paralysé.",
				de: "Wenn an Azumarill 3 oder mehr Energien angelegt sind, fügt dieser Angriff 40 Schadenspunkte plus 20 weitere Schadenspunkte zu. Wenn Azurill sich an beliebiger Stelle unter Azumarill befindet, wirf 1 Müntze. Bei \"Kopf\" ist das Verteidigende Pokémon jetzt gelähmt."
			},
			damage: "40+",

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "+20"
		},
	],

	retreat: 2,

	thirdParty: {
		cardmarket: 277517
	}
}

export default card
