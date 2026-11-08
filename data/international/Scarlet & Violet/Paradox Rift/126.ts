import { Card } from "models/database/card"
import Set from "../Paradox Rift"

const card: Card = {
	dexId: [385],
	set: Set,

	name: {
		'en-us': "Jirachi",
		'fr-fr': "Jirachi",
		'es-es': "Jirachi",
		'it-it': "Jirachi",
		'pt-br': "Jirachi",
		'de-de': "Jirachi"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 70,
	types: ["Metal"],
	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			'en-us': "Stellar Veil",
			'fr-fr': "Voile Stellaire",
			'es-es': "Velo Estelar",
			'it-it': "Stellavelo",
			'pt-br': "Véu Estelar",
			'de-de': "Sternenschleier"
		},

		effect: {
			'en-us': "Prevent all damage counters from being placed on your Benched Pokémon by effects of attacks used by your opponent's Basic Pokémon.",
			'fr-fr': "Empêchez que tout marqueur de dégâts ne soit placé sur vos Pokémon de Banc par les effets des attaques utilisées par les Pokémon de base de votre adversaire.",
			'es-es': "Se evita que tus Pokémon en Banca reciban contadores de daño por los efectos de los ataques usados por los Pokémon Básicos de tu rival.",
			'it-it': "Impedisci che vengano messi dei segnalini danno sui tuoi Pokémon in panchina per effetto degli attacchi usati dai Pokémon Base del tuo avversario.",
			'pt-br': "Previna todos os contadores de dano de serem colocados nos seus Pokémon no Banco pelos efeitos de ataques usados pelos Pokémon Básicos do seu oponente.",
			'de-de': "Verhindere das Platzieren aller Schadensmarken auf Pokémon auf deiner Bank durch Effekte der von Basis-Pokémon deines Gegners eingesetzten Attacken."
		}
	}],

	attacks: [{
		cost: ["Colorless"],

		name: {
			'en-us': "Charge Energy",
			'fr-fr': "Recharge Énergétique",
			'es-es': "Cargar Energía",
			'it-it': "Caricaenergia",
			'pt-br': "Carga de Energia",
			'de-de': "Energielader"
		},

		effect: {
			'en-us': "Search your deck for up to 2 Basic Energy cards, reveal them, and put them into your hand. Then, shuffle your deck.",
			'fr-fr': "Cherchez dans votre deck jusqu'à 2 cartes Énergie de base, montrez-les, puis ajoutez-les à votre main. Mélangez ensuite votre deck.",
			'es-es': "Busca en tu baraja hasta 2 cartas de Energía Básica, enséñalas y ponlas en tu mano. Después, baraja las cartas de tu baraja.",
			'it-it': "Cerca nel tuo mazzo fino a due carte Energia base, mostrale e aggiungile alle carte che hai in mano. Poi rimischia le carte del tuo mazzo.",
			'pt-br': "Procure por até 2 cartas de Energia Básica no seu baralho, revele-as e coloque-as na sua mão. Em seguida, embaralhe o seu baralho.",
			'de-de': "Durchsuche dein Deck nach bis zu 2 Basis-Energiekarten, zeige sie deinem Gegner und nimm sie auf deine Hand. Mische anschließend dein Deck."
		}
	}],

	weaknesses: [
		{
			type: "Fire",
			value: "×2",
		},
	],
	resistances: [
		{
			type: "Grass",
			value: "-30",
		},
	],
	retreat: 1,
	regulationMark: "G",

	description: {
		'en-us': "It is said to have the ability to grant any wish for just one week every thousand years.",
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 740663,
				tcgplayer: 523803,
				cardtrader: 265227
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 740663,
				tcgplayer: 523803,
				cardtrader: 265227
			}
		},
	],

	illustrator: "Naoyo Kimura",

	
}

export default card
