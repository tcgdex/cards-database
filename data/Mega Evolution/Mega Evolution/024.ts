import { Card } from "../../../interfaces"
import Set from "../Mega Evolution"

const card: Card = {
	set: Set,

	name: {
		en: "Pyroar",
		fr: "Némélios",
		de: "Pyroleo",
		it: "Pyroar",
		es: "Pyroar",
		pt: "Pyroar",
		'es-mx': "Pyroar"
	},

	illustrator: "KEIICHIRO ITO",
	rarity: "Uncommon",
	category: "Pokemon",
	hp: 130,
	types: ["Fire"],
	stage: "Stage1",
	dexId: [668],

	abilities: [{
		type: "Ability",

		name: {
			en: "Intimidating Fang",
			fr: "Croc Intimidant",
			de: "Hammerhauer",
			it: "Spaventazanna",
			es: "Colmillo Intimidatorio",
			pt: "Presa Intimidadora",
			'es-mx': "Colmillo Intimidante"
		},

		effect: {
			en: "As long as this Pokémon is in the Active Spot, attacks used by your opponent's Active Pokémon do 30 less damage (before applying Weakness and Resistance).",
			fr: "Tant que ce Pokémon est sur le Poste Actif, les attaques utilisées par le Pokémon Actif de votre adversaire infligent 30 dégâts de moins (avant application de la Faiblesse et de la Résistance).",
			de: "Solange dieses Pokémon in der Aktiven Position ist, fügen die vom Aktiven Pokémon deines Gegners eingesetzten Attacken 30 Schadenspunkte weniger zu (bevor Schwäche und Resistenz verrechnet werden).",
			it: "Fintanto che questo Pokémon è in posizione attiva, gli attacchi usati dal Pokémon attivo del tuo avversario infliggono 30 danni in meno, prima di aver applicato debolezza e resistenza.",
			es: "Mientras este Pokémon esté en el Puesto Activo, los ataques usados por el Pokémon Activo de tu rival hacen 30 puntos de daño menos (antes de aplicar Debilidad y Resistencia).",
			pt: "Enquanto este Pokémon estiver no Campo Ativo, os ataques usados pelo Pokémon Ativo do seu oponente causarão 30 pontos de dano a menos (antes de aplicar Fraqueza e Resistência).",
			'es-mx': "Mientras este Pokémon esté en el Puesto Activo, los ataques usados por el Pokémon Activo de tu rival hacen 30 puntos de daño menos (antes de aplicar Debilidad y Resistencia)."
		}
	}],

	attacks: [{
		cost: ["Fire", "Colorless", "Colorless"],

		name: {
			en: "Searing Flame",
			fr: "Flammes Calcinantes",
			de: "Sengende Flammen",
			it: "Fiamme Ustionanti",
			es: "Llama Abrasadora",
			pt: "Chama Cauterizante",
			'es-mx': "Llama Abrasadora"
		},

		effect: {
			en: "Your opponent's Active Pokémon is now Burned.",
			fr: "Le Pokémon Actif de votre adversaire est maintenant Brûlé.",
			de: "Das Aktive Pokémon deines Gegners ist jetzt verbrannt.",
			it: "Il Pokémon attivo del tuo avversario viene bruciato.",
			es: "El Pokémon Activo de tu rival pasa a estar Quemado.",
			pt: "O Pokémon Ativo do seu oponente agora está Queimado.",
			'es-mx': "El Pokémon Activo de tu rival ahora está Quemado."
		},

		damage: 70
	}],

	retreat: 2,
	regulationMark: "I",

	thirdParty: {
		tcgplayer: 654363
	}
}

export default card