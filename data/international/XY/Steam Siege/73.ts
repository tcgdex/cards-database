import { Card } from 'models/database/card'
import Set from '../Steam Siege'

const card: Card = {
	name: {
		'en-us': "Klinklang",
		'fr-fr': "Cliticlic",
		'es-es': "Klinklang",
		'it-it': "Klinklang",
		'pt-br': "Klinklang",
		'de-de': "Klikdiklak"
	},

	illustrator: "Midori Harada",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		601,
	],

	hp: 140,

	types: [
		"Metal",
	],

	evolveFrom: {
		'en-us': "Klang",
		'fr-fr': "Clic",
		'es-es': "Klang",
		'it-it': "Klang",
		'pt-br': "Klang",
		'de-de': "Kliklak"
	},

	stage: "Stage2",

	abilities: [
		{
			type: "Ability",
			name: {
				'en-us': "Heavy Bumper",
				'fr-fr': "Pare-Chocs Imposant",
				'es-es': "Parachoques Pesado",
				'it-it': "Paraurti Pesanti",
				'pt-br': "Para-choque Pesado",
				'de-de': "Schwerer Puffer"
			},
			effect: {
				'en-us': "Any damage done to this Pokémon by an opponent's attack is reduced by 10 for each Colorless in your opponent's Active Pokémon's Retreat Cost (after applying Weakness and Resistance).",
				'fr-fr': "Tous les dégâts infligés à ce Pokémon par une attaque de votre adversaire sont réduits de 10 pour chaque Colorless dans le Coût de Retraite du Pokémon Actif de votre adversaire (après application de la Faiblesse et de la Résistance).",
				'es-es': "Cualquier daño infligido a este Pokémon por un ataque de tu rival se reduce en 10 por cada Colorless en el Coste de Retirada del Pokémon Activo de tu rival (después de aplicar Debilidad y Resistencia).",
				'it-it': "I danni inflitti a questo Pokémon da un attacco del tuo avversario sono ridotti di 10 per ogni Colorless nel costo di ritirata del Pokémon attivo del tuo avversario, dopo aver applicato debolezza e resistenza.",
				'pt-br': "Qualquer dano causado a este Pokémon por ataques de um oponente será reduzido em 10 para cada Colorless no Custo para Recuar do Pokémon Ativo do seu oponente (após a aplicação de Fraqueza e Resistência).",
				'de-de': "Schaden, der diesem Pokémon durch einen gegnerischen Angriff zugefügt wird, wird um 10 Schadenspunkte für jedes Colorless-Symbol in den Rückzugskosten des Aktiven Pokémon deines Gegners reduziert (nachdem Schwäche und Resistenz verrechnet wurden)."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Metal",
				"Metal",
				"Colorless",
			],
			name: {
				'en-us': "Gear Spinner",
				'fr-fr': "Tourne Rouage",
				'es-es': "Giraengranajes",
				'it-it': "Ruotameccanica",
				'pt-br': "Girador de Engrenagens",
				'de-de': "Radschleuder"
			},
			effect: {
				'en-us': "During your next turn, this Pokémon's Gear Spinner attack does 70 more damage (before applying Weakness and Resistance).",
				'fr-fr': "Pendant votre prochain tour, l'attaque Tourne Rouage de ce Pokémon inflige 70 dégâts supplémentaires (avant application de la Faiblesse et de la Résistance).",
				'es-es': "Durante tu próximo turno, el ataque Giraengranajes de este Pokémon hace 70 puntos de daño más (antes de aplicar Debilidad y Resistencia).",
				'it-it': "Durante il tuo prossimo turno, l'attacco Ruotameccanica di questo Pokémon infligge 70 danni in più, prima di aver applicato debolezza e resistenza.",
				'pt-br': "Durante sua próxima vez de jogar, o ataque Girador de Engrenagens deste Pokémon causará 70 de danos adicionais (antes da aplicação de Fraqueza e Resistência).",
				'de-de': "Während deines nächsten Zuges fügt die Attacke Radschleuder dieses Pokémon 70 weitere Schadenspunkte zu (bevor Schwäche und Resistenz verrechnet werden)."
			},
			damage: 70,

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

	retreat: 3,

	description: {
		'en-us': "Its red core functions as an energy tank. It fires the charged energy through its spikes into an area.",
	},

	thirdParty: {
		cardmarket: 291639,
		tcgplayer: 121202
	}
}

export default card
