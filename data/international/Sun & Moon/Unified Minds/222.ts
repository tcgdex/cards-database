import { Card } from 'models/database/card'
import Set from '../Unified Minds'

const card: Card = {
	name: {
		'en-us': "Mewtwo & Mew GX",
		'fr-fr': "Mewtwo et Mew GX",
		'es-es': "Mewtwo y Mew GX",
		'it-it': "Mewtwo e Mew GX",
		'pt-br': "Mewtwo e Mew GX",
		'de-de': "Mewtu & Mew GX"
	},

	illustrator: "5ban Graphics",
	rarity: "Ultra Rare",
	category: "Pokemon",
	set: Set,

	dexId: [150, 151],
	hp: 270,

	types: [
		"Psychic",
	],

	suffix: "TAG TEAM-GX",

	abilities: [
		{
			type: "Ability",
			name: {
				'en-us': "Perfection",
				'fr-fr': "Perfection",
				'es-es': "Perfección",
				'it-it': "Perfezione",
				'pt-br': "Perfeição",
				'de-de': "Perfektion"
			},
			effect: {
				'en-us': "This Pokémon can use the attacks of any Pokémon-GX or Pokémon-EX on your Bench or in your discard pile. (You still need the necessary Energy to use each attack.)",
				'fr-fr': "Ce Pokémon peut utiliser les attaques de n’importe quel Pokémon-GX ou Pokémon-EX sur votre Banc ou dans votre pile de défausse. (Vous avez toujours besoin de l’Énergie nécessaire pour utiliser chaque attaque.)",
				'es-es': "Este Pokémon puede usar los ataques de cualquier Pokémon-GX o Pokémon-EX en tu Banca o en tu pila de descartes. (Sigues necesitando la Energía necesaria para usar cada ataque).",
				'it-it': "Questo Pokémon può usare gli attacchi di qualsiasi Pokémon-GX o Pokémon-EX nella tua panchina o nella tua pila degli scarti. Devi comunque avere l’Energia necessaria per usare quegli attacchi.",
				'pt-br': "Este Pokémon pode usar os ataques de qualquer Pokémon-GX ou Pokémon-EX no seu Banco ou na sua pilha de descarte (você ainda precisa da Energia necessária para usar cada ataque).",
				'de-de': "Dieses Pokémon kann die Attacken 1 beliebigen Pokémon-GX oder Pokémon-EX auf deiner Bank oder in deinem Ablagestapel einsetzen. (Du benötigst jedoch die jeweils für die Attacke notwendige Energie.)"
			},
		},
	],

	attacks: [
		{
			cost: [
				"Psychic",
				"Psychic",
				"Colorless",
			],
			name: {
				'en-us': "Miraculous Duo GX",
				'fr-fr': "Duo Miraculeux GX",
				'es-es': "Dúo Milagroso GX",
				'it-it': "Duo Miracoloso GX",
				'pt-br': "Duo Milagroso GX",
				'de-de': "Wunderduo GX"
			},
			effect: {
				'en-us': "If this Pokémon has at least 1 extra Energy attached to it (in addition to this attack’s cost), heal all damage from all of your Pokémon. (You can’t use more than 1 GX attack in a game.)",
				'fr-fr': "Si au moins une Énergie supplémentaire est attachée à ce Pokémon (en plus du coût de cette attaque), soignez tous les dégâts de vos Pokémon. (Vous ne pouvez utiliser qu’une attaque GX par partie.)",
				'es-es': "Si este Pokémon tiene por lo menos 1 Energía adicional unida a él (además de las del coste de este ataque), cura todos los puntos de daño de todos tus Pokémon. (No puedes usar más de 1 ataque GX en una partida).",
				'it-it': "Se questo Pokémon ha almeno un’Energia extra assegnata, in aggiunta a quelle del costo di questo attacco, cura tutti i tuoi Pokémon da tutti i danni. Non puoi usare più di un attacco GX a partita.",
				'pt-br': "Se este Pokémon tiver pelo menos 1 Energia adicional ligada a ele (além do custo deste ataque), cure todo o dano de todos os seus Pokémon (você não pode usar mais de 1 ataque GX por partida).",
				'de-de': "Wenn an dieses Pokémon mindestens 1 extra Energie angelegt ist (zusätzlich zu den Kosten dieser Attacke), heile allen Schaden bei jedem deiner Pokémon. (Du kannst pro Spiel nur 1 GX-Attacke einsetzen.)"
			},
			damage: 200,

		},
		{
			cost: [
				"Psychic",
				"Psychic",
				"Colorless",
			],
			name: {
				'fr-fr': "Duo Miraculeux-GX",
			},
			effect: {
				'fr-fr': "Si au moins une Énergie supplémentaire est attachée à ce Pokémon (en plus du coût de cette attaque), soignez tous les dégâts de vos Pokémon. (Vous ne pouvez utiliser qu’une attaque GX par partie.)",
			},
			damage: 200,

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 2,

	thirdParty: {
		cardmarket: 388897,
		tcgplayer: 194998
	}
}

export default card
