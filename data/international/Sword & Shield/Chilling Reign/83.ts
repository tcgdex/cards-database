import { Card } from 'models/database/card'
import Set from '../Chilling Reign'

const card: Card = {
	dexId: [867],
	set: Set,

	name: {
		'en-us': "Galarian Runerigus",
		'fr-fr': "Tutétékri de Galar",
		'es-es': "Runerigus de Galar",
		'it-it': "Runerigus di Galar",
		'pt-br': "Runerigus de Galar",
		'de-de': "Galar-Oghnatoll"
	},

	illustrator: "KEIICHIRO ITO",
	rarity: "Holo Rare",
	category: "Pokemon",
	hp: 120,
	types: ["Fighting"],

	evolveFrom: {
		'en-us': "Galarian Yamask",
		'fr-fr': "Tutafeh de Galar",
		'es-es': "Yamask de Galar",
		'it-it': "Yamask di Galar",
		'pt-br': "Yamask de Galar",
		'de-de': "Galar-Makabaja"
	},

	abilities: [{
		type: "Ability",

		name: {
			'en-us': "Spiteful Slate",
			'fr-fr': "Ardoise Malveillante",
			'es-es': "Losa Malévola",
			'it-it': "Lastra Dispettosa",
			'pt-br': "Gravura Rancorosa",
			'de-de': "Boshafte Tafel"
		},

		effect: {
			'en-us': "If this Pokémon is in the Active Spot and is damaged by an attack from your opponent's Pokémon VMAX (even if this Pokémon is Knocked Out), put damage counters on the Attacking Pokémon equal to the damage done to this Pokémon.",
			'fr-fr': "Si ce Pokémon est sur le Poste Actif et qu'il subit les dégâts d'une attaque d'un Pokémon-VMAX de votre adversaire (même si ce Pokémon est mis K.O.), placez des marqueurs de dégâts sur le Pokémon Attaquant équivalents aux dégâts infligés à ce Pokémon.",
			'es-es': "Si este Pokémon está en el Puesto Activo y resulta dañado por un ataque de los Pokémon VMAX de tu rival (incluso si este Pokémon queda Fuera de Combate), pon una cantidad de contadores de daño en el Pokémon Atacante equivalente al daño infligido a este Pokémon.",
			'it-it': "Se questo Pokémon è in posizione attiva e viene danneggiato da un attacco di un Pokémon-VMAX del tuo avversario, anche se viene messo KO, metti sul Pokémon attaccante un numero di segnalini danno pari ai danni inflitti a questo Pokémon.",
			'pt-br': "Se este Pokémon estiver no Campo Ativo e for danificado por um ataque dos Pokémon VMAX do seu oponente (mesmo que este Pokémon seja Nocauteado), coloque contadores de dano no Pokémon Atacante equivalentes ao dano causado a este Pokémon.",
			'de-de': "Wenn dieses Pokémon in der Aktiven Position ist und durch eine Attacke von Pokémon-VMAX deines Gegners Schaden erhält (auch wenn dieses Pokémon dadurch kampfunfähig wird), lege der Höhe des zugefügten Schadens entsprechend Schadensmarken auf das Angreifende Pokémon."
		}
	}],

	attacks: [{
		name: {
			'en-us': "Energy Press",
			'fr-fr': "Pression Énergétique",
			'es-es': "Presión Energética",
			'it-it': "Energipressa",
			'pt-br': "Aperto de Energia",
			'de-de': "Energiedruck"
		},

		effect: {
			'en-us': "This attack does 20 more damage for each Energy attached to your opponent's Active Pokémon.",
			'fr-fr': "Cette attaque inflige 20 dégâts supplémentaires pour chaque Énergie attachée au Pokémon Actif de votre adversaire.",
			'es-es': "Este ataque hace 20 puntos de daño más por cada Energía unida al Pokémon Activo de tu rival.",
			'it-it': "Questo attacco infligge 20 danni in più per ogni Energia assegnata al Pokémon attivo del tuo avversario.",
			'pt-br': "Este ataque causa 20 pontos de dano a mais para cada Energia ligada ao Pokémon Ativo do seu oponente.",
			'de-de': "Diese Attacke fügt für jede an das Aktive Pokémon deines Gegners angelegte Energie 20 Schadenspunkte mehr zu."
		},

		damage: "60+",
		cost: ["Colorless", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "E",


	stage: "Stage1",

	description: {
		'en-us': "Never touch its shadowlike body, or you'll be shown the horrific memories behind the picture carved into it."
	},

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 567191,
				tcgplayer: 241750
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 567191,
				tcgplayer: 241750
			}
		},
	],
}

export default card
