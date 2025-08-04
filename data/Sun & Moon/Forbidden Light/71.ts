import { Card } from '../../../interfaces'
import Set from '../Forbidden Light'

const card: Card = {
	name: {
		en: "Zygarde",
		fr: "Zygarde",
		es: "Zygarde",
		it: "Zygarde",
		pt: "Zygarde",
		de: "Zygarde"
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
				en: "Earthen Aura",
				fr: "Aura Terrestre",
				es: "Aura Terrestre",
				it: "Aura Terrestre",
				pt: "Aura Terrosa",
				de: "Erdaura"
			},
			effect: {
				en: "Damage from this Pokémon’s attacks isn’t affected by Weakness or Resistance.",
				fr: "Les dégâts des attaques de ce Pokémon ne sont pas affectés par la Faiblesse ou la Résistance.",
				es: "El daño de los ataques de este Pokémon no se ve afectado por Debilidad o Resistencia.",
				it: "I danni degli attacchi di questo Pokémon non sono influenzati dalla debolezza o dalla resistenza.",
				pt: "O dano dos ataques deste Pokémon não é afetado por Fraqueza ou Resistência.",
				de: "Schaden durch Attacken dieses Pokémon wird durch Schwäche und Resistenz nicht verändert."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Fighting",
			],
			name: {
				en: "Peace Maker",
				fr: "Pacificateur",
				es: "Pacificador",
				it: "Pacificatore",
				pt: "Força Pacificadora",
				de: "Friedensstifter"
			},
			effect: {
				en: "If your opponent has an Ultra Beast in play, this attack does 30 more damage.",
				fr: "Si votre adversaire a une Ultra-Chimère en jeu, cette attaque inflige 30 dégâts supplémentaires.",
				es: "Si tu rival tiene algún Ultraente en juego, este ataque hace 30 puntos de daño más.",
				it: "Se il tuo avversario ha un’Ultracreatura in gioco, questo attacco infligge 30 danni in più.",
				pt: "Se o seu oponente tiver uma Ultracriatura em jogo, este ataque causará 30 pontos de dano a mais.",
				de: "Wenn dein Gegner 1 Ultrabestie im Spiel hat, fügt diese Attacke 30 Schadenspunkte mehr zu."
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

	thirdParty: {
		cardmarket: 327207,
		tcgplayer: 165723
	}
}

export default card
