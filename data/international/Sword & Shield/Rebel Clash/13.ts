import { Card } from 'models/database/card'
import Set from '../Rebel Clash'

const card: Card = {
	dexId: [460],

	name: {
		'en-us': "Abomasnow",
		'fr-fr': "Blizzaroi",
		'es-es': "Abomasnow",
		'it-it': "Abomasnow",
		'pt-br': "Abomasnow",
		'de-de': "Rexblisar"
	},

	illustrator: "Kazuma Koda",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	evolveFrom: {
		'en-us': "Snover",
		'fr-fr': "Blizzi",
		'es-es': "Snover",
		'it-it': "Snover",
		'pt-br': "Snover",
		'de-de': "Shnebedeck"
	},

	attacks: [
		{
			cost: [
				"Grass",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Soothing Scent",
				'fr-fr': "Senteur Apaisante",
				'es-es': "Aroma Sedante",
				'it-it': "Aroma Calmante",
				'pt-br': "Odor Calmante",
				'de-de': "Beruhigender Duft"
			},
			effect: {
				'en-us': "Your opponent's Active Pokémon is now Asleep.",
				'fr-fr': "Le Pokémon Actif de votre adversaire est maintenant Endormi.",
				'es-es': "El Pokémon Activo de tu rival pasa a estar Dormido.",
				'it-it': "Il Pokémon attivo del tuo avversario viene addormentato.",
				'pt-br': "O Pokémon Ativo do seu oponente agora está Adormecido.",
				'de-de': "Das Aktive Pokémon deines Gegners schläft jetzt."
			},
			damage: 80,

		},
		{
			cost: [
				"Grass",
				"Grass",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Megaton Lariat",
				'fr-fr': "Lasso Titanesque",
				'es-es': "Lazo Megatón",
				'it-it': "Lazo Megatonico",
				'pt-br': "Lariat Megaton",
				'de-de': "Megatonnenlasso"
			},

			damage: 140,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	retreat: 3,
	hp: 140,
	types: ["Grass"],
	regulationMark: "D",


	stage: "Stage1",

	description: {
		'en-us': "If it sees any packs of Darumaka going after Snover, it chases them off, swinging its sizable arms like hammers."
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 457458,
				tcgplayer: 213083
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 457458,
				tcgplayer: 213083
			}
		},
	],
}

export default card
