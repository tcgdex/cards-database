import { Card } from '../../../interfaces'
import Set from '../Skyridge'

const card: Card = {
	name: {
		en: "Miracle Sphere γ",
		de: "Wunder-Sphäre γ"
	},

	illustrator: "Hiromichi Sugiyama",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	attacks: [{
		name: {
			en: "Thunder Force",
			de: "Donnerkraft"
		},

		damage: "30+",

		effect: {
			en: "If the Pokémon using this attack has Grass and Lightning basic Energy cards attached to it, the Defending Pokémon is now Asleep and Poisoned. If the Pokémon using this attack has Water and Lightning basic Energy cards attached to it, this attack does 30 damage plus 10 more damage and lets you put 1 damage counter on each of your opponent's Benched Pokémon.",
			de: "Sind an das Pokémon, das diesen Angriff verwendet,  und -Basis-Energiekarten angelegt, ist das Verteidigende Pokémon jetzt vergiftet und schläft. Sind an das Pokémon, das diesen Angriff verwendet, - und -Basis-Energiekarten angelegt, fügt dieser Angriff 30 Schadenspunkte plus 10 weitere Schadenspunkte zu und lässt dich 1 Schadensmarke auf jedes Pokémon auf der Bank deines Gegners legen."
		},

		cost: ["Water", "Colorless", "Colorless"]
	}],

	effect: {
		en: "Attach this card to 1 of your Evolved Grass, Water, or Lightning Pokémon in play. That Pokémon may use this card's attack instead of its own. At the end of your turn, discard Miracle Sphere γ.",
		de: "Lege diese Karte an 1 deiner entwickelten -, -, oder -Pokémon im Spiel an. Dieses Pokémon kann den Angriff dieser Karte anstatt seines eigenen verwenden. Lege am Ende deines Zuges die Wunder-Sphäre (Gamma) auf deinen Ablagestapel."
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				tcgplayer: 87499,
				cardmarket: 275389
			},
		},
		{
			type: 'reverse',
			thirdParty: {
				tcgplayer: 87499,
				cardmarket: 275389
			},
		},
	],
}

export default card
