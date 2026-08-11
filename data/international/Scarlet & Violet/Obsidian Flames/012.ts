import { Card } from "models/database/card"
import Set from "../Obsidian Flames"

const card: Card = {
	dexId: [709],
	set: Set,

	name: {
		'fr-fr': "Desséliande",
		'en-us': "Trevenant",
		'es-es': "Trevenant",
		'it-it': "Trevenant",
		'pt-br': "Trevenant",
		'de-de': "Trombork"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 140,
	types: ["Grass"],
	evolveFrom: {
		'fr-fr': "Brocélôme",
		'en-us': "Phantump",
		'es-es': "Phantump",
		'it-it': "Phantump",
		'pt-br': "Phantump",
		'de-de': "Paragoni"
	},
	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			'fr-fr': "Miasme Sylvestre",
			'en-us': "Forest Miasma",
			'es-es': "Miasma Forestal",
			'it-it': "Miasma Forestale",
			'pt-br': "Miasma Florestal",
			'de-de': "Miasmawald"
		},

		effect: {
			'fr-fr': "Pendant le Contrôle Pokémon, si ce Pokémon est sur le Poste Actif, placez un marqueur de dégâts sur le Pokémon Actif de votre adversaire.",
			'en-us': "During Pokémon Checkup, if this Pokémon is in the Active Spot, put 1 damage counter on your opponent's Active Pokémon.",
			'es-es': "Durante el Chequeo Pokémon, si este Pokémon está en el Puesto Activo, pon 1 contador de daño en el Pokémon Activo de tu rival.",
			'it-it': "Durante il controllo Pokémon, se questo Pokémon è in posizione attiva, metti un segnalino danno sul Pokémon attivo del tuo avversario.",
			'pt-br': "Durante o Checape Pokémon, se este Pokémon estiver no Campo Ativo, coloque 1 contador de dano no Pokémon Ativo do seu oponente.",
			'de-de': "Lege beim Pokémon-Check, wenn dieses Pokémon in der Aktiven Position ist, 1 Schadensmarke auf das Aktive Pokémon deines Gegners."
		}
	}],

	attacks: [{
		cost: ["Colorless", "Colorless", "Colorless"],

		name: {
			'fr-fr': "Cage",
			'en-us': "Lock Up",
			'es-es': "Encerrar",
			'it-it': "Bloccare",
			'pt-br': "Prender",
			'de-de': "Einsperren"
		},

		effect: {
			'fr-fr': "Pendant le prochain tour de votre adversaire, le Pokémon Défenseur ne peut pas battre en retraite.",
			'en-us': "During your opponent's next turn, the Defending Pokémon can't retreat.",
			'es-es': "Durante el próximo turno de tu rival, el Pokémon Defensor no puede retirarse.",
			'it-it': "Durante il prossimo turno del tuo avversario, il Pokémon difensore non può ritirarsi.",
			'pt-br': "Durante o próximo turno do seu oponente, o Pokémon Defensor não poderá recuar.",
			'de-de': "Während des nächsten Zuges deines Gegners kann sich das Verteidigende Pokémon nicht zurückziehen."
		},

		damage: 100
	}],

	weaknesses: [
		{
			type: "Fire",
			value: "×2",
		},
	],
	retreat: 3,
	regulationMark: "G",

	description: {
		'en-us': "Small roots that extend from the tips of this Pokémon's feet can tie into the trees of the forest and give Trevenant control over them.",
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 725092,
				tcgplayer: 509672,
				cardtrader: 255572
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 725092,
				tcgplayer: 509672,
				cardtrader: 255572
			}
		},
	],

	illustrator: "Anesaki Dynamic",

	
}

export default card
