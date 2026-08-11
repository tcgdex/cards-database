import { Card } from 'models/database/card'
import Set from '../Celebrations'

const card: Card = {
	set: Set,


	name: {
		'en-us': "Yveltal",
		'fr-fr': "Yveltal",
		'es-es': "Yveltal",
		'it-it': "Yveltal",
		'pt-br': "Yveltal",
		'de-de': "Yveltal"
	},

	rarity: "Rare",
	category: "Pokemon",
	types: ["Darkness"],
	illustrator: "AKIRA EGAWA",
	hp: 120,
	stage: "Basic",

	attacks: [{
		name: {
			'en-us': "Cry of Destruction",
			'fr-fr': "Cri d'Annihilation",
			'es-es': "Alaridos de Destrucción",
			'it-it': "Grido della Distruzione",
			'pt-br': "Grito da Destruição",
			'de-de': "Ruf der Zerstörung"
		},

		effect: {
			'en-us': "Discard up to 3 Special Energy from your opponent's Pokémon.",
			'fr-fr': "Défaussez jusqu'à 3 Énergies spéciales des Pokémon de votre adversaire.",
			'es-es': "Descarta hasta 3 Energías Especiales de los Pokémon de tu rival.",
			'it-it': "Scarta fino a tre Energie speciali dai Pokémon del tuo avversario.",
			'pt-br': "Descarte até 3 Energias Especiais dos Pokémon do seu oponente.",
			'de-de': "Lege bis zu 3 Spezial-Energien von Pokémon deines Gegners auf seinen Ablagestapel."
		},

		cost: ["Colorless", "Colorless"]
	}, {
		name: {
			'en-us': "Dark Feather",
			'fr-fr': "Plume Ténébreuse",
			'es-es': "Pluma Oscura",
			'it-it': "Piuma Oscura",
			'pt-br': "Pena Sombria",
			'de-de': "Dunkelfeder"
		},

		damage: 100,
		cost: ["Darkness", "Colorless", "Colorless"]
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
	regulationMark: "E",

	description: {
		'en-us': "When its life comes to an end, it absorbs the life energy of every living thing and turns into a cocoon once more."
	},

	dexId: [717],

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 576764,
				tcgplayer: 250315
			}
		},
	],
}

export default card
