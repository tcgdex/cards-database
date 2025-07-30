import { Card } from '../../../interfaces'
import Set from '../HeartGold SoulSilver'

const card: Card = {
	name: {
		en: "Pichu",
		fr: "Pichu",
		de: "Pichu"
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
				de: "Niedliches Schlafgesicht"
			},
			effect: {
				en: "As long as Pichu is Asleep, prevent all damage done to Pichu by attacks.",
				fr: "Tant que Pichu reste Endormi, prévenez tous les dégâts qui peuvent lui être infligés par des attaques.",
				de: "Solange Pichu schläft, verhindere allen Schaden, der Pichu durch Angriffe zugefügt wird."
			},
		},
	],

	attacks: [
		{

			name: {
				en: "Playground",
				fr: "Terrain de jeu",
				de: "Spielplatz"
			},
			effect: {
				en: "Each player may search his or her deck for as many Basic Pokémon as he or she likes, put them onto his or her Bench, and shuffle his or her deck afterward. (You put your Pokémon on the Bench first.) Pichu is now Asleep.",
				fr: "Chaque joueur peut chercher dans son deck autant de Pokémon de base qu’il le souhaite, les mettre sur son Banc, puis mélanger son deck. (Vous devez être le premier à mettre vos Pokémon sur le Banc.) Pichu est maintenant Endormi.",
				de: "Jeder Spieler kann sein Deck nach beliebig vielen Basis-Pokémon-Karten durchsuchen, sie auf die Bank legen und anschließend sein Deck mischen. (Du legst deine Pokémon zuerst auf die Bank.) Pichu schläft jetzt."
			},

		},
	],

	retreat: 0,

	description: {
		en: "Despite its small size, it can zap even adult humans. However, if it does so, it also surprises itself."
	},

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	},

	thirdParty: {
		cardmarket: 279000
	}
}

export default card
