import { Card } from 'models/database/card'
import Set from '../Shining Fates Shiny Vault'

const card: Card = {
	dexId: [852],
	set: Set,

	name: {
		'fr-fr': "Poulpaf",
		'en-us': "Clobbopus",
		'es-es': "Clobbopus",
		'it-it': "Clobbopus",
		'pt-br': "Clobbopus",
		'de-de': "Klopptopus"
	},

	illustrator: "Kyoko Umemoto",
	rarity: "Shiny rare",
	category: "Pokemon",
	hp: 60,
	types: ["Fighting"],

	attacks: [{
		name: {
			'fr-fr': "Étreinte",
			'en-us': "Bind",
			'es-es': "Atadura",
			'it-it': "Legatutto",
			'pt-br': "Ligação",
			'de-de': "Klammergriff"
		},

		effect: {
			'fr-fr': "Lancez une pièce. Si c'est face, le Pokémon Actif de votre adversaire est maintenant Paralysé.",
			'en-us': "Flip a coin. If heads, your opponent's Active Pokémon is now Paralyzed.",
			'es-es': "Lanza 1 moneda. Si sale cara, el Pokémon Activo de tu rival pasa a estar Paralizado.",
			'it-it': "Lancia una moneta. Se esce testa, il Pokémon attivo del tuo avversario viene paralizzato.",
			'pt-br': "Jogue 1 moeda. Se sair cara, o Pokémon Ativo do seu oponente ficará Paralisado.",
			'de-de': "Wirf 1 Münze. Bei Kopf ist das Aktive Pokémon deines Gegners jetzt paralysiert."
		},

		damage: 20,
		cost: ["Fighting"]
	}],

	weaknesses: [{
		type: "Psychic",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "D",
	stage: "Basic",

	description: {
		'en-us': "It's very curious, but its means of investigating things is to try to punch them with its tentacles. The search for food is what brings it onto land."
	},

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 539748,
				tcgplayer: 232444
			}
		},
	],
}

export default card
