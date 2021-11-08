import { Card } from '../../../interfaces'
import Set from '../Sword & Shield'

const card: Card = {
	name: {
		en: "Sableye V",
		fr: "Ténéfix V",
		es: "Sableye V",
		it: "Sableye V",
		pt: "Sableye V",
		de: "Zobiris V"
	},

	illustrator: "Eske Yoshinob",
	rarity: "Ultra Rare",
	category: "Pokemon",
	set: Set,
	hp: 170,

	types: [
		"Darkness",
	],

	attacks: [
		{
			cost: [
				"Darkness",
			],
			name: {
				en: "Lode Search",
				fr: "Recherche du Filon",
				es: "Búsqueda Filón",
				it: "Ricerca Giacimento",
				pt: "Buscar Minérios",
				de: "Juwelensuche"
			},
			effect: {
				en: "Put a Trainer card from your discard pile into your hand.",
				fr: "Ajoutez à votre main une carte Dresseur de votre pile de défausse.",
				es: "Pon 1 carta de Entrenador de tu pila de descartes en tu mano.",
				it: "Prendi una carta Allenatore dalla tua pila degli scarti e aggiungila a quelle che hai in mano.",
				pt: "Coloque uma carta de Treinador da sua pilha de descarte na sua mão.",
				de: "Nimm 1 Trainerkarte aus deinem Ablagestapel auf deine Hand."
			},

		},
		{
			cost: [
				"Darkness",
				"Darkness",
			],
			name: {
				en: "Crazy Claws",
				fr: "Griffes Folles",
				es: "Garras Locas",
				it: "Artigli Folli",
				pt: "Garras Desgovernadas",
				de: "Verrückte Krallen"
			},
			effect: {
				en: "This attack does 60 more damage for each damage counter on your opponent's Active Pokémon.",
				fr: "Cette attaque inflige 60 dégâts supplémentaires pour chaque marqueur de dégâts sur le Pokémon Actif de votre adversaire.",
				es: "Este ataque hace 60 puntos de daño más por cada contador de daño en el Pokémon Activo de tu rival.",
				it: "Questo attacco infligge 60 danni in più per ogni segnalino danno presente sul Pokémon attivo del tuo avversario.",
				pt: "Este ataque causa 60 pontos de dano a mais para cada contador de dano no Pokémon Ativo do seu oponente.",
				de: "Diese Attacke fügt für jede Schadensmarke auf dem Aktiven Pokémon deines Gegners 60 Schadenspunkte mehr zu."
			},
			damage: "10+",

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 2,
	regulationMark: "D",

	variants: {
		normal: false,
		reverse: false,
		holo: true,
		firstEdition: false
	},

	stage: "Basic",
	suffix: "V",
	dexId: [302]
}

export default card
