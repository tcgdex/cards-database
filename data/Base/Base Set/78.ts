import { Card } from '../../../interfaces'
import Set from '../Base Set'

const card: Card = {
	name: {
		en: "Scoop Up",
		pt: "Scoop Up",
		fr: "Rappel",
		de: "Aufwisch"
	},

	illustrator: "Keiji Kinebuchi",
	rarity: "Rare",
	category: "Trainer",
	set: Set,

	effect: {
		en: "Choose 1 of your Pokémon in play and return its Basic Pokémon card to your hand. (Discard all cards attached to that card.)",
		pt: "Escolha 1 dos seus Pokémon em jogo e devolva o card de Pokémon Básico dele para sua mão. (Descarte todos os cards anexados a esse card.)",
		fr: "Choisissez 1 de vos Pokémon en jeu et reprenez sa carte Pokémon de base dans votre main. (Défaussez toutes les cartes attachées à cette carte.)",
		de: "Wähle eines Deiner Pokémon im Spiel und nimm seine Basis-Karte auf Deine Hand zurück (Entferne alle auf dieser Karte abgelegte Karten.)"
	}
}

export default card
