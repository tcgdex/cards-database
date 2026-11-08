import { Card } from 'models/database/card'
import Set from '../SM Black Star Promos'

const card: Card = {
	name: {
		'en-us': "Dusk Mane Necrozma",
		'fr-fr': "Necrozma Crinière du Couchant",
		'es-es': "Necrozma Melena Crepuscular",
		'it-it': "Necrozma Criniera del Vespro",
		'pt-br': "Necrozma Juba Crepúsculo",
		'de-de': "Abendmähne-Necrozma"
	},
	illustrator: "nagimiso",
	rarity: "Promo",
	category: "Pokemon",

	set: Set,
	dexId: [
		800,
	],
	hp: 130,
	types: [
		"Metal",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Metal",
			],
			name: {
				'en-us': "Dusk Shot",
				'fr-fr': "Tir au Couchant",
				'es-es': "Disparo Crepuscular",
				'it-it': "Colpo del Vespro",
				'pt-br': "Tiro Crepúsculo",
				'de-de': "Abendgeschoss"
			},
			effect: {
				'en-us': "This attack does 60 damage to 1 of your opponent’s Pokémon-GX or Pokémon-EX. This damage isn’t affected by Weakness or Resistance.",
				'fr-fr': "Cette attaque inflige 60 dégâts à l’un des Pokémon-GX ou Pokémon-EX de votre adversaire. Ces dégâts ne sont pas affectés par la Faiblesse ou la Résistance.",
				'es-es': "Este ataque hace 60 puntos de daño a 1 de los Pokémon-GX o Pokémon-EX de tu rival. Este daño no se ve afectado por Debilidad o Resistencia.",
				'it-it': "Questo attacco infligge 60 danni a uno dei Pokémon-GX o Pokémon-EX del tuo avversario. Questi danni non sono influenzati dalla debolezza o dalla resistenza.",
				'pt-br': "Este ataque causa 60 pontos de dano a 1 dos Pokémon-GX ou Pokémon-EX do seu oponente. Este dano não é afetado por Fraqueza ou Resistência.",
				'de-de': "Diese Attacke fügt 1 Pokémon-GX oder Pokémon-EX deines Gegners 60 Schadenspunkte zu. Der Schaden dieser Attacke wird durch Schwäche und Resistenz nicht verändert."
			},

		},
		{
			cost: [
				"Metal",
				"Metal",
				"Colorless",
			],
			name: {
				'en-us': "Rusty Claws",
				'fr-fr': "Griffes Rouillées",
				'es-es': "Garras Herrumbrosas",
				'it-it': "Artigli Ferrosi",
				'pt-br': "Garras Enferrujadas",
				'de-de': "Rostige Krallen"
			},
			effect: {
				'en-us': "If your opponent has exactly 1 Prize card remaining, this attack does 100 more damage.",
				'fr-fr': "S’il reste exactement 1 carte Récompense à votre adversaire, cette attaque inflige 100 dégâts supplémentaires.",
				'es-es': "Si a tu rival le queda exactamente 1 carta de Premio, este ataque hace 100 puntos de daño más.",
				'it-it': "Se al tuo avversario è rimasta esattamente una carta Premio, questo attacco infligge 100 danni in più.",
				'pt-br': "Se o seu oponente tiver exatamente 1 carta de Prêmio restante, este ataque causará 100 pontos de dano a mais.",
				'de-de': "Wenn dein Gegner genau 1 verbleibende Preiskarte hat, fügt diese Attacke 100 Schadenspunkte mehr zu."
			},
			damage: "100+",

		},
	],
	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Psychic",
			value: "-20"
		},
	],
	retreat: 2,




	description: {
		'en-us': "This is its form with it is devouring the light of Solgaleo. It pounces on its foes and then slashes them with the claws on its four limbs and back.",
	},
}

export default card
