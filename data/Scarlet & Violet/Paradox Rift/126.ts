import { Card } from "../../../interfaces"
import Set from "../Paradox Rift"

const card: Card = {
	dexId: [385],
	set: Set,

	name: {
		en: "Jirachi",
		fr: "Jirachi",
		es: "Jirachi",
		it: "Jirachi",
		pt: "Jirachi",
		de: "Jirachi"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 70,
	types: ["Metal"],
	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			en: "Stellar Veil",
			fr: "Voile Stellaire",
			es: "Velo Estelar",
			it: "Stellavelo",
			pt: "Véu Estelar",
			de: "Sternenschleier"
		},

		effect: {
			en: "Prevent all damage counters from being placed on your Benched Pokémon by effects of attacks used by your opponent's Basic Pokémon.",
			fr: "Empêchez que tout marqueur de dégâts ne soit placé sur vos Pokémon de Banc par les effets des attaques utilisées par les Pokémon de base de votre adversaire.",
			es: "Se evita que tus Pokémon en Banca reciban contadores de daño por los efectos de los ataques usados por los Pokémon Básicos de tu rival.",
			it: "Impedisci che vengano messi dei segnalini danno sui tuoi Pokémon in panchina per effetto degli attacchi usati dai Pokémon Base del tuo avversario.",
			pt: "Previna todos os contadores de dano de serem colocados nos seus Pokémon no Banco pelos efeitos de ataques usados pelos Pokémon Básicos do seu oponente.",
			de: "Verhindere das Platzieren aller Schadensmarken auf Pokémon auf deiner Bank durch Effekte der von Basis-Pokémon deines Gegners eingesetzten Attacken."
		}
	}],

	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "Charge Energy",
			fr: "Recharge Énergétique",
			es: "Cargar Energía",
			it: "Caricaenergia",
			pt: "Carga de Energia",
			de: "Energielader"
		},

		effect: {
			en: "Search your deck for up to 2 Basic Energy cards, reveal them, and put them into your hand. Then, shuffle your deck.",
			fr: "Cherchez dans votre deck jusqu'à 2 cartes Énergie de base, montrez-les, puis ajoutez-les à votre main. Mélangez ensuite votre deck.",
			es: "Busca en tu baraja hasta 2 cartas de Energía Básica, enséñalas y ponlas en tu mano. Después, baraja las cartas de tu baraja.",
			it: "Cerca nel tuo mazzo fino a due carte Energia base, mostrale e aggiungile alle carte che hai in mano. Poi rimischia le carte del tuo mazzo.",
			pt: "Procure por até 2 cartas de Energia Básica no seu baralho, revele-as e coloque-as na sua mão. Em seguida, embaralhe o seu baralho.",
			de: "Durchsuche dein Deck nach bis zu 2 Basis-Energiekarten, zeige sie deinem Gegner und nimm sie auf deine Hand. Mische anschließend dein Deck."
		}
	}],

	retreat: 1,
	regulationMark: "G",

	variants: {
		holo: false
	},

	illustrator: "Naoyo Kimura",

	thirdParty: {
		cardmarket: 740663
	}
}

export default card