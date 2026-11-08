import { Card } from 'models/database/card'
import Set from '../Shining Fates'

const card: Card = {
	dexId: [132],
	set: Set,

	name: {
		'fr-fr': "Métamorph VMAX",
		'en-us': "Ditto VMAX",
		'es-es': "Ditto VMAX",
		'it-it': "Ditto VMAX",
		'pt-br': "Ditto VMAX",
		'de-de': "Ditto VMAX"
	},

	illustrator: "PLANETA Tsuji",
	rarity: "Holo Rare VMAX",
	category: "Pokemon",
	hp: 320,
	types: ["Colorless"],

	evolveFrom: {
		'fr-fr': "Métamorph-V",
		'en-us': "Ditto V"
	},

	attacks: [{
		name: {
			'fr-fr': "Morphomax",
			'en-us': "Max Transform",
			'es-es': "Maxitransformación",
			'it-it': "Dynatrasformazione",
			'pt-br': "Transformação Max",
			'de-de': "Dyna-Wandler"
		},

		effect: {
			'fr-fr': "Choisissez l'une des attaques du Pokémon Actif de votre adversaire et utilisez-la en tant que cette attaque.",
			'en-us': "Choose 1 of your opponent's Active Pokémon's attacks and use it as this attack.",
			'es-es': "Elige 1 de los ataques del Pokémon Activo de tu rival y úsalo para este ataque.",
			'it-it': "Scegli un attacco del Pokémon attivo del tuo avversario e usalo al posto di questo attacco.",
			'pt-br': "Escolha 1 dos ataques do Pokémon Ativo do seu oponente e use-o como este ataque.",
			'de-de': "Wähle 1 Attacke des Aktiven Pokémon deines Gegners und setze sie als diese Attacke ein."
		},

		cost: ["Colorless", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 3,
	regulationMark: "D",


	stage: "VMAX",

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 539278,
				tcgplayer: 232526
			}
		},
	],
}

export default card
