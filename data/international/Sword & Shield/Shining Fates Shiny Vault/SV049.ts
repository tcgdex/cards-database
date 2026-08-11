import { Card } from 'models/database/card'
import Set from '../Shining Fates Shiny Vault'

const card: Card = {
	dexId: [222],
	set: Set,

	name: {
		'fr-fr': "Corayon de Galar",
		'en-us': "Galarian Corsola",
		'es-es': "Corsola de Galar",
		'it-it': "Corsola di Galar",
		'pt-br': "Corsola de Galar",
		'de-de': "Galar-Corasonn"
	},

	illustrator: "Mizue",
	rarity: "Shiny rare",
	category: "Pokemon",
	hp: 80,
	types: ["Psychic"],

	attacks: [{
		name: {
			'fr-fr': "Chute Maudite",
			'en-us': "Cursed Drop",
			'es-es': "Caída Maldita",
			'it-it': "Caduta Maledetta",
			'pt-br': "Queda Amaldiçoada",
			'de-de': "Verfluchter Fall"
		},

		effect: {
			'fr-fr': "Placez 3 marqueurs de dégâts sur les Pokémon de votre adversaire comme il vous plaît.",
			'en-us': "Put 3 damage counters on your opponent's Pokémon in any way you like.",
			'es-es': "Pon 3 contadores de daño en los Pokémon de tu rival de la manera que desees.",
			'it-it': "Metti tre segnalini danno sui Pokémon del tuo avversario nel modo che preferisci.",
			'pt-br': "Coloque 3 contadores de dano nos Pokémon do seu oponente como desejar.",
			'de-de': "Lege 3 Schadensmarken beliebig auf die Pokémon deines Gegners."
		},

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

	retreat: 2,
	regulationMark: "D",
	stage: "Basic",

	description: {
		'en-us': "Watch your step when wandering areas oceans once covered. What looks like a stone could be this Pokémon, and it will curse you if you kick it."
	},

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 539628,
				tcgplayer: 232411
			}
		},
	],
}

export default card
