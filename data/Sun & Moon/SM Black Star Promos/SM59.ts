import { Card } from '../../../interfaces'
import Set from '../SM Black Star Promos'

const card: Card = {
	name: {
		en: "Marshadow GX",
		fr: "Marshadow GX",
		es: "Marshadow GX",
		it: "Marshadow GX",
		pt: "Marshadow GX",
		de: "Marshadow GX"
	},

	illustrator: "5ban Graphics",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		802,
	],

	hp: 150,

	types: [
		"Fighting",
	],

	suffix: "GX",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Shadow Hunt",
				fr: "Chasse Dans l’Ombre",
				es: "Caza Sombría",
				it: "Cacciaombra",
				pt: "Caça Sombria",
				de: "Schattenjagd"
			},
			effect: {
				en: "This Pokémon can use the attacks of any Basic Pokémon in your discard pile. (You still need the necessary Energy to use each attack.)",
				fr: "Ce Pokémon peut utiliser les attaques de n’importe quel Pokémon de base dans votre pile de défausse. (Vous avez toujours besoin de l’Énergie nécessaire pour utiliser chaque attaque.)",
				es: "Este Pokémon puede usar los ataques de cualquier Pokémon Básico en tu pila de descartes. (Sigues necesitando la Energía necesaria para usar cada ataque).",
				it: "Questo Pokémon può usare gli attacchi di qualsiasi Pokémon Base nella tua pila degli scarti. Devi comunque avere l’Energia necessaria per usare quegli attacchi.",
				pt: "Este Pokémon pode usar os ataques de qualquer Pokémon Básico na sua pilha de descarte (você ainda precisa da Energia necessária para usar cada ataque).",
				de: "Dieses Pokémon kann die Attacken 1 beliebigen Basis-Pokémon in deinem Ablagestapel einsetzen. (Du benötigst jedoch die jeweils für die Attacke notwendige Energie.)"
			},
		},
	],

	attacks: [
		{
			cost: [
				"Fighting",
				"Fighting",
				"Colorless",
			],
			name: {
				en: "Beatdown",
				fr: "Dérouillée",
				es: "Derrumbar",
				it: "Batosta",
				pt: "Abater",
				de: "Niederprügler"
			},

			damage: 120,

		},
		{
			cost: [
				"Fighting",
			],
			name: {
				en: "Peerless Hundred Blows GX",
				fr: "Cent Coups Incomparables GX",
				es: "Golpes Inigualables a Cientos GX",
				it: "Cento Colpi Ineguagliabili GX",
				pt: "Cem Golpes Inigualáveis GX",
				de: "Weg der hundert Hiebe GX"
			},
			effect: {
				en: "This attack does 50 damage times the amount of basic Energy attached to this Pokémon. (You can’t use more than 1 GX attack in a game.)",
				fr: "Cette attaque inflige 50 dégâts multipliés par le nombre d’Énergies de base attachées à ce Pokémon. (Vous ne pouvez utiliser qu’une attaque GX par partie.)",
				es: "Este ataque hace 50 puntos de daño por cada Energía Básica unida a este Pokémon. (No puedes usar más de 1 ataque GX en una partida).",
				it: "Questo attacco infligge 50 danni per ogni Energia base assegnata a questo Pokémon. Non puoi usare più di un attacco GX a partita.",
				pt: "Este ataque causa 50 pontos de dano vezes a quantidade de Energia básica ligada a este Pokémon (você não pode usar mais de 1 ataque GX por partida).",
				de: "Diese Attacke fügt 50 Schadenspunkte mal der Anzahl der an dieses Pokémon angelegten Basis-Energien zu. (Du kannst pro Spiel nur 1 GX-Attacke einsetzen.)"
			},
			damage: "50×",

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 1
}

export default card
