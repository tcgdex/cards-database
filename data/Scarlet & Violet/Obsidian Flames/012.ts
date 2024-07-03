import { Card } from "../../../interfaces"
import Set from "../Obsidian Flames"

const card: Card = {
	dexId: [709],
	set: Set,

	name: {
		fr: "Desséliande",
		en: "Trevenant",
		es: "Trevenant",
		it: "Trevenant",
		pt: "Trevenant",
		de: "Trombork"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 140,
	types: ["Grass"],
	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			fr: "Miasme Sylvestre",
			en: "Forest Miasma",
			es: "Miasma Forestal",
			it: "Miasma Forestale",
			pt: "Miasma Florestal",
			de: "Miasmawald"
		},

		effect: {
			fr: "Pendant le Contrôle Pokémon, si ce Pokémon est sur le Poste Actif, placez un marqueur de dégâts sur le Pokémon Actif de votre adversaire.",
			en: "During Pokémon Checkup, if this Pokémon is in the Active Spot, put 1 damage counter on your opponent's Active Pokémon.",
			es: "Durante el Chequeo Pokémon, si este Pokémon está en el Puesto Activo, pon 1 contador de daño en el Pokémon Activo de tu rival.",
			it: "Durante il controllo Pokémon, se questo Pokémon è in posizione attiva, metti un segnalino danno sul Pokémon attivo del tuo avversario.",
			pt: "Durante o Checape Pokémon, se este Pokémon estiver no Campo Ativo, coloque 1 contador de dano no Pokémon Ativo do seu oponente.",
			de: "Lege beim Pokémon-Check, wenn dieses Pokémon in der Aktiven Position ist, 1 Schadensmarke auf das Aktive Pokémon deines Gegners."
		}
	}],

	attacks: [{
		cost: ["Colorless", "Colorless", "Colorless"],

		name: {
			fr: "Cage",
			en: "Lock Up",
			es: "Encerrar",
			it: "Bloccare",
			pt: "Prender",
			de: "Einsperren"
		},

		effect: {
			fr: "Pendant le prochain tour de votre adversaire, le Pokémon Défenseur ne peut pas battre en retraite.",
			en: "During your opponent's next turn, the Defending Pokémon can't retreat.",
			es: "Durante el próximo turno de tu rival, el Pokémon Defensor no puede retirarse.",
			it: "Durante il prossimo turno del tuo avversario, il Pokémon difensore non può ritirarsi.",
			pt: "Durante o próximo turno do seu oponente, o Pokémon Defensor não poderá recuar.",
			de: "Während des nächsten Zuges deines Gegners kann sich das Verteidigende Pokémon nicht zurückziehen."
		},

		damage: 100
	}],

	retreat: 3,
	regulationMark: "G",

	variants: {
		holo: false
	}
}

export default card