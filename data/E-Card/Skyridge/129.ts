import { Card } from '../../../interfaces'
import Set from '../Skyridge'

const card: Card = {
	name: {
		en: "Miracle Sphere Alpha",
		de: "Wunder Sphäre (Alpha)"
	},

	illustrator: "Hiromichi Sugiyama",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	attacks: [{
		name: {
			de: "Feuerkraft"
		},

		damage: "30+",

		effect: {
			de: "Sind an das Pokémon, das diesen Angriff verwendet  und  Basis Energiekarten angelegt, ist das verteidigende Pokémon jetzt verwirrt. Sind an das Pokémon das diesen Angriff verwendet  und  Basis-Energiekarten angelegt, fügt dieser Angriff 30 Schadenspunkte plus 10 weitere Schadenspunkte zu und entfernt 3 Schadensmarken von dem Pokémon, an das Wunder Sphäre a angelegt ist."
		},

		cost: ["Fire", "Colorless", "Colorless"]
	}],

	effect: {
		de: "Lege diese Karte an 1 deiner entwickelten  ,  oder  Pokémon im Spiel an. Dieses Pokémon kann den Angriff dieser Karte anstatt seines eigenen verwenden. Lege am Ende deines Zuges die Wunder Sphäre a auf deinen Ablagestapel"
	},

	thirdParty: {
		tcgplayer: 87497
	}
}

export default card
