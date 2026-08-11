import { Card } from 'models/database/card'
import Set from '../Rebel Clash'

const card: Card = {
	dexId: [38],

	name: {
		'en-us': "Ninetales",
		'fr-fr': "Feunard",
		'es-es': "Ninetales",
		'it-it': "Ninetales",
		'pt-br': "Ninetales",
		'de-de': "Vulnona"
	},

	illustrator: "AKIRA EGAWA",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	evolveFrom: {
		'en-us': "Vulpix",
		'fr-fr': "Goupix",
		'es-es': "Vulpix",
		'it-it': "Vulpix",
		'pt-br': "Vulpix",
		'de-de': "Vulpix"
	},

	attacks: [
		{
			cost: [
				"Fire",
			],
			name: {
				'en-us': "Hex",
				'fr-fr': "Châtiment",
				'es-es': "Infortunio",
				'it-it': "Sciagura",
				'pt-br': "Feitiço",
				'de-de': "Bürde"
			},
			effect: {
				'en-us': "If your opponent's Active Pokémon is affected by a Special Condition, this attack does 90 more damage.",
				'fr-fr': "Si le Pokémon Actif de votre adversaire est affecté par un État Spécial, cette attaque inflige 90 dégâts supplémentaires.",
				'es-es': "Si el Pokémon Activo de tu rival se ve afectado por una Condición Especial, este ataque hace 90 puntos de daño más.",
				'it-it': "Se il Pokémon attivo del tuo avversario è influenzato da una condizione speciale, questo attacco infligge 90 danni in più.",
				'pt-br': "Se o Pokémon Ativo do seu oponente estiver afetado por uma Condição Especial, este ataque causará 90 pontos de dano a mais.",
				'de-de': "Wenn das Aktive Pokémon deines Gegners von einem Speziellen Zustand betroffen ist, fügt diese Attacke 90 Schadenspunkte mehr zu."
			},
			damage: "30+",

		},
		{
			cost: [
				"Fire",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Flickering Flames",
				'fr-fr': "Flammes Vacillantes",
				'es-es': "Llamas Titilantes",
				'it-it': "Guizzafiamme",
				'pt-br': "Chamas Tremeluzentes",
				'de-de': "Züngelnde Flammen"
			},
			effect: {
				'en-us': "Your opponent's Active Pokémon is now Asleep.",
				'fr-fr': "Le Pokémon Actif de votre adversaire est maintenant Endormi.",
				'es-es': "El Pokémon Activo de tu rival pasa a estar Dormido.",
				'it-it': "Il Pokémon attivo del tuo avversario viene addormentato.",
				'pt-br': "O Pokémon Ativo do seu oponente agora está Adormecido.",
				'de-de': "Das Aktive Pokémon deines Gegners schläft jetzt."
			},
			damage: 90,

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],

	retreat: 1,
	hp: 120,
	types: ["Fire"],
	regulationMark: "D",


	stage: "Stage1",

	description: {
		'en-us': "It is said to live 1,000 years, and each of its tails is loaded with supernatural powers."
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 457573,
				tcgplayer: 213100
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 457573,
				tcgplayer: 213100
			}
		},
	],
}

export default card
