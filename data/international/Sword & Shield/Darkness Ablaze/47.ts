import { Card } from 'models/database/card'
import Set from '../Darkness Ablaze'

const card: Card = {
	dexId: [584],

	name: {
		'en-us': "Vanilluxe",
		'fr-fr': "Sorbouboul",
		'es-es': "Vanilluxe",
		'it-it': "Vanilluxe",
		'pt-br': "Vanilluxe",
		'de-de': "Gelatwino"
	},

	illustrator: "kodama",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,
	hp: 150,

	types: [
		"Water",
	],

	evolveFrom: {
		'en-us': "Vanillish",
		'fr-fr': "Sorboul",
		'es-es': "Vanillish",
		'it-it': "Vanillish",
		'pt-br': "Vanillish",
		'de-de': "Gelatroppo"
	},

	abilities: [
		{
			type: "Ability",
			name: {
				'en-us': "Bitter Cold",
				'fr-fr': "Froid Mordant",
				'es-es': "Frío Intenso",
				'it-it': "Freddo Pungente",
				'pt-br': "Frio de Doer",
				'de-de': "Bitterkalt"
			},
			effect: {
				'en-us': "Once during your turn, if this Pokémon is in the Active Spot, you may flip a coin. If heads, your opponent's Active Pokémon is now Paralyzed.",
				'fr-fr': "Une fois pendant votre tour, si ce Pokémon est sur le Poste Actif, vous pouvez lancer une pièce. Si c'est face, le Pokémon Actif de votre adversaire est maintenant Paralysé.",
				'es-es': "Una vez durante tu turno, si este Pokémon está en el Puesto Activo, puedes lanzar 1 moneda. Si sale cara, el Pokémon Activo de tu rival pasa a estar Paralizado.",
				'it-it': "Una sola volta durante il tuo turno, se questo Pokémon è in posizione attiva, puoi lanciare una moneta. Se esce testa, il Pokémon attivo del tuo avversario viene paralizzato.",
				'pt-br': "Uma vez durante o seu turno, se este Pokémon estiver no Campo Ativo, você poderá jogar 1 moeda. Se sair cara, o Pokémon Ativo do seu oponente ficará Paralisado.",
				'de-de': "Einmal während deines Zuges, wenn dieses Pokémon in der Aktiven Position ist, kannst du 1 Münze werfen. Bei Kopf ist das Aktive Pokémon deines Gegners jetzt paralysiert."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Water",
				"Colorless",
			],
			name: {
				'en-us': "Frost Smash",
				'fr-fr': "Impact Glacial",
				'es-es': "Golpe Gélido",
				'it-it': "Gelocolpo",
				'pt-br': "Pancada Congelada",
				'de-de': "Frostschlag"
			},

			damage: 90,

		},
	],

	weaknesses: [
		{
			type: "Metal",
			value: "×2"
		},
	],

	retreat: 2,
	regulationMark: "D",


	stage: "Stage2",

	description: {
		'en-us': "When its anger reaches a breaking point, this Pokémon unleashes a fierce blizzard that freezes every creature around it, be they friend or foe."
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 483114,
				tcgplayer: 219351
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 483114,
				tcgplayer: 219351
			}
		},
	],
}

export default card
