import { Card } from '../../../interfaces'
import Set from '../Furious Fists'

const card: Card = {
	name: {
		en: "Klefki",
		fr: "Trousselin",
		es: "Klefki",
		it: "Klefki",
		pt: "Klefki",
		de: "Clavion"
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
				en: "Secret Key",
				fr: "Clé Secrète",
				es: "Llave Secreta",
				it: "Chiave Segreta",
				pt: "Chave Secreta",
				de: "Geheimschlüssel"
			},
			effect: {
				en: "Each of your Fairy Pokémon's Resistance is now -40.",
				fr: "La Résistance de chacun de vos Pokémon Fairy est maintenant -40.",
				es: "La Resistencia de cada uno de tus Pokémon Fairy pasa a ser -40.",
				it: "La resistenza di tutti i tuoi Pokémon Fairy è -40.",
				pt: "A Resistência de cada um dos seus Pokémon Fairy agora é -40.",
				de: "Die Resistenz jedes deiner Fairy-Pokémon ist jetzt -40."
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
				en: "Fairy Lock",
				fr: "Verrou Enchanté",
				es: "Cerrojo Feérico",
				it: "Blocco Fatato",
				pt: "Aprisionamento de Fada",
				de: "Feenschloss"
			},
			effect: {
				en: "The Defending Pokémon can't retreat during your opponent's next turn.",
				fr: "Le Pokémon Défenseur ne peut pas battre en retraite pendant le prochain tour de votre adversaire.",
				es: "El Pokémon Defensor no puede retirarse durante el próximo turno de tu rival.",
				it: "Durante il prossimo turno del tuo avversario, il Pokémon difensore non può ritirarsi.",
				pt: "O Pokémon Defensor não poderá recuar durante a próxima vez de jogar do seu oponente.",
				de: "Das Verteidigende Pokémon kann sich während des nächsten Zuges deines Gegners nicht zurückziehen."
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



}

export default card
