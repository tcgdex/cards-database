import { Card } from 'models/database/card'
import Set from '../Furious Fists'

const card: Card = {
	name: {
		'en-us': "Klefki",
		'fr-fr': "Trousselin",
		'es-es': "Klefki",
		'it-it': "Klefki",
		'pt-br': "Klefki",
		'de-de': "Clavion"
	},

	illustrator: "5ban Graphics",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		707,
	],

	hp: 60,

	types: [
		"Fairy",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: {
				'en-us': "Secret Key",
				'fr-fr': "Clé Secrète",
				'es-es': "Llave Secreta",
				'it-it': "Chiave Segreta",
				'pt-br': "Chave Secreta",
				'de-de': "Geheimschlüssel"
			},
			effect: {
				'en-us': "Each of your Fairy Pokémon's Resistance is now -40.",
				'fr-fr': "La Résistance de chacun de vos Pokémon Fairy est maintenant -40.",
				'es-es': "La Resistencia de cada uno de tus Pokémon Fairy pasa a ser -40.",
				'it-it': "La resistenza di tutti i tuoi Pokémon Fairy è -40.",
				'pt-br': "A Resistência de cada um dos seus Pokémon Fairy agora é -40.",
				'de-de': "Die Resistenz jedes deiner Fairy-Pokémon ist jetzt -40."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Fairy",
				"Colorless",
			],
			name: {
				'en-us': "Fairy Lock",
				'fr-fr': "Verrou Enchanté",
				'es-es': "Cerrojo Feérico",
				'it-it': "Blocco Fatato",
				'pt-br': "Aprisionamento de Fada",
				'de-de': "Feenschloss"
			},
			effect: {
				'en-us': "The Defending Pokémon can't retreat during your opponent's next turn.",
				'fr-fr': "Le Pokémon Défenseur ne peut pas battre en retraite pendant le prochain tour de votre adversaire.",
				'es-es': "El Pokémon Defensor no puede retirarse durante el próximo turno de tu rival.",
				'it-it': "Durante il prossimo turno del tuo avversario, il Pokémon difensore non può ritirarsi.",
				'pt-br': "O Pokémon Defensor não poderá recuar durante a próxima vez de jogar do seu oponente.",
				'de-de': "Das Verteidigende Pokémon kann sich während des nächsten Zuges deines Gegners nicht zurückziehen."
			},
			damage: 30,

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

	retreat: 1,

	description: {
		'en-us': "These key collectors threaten any attackers by fiercely jingling their keys at them.",
	},

	thirdParty: {
		cardmarket: 281737,
		tcgplayer: 92252
	}
}

export default card
