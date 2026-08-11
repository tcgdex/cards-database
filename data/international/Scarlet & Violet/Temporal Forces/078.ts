import { Card } from "models/database/card"
import Set from "../Temporal Forces"

const card: Card = {
	dexId: [987],
	set: Set,

	name: {
		'en-us': "Flutter Mane",
		'fr-fr': "Flotte-Mèche",
		'es-es': "Melenaleteo",
		'it-it': "Crinealato",
		'pt-br': "Juba Sopro",
		'de-de': "Flatterhaar"
	},

	rarity: "Rare",
	category: "Pokemon",
	hp: 90,
	types: ["Psychic"],
	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			'en-us': "Midnight Fluttering",
			'fr-fr': "Flottement de Minuit",
			'es-es': "Aleteo de Medianoche",
			'it-it': "Nottealata",
			'pt-br': "Sopro da Meia-noite",
			'de-de': "Mitternachtsflattern"
		},

		effect: {
			'en-us': "As long as this Pokémon is in the Active Spot, your opponent's Active Pokémon has no Abilities, except for Midnight Fluttering.",
			'fr-fr': "Tant que ce Pokémon est sur le Poste Actif, le Pokémon Actif de votre adversaire n'a pas de talent, à l'exception de Flottement de Minuit.",
			'es-es': "Mientras este Pokémon esté en el Puesto Activo, el Pokémon Activo de tu rival no tiene ninguna habilidad, excepto Aleteo de Medianoche.",
			'it-it': "Fintanto che questo Pokémon è in posizione attiva, il Pokémon attivo del tuo avversario non ha abilità, a eccezione di Nottealata.",
			'pt-br': "Enquanto este Pokémon estiver no Campo Ativo, o Pokémon Ativo do seu oponente não terá Habilidades, exceto por Sopro da Meia-noite.",
			'de-de': "Solange dieses Pokémon in der Aktiven Position ist, hat das Aktive Pokémon deines Gegners keine Fähigkeiten, außer Mitternachtsflattern."
		}
	}],

	attacks: [{
		cost: ["Colorless", "Colorless", "Colorless"],

		name: {
			'en-us': "Hex Hurl",
			'fr-fr': "Lancer de Malédictions",
			'es-es': "Lanzamiento Maléfico",
			'it-it': "Scagliasciagura",
			'pt-br': "Lançar Feitiço",
			'de-de': "Unheilsschleuder"
		},

		effect: {
			'en-us': "Put 2 damage counters on your opponent's Benched Pokémon in any way you like.",
			'fr-fr': "Placez 2 marqueurs de dégâts sur les Pokémon de Banc de votre adversaire comme il vous plaît.",
			'es-es': "Pon 2 contadores de daño en los Pokémon en Banca de tu rival de la manera que desees.",
			'it-it': "Metti due segnalini danno sui Pokémon nella panchina del tuo avversario nel modo che preferisci.",
			'pt-br': "Coloque 2 contadores de dano nos Pokémon no Banco do seu oponente como desejar.",
			'de-de': "Lege 2 Schadensmarken beliebig auf die Pokémon auf der Bank deines Gegners."
		},

		damage: 90
	}],

	weaknesses: [
		{
			type: "Metal",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "H",

	description: {
		'en-us': "This Pokémon has characteristics similar to those of Flutter Mane, a creature mentioned in a certain book.",
	},

	variants: [
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 760708,
				tcgplayer: 542822
			}
		},
		{
			type: "holo",
			thirdParty: {
				cardmarket: 760708,
				tcgplayer: 542822
			}
		},
		{
			type: "holo",
			foil: "cosmos",
			thirdParty: {
				cardmarket: 761972,
			}
		},
	],

	illustrator: "kodama",

}

export default card
