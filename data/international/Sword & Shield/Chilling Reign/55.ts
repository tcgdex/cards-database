import { Card } from 'models/database/card'
import Set from '../Chilling Reign'

const card: Card = {
	dexId: [92],
	set: Set,

	name: {
		'en-us': "Gastly",
		'fr-fr': "Fantominus",
		'es-es': "Gastly",
		'it-it': "Gastly",
		'pt-br': "Gastly",
		'de-de': "Nebulak"
	},

	illustrator: "Motofumi Fujiwara",
	rarity: "Common",
	category: "Pokemon",
	hp: 50,
	types: ["Psychic"],

	attacks: [{
		name: {
			'en-us': "Sleep Pulse",
			'fr-fr': "Pouls Dodo",
			'es-es': "Pulso Soñoliento",
			'it-it': "Sonnopulsar",
			'pt-br': "Pulso Sonolento",
			'de-de': "Schlafimpuls"
		},

		effect: {
			'en-us': "Flip a coin. If heads, your opponent's Active Pokémon is now Asleep.",
			'fr-fr': "Lancez une pièce. Si c'est face, le Pokémon Actif de votre adversaire est maintenant Endormi.",
			'es-es': "Lanza 1 moneda. Si sale cara, el Pokémon Activo de tu rival pasa a estar Dormido.",
			'it-it': "Lancia una moneta. Se esce testa, il Pokémon attivo del tuo avversario viene addormentato.",
			'pt-br': "Jogue 1 moeda. Se sair cara, o Pokémon Ativo do seu oponente ficará Adormecido.",
			'de-de': "Wirf 1 Münze. Bei Kopf schläft das Aktive Pokémon deines Gegners jetzt."
		},

		damage: 10,
		cost: ["Psychic"]
	}],

	weaknesses: [{
		type: "Darkness",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "-30"
	}],

	retreat: 1,
	regulationMark: "E",


	stage: "Basic",

	description: {
		'en-us': "With its gas-like body, it can sneak into any place it desires. However, it can be blown away by wind."
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 567135,
				tcgplayer: 241714
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 567135,
				tcgplayer: 241714
			}
		},
	],
}

export default card
