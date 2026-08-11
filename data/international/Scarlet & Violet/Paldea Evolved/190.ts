import { Card } from "models/database/card"
import Set from "../Paldea Evolved"

const card: Card = {
	set: Set,

	name: {
		'fr-fr': "Énergie Propulsion",
		'en-us': "Jet Energy",
		'es-es': "Energía Propulsión",
		'it-it': "Energia Jet",
		'pt-br': "Energia a Jato",
		'de-de': "Jet-Energie"
	},

	rarity: "Uncommon",
	category: "Energy",

	effect: {
		'fr-fr': "Tant que cette carte est attachée à un Pokémon, elle fournit une Énergie {C}.\nLorsque vous attachez cette carte de votre main à l'un de vos Pokémon de Banc, échangez ce Pokémon-là contre votre Pokémon Actif.",
		'en-us': "As long as this card is attached to a Pokémon, it provides {C} Energy.\n\nWhen you attach this card from your hand to 1 of your Benched Pokémon, switch that Pokémon with your Active Pokémon.",
		'es-es': "Mientras esta carta esté unida a un Pokémon, proporciona 1 Energía {C}.\nCuando unas esta carta de tu mano a uno de tus Pokémon en Banca, cambia ese Pokémon por tu Pokémon Activo.",
		'it-it': "Fintanto che questa carta è assegnata a un Pokémon, fornisce Energia {C}.\nQuando assegni questa carta dalla tua mano a uno dei tuoi Pokémon in panchina, scambia quel Pokémon con il tuo Pokémon attivo.",
		'pt-br': "Enquanto esta carta estiver ligada a um Pokémon, ela fornecerá Energia {C}.\n\nQuando você ligar esta carta da sua mão a 1 dos seus Pokémon no Banco, troque aquele Pokémon pelo seu Pokémon Ativo.",
		'de-de': "Solange diese Karte an ein Pokémon angelegt ist, liefert sie {C}-Energie.\nWenn du diese Karte aus deiner Hand an 1 Pokémon auf deiner Bank anlegst, tausche jenes Pokémon gegen dein Aktives Pokémon aus."
	},

	energyType: "Special",
	regulationMark: "G",

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 715665,
				tcgplayer: 497563,
				cardtrader: 248846
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 715665,
				tcgplayer: 497563,
				cardtrader: 248846
			}
		},
	],

	
}

export default card
