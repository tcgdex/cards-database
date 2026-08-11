import { Card } from "models/database/card"
import Set from "../Mega Evolution"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Pyroar",
		'fr-fr': "Némélios",
		'de-de': "Pyroleo",
		'it-it': "Pyroar",
		'es-es': "Pyroar",
		'pt-br': "Pyroar",
		'es-mx': "Pyroar"
	},

	illustrator: "KEIICHIRO ITO",
	rarity: "Uncommon",
	category: "Pokemon",
	hp: 130,
	types: ["Fire"],
	evolveFrom: {
		'en-us': "Litleo",
		'fr-fr': "Hélionceau",
		'de-de': "Leufeo",
		'it-it': "Litleo",
		'es-es': "Litleo",
		'pt-br': "Litleo",
		'es-mx': "Litleo"
	},
	stage: "Stage1",
	dexId: [668],

	abilities: [{
		type: "Ability",

		name: {
			'en-us': "Intimidating Fang",
			'fr-fr': "Croc Intimidant",
			'de-de': "Hammerhauer",
			'it-it': "Spaventazanna",
			'es-es': "Colmillo Intimidatorio",
			'pt-br': "Presa Intimidadora",
			'es-mx': "Colmillo Intimidante"
		},

		effect: {
			'en-us': "As long as this Pokémon is in the Active Spot, attacks used by your opponent's Active Pokémon do 30 less damage (before applying Weakness and Resistance).",
			'fr-fr': "Tant que ce Pokémon est sur le Poste Actif, les attaques utilisées par le Pokémon Actif de votre adversaire infligent 30 dégâts de moins (avant application de la Faiblesse et de la Résistance).",
			'de-de': "Solange dieses Pokémon in der Aktiven Position ist, fügen die vom Aktiven Pokémon deines Gegners eingesetzten Attacken 30 Schadenspunkte weniger zu (bevor Schwäche und Resistenz verrechnet werden).",
			'it-it': "Fintanto che questo Pokémon è in posizione attiva, gli attacchi usati dal Pokémon attivo del tuo avversario infliggono 30 danni in meno, prima di aver applicato debolezza e resistenza.",
			'es-es': "Mientras este Pokémon esté en el Puesto Activo, los ataques usados por el Pokémon Activo de tu rival hacen 30 puntos de daño menos (antes de aplicar Debilidad y Resistencia).",
			'pt-br': "Enquanto este Pokémon estiver no Campo Ativo, os ataques usados pelo Pokémon Ativo do seu oponente causarão 30 pontos de dano a menos (antes de aplicar Fraqueza e Resistência).",
			'es-mx': "Mientras este Pokémon esté en el Puesto Activo, los ataques usados por el Pokémon Activo de tu rival hacen 30 puntos de daño menos (antes de aplicar Debilidad y Resistencia)."
		}
	}],

	attacks: [{
		cost: ["Fire", "Colorless", "Colorless"],

		name: {
			'en-us': "Searing Flame",
			'fr-fr': "Flammes Calcinantes",
			'de-de': "Sengende Flammen",
			'it-it': "Fiamme Ustionanti",
			'es-es': "Llama Abrasadora",
			'pt-br': "Chama Cauterizante",
			'es-mx': "Llama Abrasadora"
		},

		effect: {
			'en-us': "Your opponent's Active Pokémon is now Burned.",
			'fr-fr': "Le Pokémon Actif de votre adversaire est maintenant Brûlé.",
			'de-de': "Das Aktive Pokémon deines Gegners ist jetzt verbrannt.",
			'it-it': "Il Pokémon attivo del tuo avversario viene bruciato.",
			'es-es': "El Pokémon Activo de tu rival pasa a estar Quemado.",
			'pt-br': "O Pokémon Ativo do seu oponente agora está Queimado.",
			'es-mx': "El Pokémon Activo de tu rival ahora está Quemado."
		},

		damage: 70
	}],

	weaknesses: [
		{
			type: "Water",
			value: "×2",
		},
	],
	retreat: 2,
	regulationMark: "I",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 851095,
				tcgplayer: 654363
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 851095,
				tcgplayer: 654363
			}
		},
	],
}

export default card
