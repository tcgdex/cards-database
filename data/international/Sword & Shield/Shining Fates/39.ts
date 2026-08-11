import { Card } from 'models/database/card'
import Set from '../Shining Fates'

const card: Card = {
	dexId: [876],
	set: Set,

	name: {
		'fr-fr': "Wimessir V",
		'en-us': "Indeedee V",
		'es-es': "Indeedee V",
		'it-it': "Indeedee V",
		'pt-br': "Indeedee V",
		'de-de': "Servol V"
	},

	illustrator: "5ban Graphics",
	rarity: "Holo Rare V",
	category: "Pokemon",
	hp: 180,
	types: ["Psychic"],

	abilities: [{
		type: "Ability",

		name: {
			'fr-fr': "Veille",
			'en-us': "Watch Over",
			'es-es': "Cuidados",
			'it-it': "Cura Protettiva",
			'pt-br': "Cuidar",
			'de-de': "Obhut"
		},

		effect: {
			'fr-fr': "Une fois pendant votre tour, vous pouvez soigner 20 dégâts de votre Pokémon Actif.",
			'en-us': "Once during your turn, you may heal 20 damage from your Active Pokémon.",
			'es-es': "Una vez durante tu turno, puedes curar 20 puntos de daño a tu Pokémon Activo.",
			'it-it': "Una sola volta durante il tuo turno, puoi curare il tuo Pokémon attivo da 20 danni.",
			'pt-br': "Uma vez durante o seu turno, você poderá curar 20 pontos de dano do seu Pokémon Ativo.",
			'de-de': "Einmal während deines Zuges kannst du 20 Schadenspunkte bei deinem Aktiven Pokémon heilen."
		}
	}],

	attacks: [{
		name: {
			'fr-fr': "Psyko",
			'en-us': "Psychic",
			'es-es': "Psíquico",
			'it-it': "Psichico",
			'pt-br': "Psíquico",
			'de-de': "Psychokinese"
		},

		effect: {
			'fr-fr': "Cette attaque inflige 60 dégâts supplémentaires pour chaque Énergie attachée au Pokémon Actif de votre adversaire.",
			'en-us': "This attack does 60 more damage for each Energy attached to your opponent's Active Pokémon.",
			'es-es': "Este ataque hace 60 puntos de daño más por cada Energía unida al Pokémon Activo de tu rival.",
			'it-it': "Questo attacco infligge 60 danni in più per ogni Energia assegnata al Pokémon attivo del tuo avversario.",
			'pt-br': "Este ataque causa 60 pontos de dano a mais para cada Energia ligada ao Pokémon Ativo do seu oponente.",
			'de-de': "Diese Attacke fügt für jede an das Aktive Pokémon deines Gegners angelegte Energie 60 Schadenspunkte mehr zu."
		},

		damage: "10+",
		cost: ["Psychic", "Colorless", "Colorless"]
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
	suffix: "V",

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 539218,
				tcgplayer: 232484
			}
		},
	],
}

export default card
