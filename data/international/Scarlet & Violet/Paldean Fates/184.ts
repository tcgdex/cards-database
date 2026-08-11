import { Card } from "models/database/card"
import Set from "../Paldean Fates"

const card: Card = {
	dexId: [302],
	set: Set,

	name: {
		'en-us': "Sableye",
		'fr-fr': "Ténéfix",
		'es-es': "Sableye",
		'it-it': "Sableye",
		'pt-br': "Sableye",
		'de-de': "Zobiris"
	},

	rarity: "Shiny rare",
	category: "Pokemon",
	hp: 70,
	types: ["Darkness"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			'en-us': "Night Eyes",
			'fr-fr': "Mauvais Œil",
			'es-es': "Ojos Nocturnos",
			'it-it': "Occhi della Notte",
			'pt-br': "Olhos da Noite",
			'de-de': "Nachtaugen"
		},

		effect: {
			'en-us': "Your opponent's Active Pokémon is now Asleep.",
			'fr-fr': "Le Pokémon Actif de votre adversaire est maintenant Endormi.",
			'es-es': "El Pokémon Activo de tu rival pasa a estar Dormido.",
			'it-it': "Il Pokémon attivo del tuo avversario viene addormentato.",
			'pt-br': "O Pokémon Ativo do seu oponente agora está Adormecido.",
			'de-de': "Das Aktive Pokémon deines Gegners schläft jetzt."
		}
	}, {
		cost: ["Darkness"],

		name: {
			'en-us': "Unseen Claw",
			'fr-fr': "Griffe Invisible",
			'es-es': "Garra Oculta",
			'it-it': "Artigli Invisibili",
			'pt-br': "Garra Despercebida",
			'de-de': "Klammheimliche Klaue"
		},

		effect: {
			'en-us': "If your opponent's Active Pokémon is affected by a Special Condition, this attack does 70 more damage.",
			'fr-fr': "Si le Pokémon Actif de votre adversaire est affecté par un État Spécial, cette attaque inflige 70 dégâts supplémentaires.",
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
				cardmarket: 751723,
				tcgplayer: 535122,
				cardtrader: 274369
			}
		},
	],

	illustrator: "nagimiso",

	description: {
		'en-us': "It dwells in the darkness of caves. It uses its sharp claws to dig up gems to nourish itself.",
	},

}

export default card
