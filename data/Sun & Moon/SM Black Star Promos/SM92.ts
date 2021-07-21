import { Card } from '../../../interfaces'
import Set from '../SM Black Star Promos'

const card: Card = {
	name: {
		en: "Tapu Fini",
		fr: "Tokopisco",
		es: "Tapu Fini",
		it: "Tapu Fini",
		pt: "Tapu Fini",
		de: "Kapu-Kime"
	},
	illustrator: "Sanosuke Sakuma",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		787,
	],
	hp: 120,
	types: [
		"Water",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Water",
				"Colorless",
			],
			name: {
				en: "Water Pulse",
				fr: "Vibraqua",
				es: "Hidropulso",
				it: "Idropulsar",
				pt: "Pulso d’Água",
				de: "Aquawelle"
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
				"Water",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Shining Currents",
				fr: "Courants Scintillants",
				es: "Corrientes Brillantes",
				it: "Correnti Lucenti",
				pt: "Correntezas Luminescentes",
				de: "Schimmernde Gezeiten"
			},
			effect: {
				en: "If any of your Water Pokémon were healed during this turn, this attack does 60 more damage.",
				fr: "Si l’un de vos Pokémon Water a été soigné pendant ce tour, cette attaque inflige 60 dégâts supplémentaires.",
				es: "Si alguno de tus Pokémon Water fue curado durante este turno, este ataque hace 60 puntos de daño más.",
				it: "Se uno qualsiasi dei tuoi Pokémon Water è stato curato durante questo turno, questo attacco infligge 60 danni in più.",
				pt: "Se algum dos seus Pokémon Water forem curados durante esta vez de jogar, este ataque causará 60 pontos de dano a mais.",
				de: "Wenn mindestens 1 deiner Water Pokémon während dieses Zuges geheilt wurde, fügt diese Attacke 60 Schadenspunkte mehr zu."
			},
			damage: "60+",

		},
	],
	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 2,



}

export default card
