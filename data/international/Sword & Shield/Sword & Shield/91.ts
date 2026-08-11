import { Card } from 'models/database/card'
import Set from '../Sword & Shield'

const card: Card = {
	name: {
		'en-us': "Indeedee V",
		'fr-fr': "Wimessir V",
		'es-es': "Indeedee V",
		'it-it': "Indeedee V",
		'pt-br': "Indeedee V",
		'de-de': "Servol V"
	},

	illustrator: "5ban Graphics",
	rarity: "Holo Rare V",
	category: "Pokemon",
	set: Set,
	hp: 180,

	types: [
		"Psychic",
	],

	abilities: [
		{
			type: "Ability",
			name: {
				'en-us': "Watch Over",
				'fr-fr': "Veille",
				'es-es': "Cuidados",
				'it-it': "Cura Protettiva",
				'pt-br': "Cuidar",
				'de-de': "Obhut"
			},
			effect: {
				'en-us': "Once during your turn, you may heal 20 damage from your Active Pokémon.",
				'fr-fr': "Une fois pendant votre tour, vous pouvez soigner 20 dégâts de votre Pokémon Actif.",
				'es-es': "Una vez durante tu turno, puedes curar 20 puntos de daño a tu Pokémon Activo.",
				'it-it': "Una sola volta durante il tuo turno, puoi curare il tuo Pokémon attivo da 20 danni.",
				'pt-br': "Uma vez durante o seu turno, você poderá curar 20 pontos de dano do seu Pokémon Ativo.",
				'de-de': "Einmal während deines Zuges kannst du 20 Schadenspunkte bei deinem Aktiven Pokémon heilen."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Psychic",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Psychic",
				'fr-fr': "Psyko",
				'es-es': "Psíquico",
				'it-it': "Psichico",
				'pt-br': "Psíquico",
				'de-de': "Psychokinese"
			},
			effect: {
				'en-us': "This attack does 60 more damage for each Energy attached to your opponent's Active Pokémon.",
				'fr-fr': "Cette attaque inflige 60 dégâts supplémentaires pour chaque Énergie attachée au Pokémon Actif de votre adversaire.",
				'es-es': "Este ataque hace 60 puntos de daño más por cada Energía unida al Pokémon Activo de tu rival.",
				'it-it': "Questo attacco infligge 60 danni in più per ogni Energia assegnata al Pokémon attivo del tuo avversario.",
				'pt-br': "Este ataque causa 60 pontos de dano a mais para cada Energia ligada ao Pokémon Ativo do seu oponente.",
				'de-de': "Diese Attacke fügt für jede an das Aktive Pokémon deines Gegners angelegte Energie 60 Schadenspunkte mehr zu."
			},
			damage: "10+",

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
	regulationMark: "D",

	variants: {
		normal: false,
		reverse: false,
		holo: true,
		firstEdition: false
	},

	stage: "Basic",
	suffix: "V",
	dexId: [876],

	thirdParty: {
		cardmarket: 427221,
		tcgplayer: 206052
	}
}

export default card
