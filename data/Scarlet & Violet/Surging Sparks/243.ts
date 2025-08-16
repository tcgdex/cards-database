import { Card } from "../../../interfaces"
import Set from "../Surging Sparks"

const card: Card = {
	set: Set,

	name: {
		en: "Clemont's Quick Wit",
		fr: "Esprit Vif de Lem",
		es: "Agudeza de Lem",
		it: "Arguzia di Lem",
		pt: "Sagacidade do Clemont",
		de: "Citros Scharfsinn"
	},

	rarity: "Special illustration rare",
	category: "Trainer",

	effect: {
		en: "Heal 60 damage from each of your {L} Pokémon.",
		fr: "Soignez 60 dégâts de chacun de vos Pokémon {L}.",
		es: "Cura 60 puntos de daño a cada uno de tus Pokémon {L}.",
		it: "Cura ciascuno dei tuoi Pokémon {L} da 60 danni.",
		pt: "Cure 60 pontos de dano de cada um dos seus Pokémon {L}.",
		de: "Heile 60 Schadenspunkte bei jedem deiner {L}-Pokémon."
	},

	trainerType: "Supporter",
	regulationMark: "H",

	variants: {
		normal: false,
		reverse: false
	},

	illustrator: "Shinya Mizuno",

	thirdParty: {
		cardmarket: 794540
	}
}

export default card
