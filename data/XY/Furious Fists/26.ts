import { Card } from '../../../interfaces'
import Set from '../Furious Fists'

const card: Card = {
	name: {
		en: "Aurorus",
		fr: "Dragmara",
		es: "Aurorus",
		it: "Aurorus",
		pt: "Aurorus",
		de: "Amagarga"
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
		en: "Amaura",
		fr: "Amagara",
		es: "Amaura",
		it: "Amaura",
		pt: "Amaura",
		de: "Amarino"
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Ice Shield",
				fr: "Bouclier de Glace",
				es: "Escudo Hielo",
				it: "Gelodifesa",
				pt: "Escudo de Gelo",
				de: "Eisschild"
			},
			effect: {
				en: "Any damage done by an opponent's attack to each of your Water Pokémon that has any Water Energy attached to it is reduced by 20 (after applying Weakness and Resistance).",
				fr: "Tous les dégâts infligés par une attaque de votre adversaire à chacun de vos Pokémon Water auquel de l'Énergie Water est attachée sont réduits de 20 (après application de la Faiblesse et de la Résistance).",
				es: "Cualquier daño infligido por un ataque de tu rival a cada uno de tus Pokémon Water que tenga alguna Energía Water unida a él se reduce en 20 (después de aplicar Debilidad y Resistencia).",
				it: "I danni inflitti dagli attacchi del tuo avversario ai tuoi Pokémon Water che hanno delle Energie Water assegnate sono ridotti di 20, dopo aver applicato debolezza e resistenza.",
				pt: "Qualquer dano causado pelo ataque de um oponente a cada um dos seus Pokémon Water que possua uma Energia Water ligada será reduzido em 20 (após a aplicação de Fraqueza e Resistência).",
				de: "Schaden, der deinen Water-Pokémon, an denen Water-Energie angelegt ist, durch einen gegnerischen Angriff zugefügt wird, wird um 20 Schadenspunkte reduziert (nachdem Schwäche und Resistenz verrechnet wurden)."
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
				en: "Icy Wind",
				fr: "Vent Glace",
				es: "Viento Hielo",
				it: "Ventogelato",
				pt: "Vento Congelante",
				de: "Eissturm"
			},
			effect: {
				en: "Your opponent's Active Pokémon is now Asleep.",
				fr: "Le Pokémon Actif de votre adversaire est maintenant Endormi.",
				es: "El Pokémon Activo de tu rival pasa a estar Dormido.",
				it: "Il Pokémon attivo del tuo avversario viene addormentato.",
				pt: "O Pokémon Ativo do seu oponente agora está Adormecido.",
				de: "Das Aktive Pokémon deines Gegners schläft jetzt."
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

	thirdParty: {
		cardmarket: 281690,
		tcgplayer: 92201
	}
}

export default card
