import { Card } from '../../../interfaces'
import Set from '../Aquapolis'

const card: Card = {
	name: {
		en: "Undersea Ruins",
		fr: "Ruines sous marines",
		de: "Unterwasser-Ruinen"
	},

	illustrator: "Midori Harada",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		en: "This card stays in play when you play it. Discard this card if another Stadium card comes into play. Once during each player's turn (before attacking), that player may flip a coin. If heads, that player chooses 1 of his or her Evolved Pokémon in play and discards the top Evolution card from that Pokémon, devolving it.",
		fr: "Cette carte reste en jeu lorsque vous la jouez. Défaussez -vous de cette carte si une autre carte Stade arrive en jeu.",
		de: "Einmal in jedem eigenem Zug (vor dem Angriff) darf jeder Spieler eine Münze werfen. Bei 'Kopf' wählt der Spieler 1 seiner entwickelten Pokémon im Spiel und legt die oberste Entwicklungskarte dieses Pokémon auf seinen Ablagestapel, rückentwickelt es also. Diese Karte bleibt im Spiel, wenn du sie spielst. Lege diese Karte ab, sobald eine weitere Stadion-Karte ins Spiel kommt.",
	},

	thirdParty: {
		cardmarket: 275214,
		tcgplayer: 90158
	},

	variants: [
		{
			type: 'normal',
		},
		{
			type: 'reverse',
		}
	]
}

export default card
