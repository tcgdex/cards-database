import { Card } from '../../../interfaces'
import Set from '../Dragons Exalted'

const card: Card = {
	name: {
		en: "Mew-EX",
		fr: "Mew-EX",
		es: "Mew-EX",
		it: "Mew-EX",
		pt: "Mew-EX",
		de: "Mew-EX"
	},
	illustrator: "Eske Yoshinob",
	rarity: "Rare",
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
				en: "Versatile",
				fr: "Polyvalent",
				es: "Versátil",
				it: "Versatile",
				pt: "Versátil",
				de: "Anpassungsfähigkeit"
			},
			effect: {
				en: "This Pokémon can use the attacks of any Pokémon in play (both yours and your opponent’s). (You still need the necessary Energy to use each attack.)",
				fr: "Ce Pokémon peut utiliser les attaques de n’importe quel Pokémon en jeu (les vôtres et ceux de votre adversaire). (Vous avez toujours besoin de l’Énergie nécessaire pour utiliser chaque attaque.)",
				es: "Este Pokémon puede usar los ataques de cualquier Pokémon en juego (tanto tuyos como de tu rival). (Sigues necesitando la Energía necesaria para usar cada ataque.)",
				it: "Questo Pokémon può usare gli attacchi di tutti i Pokémon in gioco, sia tuoi che del tuo avversario. Devi comunque avere l’Energia necessaria per usare quegli attacchi.",
				pt: "Este Pokémon pode usar os ataques de qualquer Pokémon em jogo (tanto os seus quanto os de seu oponente). (Você ainda precisa da Energia necessária para usar cada ataque.)",
				de: "Dieses Pokémon kann die Angriffe aller Pokémon im Spiel (deiner und der deines Gegners) einsetzen. (Du benötigst jedoch die jeweils für den Angriff notwendige Energie.)"
			},
		},
	],
	attacks: [
		{
			cost: [
				"Psychic",
			],
			name: {
				en: "Replace",
				fr: "Repositionnement",
			},
			effect: {
				en: "Move as many Energy attached to your Pokémon to your other Pokémon in any way you like.",
				fr: "Déplacez autant d'Énergies attachées à vos Pokémon que vous voulez vers vos autres Pokémon, de la manière que vous voulez.",
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
