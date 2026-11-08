import { Card } from 'models/database/card'
import Set from '../Forbidden Light'

const card: Card = {
	name: {
		'en-us': "Zygarde",
		'fr-fr': "Zygarde",
		'es-es': "Zygarde",
		'it-it': "Zygarde",
		'pt-br': "Zygarde",
		'de-de': "Zygarde"
	},

	illustrator: "Akira Komayama",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		718,
	],

	hp: 90,

	types: [
		"Fighting",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: {
				'en-us': "Earthen Aura",
				'fr-fr': "Aura Terrestre",
				'es-es': "Aura Terrestre",
				'it-it': "Aura Terrestre",
				'pt-br': "Aura Terrosa",
				'de-de': "Erdaura"
			},
			effect: {
				'en-us': "Damage from this Pokémon’s attacks isn’t affected by Weakness or Resistance.",
				'fr-fr': "Les dégâts des attaques de ce Pokémon ne sont pas affectés par la Faiblesse ou la Résistance.",
				'es-es': "El daño de los ataques de este Pokémon no se ve afectado por Debilidad o Resistencia.",
				'it-it': "I danni degli attacchi di questo Pokémon non sono influenzati dalla debolezza o dalla resistenza.",
				'pt-br': "O dano dos ataques deste Pokémon não é afetado por Fraqueza ou Resistência.",
				'de-de': "Schaden durch Attacken dieses Pokémon wird durch Schwäche und Resistenz nicht verändert."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Fighting",
			],
			name: {
				'en-us': "Peace Maker",
				'fr-fr': "Pacificateur",
				'es-es': "Pacificador",
				'it-it': "Pacificatore",
				'pt-br': "Força Pacificadora",
				'de-de': "Friedensstifter"
			},
			effect: {
				'en-us': "If your opponent has an Ultra Beast in play, this attack does 30 more damage.",
				'fr-fr': "Si votre adversaire a une Ultra-Chimère en jeu, cette attaque inflige 30 dégâts supplémentaires.",
				'es-es': "Si tu rival tiene algún Ultraente en juego, este ataque hace 30 puntos de daño más.",
				'it-it': "Se il tuo avversario ha un’Ultracreatura in gioco, questo attacco infligge 30 danni in più.",
				'pt-br': "Se o seu oponente tiver uma Ultracriatura em jogo, este ataque causará 30 pontos de dano a mais.",
				'de-de': "Wenn dein Gegner 1 Ultrabestie im Spiel hat, fügt diese Attacke 30 Schadenspunkte mehr zu."
			},
			damage: "30+",

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 1,

	description: {
		'en-us': "This is Zygarde's form when about 10% of its cells have been gathered. It runs across the land at speeds greater than 60 mph.",
	},

	thirdParty: {
		cardmarket: 327207,
		tcgplayer: 165723
	}
}

export default card
