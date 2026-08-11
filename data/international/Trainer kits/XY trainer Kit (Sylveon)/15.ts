import { Card } from 'models/database/card'
import Set from '../XY trainer Kit (Sylveon)'

const card: Card = {
	dexId: [700],
	set: Set,

	name: {
		'en-us': "Sylveon",
		'fr-fr': "Nymphali",
		'es-es': "Sylveon",
		'it-it': "Sylveon",
		'pt-br': "Sylveon",
		'de-de': "Feelinara"
	},

	illustrator: "5ban Graphics",
	rarity: "None",
	category: "Pokemon",

	description: {
		'en-us': "It sends a soothing aura from its ribbonlike feelers to calm fights."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'en-us': "Disarming Voice",
			'fr-fr': "Voix Enjôleuse"
		},

		damage: 20,

		effect: {
			'en-us': "Your opponent’s Active Pokémon is now Confused.",
			'fr-fr': "Le Pokémon Actif de votre adversaire est maintenant Confus."
		}
	}, {
		name: {
			'en-us': "Fairy Wind",
			'fr-fr': "Vent Féérique"
		},

		damage: 60
	}],

	hp: 90,
	types: ["Fairy"],

	evolveFrom: {
		'en-us': "Eevee",
		'fr-fr': "Évoli",
		'es-es': "Eevee",
		'it-it': "Eevee",
		'pt-br': "Eevee",
		'de-de': "Evoli"
	},

	retreat: 1,

	weaknesses: [{
		type: "Metal",
		value: "×2"
	}],

	resistances: [{
		type: "Darkness",
		value: "-20"
	}],

	thirdParty: {
		tcgplayer: 97980
	}
}

export default card