import { Card } from 'models/database/card'
import Set from '../Dragons Exalted'

const card: Card = {
	name: {
		'en-us': "Mew-EX",
		'fr-fr': "Mew-EX",
		'es-es': "Mew-EX",
		'it-it': "Mew-EX",
		'pt-br': "Mew-EX",
		'de-de': "Mew-EX"
	},
	illustrator: "5ban Graphics",
	rarity: "Ultra Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		151,
	],
	hp: 120,
	types: [
		"Psychic",
	],


	suffix: "EX",
	abilities: [
		{
			type: "Ability",
			name: {
				'en-us': "Versatile",
				'fr-fr': "Polyvalent",
				'es-es': "Versátil",
				'it-it': "Versatile",
				'pt-br': "Versátil",
				'de-de': "Anpassungsfähigkeit"
			},
			effect: {
				'en-us': "This Pokémon can use the attacks of any Pokémon in play (both yours and your opponent’s). (You still need the necessary Energy to use each attack.)",
				'fr-fr': "Ce Pokémon peut utiliser les attaques de n’importe quel Pokémon en jeu (les vôtres et ceux de votre adversaire). (Vous avez toujours besoin de l’Énergie nécessaire pour utiliser chaque attaque.)",
				'es-es': "Este Pokémon puede usar los ataques de cualquier Pokémon en juego (tanto tuyos como de tu rival). (Sigues necesitando la Energía necesaria para usar cada ataque.)",
				'it-it': "Questo Pokémon può usare gli attacchi di tutti i Pokémon in gioco, sia tuoi che del tuo avversario. Devi comunque avere l’Energia necessaria per usare quegli attacchi.",
				'pt-br': "Este Pokémon pode usar os ataques de qualquer Pokémon em jogo (tanto os seus quanto os de seu oponente). (Você ainda precisa da Energia necessária para usar cada ataque.)",
				'de-de': "Dieses Pokémon kann die Angriffe aller Pokémon im Spiel (deiner und der deines Gegners) einsetzen. (Du benötigst jedoch die jeweils für den Angriff notwendige Energie.)"
			},
		},
	],
	attacks: [
		{
			cost: [
				"Psychic",
			],
			name: {
				'en-us': "Replace",
				'fr-fr': "Repositionnement",
			},
			effect: {
				'en-us': "Move as many Energy attached to your Pokémon to your other Pokémon in any way you like.",
				'fr-fr': "Déplacez autant d'Énergies attachées à vos Pokémon que vous voulez vers vos autres Pokémon, de la manière que vous voulez.",
			},

		},
	],
	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 1,



}

export default card
