import { Card } from 'models/database/card'
import Set from '../Darkness Ablaze'

const card: Card = {
	dexId: [637],

	name: {
		'en-us': "Volcarona",
		'fr-fr': "Pyrax",
		'es-es': "Volcarona",
		'it-it': "Volcarona",
		'pt-br': "Volcarona",
		'de-de': "Ramoth"
	},

	illustrator: "NC Empire",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,
	hp: 120,

	types: [
		"Fire",
	],

	evolveFrom: {
		'en-us': "Larvesta",
		'fr-fr': "Pyronille",
		'es-es': "Larvesta",
		'it-it': "Larvesta",
		'pt-br': "Larvesta",
		'de-de': "Ignivor"
	},

	attacks: [
		{
			cost: [
				"Fire",
			],
			name: {
				'en-us': "Cauterize",
				'fr-fr': "Cautérisation",
				'es-es': "Cauterizar",
				'it-it': "Cauterizzazione",
				'pt-br': "Cauterizar",
				'de-de': "Kauterisieren"
			},
			effect: {
				'en-us': "If your opponent's Active Pokémon has no damage counters on it before this attack does damage, this attack does nothing.",
				'fr-fr': "Si le Pokémon Actif de votre adversaire n'a aucun marqueur de dégâts avant que cette attaque n'inflige des dégâts, cette attaque ne fait rien.",
				'es-es': "Si el Pokémon Activo de tu rival no tiene ningún contador de daño sobre él antes de que este ataque inflija daño, este ataque no hace nada.",
				'it-it': "Se il Pokémon attivo del tuo avversario non ha segnalini danno prima che questo attacco infligga danni, questo attacco non ha effetto.",
				'pt-br': "Se o Pokémon Ativo do seu oponente não tiver nenhum contador de dano nele antes deste ataque causar dano, este ataque não fará nada.",
				'de-de': "Wenn auf dem Aktiven Pokémon deines Gegners keine Schadensmarken liegen, bevor diese Attacke Schaden zufügt, hat diese Attacke keine Auswirkungen."
			},
			damage: 80,

		},
		{
			cost: [
				"Fire",
				"Fire",
				"Colorless",
			],
			name: {
				'en-us': "Fire Wing",
				'fr-fr': "Aile de Feu",
				'es-es': "Ala Ígnea",
				'it-it': "Alafiamma",
				'pt-br': "Asa de Fogo",
				'de-de': "Feuerflügel"
			},

			damage: 110,

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],

	retreat: 1,
	regulationMark: "D",


	stage: "Stage1",

	description: {
		'en-us': "According to legends, it was hatched from a flaming cocoon to save people and Pokémon that were suffering from the cold."
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 483024,
				tcgplayer: 219244
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 483024,
				tcgplayer: 219244
			}
		},
	],
}

export default card
