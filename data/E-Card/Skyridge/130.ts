import { Card } from '../../../interfaces'
import Set from '../Skyridge'

const card: Card = {
	name: {
		en: "Miracle Sphere Beta",
		de: "Wunder-Sphäre (Beta)"
	},

	illustrator: "Hiromichi Sugiyama",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	attacks: [{
		name: {
			de: "Frostkraft"
		},

		damage: "30+",

		effect: {
			de: "Frostkraft Sind an das Pokémon, das diesen Angriff verwendet,  und  Basis Energiekarten angelegt, fügt dieser Angriff 30 Schadenspunkte plus 10 weitere Schadenspunkte zu, und das verteidigende Pokémon ist jetzt verbrannt. Sind an das Pokémon, das diesen Angriff verwendet,  und  Basis Energiekarten angelegt, wähle eine an das verteidigende Pokémon angelegte Energiekarte, falls vorhanden. Dein Gegner mischt diese Karte dann in sein Deck."
		},

		cost: ["Water", "Colorless", "Colorless"]
	}],

	effect: {
		de: "Lege diese Karte an 1 deiner entwickelten -, - oder  Pokémon im Spiel an. Dieses Pokémon kann den Angriff dieser Karte anstatt seines eigenen verwenden. Lege am Ende deines Zuges die Wunder-Sphäre (Beta) auf deinen Ablagestapel."
	},

	thirdParty: {
		tcgplayer: 87498
	}
}

export default card
