import { Card } from '../../../interfaces'
import Set from '../Skyridge'

const card: Card = {
	name: {
		en: "Miracle Sphere β",
		de: "Wunder-Sphäre β"
	},

	illustrator: "Hiromichi Sugiyama",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	attacks: [{
		name: {
			en: 'Freezing Force',
			de: "Frostkraft"
		},

		damage: "30+",

		effect: {
			en: "If the Pokémon using this attack has Fire and Water basic Energy cards attached to it, this attack does 30 damage plus 10 more damage and the Defending Pokémon is now Burned. If the Pokémon using this attack has Water and Psychic basic Energy cards attached to it, choose an Energy card attached to the Defending Pokémon, if any, and your opponent shuffles that card into his or her deck.",
			de: "Frostkraft Sind an das Pokémon, das diesen Angriff verwendet,  und  Basis Energiekarten angelegt, fügt dieser Angriff 30 Schadenspunkte plus 10 weitere Schadenspunkte zu, und das verteidigende Pokémon ist jetzt verbrannt. Sind an das Pokémon, das diesen Angriff verwendet,  und  Basis Energiekarten angelegt, wähle eine an das verteidigende Pokémon angelegte Energiekarte, falls vorhanden. Dein Gegner mischt diese Karte dann in sein Deck."
		},

		cost: ["Water", "Colorless", "Colorless"]
	}],

	effect: {
		en: "Attach this card to 1 of your Evolved Fire, Water, or Psychic Pokémon in play. That Pokémon may use this card's attack instead of its own. At the end of your turn, discard Miracle Sphere β.",
		de: "Lege diese Karte an 1 deiner entwickelten -, - oder  Pokémon im Spiel an. Dieses Pokémon kann den Angriff dieser Karte anstatt seines eigenen verwenden. Lege am Ende deines Zuges die Wunder-Sphäre β auf deinen Ablagestapel."
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				tcgplayer: 87498,
				cardmarket: 275388
			},
		},
		{
			type: 'reverse',
			thirdParty: {
				tcgplayer: 87498,
				cardmarket: 275388
			},
		},
	]
}

export default card
