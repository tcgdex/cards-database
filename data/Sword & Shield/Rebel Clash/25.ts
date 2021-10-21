import { Card } from '../../../interfaces'
import Set from '../Rebel Clash'

const card: Card = {
	name: {
		en: "Ninetales",
		fr: "Feunard",
		es: "Ninetales",
		it: "Ninetales",
		pt: "Ninetales",
		de: "Vulnona"
	},

	illustrator: "AKIRA EGAWA",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	evolveFrom: {
		en: "Vulpix",
		fr: "Goupix",
		es: "Vulpix",
		it: "Vulpix",
		pt: "Vulpix",
		de: "Vulpix"
	},

	attacks: [
		{
			cost: [
				"Fire",
			],
			name: {
				en: "Hex",
				fr: "Châtiment",
				es: "Infortunio",
				it: "Sciagura",
				pt: "Feitiço",
				de: "Bürde"
			},
			effect: {
				en: "If your opponent's Active Pokémon is affected by a Special Condition, this attack does 90 more damage.",
				fr: "Si le Pokémon Actif de votre adversaire est affecté par un État Spécial, cette attaque inflige 90 dégâts supplémentaires.",
				es: "Si el Pokémon Activo de tu rival se ve afectado por una Condición Especial, este ataque hace 90 puntos de daño más.",
				it: "Se il Pokémon attivo del tuo avversario è influenzato da una condizione speciale, questo attacco infligge 90 danni in più.",
				pt: "Se o Pokémon Ativo do seu oponente estiver afetado por uma Condição Especial, este ataque causará 90 pontos de dano a mais.",
				de: "Wenn das Aktive Pokémon deines Gegners von einem Speziellen Zustand betroffen ist, fügt diese Attacke 90 Schadenspunkte mehr zu."
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
				en: "Flickering Flames",
				fr: "Flammes Vacillantes",
				es: "Llamas Titilantes",
				it: "Guizzafiamme",
				pt: "Chamas Tremeluzentes",
				de: "Züngelnde Flammen"
			},
			effect: {
				en: "Your opponent's Active Pokémon is now Asleep.",
				fr: "Le Pokémon Actif de votre adversaire est maintenant Endormi.",
				es: "El Pokémon Activo de tu rival pasa a estar Dormido.",
				it: "Il Pokémon attivo del tuo avversario viene addormentato.",
				pt: "O Pokémon Ativo do seu oponente agora está Adormecido.",
				de: "Das Aktive Pokémon deines Gegners schläft jetzt."
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

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	},

	stage: "Stage1",

	description: {
		en: "It is said to live 1,000 years, and each of its tails is loaded with supernatural powers."
	}
}

export default card
