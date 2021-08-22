import { Card } from '../../../interfaces'
import Set from '../Chilling Reign'

const card: Card = {
	set: Set,

	name: {
		en: "Galarian Runerigus",
		fr: "Tutétékri de Galar",
		es: "Runerigus de Galar",
		it: "Runerigus di Galar",
		pt: "Runerigus de Galar",
		de: "Galar-Oghnatoll"
	},

	illustrator: "KEIICHIRO ITO",
	rarity: "Rare",
	category: "Pokemon",
	hp: 120,
	types: ["Fighting"],

	evolveFrom: {
		en: "Galarian Yamask",
		fr: "Tutafeh de Galar"
	},

	abilities: [{
		type: "Ability",

		name: {
			en: "Spiteful Slate",
			fr: "Ardoise Malveillante",
			es: "Losa Malévola",
			it: "Lastra Dispettosa",
			pt: "Gravura Rancorosa",
			de: "Boshafte Tafel"
		},

		effect: {
			en: "If this Pokémon is in the Active Spot and is damaged by an attack from your opponent’s Pokémon VMAX (even if this Pokémon is Knocked Out), put damage counters on the Attacking Pokémon equal to the damage done to this Pokémon.",
			fr: "Si ce Pokémon est sur le Poste Actif et qu’il subit les dégâts d’une attaque d’un Pokémon-VMAX de votre adversaire (même si ce Pokémon est mis K.O.), placez des marqueurs de dégâts sur le Pokémon Attaquant équivalents aux dégâts infligés à ce Pokémon.",
			es: "Si este Pokémon está en el Puesto Activo y resulta dañado por un ataque de los Pokémon VMAX de tu rival (incluso si este Pokémon queda Fuera de Combate), pon una cantidad de contadores de daño en el Pokémon Atacante equivalente al daño infligido a este Pokémon.",
			it: "Se questo Pokémon è in posizione attiva e viene danneggiato da un attacco di un Pokémon-VMAX del tuo avversario, anche se viene messo KO, metti sul Pokémon attaccante un numero di segnalini danno pari ai danni inflitti a questo Pokémon.",
			pt: "Se este Pokémon estiver no Campo Ativo e for danificado por um ataque dos Pokémon VMAX do seu oponente (mesmo que este Pokémon seja Nocauteado), coloque contadores de dano no Pokémon Atacante equivalentes ao dano causado a este Pokémon.",
			de: "Wenn dieses Pokémon in der Aktiven Position ist und durch eine Attacke von Pokémon-VMAX deines Gegners Schaden erhält (auch wenn dieses Pokémon dadurch kampfunfähig wird), lege der Höhe des zugefügten Schadens entsprechend Schadensmarken auf das Angreifende Pokémon."
		}
	}],

	attacks: [{
		name: {
			en: "Energy Press",
			fr: "Pression Énergétique",
			es: "Presión Energética",
			it: "Energipressa",
			pt: "Aperto de Energia",
			de: "Energiedruck"
		},

		effect: {
			en: "This attack does 20 more damage for each Energy attached to your opponent’s Active Pokémon.",
			fr: "Cette attaque inflige 20 dégâts supplémentaires pour chaque Énergie attachée au Pokémon Actif de votre adversaire.",
			es: "Este ataque hace 20 puntos de daño más por cada Energía unida al Pokémon Activo de tu rival.",
			it: "Questo attacco infligge 20 danni in più per ogni Energia assegnata al Pokémon attivo del tuo avversario.",
			pt: "Este ataque causa 20 pontos de dano a mais para cada Energia ligada ao Pokémon Ativo do seu oponente.",
			de: "Diese Attacke fügt für jede an das Aktive Pokémon deines Gegners angelegte Energie 20 Schadenspunkte mehr zu."
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

	variants: {
		normal: false,
		reverse: true,
		holo: true,
		firstEdition: false
	},

	stage: "Stage1",

	description: {
		en: "Never touch its shadowlike body, or you’ll be shown the horrific memories behind the picture carved into it."
	}
}

export default card