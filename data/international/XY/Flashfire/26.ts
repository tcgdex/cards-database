import { Card } from 'models/database/card'
import Set from '../Flashfire'

const card: Card = {
	name: {
		'en-us': "Walrein",
		'fr-fr': "Kaimorse",
		'es-es': "Walrein",
		'it-it': "Walrein",
		'pt-br': "Walrein",
		'de-de': "Walraisa"
	},

	illustrator: "Naoki Saito",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		365,
	],

	hp: 150,

	types: [
		"Water",
	],

	evolveFrom: {
		'en-us': "Sealeo",
		'fr-fr': "Phogleur",
		'es-es': "Sealeo",
		'it-it': "Sealeo",
		'pt-br': "Sealeo",
		'de-de': "Seejong"
	},

	stage: "Stage2",

	attacks: [
		{
			cost: [
				"Water",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Powder Snow",
				'fr-fr': "Poudreuse",
				'es-es': "Nieve Polvo",
				'it-it': "Polneve",
				'pt-br': "Neve em Pó",
				'de-de': "Pulverschnee"
			},
			effect: {
				'en-us': "Your opponent's Active Pokémon is now Asleep.",
				'fr-fr': "Le Pokémon Actif de votre adversaire est maintenant Endormi.",
				'es-es': "El Pokémon Activo de tu rival pasa a estar Dormido.",
				'it-it': "Il Pokémon attivo del tuo avversario viene addormentato.",
				'pt-br': "O Pokémon Ativo do seu oponente agora está Adormecido.",
				'de-de': "Das Aktive Pokémon deines Gegners schläft jetzt."
			},
			damage: 60,

		},
		{
			cost: [
				"Water",
				"Water",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Big Tusk",
				'fr-fr': "Défenses Puissantes",
				'es-es': "Gran Colmillo",
				'it-it': "Zannagrande",
				'pt-br': "Presa Grande",
				'de-de': "Großer Stoßzahn"
			},
			effect: {
				'en-us': "This attack does 120 damage minus 10 damage for each damage counter on this Pokémon.",
				'fr-fr': "Cette attaque inflige 120 dégâts moins 10 dégâts pour chaque marqueur de dégâts placé sur ce Pokémon.",
				'es-es': "Este ataque hace 120 puntos de daño menos 10 puntos de daño por cada contador de daño en este Pokémon.",
				'it-it': "Questo attacco infligge 120 danni meno 10 per ogni segnalino danno presente su questo Pokémon.",
				'pt-br': "Este ataque causa 120 de danos menos 10 de danos para cada contador de danos neste Pokémon.",
				'de-de': "Dieser Angriff fügt 120 Schadenspunkte minus 10 Schadenspunkte für jede Schadensmarke auf diesem Pokémon zu."
			},
			damage: "120-",

		},
	],

	weaknesses: [
		{
			type: "Metal",
			value: "×2"
		},
	],

	retreat: 4,

	description: {
		'en-us': "It shatters ice with its big tusks. Its thick blubber repels not only the cold, but also enemy attacks.",
	},

	thirdParty: {
		cardmarket: 281509,
		tcgplayer: 91159
	}
}

export default card
