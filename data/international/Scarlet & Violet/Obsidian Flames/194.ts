import { Card } from "models/database/card"
import Set from "../Obsidian Flames"

const card: Card = {
	set: Set,

	name: {
		'fr-fr': "Laïm",
		'en-us': "Ryme",
		'es-es': "Lima",
		'it-it': "Lima",
		'pt-br': "Citrina",
		'de-de': "Etta"
	},

	rarity: "Common",
	category: "Trainer",

	effect: {
		'fr-fr': "Piochez 3 cartes. Envoyez le Pokémon Actif de l'adversaire sur le Banc. (Votre adversaire choisit le nouveau Pokémon Actif.)",
		'en-us': "Draw 3 cards. Switch out your opponent's Active Pokémon to the Bench. (Your opponent chooses the new Active Pokémon.)",
		'es-es': "Roba 3 cartas. Mueve el Pokémon Activo de tu rival a la Banca. (Tu rival elige el nuevo Pokémon Activo).",
		'it-it': "Pesca tre carte. Sposta il Pokémon attivo del tuo avversario nella sua panchina. Il tuo avversario sceglie il nuovo Pokémon attivo.",
		'pt-br': "Compre 3 cartas. Mande o Pokémon Ativo do seu oponente para o Banco. (O seu oponente escolhe o novo Pokémon Ativo.)",
		'de-de': "Ziehe 3 Karten. Wechsle das Aktive Pokémon deines Gegners auf seine Bank aus. (Dein Gegner wählt das neue Aktive Pokémon.)"
	},

	trainerType: "Supporter",
	regulationMark: "G",

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 725274,
				tcgplayer: 509786,
				cardtrader: 256090
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 725274,
				tcgplayer: 509786,
				cardtrader: 256090
			}
		},
	],

	illustrator: "nagimiso",

	
}

export default card
