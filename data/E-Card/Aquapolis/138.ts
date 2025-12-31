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
		fr: "Cette carte reste en jeu lorsque vous la jouez. Défaussez-vous de cette carte si une autre carte Stade arrive en jeu.\n\nUne seule fois pendant le tour de chaque joueur (avant son attaque), ce joueur peut lancer une pièce. Si c'est face, ce joueur choisit une de ses Évolutions de Pokémon en jeu et se défausse de la carte Évolution du dessus de ce Pokémon, inversant son évolution.",
		de: "Einmal in jedem eigenem Zug (vor dem Angriff) darf jeder Spieler eine Münze werfen. Bei 'Kopf' wählt der Spieler 1 seiner entwickelten Pokémon im Spiel und legt die oberste Entwicklungskarte dieses Pokémon auf seinen Ablagestapel, rückentwickelt es also. Diese Karte bleibt im Spiel, wenn du sie spielst. Lege diese Karte ab, sobald eine weitere Stadion-Karte ins Spiel kommt."
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
