import { Card } from "models/database/card"
import Set from "../Brilliant Stars Trainer Gallery"

const card: Card = {
	dexId: [702],
	set: Set,

	name: {
		'en-us': "Dedenne",
		'fr-fr': "Dedenne",
		'es-es': "Dedenne",
		'it-it': "Dedenne",
		'pt-br': "Dedenne",
		'de-de': "Dedenne"
	},

	illustrator: "kurumitsu",
	rarity: "Rare",
	category: "Pokemon",
	hp: 70,
	types: ["Psychic"],
	stage: "Basic",

	attacks: [{
		cost: ["Psychic"],

		name: {
			'en-us': "Dede-Flash",
			'fr-fr': "Dede-Flash",
			'es-es': "Dede-Flash",
			'it-it': "Dedeflash",
			'pt-br': "Dedeclarão",
			'de-de': "Dedeblitz"
		},

		effect: {
			'en-us': "If your opponent has exactly 1 Prize card remaining, this attack does 60 more damage, and your opponent's Active Pokémon is now Confused.",
			'fr-fr': "S'il reste exactement une carte Récompense à votre adversaire, cette attaque inflige 60 dégâts supplémentaires, et le Pokémon Actif de votre adversaire est maintenant Confus.",
			'es-es': "Si a tu rival le queda exactamente 1 carta de Premio, este ataque hace 60 puntos de daño más, y el Pokémon Activo de tu rival pasa a estar Confundido.",
			'it-it': "Se il tuo avversario ha esattamente una carta Premio rimanente, questo attacco infligge 60 danni in più e il Pokémon attivo del tuo avversario viene confuso.",
			'pt-br': "Se o seu oponente tiver exatamente 1 carta de Prêmio restante, este ataque causará 60 pontos de dano a mais e o Pokémon Ativo do seu oponente ficará Confuso.",
			'de-de': "Wenn dein Gegner genau 1 verbleibende Preiskarte hat, fügt diese Attacke 60 Schadenspunkte mehr zu und das Aktive Pokémon deines Gegners ist jetzt verwirrt."
		},

		damage: "20+"
	}],

	weaknesses: [
		{
			type: "Metal",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "E",


	description: {
		'en-us': "Since Dedenne can't generate as much electricity on its own, it steals electricity from outlets or other electric Pokémon.",
	},

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 608739,
				tcgplayer: 263783
			}
		},
	],
}

export default card
