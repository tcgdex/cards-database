import { Card } from 'models/database/card'
import Set from '../Vivid Voltage'

const card: Card = {
	dexId: [807],

	name: {
		'en-us': "Zeraora",
		'fr-fr': "Zeraora",
		'es-es': "Zeraora",
		'it-it': "Zeraora",
		'pt-br': "Zeraora",
		'de-de': "Zeraora"
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
				'en-us': "Fighting Lightning",
				'fr-fr': "Foudre Hostile",
				'es-es': "Rayo Luchador",
				'it-it': "Fulmine Combattente",
				'pt-br': "Luta Relâmpago",
				'de-de': "Blitzfäuste"
			},
			effect: {
				'en-us': "If your opponent's Active Pokémon is a Pokémon V or Pokémon-GX, this attack does 80 more damage.",
				'fr-fr': "Si le Pokémon Actif de votre adversaire est un Pokémon-V ou un Pokémon-GX, cette attaque inflige 80 dégâts supplémentaires.",
				'es-es': "Si el Pokémon Activo de tu rival es un Pokémon V o un Pokémon-GX, este ataque hace 80 puntos de daño más.",
				'it-it': "Se il Pokémon attivo del tuo avversario è un Pokémon-V o un Pokémon-GX, questo attacco infligge 80 danni in più.",
				'pt-br': "Se o Pokémon Ativo do seu oponente for um Pokémon V ou um Pokémon-GX, este ataque causará 80 pontos de dano a mais.",
				'de-de': "Wenn das Aktive Pokémon deines Gegners ein Pokémon-V oder Pokémon-GX ist, fügt diese Attacke 80 Schadenspunkte mehr zu."
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


	stage: "Basic",

	description: {
		'en-us': "It runs as fast as lightning strikes, shredding its opponents with its high-voltage claws."
	},

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 511725,
				tcgplayer: 226459
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 511725,
				tcgplayer: 226459
			}
		},
	],
}

export default card
