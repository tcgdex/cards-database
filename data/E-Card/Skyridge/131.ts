import { Card } from '../../../interfaces'
import Set from '../Skyridge'

const card: Card = {
	name: {
		en: "Miracle Sphere Gamma",
		de: "Wunder-Sphäre (Gamma)"
	},

	illustrator: "Hiromichi Sugiyama",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	attacks: [{
		name: {
			de: "Donnerkraft"
		},

		damage: "30+",

		effect: {
			de: "Sind an das Pokémon, das diesen Angriff verwendet,  und -Basis-Energiekarten angelegt, ist das Verteidigende Pokémon jetzt vergiftet und schläft. Sind an das Pokémon, das diesen Angriff verwendet, - und -Basis-Energiekarten angelegt, fügt dieser Angriff 30 Schadenspunkte plus 10 weitere Schadenspunkte zu und lässt dich 1 Schadensmarke auf jedes Pokémon auf der Bank deines Gegners legen."
		},

		cost: ["Water", "Colorless", "Colorless"]
	}],

	effect: {
		de: "Lege diese Karte an 1 deiner entwickelten -, -, oder -Pokémon im Spiel an. Dieses Pokémon kann den Angriff dieser Karte anstatt seines eigenen verwenden. Lege am Ende deines Zuges die Wunder-Sphäre (Gamma) auf deinen Ablagestapel."
	}
}

export default card
