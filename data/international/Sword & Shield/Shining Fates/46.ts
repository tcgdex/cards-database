import { Card } from 'models/database/card'
import Set from '../Shining Fates'

const card: Card = {
	dexId: [717],
	set: Set,

	name: {
		'fr-fr': "Yveltal",
		'en-us': "Yveltal",
		'es-es': "Yveltal",
		'it-it': "Yveltal",
		'pt-br': "Yveltal",
		'de-de': "Yveltal"
	},

	illustrator: "Hasuno",
	rarity: "Amazing Rare",
	category: "Pokemon",
	hp: 110,
	types: ["Darkness"],

	attacks: [{
		name: {
			'fr-fr': "Annihilation Magnifique",
			'en-us': "Amazing Destruction",
			'es-es': "Destrucción Increíble",
			'it-it': "Distruzione Policroma",
			'pt-br': "Destruição Incrível",
			'de-de': "Atemberaubende Zerstörung"
		},

		effect: {
			'fr-fr': "Le Pokémon Actif de votre adversaire est mis K.O.",
			'en-us': "Your opponent's Active Pokémon is Knocked Out.",
			'es-es': "El Pokémon Activo de tu rival queda Fuera de Combate.",
			'it-it': "Il Pokémon attivo del tuo avversario viene messo KO.",
			'pt-br': "O Pokémon Ativo do seu oponente é Nocauteado.",
			'de-de': "Das Aktive Pokémon deines Gegners ist kampfunfähig."
		},

		cost: ["Fire", "Psychic", "Darkness", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "-30"
	}],

	retreat: 2,
	regulationMark: "D",


	stage: "Basic",

	description: {
		'en-us': "When its life comes to an end, it absorbs the life energy of every living thing and turns into a cocoon once more."
	},

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 539253,
				tcgplayer: 232519
			}
		},
	],
}

export default card
