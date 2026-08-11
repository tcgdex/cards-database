import { Card } from "models/database/card"
import Set from "../Crown Zenith"

const card: Card = {
	dexId: [905],
	set: Set,

	name: {
		'en-us': "Enamorus",
		'fr-fr': "Amovénus",
		'es-es': "Enamorus",
		'it-it': "Enamorus",
		'pt-br': "Enamorus",
		'de-de': "Cupidos"
	},

	illustrator: "Jiro Sasumo",
	rarity: "Rare",
	category: "Pokemon",
	hp: 120,
	types: ["Psychic"],
	stage: "Basic",

	attacks: [{
		cost: ["Psychic"],

		name: {
			'en-us': "Draining Kiss",
			'fr-fr': "Vampibaiser",
			'es-es': "Beso Drenaje",
			'it-it': "Assorbibacio",
			'pt-br': "Beijo Drenante",
			'de-de': "Diebeskuss"
		},

		effect: {
			'en-us': "Heal 20 damage from this Pokémon.",
			'fr-fr': "Soignez 20 dégâts de ce Pokémon.",
			'es-es': "Cura 20 puntos de daño a este Pokémon.",
			'it-it': "Cura questo Pokémon da 20 danni.",
			'pt-br': "Cure 20 pontos de dano deste Pokémon.",
			'de-de': "Heile 20 Schadenspunkte bei diesem Pokémon."
		},

		damage: 20
	}, {
		cost: ["Psychic", "Colorless", "Colorless"],

		name: {
			'en-us': "Loving Sympathy",
			'fr-fr': "Compassion Affectueuse",
			'es-es': "Compasión Amorosa",
			'it-it': "Empatia Amorosa",
			'pt-br': "Afeição Amorosa",
			'de-de': "Liebevolle Anteilnahme"
		},

		effect: {
			'en-us': "If you have the same number of cards in your hand as your opponent, this attack does 70 more damage.",
			'fr-fr': "Si vous avez le même nombre de cartes dans votre main que votre adversaire, cette attaque inflige 70 dégâts supplémentaires.",
			'es-es': "Si tienes la misma cantidad de cartas en tu mano que tu rival, este ataque hace 70 puntos de daño más.",
			'it-it': "Se hai lo stesso numero di carte in mano del tuo avversario, questo attacco infligge 70 danni in più.",
			'pt-br': "Se você tiver o mesmo número de cartas na sua mão do que seu oponente, este ataque causará 70 pontos de dano a mais.",
			'de-de': "Wenn du genauso viele Karten auf der Hand hast wie dein Gegner, fügt diese Attacke 70 Schadenspunkte mehr zu."
		},

		damage: "70+"
	}],

	weaknesses: [
		{
			type: "Metal",
			value: "×2",
		},
	],
	retreat: 2,
	regulationMark: "F",


	description: {
		'en-us': "When it flies to this land from across the sea, the bitter winter comes to an end. According to legend, this Pokémon's love gives rise to the budding of fresh life across Hisui.",
	},

	

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 691785,
				tcgplayer: 478189
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 691785,
				tcgplayer: 478189
			}
		},
	],
}

export default card
