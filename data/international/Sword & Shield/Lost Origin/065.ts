import { Card } from "models/database/card"
import Set from "../Lost Origin"

const card: Card = {
	dexId: [93],
	set: Set,

	name: {
		'en-us': "Haunter",
		'fr-fr': "Spectrum",
		'es-es': "Haunter",
		'it-it': "Haunter",
		'pt-br': "Haunter",
		'de-de': "Alpollo"
	},

	illustrator: "Kouki Saitou",
	rarity: "Uncommon",
	category: "Pokemon",
	hp: 70,
	types: ["Psychic"],

	evolveFrom: {
		'en-us': "Gastly",
		'fr-fr': "Fantominus",
		'es-es': "Gastly",
		'it-it': "Gastly",
		'pt-br': "Gastly",
		'de-de': "Nebulak"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Psychic"],

		name: {
			'en-us': "Cursed Drop",
			'fr-fr': "Chute Maudite",
			'es-es': "Caída Maldita",
			'it-it': "Caduta Maledetta",
			'pt-br': "Queda Amaldiçoada",
			'de-de': "Verfluchter Fall"
		},

		effect: {
			'en-us': "Put 3 damage counters on your opponent's Pokémon in any way you like.",
			'fr-fr': "Placez 3 marqueurs de dégâts sur les Pokémon de votre adversaire comme il vous plaît.",
			'es-es': "Pon 3 contadores de daño en los Pokémon de tu rival de la manera que desees.",
			'it-it': "Metti tre segnalini danno sui Pokémon del tuo avversario nel modo che preferisci.",
			'pt-br': "Coloque 3 contadores de dano nos Pokémon do seu oponente como desejar.",
			'de-de': "Lege 3 Schadensmarken beliebig auf die Pokémon deines Gegners."
		}
	}],

	retreat: 1,
	regulationMark: "F",


	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 674074,
				tcgplayer: 283939
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 674074,
				tcgplayer: 283939
			}
		},
	],
}

export default card
