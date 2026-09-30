import { Card } from "../../../interfaces"
import Set from "../Delta Reign"

const card: Card = {
	set: Set,

	name: {
		en: "Legendary Summit",
		fr: "Sommet Légendaire"
	},

	illustrator: "nagimiso",
	rarity: "Uncommon",
	category: "Trainer",
	trainerType: "Stadium",
	regulationMark: "J",

	effect: {
		en: "Whenever a {C} Pokémon (yours or your opponent's) is Knocked Out by damage from an attack from the opponent's Pokémon, that player takes 1 fewer Prize card.\n\nYou cannot play this card by itself. You must combine 2 different Legendary Summit from your hand to play as 1 Stadium card.",
		fr: "Chaque fois que l'un des Pokémon {C} (les vôtres ou ceux de votre adversaire) est mis K.O. par les dégâts d'une attaque de l'un des Pokémon de votre adversaire, cette personne récupère une carte Récompense de moins.\n\nCette carte ne peut pas être jouée seule. Vous devez combiner 2 cartes Sommet Légendaire différentes de votre main pour les jouer comme une carte Stade."
	},

	variants: [
		{ type: "normal" },
		{ type: "reverse" }
	],
}

export default card
