import { Card } from "models/database/card"
import Set from "../Fusion Strike"

const card: Card = {
	dexId: [870],
	set: Set,

	name: {
		'en-us': "Falinks",
		'fr-fr': "Hexadron",
		'es-es': "Falinks",
		'it-it': "Falinks",
		'pt-br': "Falinks",
		'de-de': "Legios"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 90,
	types: ["Fighting"],
	stage: "Basic",
	weaknesses: [
		{
			type: "Psychic",
			value: "×2",
		},
	],
	retreat: 2,
	regulationMark: "E",
	illustrator: "Akira Komayama",

	description: {
		'en-us': "The six of them work together as one Pokémon. Teamwork is also their battle strategy, and they constantly change their formation as they fight."
	},

	attacks: [{
		cost: ["Fighting"],

		name: {
			'en-us': "Headbutt",
			'fr-fr': "Coup d'Boule",
			'de-de': "Kopfnuss",
			'es-es': "Golpe Cabeza",
			'pt-br': "Cabeçada",
			'it-it': "Bottintesta"
		},

		damage: 30
	}, {
		cost: ["Fighting", "Colorless", "Colorless"],

		name: {
			'en-us': "Cliff Edge Formation",
			'fr-fr': "Escadron Ultime",
			'de-de': "Klippenrandformation",
			'es-es': "Formación Peligrosa",
			'pt-br': "Formação Penhasco",
			'it-it': "Schieramento Dirupo"
		},

		damage: "60+",

		effect: {
			'en-us': "If your opponent has exactly 1 Prize card remaining, this attack does 160 more damage.",
			'fr-fr': "S'il reste exactement une carte Récompense à votre adversaire, cette attaque inflige 160 dégâts supplémentaires.",
			'de-de': "Wenn dein Gegner genau 1 verbleibende Preiskarte hat, fügt diese Attacke 160 Schadenspunkte mehr zu.",
			'es-es': "Si a tu rival le queda exactamente 1 carta de Premio, este ataque hace 160 puntos de daño más.",
			'pt-br': "Se o seu oponente tiver exatamente 1 carta de Prêmio restante, este ataque causará 160 pontos de dano a mais.",
			'it-it': "Se il tuo avversario ha esattamente una carta Premio rimanente, questo attacco infligge 160 danni in più."
		}
	}],


	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 582782,
				tcgplayer: 253368
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 582782,
				tcgplayer: 253368
			}
		},
	],
}

export default card
