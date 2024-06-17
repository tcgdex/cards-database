import { Card } from "../../../interfaces"
import Set from "../Obsidian Flames"

const card: Card = {
	dexId: [604],
	set: Set,

	name: {
		fr: "Ohmassacre",
		en: "Eelektross",
		es: "Eelektross",
		it: "Eelektross",
		pt: "Eelektross",
		de: "Zapplarang"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 160,
	types: ["Lightning"],
	stage: "Stage2",

	attacks: [{
		cost: ["Lightning"],

		name: {
			fr: "Choc Aspirant",
			en: "Suction Shock",
			es: "Descarga Succionadora",
			it: "Ventosa Folgorante",
			pt: "Choque de Sucção",
			de: "Ansaugschock"
		},

		effect: {
			fr: "Envoyez l'un des Pokémon de Banc de votre adversaire sur le Poste Actif. Dans ce cas, cette attaque inflige 60 dégâts au nouveau Pokémon Actif. Lancez ensuite une pièce. Si c'est face, ce Pokémon-là est maintenant Paralysé.",
			en: "Switch in 1 of your opponent's Benched Pokémon to the Active Spot. If you do, this attack does 60 damage to the new Active Pokémon, and then flip a coin. If heads, that Pokémon is now Paralyzed.",
			es: "Cambia 1 de los Pokémon en Banca de tu rival por el Pokémon que esté en el Puesto Activo. Si lo haces, este ataque hace 60 puntos de daño al nuevo Pokémon Activo, y luego lanza 1 moneda. Si sale cara, ese Pokémon pasa a estar Paralizado.",
			it: "Sostituisci uno dei Pokémon nella panchina del tuo avversario con il suo Pokémon in posizione attiva. Se lo fai, questo attacco infligge 60 danni al nuovo Pokémon attivo, poi lancia una moneta. Se esce testa, quel Pokémon viene paralizzato.",
			pt: "Mande 1 dos Pokémon no Banco do seu oponente para o Campo Ativo. Se fizer isto, este ataque causará 60 pontos de dano ao novo Pokémon Ativo e, em seguida, jogue uma moeda. Se sair cara, aquele Pokémon agora estará Paralisado.",
			de: "Wechsle 1 Pokémon von der Bank deines Gegners in die Aktive Position ein. Wenn du das machst, fügt diese Attacke dem neuen Aktiven Pokémon 60 Schadenspunkte zu und du wirfst anschließend 1 Münze. Bei Kopf ist jenes Pokémon jetzt paralysiert."
		}
	}, {
		cost: ["Lightning", "Colorless", "Colorless"],

		name: {
			fr: "Éclair Frontal",
			en: "Head Bolt",
			es: "Rayo de Cabeza",
			it: "Zuccalampo",
			pt: "Raio de Cabeça",
			de: "Kopf-Blitz"
		},

		damage: 130
	}],

	retreat: 3,
	regulationMark: "G"
}

export default card