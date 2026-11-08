import { Card } from "models/database/card"
import Set from "../Surging Sparks"

const card: Card = {
	dexId: [82],
	set: Set,

	name: {
		'en-us': "Magneton",
		'fr-fr': "Magnéton",
		'es-es': "Magneton",
		'it-it': "Magneton",
		'pt-br': "Magneton",
		'de-de': "Magneton"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 100,
	types: ["Lightning"],
	evolveFrom: {
		'en-us': "Magnemite",
		'fr-fr': "Magnéti",
		'es-es': "Magnemite",
		'it-it': "Magnemite",
		'pt-br': "Magnemite",
		'de-de': "Magnetilo"
	},
	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			'en-us': "Overvolt Discharge",
			'fr-fr': "Décharge Survoltée",
			'es-es': "Descarga Sobretensión",
			'it-it': "Scarica di Sovratensione",
			'pt-br': "Descarga Supervoltaica",
			'de-de': "Hochspannungsentladung"
		},

		effect: {
			'en-us': "Once during your turn, you may attach up to 3 Basic Energy cards from your discard pile to your {L} Pokémon in any way you like. If you use this Ability, this Pokémon is Knocked Out.",
			'fr-fr': "Une fois pendant votre tour, vous pouvez attacher jusqu'à 3 cartes Énergie de base de votre pile de défausse à vos Pokémon {L}, comme il vous plaît. Si vous utilisez ce talent, ce Pokémon est mis K.O.",
			'es-es': "Una vez durante tu turno, puedes unir hasta 3 cartas de Energía Básica de tu pila de descartes a tus Pokémon {L} de la manera que desees. Si usas esta habilidad, este Pokémon queda Fuera de Combate.",
			'it-it': "Una sola volta durante il tuo turno, puoi assegnare ai tuoi Pokémon {L} fino a tre carte Energia base dalla tua pila degli scarti nel modo che preferisci. Se usi questa abilità, questo Pokémon viene messo KO.",
			'pt-br': "Uma vez durante o seu turno, você poderá ligar até 3 cartas de Energia Básica da sua pilha de descarte aos seus Pokémon {L} como desejar. Se você usar esta Habilidade, este Pokémon será Nocauteado.",
			'de-de': "Einmal während deines Zuges kannst du bis zu 3 Basis-Energiekarten aus deinem Ablagestapel beliebig an deine {L}-Pokémon anlegen. Wenn du diese Fähigkeit einsetzt, ist dieses Pokémon kampfunfähig."
		}
	}],

	attacks: [{
		cost: ["Lightning", "Colorless"],

		name: {
			'en-us': "Electric Ball",
			'fr-fr': "Boule de Foudre",
			'es-es': "Bola Eléctrica",
			'it-it': "Lamposfera",
			'pt-br': "Bola de Eletricidade",
			'de-de': "Stromball"
		},

		damage: 40
	}],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "H",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 794334,
				tcgplayer: 589993
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 794334,
				tcgplayer: 589993
			}
		},
		{
			type: "normal", 
			stamp: ["gym-challenge"]
		},
		{
			type: "normal", 
			stamp: ["player-rewards-program"]
		},
	],

	illustrator: "Nisota Niso",
	
}

export default card
