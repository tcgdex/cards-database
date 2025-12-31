import { Card } from "../../../interfaces"
import Set from "../Destined Rivals"

const card: Card = {
	dexId: [248],
	set: Set,

	name: {
		en: "Team Rocket's Tyranitar",
		fr: "Tyranocif de la Team Rocket",
		de: "Team Rockets Despotar",
		it: "Tyranitar del Team Rocket",
		es: "Tyranitar del Team Rocket",
		pt: "Tyranitar da Equipe Rocket",
		'es-mx': "Tyranitar del Equipo Rocket"
	},

	rarity: "Rare",
	category: "Pokemon",
	hp: 180,
	types: ["Fighting"],
	evolveFrom: {
		en: "Team Rocket's Pupitar",
		fr: "Ymphect de la Team Rocket",
		de: "Team Rockets Pupitar",
		it: "Pupitar del Team Rocket",
		es: "Pupitar del Team Rocket",
		pt: "Pupitar da Equipe Rocket",
		'es-mx': "Pupitar del Equipo Rocket"
	},
	stage: "Stage2",

	abilities: [{
		type: "Ability",

		name: {
			en: "Sand Stream",
			fr: "Sable Volant",
			de: "Sandsturm",
			it: "Sabbiafiume",
			es: "Chorro Arena",
			pt: "Fluxo de Areia",
			'es-mx': "Chorro de Arena"
		},

		effect: {
			en: "During Pokémon Checkup, if this Pokémon is in the Active Spot, put 2 damage counters on each of your opponent's Basic Pokémon.",
			fr: "Pendant le Contrôle Pokémon, si ce Pokémon est sur le Poste Actif, placez 2 marqueurs de dégâts sur chacun des Pokémon de base de votre adversaire.",
			de: "Lege beim Pokémon-Check, wenn dieses Pokémon in der Aktiven Position ist, 2 Schadensmarken auf jedes Basis-Pokémon deines Gegners.",
			it: "Durante il controllo Pokémon, se questo Pokémon è in posizione attiva, metti due segnalini danno su ciascuno dei Pokémon Base del tuo avversario.",
			es: "Durante el Chequeo Pokémon, si este Pokémon está en el Puesto Activo, pon 2 contadores de daño en cada uno de los Pokémon Básicos de tu rival.",
			pt: "Durante o Checape Pokémon, se este Pokémon estiver no Campo Ativo, coloque 2 contadores de dano em cada um dos Pokémon Básicos do seu oponente.",
			'es-mx': "Durante el Chequeo Pokémon, si este Pokémon está en el Puesto Activo, pon 2 contadores de daño en cada uno de los Pokémon Básicos de tu rival."
		}
	}],

	attacks: [{
		cost: ["Fighting", "Colorless", "Colorless", "Colorless"],

		name: {
			en: "Demolition Tackle",
			fr: "Tacle Démolition",
			de: "Zerstörungstackle",
			it: "Azione Demolitiva",
			es: "Placaje Demolición",
			pt: "Investida Demolidora",
			'es-mx': "Tacleada Demoledora"
		},

		effect: {
			en: "Discard an Energy from your opponent's Active Pokémon.",
			fr: "Défaussez une Énergie du Pokémon Actif de votre adversaire.",
			de: "Lege 1 Energie vom Aktiven Pokémon deines Gegners auf seinen Ablagestapel.",
			it: "Scarta un'Energia dal Pokémon attivo del tuo avversario.",
			es: "Descarta 1 Energía del Pokémon Activo de tu rival.",
			pt: "Descarte uma Energia do Pokémon Ativo do seu oponente.",
			'es-mx': "Descarta 1 Energía del Pokémon Activo de tu rival."
		},

		damage: 180
	}],

	retreat: 3,
	regulationMark: "I",

	variants: [
		{
			type: 'normal'
		},
		{
			type: 'reverse'
		},
		{
			type: 'holo',
			stamp: ["set-logo"]
		},
		{
			type: 'holo',
			stamp: ["set-logo", "staff"]
		},
	],

	thirdParty: {
		cardmarket: 825970
	}
}

export default card
