import { Card } from 'models/database/card'
import Set from '../Skyridge'

const card: Card = {
	name: {
		'en-us': "Miracle Sphere α",
		'de-de': "Wunder Sphäre α"
	},

	illustrator: "Hiromichi Sugiyama",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	attacks: [{
		name: {
			'en-us': "Fire Force",
			'de-de': "Feuerkraft"
		},

		damage: "30+",

		effect: {
			'en-us': "If the Pokémon using this attack has Fire and Lightning basic Energy cards attached to it, the Defending Pokémon is now Confused. If the Pokémon using this attack has Fire and Fighting basic Energy cards attached to it, this attack does 30 damage plus 10 more damage and remove 3 damage counters from the Pokémon that Miracle Plate α is attached to.",
			'de-de': "Sind an das Pokémon, das diesen Angriff verwendet  und  Basis Energiekarten angelegt, ist das verteidigende Pokémon jetzt verwirrt. Sind an das Pokémon das diesen Angriff verwendet  und  Basis-Energiekarten angelegt, fügt dieser Angriff 30 Schadenspunkte plus 10 weitere Schadenspunkte zu und entfernt 3 Schadensmarken von dem Pokémon, an das Wunder Sphäre a angelegt ist."
		},

		cost: ["Fire", "Colorless", "Colorless"]
	}],

	effect: {
		'en-us': "Attach this card to 1 of your Evolved Fire, Lightning, or Fighting Pokémon in play. That Pokémon may use this card's attack instead of its own. At the end of your turn, discard Miracle Plate α.",
		'de-de': "Lege diese Karte an 1 deiner entwickelten  ,  oder  Pokémon im Spiel an. Dieses Pokémon kann den Angriff dieser Karte anstatt seines eigenen verwenden. Lege am Ende deines Zuges die Wunder Sphäre a auf deinen Ablagestapel"
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				tcgplayer: 87497,
				cardmarket: 275387
			},
		},
		{
			type: 'reverse',
			thirdParty: {
				tcgplayer: 87497,
				cardmarket: 275387
			},
		},
	]
}

export default card
