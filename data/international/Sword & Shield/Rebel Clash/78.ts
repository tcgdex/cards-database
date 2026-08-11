import { Card } from 'models/database/card'
import Set from '../Rebel Clash'

const card: Card = {
	name: {
		'en-us': "Galarian Corsola",
		'fr-fr': "Corayon de Galar",
		'es-es': "Corsola de Galar",
		'it-it': "Corsola di Galar",
		'pt-br': "Corsola de Galar",
		'de-de': "Galar-Corasonn"
	},

	illustrator: "Mitsuhiro Arita",
	rarity: "Common",
	category: "Pokemon",
	dexId: [222],
	set: Set,

	attacks: [
		{
			cost: [
				"Psychic",
			],
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
			},

		},
	],

	weaknesses: [
		{
			type: "Darkness",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Fighting",
			value: "-30"
		},
	],

	retreat: 2,
	hp: 80,
	types: ["Psychic"],
	regulationMark: "D",


	stage: "Basic",

	description: {
		'en-us': "Watch your step when wandering areas oceans once covered. What looks like a stone could be this Pokémon, and it will curse you if you kick it."
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 457808,
				tcgplayer: 213164
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 457808,
				tcgplayer: 213164
			}
		},
	],
}

export default card
