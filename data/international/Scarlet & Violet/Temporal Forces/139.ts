import { Card } from "models/database/card"
import Set from "../Temporal Forces"

const card: Card = {
	dexId: [993],
	set: Set,

	name: {
		'en-us': "Iron Jugulis",
		'fr-fr': "Têtes-de-Fer",
		'es-es': "Ferrocuello",
		'it-it': "Colloferreo",
		'pt-br': "Jugulares Férreas",
		'de-de': "Eisenhals"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 130,
	types: ["Colorless"],
	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			'en-us': "Automated Combat",
			'fr-fr': "Combat Automatisé",
			'es-es': "Combate Automatizado",
			'it-it': "Lotta Automatizzata",
			'pt-br': "Combate Automatizado",
			'de-de': "Automatisierter Angriff"
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
			'en-us': "Blasting Wind",
			'fr-fr': "Vent Impitoyable",
			'es-es': "Vientos Explosivos",
			'it-it': "Vento Distruttivo",
			'pt-br': "Vendaval Avassalador",
			'de-de': "Peitschender Wind"
		},

		damage: 110
	}],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2",
		},
	],
	resistances: [
		{
			type: "Fighting",
			value: "-30",
		},
	],
	retreat: 2,
	regulationMark: "H",

	description: {
		'en-us': "It's possible that Iron Jugulis, an object described in an old book, may actually be this Pokémon.",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 760769,
				tcgplayer: 542883
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 760769,
				tcgplayer: 542883
			}
		},
	],

	illustrator: "KEIICHIRO ITO",

}

export default card