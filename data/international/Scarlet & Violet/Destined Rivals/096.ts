import { Card } from "models/database/card"
import Set from "../Destined Rivals"

const card: Card = {
	dexId: [248],
	set: Set,

	name: {
		'en-us': "Team Rocket's Tyranitar",
		'fr-fr': "Tyranocif de la Team Rocket",
		'de-de': "Team Rockets Despotar",
		'it-it': "Tyranitar del Team Rocket",
		'es-es': "Tyranitar del Team Rocket",
		'pt-br': "Tyranitar da Equipe Rocket",
		'es-mx': "Tyranitar del Equipo Rocket"
	},


	illustrator: "Ryuta Fuse",

	rarity: "Rare",
	category: "Pokemon",
	hp: 180,
	types: ["Fighting"],
	evolveFrom: {
		'en-us': "Team Rocket's Pupitar",
		'fr-fr': "Ymphect de la Team Rocket",
		'de-de': "Team Rockets Pupitar",
		'it-it': "Pupitar del Team Rocket",
		'es-es': "Pupitar del Team Rocket",
		'pt-br': "Pupitar da Equipe Rocket",
		'es-mx': "Pupitar del Equipo Rocket"
	},
	stage: "Stage2",

	abilities: [{
		type: "Ability",

		name: {
			'en-us': "Sand Stream",
			'fr-fr': "Sable Volant",
			'de-de': "Sandsturm",
			'it-it': "Sabbiafiume",
			'es-es': "Chorro Arena",
			'pt-br': "Fluxo de Areia",
			'es-mx': "Chorro de Arena"
		},

		effect: {
			'en-us': "During Pokémon Checkup, if this Pokémon is in the Active Spot, put 2 damage counters on each of your opponent's Basic Pokémon.",
			'fr-fr': "Pendant le Contrôle Pokémon, si ce Pokémon est sur le Poste Actif, placez 2 marqueurs de dégâts sur chacun des Pokémon de base de votre adversaire.",
			'de-de': "Lege beim Pokémon-Check, wenn dieses Pokémon in der Aktiven Position ist, 2 Schadensmarken auf jedes Basis-Pokémon deines Gegners.",
			'it-it': "Durante il controllo Pokémon, se questo Pokémon è in posizione attiva, metti due segnalini danno su ciascuno dei Pokémon Base del tuo avversario.",
			'es-es': "Durante el Chequeo Pokémon, si este Pokémon está en el Puesto Activo, pon 2 contadores de daño en cada uno de los Pokémon Básicos de tu rival.",
			'pt-br': "Durante o Checape Pokémon, se este Pokémon estiver no Campo Ativo, coloque 2 contadores de dano em cada um dos Pokémon Básicos do seu oponente.",
			'es-mx': "Durante el Chequeo Pokémon, si este Pokémon está en el Puesto Activo, pon 2 contadores de daño en cada uno de los Pokémon Básicos de tu rival."
		}
	}],

	attacks: [{
		cost: ["Fighting", "Colorless", "Colorless", "Colorless"],

		name: {
			'en-us': "Demolition Tackle",
			'fr-fr': "Tacle Démolition",
			'de-de': "Zerstörungstackle",
			'it-it': "Azione Demolitiva",
			'es-es': "Placaje Demolición",
			'pt-br': "Investida Demolidora",
			'es-mx': "Tacleada Demoledora"
		},

		effect: {
			'en-us': "Discard an Energy from your opponent's Active Pokémon.",
			'fr-fr': "Défaussez une Énergie du Pokémon Actif de votre adversaire.",
			'de-de': "Lege 1 Energie vom Aktiven Pokémon deines Gegners auf seinen Ablagestapel.",
			'it-it': "Scarta un'Energia dal Pokémon attivo del tuo avversario.",
			'es-es': "Descarta 1 Energía del Pokémon Activo de tu rival.",
			'pt-br': "Descarte uma Energia do Pokémon Ativo do seu oponente.",
			'es-mx': "Descarta 1 Energía del Pokémon Activo de tu rival."
		},

		damage: 180
	}],

	weaknesses: [
		{
			type: "Grass",
			value: "×2",
		},
	],
	retreat: 3,
	regulationMark: "I",

	variants: [
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 825969,
				tcgplayer: 630822
			}
		},
		{
			type: "holo",
			thirdParty: {
				cardmarket: 825969,
				tcgplayer: 630822
			}
		},
		{
			type: "holo",
			stamp: ["set-logo"],
			thirdParty: {
				cardmarket: 826181,
			}
		},
		{
			type: "normal",
			thirdParty: {
				cardmarket: 828102,
			}
		},
		{
			type: "holo",
			thirdParty: {
				cardmarket: 828209,
			}
		},
		{
			type: "holo",
			stamp: ["set-logo", "staff"],
			thirdParty: {
				cardmarket: 833948,
			}
		},
		{
			type: "holo",
			foil: "cosmos",
			thirdParty: {
				cardmarket: 862172,
			}
		},
	],
}

export default card
