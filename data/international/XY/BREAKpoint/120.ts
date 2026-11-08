import { Card } from 'models/database/card'
import Set from '../BREAKpoint'

const card: Card = {
	name: {
		'en-us': "M Scizor EX",
		'fr-fr': "M-Cizayox EX",
		'es-es': "M-Scizor EX",
		'it-it': "M Scizor EX",
		'pt-br': "M-Scizor EX",
		'de-de': "M-Scherox EX"
	},

	illustrator: "5ban Graphics",
	rarity: "Ultra Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		212,
	],

	hp: 220,

	types: [
		"Metal",
	],

	evolveFrom: {
		'en-us': "Scizor-EX",
		'fr-fr': "Cizayox-EX",
		'es-es': "Scizor-EX",
		'it-it': "Scizor-EX",
		'pt-br': "Scizor-EX",
		'de-de': "Scherox-EX"
	},

	stage: "MEGA",

	attacks: [
		{
			cost: [
				"Metal",
				"Metal",
			],
			name: {
				'en-us': "Iron Crusher",
				'fr-fr': "Écrase Fer",
				'es-es': "Triturahierros",
				'it-it': "Schiacciata Ferrea",
				'pt-br': "Esmagador de Ferro",
				'de-de': "Eisenbeißer"
			},
			effect: {
				'en-us': "You may discard a Special Energy attached to your opponent's Active Pokémon or a Stadium card in play.",
				'fr-fr': "Vous pouvez défausser une carte Énergie spéciale attachée au Pokémon Actif de votre adversaire ou une carte Stade en jeu.",
				'es-es': "Puedes descartar 1 Energía Especial unida al Pokémon Activo de tu rival o 1 carta de Estadio en juego.",
				'it-it': "Puoi scartare una Energia speciale assegnata al Pokémon attivo del tuo avversario o una carta Stadio in gioco.",
				'pt-br': "Você pode descartar uma Energia Especial ligada ao Pokémon Ativo do seu oponente ou um card de Estádio em jogo.",
				'de-de': "Du kannst 1 an das Aktive Pokémon deines Gegners angelegte Spezial-Energie auf dessen Ablagestapel oder 1 Stadionkarte im Spiel auf den Ablagestapel legen."
			},
			damage: 120,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Psychic",
			value: "-20"
		},
	],

	retreat: 2,
	suffix: "EX",

	thirdParty: {
		tcgplayer: 111642
	}
}

export default card
