import { Card } from 'models/database/card'
import Set from '../Shining Fates Shiny Vault'

const card: Card = {
	dexId: [854],
	set: Set,

	name: {
		'fr-fr': "Théffroi",
		'en-us': "Sinistea",
		'es-es': "Sinistea",
		'it-it': "Sinistea",
		'pt-br': "Sinistea",
		'de-de': "Fatalitee"
	},

	illustrator: "MAHOU",
	rarity: "Shiny rare",
	category: "Pokemon",
	hp: 30,
	types: ["Psychic"],

	attacks: [{
		name: {
			'fr-fr': "Chute Furtive",
			'en-us': "Furtive Drop",
			'es-es': "Caída Furtiva",
			'it-it': "Lascito Furtivo",
			'pt-br': "Gota Furtiva",
			'de-de': "Hinterhältiger Fall"
		},

		effect: {
			'fr-fr': "Placez 2 marqueurs de dégâts sur le Pokémon Actif de votre adversaire.",
			'en-us': "Put 2 damage counters on your opponent's Active Pokémon.",
			'es-es': "Pon 2 contadores de daño en el Pokémon Activo de tu rival.",
			'it-it': "Metti due segnalini danno sul Pokémon attivo del tuo avversario.",
			'pt-br': "Coloque 2 contadores de dano no Pokémon Ativo do seu oponente.",
			'de-de': "Lege 2 Schadensmarken auf das Aktive Pokémon deines Gegners."
		},

		cost: ["Colorless"]
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
	regulationMark: "D",
	stage: "Basic",

	description: {
		'en-us': "This Pokémon is said to have been born when a lonely spirit possessed a cold, leftover cup of tea."
	},

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 539648,
				tcgplayer: 232415
			}
		},
	],
}

export default card
