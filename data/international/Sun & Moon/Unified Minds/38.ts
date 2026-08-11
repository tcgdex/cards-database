import { Card } from 'models/database/card'
import Set from '../Unified Minds'

const card: Card = {
	name: {
		'en-us': "Froslass",
		'fr-fr': "Momartik",
		'es-es': "Froslass",
		'it-it': "Froslass",
		'pt-br': "Froslass",
		'de-de': "Frosdedje"
	},

	illustrator: "Mizue",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		478,
	],

	hp: 80,

	types: [
		"Water",
	],

	evolveFrom: {
		'en-us': "Snorunt",
		'fr-fr': "Stalgamin",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Water",
			],
			name: {
				'en-us': "Spiteful Sigh",
				'fr-fr': "Souffle Rancunier",
				'es-es': "Suspiro Malévolo",
				'it-it': "Soffio Dispettoso",
				'pt-br': "Suspiro Rancoroso",
				'de-de': "Boshafter Seufzer"
			},
			effect: {
				'en-us': "Put up to 7 damage counters on this Pokémon. This attack does 20 damage for each damage counter you placed in this way.",
				'fr-fr': "Placez jusqu’à 7 marqueurs de dégâts sur ce Pokémon. Cette attaque inflige 20 dégâts pour chaque marqueur de dégâts placé de cette façon.",
				'es-es': "Pon hasta 7 contadores de daño en este Pokémon. Este ataque hace 20 puntos de daño por cada contador de daño que hayas colocado de esta manera.",
				'it-it': "Metti fino a sette segnalini danno su questo Pokémon. Questo attacco infligge 20 danni per ogni segnalino danno che hai messo in questo modo.",
				'pt-br': "Coloque até 7 contadores de dano neste Pokémon. Este ataque causa 20 pontos de dano para cada contador de dano colocado desta forma.",
				'de-de': "Lege bis zu 7 Schadensmarken auf dieses Pokémon. Diese Attacke fügt 20 Schadenspunkte mal der Anzahl der auf diese Weise platzierten Schadensmarken zu."
			},
			damage: "20×",

		},
		{
			cost: [
				"Water",
			],
			name: {
				'en-us': "Icy Wind",
				'fr-fr': "Vent Glace",
				'es-es': "Viento Hielo",
				'it-it': "Ventogelato",
				'pt-br': "Vento Congelante",
				'de-de': "Eissturm"
			},
			effect: {
				'en-us': "Your opponent’s Active Pokémon is now Asleep.",
				'fr-fr': "Le Pokémon Actif de votre adversaire est maintenant Endormi.",
				'es-es': "El Pokémon Activo de tu rival pasa a estar Dormido.",
				'it-it': "Il Pokémon attivo del tuo avversario viene addormentato.",
				'pt-br': "O Pokémon Ativo do seu oponente agora está Adormecido.",
				'de-de': "Das Aktive Pokémon deines Gegners schläft jetzt."
			},
			damage: 40,

		},
	],

	weaknesses: [
		{
			type: "Metal",
			value: "×2"
		},
	],

	retreat: 1,

	description: {
		'en-us': "It freezes hikers who have come to climb snowy mountains and carries them back to its home. It only goes after men it thinks are handsome.",
	},

	thirdParty: {
		cardmarket: 388017,
		tcgplayer: 194959
	}
}

export default card
