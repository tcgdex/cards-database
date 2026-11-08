import { Card } from "models/database/card"
import Set from "../Brilliant Stars"

const card: Card = {
	dexId: [355],
	set: Set,

	name: {
		'en-us': "Duskull",
		'fr-fr': "Skelénox",
		'es-es': "Duskull",
		'it-it': "Duskull",
		'pt-br': "Duskull",
		'de-de': "Zwirrlicht"
	},

	illustrator: "SATOSHI NAKAI",
	rarity: "Common",
	category: "Pokemon",
	hp: 60,
	types: ["Psychic"],
	stage: "Basic",

	attacks: [{
		cost: ["Psychic"],

		name: {
			'en-us': "Perplex",
			'fr-fr': "Affolement",
			'es-es': "Desconcierto",
			'it-it': "Sconcerto",
			'pt-br': "Perplexo",
			'de-de': "Perplex"
		},

		effect: {
			'en-us': "Flip a coin. If heads, your opponent's Active Pokémon is now Confused.",
			'fr-fr': "Lancez une pièce. Si c'est face, le Pokémon Actif de votre adversaire est maintenant Confus.",
			'es-es': "Lanza 1 moneda. Si sale cara, el Pokémon Activo de tu rival pasa a estar Confundido.",
			'it-it': "Lancia una moneta. Se esce testa, il Pokémon attivo del tuo avversario viene confuso.",
			'pt-br': "Jogue 1 moeda. Se sair cara, o Pokémon Ativo do seu oponente ficará Confuso.",
			'de-de': "Wirf 1 Münze. Bei Kopf ist das Aktive Pokémon deines Gegners jetzt verwirrt."
		},

		damage: 10
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
	retreat: 1,
	regulationMark: "F",


	description: {
		'en-us': "If it finds bad children who won't listen to their parents, it will spirit them away—or so it's said.",
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 608510,
				tcgplayer: 263776
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 608510,
				tcgplayer: 263776
			}
		},
	],
}

export default card
