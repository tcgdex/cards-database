import { Card } from '../../../interfaces'
import Set from '../HeartGold SoulSilver'

const card: Card = {
	name: {
		en: "Igglybuff",
		fr: "Toudoudou",
		de: "Fluffeluff"
	},

	illustrator: "Atsuko Nishida",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		174,
	],

	hp: 30,

	types: [
		"Colorless",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				fr: "Joli visage endormi",
				de: "Niedliches Schlafgesicht"
			},
			effect: {
				fr: "Tant que Toudoudou reste Endormi, prévenez tous les dégâts qui peuvent lui être infligés par des attaques.",
				de: "Solange Fluffeluff schläft, verhindere allen Schaden, der Fluffeluff durch Angriffe zugefügt wird."
			},
		},
	],

	attacks: [
		{

			name: {
				en: "Graffiti",
				fr: "Graffiti",
				de: "Graffiti"
			},
			effect: {
				en: "Igglybuff is now Asleep. During your opponent’s next turn, the attack cost of each of the Defending Pokémon’s attacks is Colorless more.",
				fr: "Toudoudou est maintenant Endormi. Au prochain tour de votre adversaire, le coût de l’attaque de chaque Pokémon Défenseur est plus élevé de Colorless.",
				de: "Fluffeluff schläft jetzt. Während des nächsten Zuges deines Gegners kosten die Angriffe jedes Verteidigenden Pokémons  mehr."
			},

		},
	],

	retreat: 0,

	description: {
		en: "Its extremely flexible and elastic body makes it bounce continuously—anytime, anywhere."
	},

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	},

	thirdParty: {
		cardmarket: 279016,
		tcgplayer: 86263
	}
}

export default card
