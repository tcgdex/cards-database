import { Card } from 'models/database/card'
import Set from '../Furious Fists'

const card: Card = {
	name: {
		'en-us': "Aurorus",
		'fr-fr': "Dragmara",
		'es-es': "Aurorus",
		'it-it': "Aurorus",
		'pt-br': "Aurorus",
		'de-de': "Amagarga"
	},

	illustrator: "5ban Graphics",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		699,
	],

	hp: 130,

	types: [
		"Water",
	],

	evolveFrom: {
		'en-us': "Amaura",
		'fr-fr': "Amagara",
		'es-es': "Amaura",
		'it-it': "Amaura",
		'pt-br': "Amaura",
		'de-de': "Amarino"
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: {
				'en-us': "Ice Shield",
				'fr-fr': "Bouclier de Glace",
				'es-es': "Escudo Hielo",
				'it-it': "Gelodifesa",
				'pt-br': "Escudo de Gelo",
				'de-de': "Eisschild"
			},
			effect: {
				'en-us': "Any damage done by an opponent's attack to each of your Water Pokémon that has any Water Energy attached to it is reduced by 20 (after applying Weakness and Resistance).",
				'fr-fr': "Tous les dégâts infligés par une attaque de votre adversaire à chacun de vos Pokémon Water auquel de l'Énergie Water est attachée sont réduits de 20 (après application de la Faiblesse et de la Résistance).",
				'es-es': "Cualquier daño infligido por un ataque de tu rival a cada uno de tus Pokémon Water que tenga alguna Energía Water unida a él se reduce en 20 (después de aplicar Debilidad y Resistencia).",
				'it-it': "I danni inflitti dagli attacchi del tuo avversario ai tuoi Pokémon Water che hanno delle Energie Water assegnate sono ridotti di 20, dopo aver applicato debolezza e resistenza.",
				'pt-br': "Qualquer dano causado pelo ataque de um oponente a cada um dos seus Pokémon Water que possua uma Energia Water ligada será reduzido em 20 (após a aplicação de Fraqueza e Resistência).",
				'de-de': "Schaden, der deinen Water-Pokémon, an denen Water-Energie angelegt ist, durch einen gegnerischen Angriff zugefügt wird, wird um 20 Schadenspunkte reduziert (nachdem Schwäche und Resistenz verrechnet wurden)."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Water",
				"Colorless",
				"Colorless",
				"Colorless",
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
				'en-us': "Your opponent's Active Pokémon is now Asleep.",
				'fr-fr': "Le Pokémon Actif de votre adversaire est maintenant Endormi.",
				'es-es': "El Pokémon Activo de tu rival pasa a estar Dormido.",
				'it-it': "Il Pokémon attivo del tuo avversario viene addormentato.",
				'pt-br': "O Pokémon Ativo do seu oponente agora está Adormecido.",
				'de-de': "Das Aktive Pokémon deines Gegners schläft jetzt."
			},
			damage: 70,

		},
	],

	weaknesses: [
		{
			type: "Metal",
			value: "×2"
		},
	],

	retreat: 3,

	description: {
		'en-us': "The diamond-shaped crystals on its body expel air as cold as -240 degrees Fahrenheit, surrounding its enemies and encasing them in ice.",
	},

	thirdParty: {
		cardmarket: 281690,
		tcgplayer: 92201
	}
}

export default card
