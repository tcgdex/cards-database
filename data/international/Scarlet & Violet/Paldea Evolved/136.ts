import { Card } from "models/database/card"
import Set from "../Paldea Evolved"

const card: Card = {
	dexId: [302],
	set: Set,

	name: {
		'fr-fr': "Ténéfix",
		'en-us': "Sableye",
		'es-es': "Sableye",
		'it-it': "Sableye",
		'pt-br': "Sableye",
		'de-de': "Zobiris"
	},

	rarity: "Rare",
	category: "Pokemon",
	hp: 70,
	types: ["Darkness"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			'fr-fr': "Mauvais Œil",
			'en-us': "Night Eyes",
			'es-es': "Ojos Nocturnos",
			'it-it': "Occhi della Notte",
			'pt-br': "Olhos da Noite",
			'de-de': "Nachtaugen"
		},

		effect: {
			'fr-fr': "Le Pokémon Actif de votre adversaire est maintenant Endormi.",
			'en-us': "Your opponent's Active Pokémon is now Asleep.",
			'es-es': "El Pokémon Activo de tu rival pasa a estar Dormido.",
			'it-it': "Il Pokémon attivo del tuo avversario viene addormentato.",
			'pt-br': "O Pokémon Ativo do seu oponente agora está Adormecido.",
			'de-de': "Das Aktive Pokémon deines Gegners schläft jetzt."
		}
	}, {
		cost: ["Darkness"],

		name: {
			'fr-fr': "Griffe Invisible",
			'en-us': "Unseen Claw",
			'es-es': "Garra Oculta",
			'it-it': "Artigli Invisibili",
			'pt-br': "Garra Despercebida",
			'de-de': "Klammheimliche Klaue"
		},

		effect: {
			'fr-fr': "Si le Pokémon Actif de votre adversaire est affecté par un État Spécial, cette attaque inflige 70 dégâts supplémentaires.",
			'en-us': "If your opponent's Active Pokémon is affected by a Special Condition, this attack does 70 more damage.",
			'es-es': "Si el Pokémon Activo de tu rival se ve afectado por una Condición Especial, este ataque hace 70 puntos de daño más.",
			'it-it': "Se il Pokémon attivo del tuo avversario è influenzato da una condizione speciale, questo attacco infligge 70 danni in più.",
			'pt-br': "Se o Pokémon Ativo do seu oponente estiver afetado por uma Condição Especial, este ataque causará 70 pontos de dano a mais.",
			'de-de': "Wenn das Aktive Pokémon deines Gegners von einem Speziellen Zustand betroffen ist, fügt diese Attacke 70 Schadenspunkte mehr zu."
		},

		damage: "20+"
	}],

	weaknesses: [
		{
			type: "Grass",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "G",

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 715611,
				tcgplayer: 497632,
				cardtrader: 248793
			}
		},
		{
			type: 'holo',
			foil: 'cosmos',
			thirdParty: {
				cardmarket: 858717
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 715611,
				tcgplayer: 497632,
				cardtrader: 248793
			}
		},
	],

	illustrator: "Nagomi Nijo",

	description: {
		'en-us': "It dwells in the darkness of caves. It uses its sharp claws to dig up gems to nourish itself.",
	},
}

export default card
