import { Card } from '../../../interfaces'
import Set from '../HeartGold SoulSilver'

const card: Card = {
	name: {
		en: "Pichu",
		fr: "Pichu",
	},

	illustrator: "match",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		172,
	],

	hp: 30,

	types: [
		"Lightning",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Sweet Sleeping Face",
				fr: "Joli visage endormi",
			},
			effect: {
				en: "As long as Pichu is Asleep, prevent all damage done to Pichu by attacks.",
				fr: "Tant que Pichu reste Endormi, prévenez tous les dégâts qui peuvent lui être infligés par des attaques.",
			},
		},
	],

	attacks: [
		{

			name: {
				en: "Playground",
				fr: "Terrain de jeu",
			},
			effect: {
				en: "Each player may search his or her deck for as many Basic Pokémon as he or she likes, put them onto his or her Bench, and shuffle his or her deck afterward. (You put your Pokémon on the Bench first.) Pichu is now Asleep.",
				fr: "Chaque joueur peut chercher dans son deck autant de Pokémon de base qu’il le souhaite, les mettre sur son Banc, puis mélanger son deck. (Vous devez être le premier à mettre vos Pokémon sur le Banc.) Pichu est maintenant Endormi.",
			},

		},
	],

	retreat: 0,

	description: {
		en: "Despite its small size, it can zap even adult humans. However, if it does so, it also surprises itself."
	}
}

export default card
