import { Card } from '../../../interfaces'
import Set from '../Steam Siege'

const card: Card = {
	name: {
		en: "Klinklang",
		fr: "Cliticlic",
		es: "Klinklang",
		it: "Klinklang",
		pt: "Klinklang",
		de: "Klikdiklak"
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
		en: "Klang",
		fr: "Clic",
		es: "Klang",
		it: "Klang",
		pt: "Klang",
		de: "Kliklak"
	},
	stage: "Stage2",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Heavy Bumper",
				fr: "Pare-Chocs Imposant",
				es: "Parachoques Pesado",
				it: "Paraurti Pesanti",
				pt: "Para-choque Pesado",
				de: "Schwerer Puffer"
			},
			effect: {
				en: "Any damage done to this Pokémon by an opponent's attack is reduced by 10 for each Colorless in your opponent's Active Pokémon's Retreat Cost (after applying Weakness and Resistance).",
				fr: "Tous les dégâts infligés à ce Pokémon par une attaque de votre adversaire sont réduits de 10 pour chaque Colorless dans le Coût de Retraite du Pokémon Actif de votre adversaire (après application de la Faiblesse et de la Résistance).",
				es: "Cualquier daño infligido a este Pokémon por un ataque de tu rival se reduce en 10 por cada Colorless en el Coste de Retirada del Pokémon Activo de tu rival (después de aplicar Debilidad y Resistencia).",
				it: "I danni inflitti a questo Pokémon da un attacco del tuo avversario sono ridotti di 10 per ogni Colorless nel costo di ritirata del Pokémon attivo del tuo avversario, dopo aver applicato debolezza e resistenza.",
				pt: "Qualquer dano causado a este Pokémon por ataques de um oponente será reduzido em 10 para cada Colorless no Custo para Recuar do Pokémon Ativo do seu oponente (após a aplicação de Fraqueza e Resistência).",
				de: "Schaden, der diesem Pokémon durch einen gegnerischen Angriff zugefügt wird, wird um 10 Schadenspunkte für jedes Colorless-Symbol in den Rückzugskosten des Aktiven Pokémon deines Gegners reduziert (nachdem Schwäche und Resistenz verrechnet wurden)."
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
				en: "Gear Spinner",
				fr: "Tourne Rouage",
				es: "Giraengranajes",
				it: "Ruotameccanica",
				pt: "Girador de Engrenagens",
				de: "Radschleuder"
			},
			effect: {
				en: "During your next turn, this Pokémon's Gear Spinner attack does 70 more damage (before applying Weakness and Resistance).",
				fr: "Pendant votre prochain tour, l'attaque Tourne Rouage de ce Pokémon inflige 70 dégâts supplémentaires (avant application de la Faiblesse et de la Résistance).",
				es: "Durante tu próximo turno, el ataque Giraengranajes de este Pokémon hace 70 puntos de daño más (antes de aplicar Debilidad y Resistencia).",
				it: "Durante il tuo prossimo turno, l'attacco Ruotameccanica di questo Pokémon infligge 70 danni in più, prima di aver applicato debolezza e resistenza.",
				pt: "Durante sua próxima vez de jogar, o ataque Girador de Engrenagens deste Pokémon causará 70 de danos adicionais (antes da aplicação de Fraqueza e Resistência).",
				de: "Während deines nächsten Zuges fügt die Attacke Radschleuder dieses Pokémon 70 weitere Schadenspunkte zu (bevor Schwäche und Resistenz verrechnet werden)."
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



}

export default card
