import { Card } from "models/database/card"
import Set from "../Obsidian Flames"

const card: Card = {
	dexId: [972],
	set: Set,

	name: {
		'fr-fr': "Tomberro",
		'en-us': "Houndstone",
		'es-es': "Houndstone",
		'it-it': "Houndstone",
		'pt-br': "Houndstone",
		'de-de': "Friedwuff"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 140,
	types: ["Psychic"],
	evolveFrom: {
		'fr-fr': "Toutombe",
		'en-us': "Greavard",
		'es-es': "Greavard",
		'it-it': "Greavard",
		'pt-br': "Greavard",
		'de-de': "Gruff"
	},
	stage: "Stage1",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			'fr-fr': "Ruade",
			'en-us': "Rear Kick",
			'es-es': "Patada Trasera",
			'it-it': "Retrocalcio",
			'pt-br': "Chute Traseiro",
			'de-de': "Rückwärtskick"
		},

		damage: 30
	}, {
		cost: ["Psychic", "Colorless", "Colorless"],

		name: {
			'fr-fr': "Hy-Paire Féroce",
			'en-us': "Two Four-ocious",
			'es-es': "Ferocidad Dos-Cuatro",
			'it-it': "Grrr-an Ferocia",
			'pt-br': "Duas Quatrocidades",
			'de-de': "Vierzweifelnder Biss"
		},

		effect: {
			'fr-fr': "S'il reste exactement 2 ou 4 cartes Récompense à votre adversaire, cette attaque inflige 120 dégâts supplémentaires.",
			'en-us': "If your opponent has exactly 2 or 4 Prize cards remaining, this attack does 120 more damage.",
			'es-es': "Si a tu rival le quedan exactamente 2 o 4 cartas de Premio, este ataque hace 120 puntos de daño más.",
			'it-it': "Se il tuo avversario ha esattamente due o quattro carte Premio rimanenti, questo attacco infligge 120 danni in più.",
			'pt-br': "Se o seu oponente tiver exatamente 2 ou 4 cartas de Prêmio restantes, este ataque causará 120 pontos de dano a mais.",
			'de-de': "Wenn dein Gegner genau 2 oder 4 verbleibende Preiskarten hat, fügt diese Attacke 120 Schadenspunkte mehr zu."
		},

		damage: "80+"
	}],

	weaknesses: [
		{
			type: "Darkness",
			value: "×2",
		},
	],
	resistances: [
		{
			type: "Fighting",
			value: "-30",
		},
	],
	retreat: 3,
	regulationMark: "G",

	description: {
		'en-us': "Houndstone spends most of its time sleeping in graveyards. Among all the dog Pokémon, this one is most loyal to its master.",
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 725181,
				tcgplayer: 509953,
				cardtrader: 255786
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 725181,
				tcgplayer: 509953,
				cardtrader: 255786
			}
		},
	],

	illustrator: "Saya Tsuruta",

	
}

export default card
