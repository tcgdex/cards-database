import { Card } from '../../../interfaces'
import Set from '../Legends Awakened'

const card: Card = {
	name: {
		en: "Technical Machine TS-2",
		fr: "Machine Technique TS-2",
		de: "Technische Maschine TS-2"
	},

	illustrator: "Ryo Ueda",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		en: "Attach this card to 1 of your Pokémon in play. That Pokémon may use this card's attack instead of its own.",
		fr: "Attachez cette carte à 1 de vos Pokémon en jeu. Ce Pokémon peut utiliser l'attaque de cette carte à la place de la sienne.",
		de: "Lege diese Karte an 1 deiner Pokémon im Spiel an. Dieses Pokémon kann den Angriff dieser Karte anstelle seiner eigenen Angriffe benutzen."
	},

	trainerType: "Technical Machine",

	attacks: [{
		name: {
			en: "Devoluter",
			fr: "Dés-Évolutionneur",
			de: "Devoluter"
		},

		effect: {
			en: "Choose 1 of your opponent's Evolved Pokémon (Excluding Pokémon LV.X). Remove the highest Stage Evolution card from that Pokémon and put that card back into your opponent's hand.",
			fr: "Choisizzes 1 des Pokémon Évolués de votre adversaire (Pokémon LV.X exclus). Retirez à ce Pokémon sa carte au niveau d'Évolution le plus élevé et replacez cette carte dans la main de votre adversaire.",
			de: "Wähle 1 entwickeltes Pokémon deines Gegners (außer Pokémon LV.X). Entferne die höchste Evolutionskarte vom gewählten Pokémon, dein Gegner nimmt diese Karte auf seine Hand zurück."
		}
	}]
}

export default card
