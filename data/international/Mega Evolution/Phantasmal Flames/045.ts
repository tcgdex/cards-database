import { Card } from "models/database/card"
import Set from "../Phantasmal Flames"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Zacian",
		'fr-fr': "Zacian",
		'es-es': "Zacian",
		'es-mx': "Zacian",
		'de-de': "Zacian",
		'it-it': "Zacian",
		'pt-br': "Zacian"
	},

	rarity: "Rare",
	category: "Pokemon",

	dexId: [888],
	hp: 130,
	types: ["Psychic"],
	stage: "Basic",

	attacks: [{
		cost: ["Psychic", "Colorless"],

		name: {
			'en-us': "Limit Break",
			'fr-fr': "Brèche Frontière",
			'es-es': "Golpe Límite",
			'es-mx': "Ruptura de Límites",
			'de-de': "Limitbruch",
			'it-it': "Frangilimite",
			'pt-br': "Limite Intenso"
		},

		effect: {
			'en-us': "If your opponent has 3 or fewer Prize cards remaining, this attack does 90 more damage.",
			'fr-fr': "S'il reste 3 cartes Récompense ou moins à votre adversaire, cette attaque inflige 90 dégâts supplémentaires.",
			'es-es': "Si a tu rival le quedan 3 cartas de Premio o menos, este ataque hace 90 puntos de daño más.",
			'es-mx': "Si a tu rival le quedan 3 cartas de Premio o menos, este ataque hace 90 puntos de daño más.",
			'de-de': "Wenn dein Gegner 3 oder weniger verbleibende Preiskarten hat, fügt diese Attacke 90 Schadenspunkte mehr zu.",
			'it-it': "Se il tuo avversario ha tre o meno carte Premio rimanenti, questo attacco infligge 90 danni in più.",
			'pt-br': "Se o seu oponente tiver 3 ou menos cartas de Prêmio restantes, este ataque causará 90 pontos de dano a mais."
		},

		damage: "50+"
	}],

	weaknesses: [
		{
			type: "Metal",
			value: "×2",
		},
	],
	retreat: 2,
	regulationMark: "I",

	description: {
		'en-us': "Able to cut down anything with a single strike, it became known as the Fairy King's Sword, and it inspired awe in friend and foe alike.",
	},

	illustrator: "kawayoo",
	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 858507
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 857620,
				tcgplayer: 662244,
				cardtrader: 356828
			}
		},
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 857620,
				tcgplayer: 662244,
				cardtrader: 356828
			}
		},
	],	
}

export default card
