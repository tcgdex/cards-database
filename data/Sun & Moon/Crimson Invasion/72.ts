import { Card } from '../../../interfaces'
import Set from '../Crimson Invasion'

const card: Card = {
	name: {
		en: "Wigglytuff",
		fr: "Grodoudou",
		es: "Wigglytuff",
		it: "Wigglytuff",
		pt: "Wigglytuff",
		de: "Knuddeluff"
	},
	illustrator: "0313",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		40,
	],
	hp: 120,
	types: [
		"Fairy",
	],
	evolveFrom: {
		en: "Jigglypuff",
		fr: "Rondoudou",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Hypnoblast",
				fr: "Hypnoblast",
				es: "Hipnorrayo",
				it: "Ipnobomba",
				pt: "Borrifada Hipnótica",
				de: "Hypnoschuss"
			},
			effect: {
				en: "Your opponent’s Active Pokémon is now Asleep.",
				fr: "Le Pokémon Actif de votre adversaire est maintenant Endormi.",
				es: "El Pokémon Activo de tu rival pasa a estar Dormido.",
				it: "Il Pokémon attivo del tuo avversario viene addormentato.",
				pt: "O Pokémon Ativo do seu oponente agora está Adormecido.",
				de: "Das Aktive Pokémon deines Gegners schläft jetzt."
			},
			damage: 30,

		},
		{
			cost: [
				"Fairy",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Punishing Slap",
				fr: "Frappe Éprouvante",
				es: "Bofetón Castigador",
				it: "Sberla Punitiva",
				pt: "Tapa de Punição",
				de: "Strafende Klatsche"
			},
			effect: {
				en: "If any of your opponent’s Pokémon have any Darkness Energy attached to them, this attack does 60 more damage.",
				fr: "Si de l’Énergie Darkness est attachée à l’un des Pokémon de votre adversaire, cette attaque inflige 60 dégâts supplémentaires.",
				es: "Si alguno de los Pokémon de tu rival tiene alguna Energía Darkness unida a él, este ataque hace 60 puntos de daño más.",
				it: "Se uno qualsiasi dei Pokémon del tuo avversario ha delle Energie Darkness assegnate, questo attacco infligge 60 danni in più.",
				pt: "Se algum dos Pokémon do seu oponente tiver alguma Energia Darkness ligada a ele, este ataque causará 60 pontos de dano a mais.",
				de: "Wenn an die Pokémon deines Gegners mindestens 1 Darkness-Energie angelegt ist, fügt diese Attacke 60 Schadenspunkte mehr zu."
			},
			damage: "60+",

		},
	],
	weaknesses: [
		{
			type: "Metal",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Darkness",
			value: "-20"
		},
	],
	retreat: 2,



}

export default card
