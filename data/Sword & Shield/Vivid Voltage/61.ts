import { Card } from '../../../interfaces'
import Set from '../Vivid Voltage'

const card: Card = {
	dexId: [807],

	name: {
		en: "Zeraora",
		fr: "Zeraora",
		es: "Zeraora",
		it: "Zeraora",
		pt: "Zeraora",
		de: "Zeraora"
	},

	illustrator: "so-taro",
	rarity: "Holo Rare",
	category: "Pokemon",
	set: Set,
	hp: 100,

	types: [
		"Lightning",
	],

	attacks: [
		{
			cost: [
				"Lightning",
				"Colorless",
			],
			name: {
				en: "Fighting Lightning",
				fr: "Foudre Hostile",
				es: "Rayo Luchador",
				it: "Fulmine Combattente",
				pt: "Luta Relâmpago",
				de: "Blitzfäuste"
			},
			effect: {
				en: "If your opponent's Active Pokémon is a Pokémon V or Pokémon-GX, this attack does 80 more damage.",
				fr: "Si le Pokémon Actif de votre adversaire est un Pokémon-V ou un Pokémon-GX, cette attaque inflige 80 dégâts supplémentaires.",
				es: "Si el Pokémon Activo de tu rival es un Pokémon V o un Pokémon-GX, este ataque hace 80 puntos de daño más.",
				it: "Se il Pokémon attivo del tuo avversario è un Pokémon-V o un Pokémon-GX, questo attacco infligge 80 danni in più.",
				pt: "Se o Pokémon Ativo do seu oponente for um Pokémon V ou um Pokémon-GX, este ataque causará 80 pontos de dano a mais.",
				de: "Wenn das Aktive Pokémon deines Gegners ein Pokémon-V oder Pokémon-GX ist, fügt diese Attacke 80 Schadenspunkte mehr zu."
			},
			damage: "30+",

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	regulationMark: "D",
	retreat: 0,

	variants: {
		normal: false,
		reverse: true,
		holo: true,
		firstEdition: false
	},

	stage: "Basic",

	description: {
		en: "It runs as fast as lightning strikes, shredding its opponents with its high-voltage claws."
	},

	thirdParty: {
		cardmarket: 511725
	}
}

export default card
