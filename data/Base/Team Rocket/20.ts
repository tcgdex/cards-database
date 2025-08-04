import { Card } from '../../../interfaces'
import Set from '../Team Rocket'

const card: Card = {
	name: {
		en: "Dark Blastoise",
		fr: "Tortank obscur",
		de: "Dunkles Turtok"
	},

	illustrator: "Mitsuhiro Arita",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		9,
	],

	hp: 70,

	types: [
		"Water",
	],

	evolveFrom: {
		en: "Wartortle",
	},

	stage: "Stage2",

	attacks: [
		{
			cost: [
				"Water",
				"Water",
			],
			name: {
				en: "Hydrocannon",
				fr: "Canon à O",
				de: "Hydrokanone"
			},
			effect: {
				en: "Does 30 damage plus 20 more damage for each W Energy attached to Dark Blastoise but not used to pay for this attack. You can't add more than 40 damage in this way.",
				fr: "Inflige 30 dégâts plus 20 dégâts supplémentaires pour chaque Énergie  attachée à Tortank obscur en plus du coût de cette attaque. Vous ne pouvez ajouter plus de 40 dégâts de cette façon.",
				de: "Fügt 30 Schadenspunkte plus 20 weitere Schadenspunkte für jede auf Dunkles Turtok abgelegte  -Energie zu, die nicht zum Zahlen auf diesen Angriff verwendet wurde. Es lassen sich so nicht mehr als 40 Schadenspunkte hinzufügen."
			},
			damage: "30+",

		},
		{
			cost: [
				"Water",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Rocket Tackle",
				fr: "Lance roquette",
				de: "Raketenstart"
			},
			effect: {
				en: "Dark Blastoise does 10 damage to itself. Flip a coin. If heads, prevent all damage done to Dark Blastoise during your opponent's next turn. (Any other effects of attacks still happen.)",
				fr: "Tortank obscur s'inflige 10 dégâts. Lancez une pièce. Si c'est face, prévenez tous les dégâts infligés à Tortank obscur pendant le prochain tour de votre adversaire. (Tous les autres effets dus à des attaques subsistent.)",
				de: "Dunkles Turtok fügt sich selbst 10 Schadenspunkte zu. Wirf eine Münze. Verhindere bei Kopf allen Schaden, der Dunkles Turtok während des nächsten Zuges deines Gegners zugefügt wird. (Alle anderen Auswirkungen von Angriffen finden immer noch statt.)"
			},
			damage: 40,

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],

	description: {
		fr: "Un Pokémon agressif qui s'attaque à tout ce qu'il voit."
	},

	thirdParty: {
		cardmarket: 274056,
		tcgplayer: 84570
	}
}

export default card
