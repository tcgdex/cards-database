import { Card } from "models/database/card"
import Set from "../Scarlet & Violet"

const card: Card = {
	dexId: [332],
	set: Set,

	name: {
		'en-us': "Cacturne",
		'fr-fr': "Cacturne",
		'es-es': "Cacturne",
		'it-it': "Cacturne",
		'pt-br': "Cacturne",
		'de-de': "Noktuska"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 130,
	types: ["Grass"],

	evolveFrom: {
		'en-us': "Cacnea",
		'fr-fr': "Cacnea"
	},

	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			'en-us': "Counterattack Quills",
			'fr-fr': "Contre-Piquants",
			'es-es': "Contraataque Púas",
			'it-it': "Contrappunto",
			'pt-br': "Penas de Contra-ataque",
			'de-de': "Konterstacheln"
		},

		effect: {
			'en-us': "If this Pokémon is in the Active Spot and is damaged by an attack from your opponent's Pokémon (even if this Pokémon is Knocked Out), put 3 damage counters on the Attacking Pokémon.",
			'fr-fr': "Si ce Pokémon est sur le Poste Actif et qu'il subit les dégâts d'une attaque d'un Pokémon de votre adversaire (même si ce Pokémon est mis K.O.), placez 3 marqueurs de dégâts sur le Pokémon Attaquant.",
			'es-es': "Si este Pokémon está en el Puesto Activo y resulta dañado por un ataque de los Pokémon de tu rival (incluso si este Pokémon queda Fuera de Combate), pon 3 contadores de daño en el Pokémon Atacante.",
			'it-it': "Se questo Pokémon è in posizione attiva e viene danneggiato da un attacco di un Pokémon del tuo avversario, anche se viene messo KO, metti tre segnalini danno sul Pokémon attaccante.",
			'pt-br': "Se este Pokémon estiver no Campo Ativo e for danificado por um ataque dos Pokémon do seu oponente (mesmo que este Pokémon seja Nocauteado), coloque 3 contadores de dano no Pokémon Atacante.",
			'de-de': "Wenn dieses Pokémon in der Aktiven Position ist und durch eine Attacke von Pokémon deines Gegners Schaden erhält (auch wenn dieses Pokémon dadurch kampfunfähig wird), lege 3 Schadensmarken auf das Angreifende Pokémon."
		}
	}],

	attacks: [{
		cost: ["Colorless", "Colorless", "Colorless"],

		name: {
			'en-us': "Spike Shot",
			'fr-fr': "Tir d'Épines",
			'es-es': "Disparo Púas",
			'it-it': "Sparaculeo",
			'pt-br': "Disparo de Espinhos",
			'de-de': "Dornensalve"
		},

		damage: 110
	}],

	weaknesses: [
		{
			type: "Fire",
			value: "×2",
		},
	],
	retreat: 2,
	regulationMark: "G",

	variants: [
		{
			type: "reverse"
		},
		{
			type: "normal"
		}
	],

	illustrator: "DOM",

	description: {
		'en-us': "Packs of them follow travelers through the desert until the travelers can no longer move.",
	},

	thirdParty: {
        cardmarket: 702303,
        tcgplayer: 487836
    }
}

export default card