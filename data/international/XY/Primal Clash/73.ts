import { Card } from 'models/database/card'
import Set from '../Primal Clash'

const card: Card = {
	name: {
		'en-us': "Starmie",
		'fr-fr': "Staross",
		'es-es': "Starmie",
		'it-it': "Starmie",
		'pt-br': "Starmie",
		'de-de': "Starmie"
	},

	illustrator: "HiRON",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		121,
	],

	hp: 90,

	types: [
		"Psychic",
	],

	evolveFrom: {
		'en-us': "Staryu",
		'fr-fr': "Stari",
		'es-es': "Staryu",
		'it-it': "Staryu",
		'pt-br': "Staryu",
		'de-de': "Sterndu"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Synchro Star",
				'fr-fr': "Étoile Synchro",
				'es-es': "Estrella Sincronizada",
				'it-it': "Sincrostella",
				'pt-br': "Estrela Sincronizada",
				'de-de': "Synchronstern"
			},
			effect: {
				'en-us': "If this Pokémon and your opponent's Active Pokémon have the same amount of Energy attached to them, this attack does 60 more damage.",
				'fr-fr': "Si ce Pokémon et le Pokémon Actif de votre adversaire ont le même nombre d'Énergies leur étant attachées, cette attaque inflige 60 dégâts supplémentaires.",
				'es-es': "Si este Pokémon y el Pokémon Activo de tu rival tienen el mismo número de Energías unidas a ellos, este ataque hace 60 puntos de daño más.",
				'it-it': "Se questo Pokémon e il Pokémon attivo del tuo avversario hanno la stessa quantità di Energie assegnate, questo attacco infligge 60 danni in più.",
				'pt-br': "Se este Pokémon e o Pokémon Ativo do seu oponente tiverem a mesma quantidade de Energia ligada a eles, esse ataque causará 60 de danos adicionais.",
				'de-de': "Wenn an diesem Pokémon genauso viel Energie angelegt ist, wie am Aktiven Pokémon deines Gegners, fügt dieser Angriff 60 weitere Schadenspunkte zu."
			},
			damage: "10+",

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 0,

	description: {
		'en-us': "At the center of its body is a red core, which sends mysterious radio signals into the night sky.",
	},

	thirdParty: {
		cardmarket: 273604,
		tcgplayer: 95971
	}
}

export default card
