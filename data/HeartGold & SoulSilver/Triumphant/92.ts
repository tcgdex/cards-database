import { Card } from '../../../interfaces'
import Set from '../Triumphant'

const card: Card = {
	name: {
		en: "Celebi",
		fr: "Celebi",
		de: "Celebi"
	},

	illustrator: "Hideaki Hakozaki",
	rarity: "Rare PRIME",
	category: "Pokemon",
	set: Set,

	dexId: [
		251,
	],

	hp: 60,

	types: [
		"Grass",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				en: "Forest Breath",
				fr: "Souffle forestier",
				de: "Waldatem"
			},
			effect: {
				en: "Once during your turn (before your attack), if Celebi is your Active Pokémon, you may attach a Grass Energy card from your hand to 1 of your Pokémon. This power can’t be used if Celebi is affected by a Special Condition.",
				fr: "Une fois pendant votre tour (avant votre attaque), si Celebi est votre Pokémon Actif, vous pouvez attacher une carte Énergie Grass de votre main à l’un de vos Pokémon. Ce Poké-Power ne peut pas être utilisé si Celebi est affecté par un État Spécial.",
				de: "Einmal während deines Zuges (vor deinem Angriff) kannst du, wenn Celebi dein Aktives Pokémon ist, 1 -Energiekarte von deiner Hand an 1 deiner Pokémon anlegen. Diese Poké-Power kann nicht benutzt werden, wenn Celebi von einem Speziellen Zustand betroffen ist."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Grass",
				"Psychic",
				"Colorless",
			],
			name: {
				en: "Time Circle",
				fr: "Cycle temporel",
				de: "Zeitkreis"
			},
			effect: {
				en: "During your opponent’s next turn, prevent all damage done to Celebi by attacks from your opponent’s Stage 1 or Stage 2 Pokémon.",
				fr: "Pendant le prochain tour de votre adversaire, prévenez tous les dégâts infligés à Celebi par le Pokémon de niveau 1 ou 2 de votre adversaire.",
				de: "Verhindere während des nächsten Zuges deines Gegners allen Schaden, der Celebi durch Angriffe von gegnerischen Pokémon der Phase 1 und Phase 2 zugefügt würde."
			},
			damage: 30,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	retreat: 1,
	suffix: "Prime",

	variants: {
		normal: false,
		reverse: false,
		holo: true,
		firstEdition: false
	},

	thirdParty: {
		cardmarket: 279533
	}
}

export default card
