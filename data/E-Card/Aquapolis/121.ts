import { Card } from '../../../interfaces'
import Set from '../Aquapolis'

const card: Card = {
	name: {
		en: "Fighting Cube 01",
		fr: "Cube de combat 01",
		de: "Kampf-Würfel 01"
	},

	illustrator: '"Big Mama" Tagawa',
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	trainerType: 'Technical Machine',

	effect: {
		en: "Attach this card to 1 of your {F} Pokémon in play. That Pokémon may use this card's attack instead of its own. At the end of your turn, discard Fighting Cube 01.",
		fr: "Attachez cette carte à l'un de vos Pokémon {F} en jeu. Ce Pokémon peut utiliser l'attaque de cette carte à la place de la sienne. À la fin de votre tour, défaussez-vous de Cube de combat 01.",
		de: "Lege diese Karte an 1 deiner -Pokémon im Spiel an. Dieses Pokémon kann den Angriff dieser Karte anstatt seiner eigenen verwenden. Lege am Ende deines Zuges Kampf-Würfel 01 auf deinen Ablagestapel."
	},

	attacks: [{
		name: {
			en: 'Violent Rage',
			fr: "Rage violente",
			de: "Rasende Wut"
		},

		damage: "10x",

		effect: {
			fr: "Lancez un nombre de pièces égal au nombre de marqueurs de dégâts sur ce Pokémon. Cette attaque inflige 10 dégâts multipliés par le nombre de faces.",
			en: 'Flip a number of coins equal to the number of damage counters on this Pokémon. This attack does 10 damage times the number of heads.',
			de: "Wirf so viele Münzen, wie Schadensmarken auf diesem Pokémon liegen. Dieser Angriff fügt 10 Schadenspunkte mal der Anzahl \"Kopf\" zu."
		},

		cost: ["Fighting"]
	}]
}

export default card
