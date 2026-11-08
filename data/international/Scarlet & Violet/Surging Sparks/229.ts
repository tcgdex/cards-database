import { Card } from "models/database/card"
import Set from "../Surging Sparks"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Clemont's Quick Wit",
		'fr-fr': "Esprit Vif de Lem",
		'es-es': "Agudeza de Lem",
		'it-it': "Arguzia di Lem",
		'pt-br': "Sagacidade do Clemont",
		'de-de': "Citros Scharfsinn"
	},

	rarity: "Ultra Rare",
	category: "Trainer",

	effect: {
		'en-us': "Heal 60 damage from each of your {L} Pokémon.",
		'fr-fr': "Soignez 60 dégâts de chacun de vos Pokémon {L}.",
		'es-es': "Cura 60 puntos de daño a cada uno de tus Pokémon {L}.",
		'it-it': "Cura ciascuno dei tuoi Pokémon {L} da 60 danni.",
		'pt-br': "Cure 60 pontos de dano de cada um dos seus Pokémon {L}.",
		'de-de': "Heile 60 Schadenspunkte bei jedem deiner {L}-Pokémon."
	},

	trainerType: "Supporter",
	regulationMark: "H",

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 794602,
				tcgplayer: 589901
			}
		},
	],

	illustrator: "Naoki Saito",

}

export default card
