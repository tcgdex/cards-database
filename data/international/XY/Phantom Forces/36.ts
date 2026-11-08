import { Card } from 'models/database/card'
import Set from '../Phantom Forces'

const card: Card = {
	name: {
		'en-us': "Wobbuffet",
		'fr-fr': "Qulbutoké",
		'es-es': "Wobbuffet",
		'it-it': "Wobbuffet",
		'pt-br': "Wobbuffet",
		'de-de': "Woingenau"
	},

	illustrator: "sui",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		202,
	],

	hp: 110,

	types: [
		"Psychic",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: {
				'en-us': "Bide Barricade",
				'fr-fr': "Épreuve d'Endurance",
				'es-es': "Barricada Paciencia",
				'it-it': "Muro di Pazienza",
				'pt-br': "Barricada Permanente",
				'de-de': "Sperrzeit"
			},
			effect: {
				'en-us': "As long as this Pokémon is your Active Pokémon, each Pokémon in play, in each player's hand, and in each player's discard pile has no Abilities (except for Psychic Pokémon).",
				'fr-fr': "Tant que ce Pokémon est votre Pokémon Actif, chacun des Pokémon en jeu, dans la main de chaque joueur et dans la pile de défausse de chaque joueur, n'a pas de talent (à part les Pokémon Psychic).",
				'es-es': "Mientras este Pokémon sea tu Pokémon Activo, los Pokémon en juego, en la mano de cada jugador y en la pila de descartes de cada jugador no tienen ninguna habilidad (excepto los Pokémon Psychic).",
				'it-it': "Fintanto che questo Pokémon è il tuo Pokémon attivo, le abilità dei Pokémon in gioco, in mano ai giocatori o nelle loro pile degli scarti non hanno più effetto (a eccezione dei Pokémon Psychic).",
				'pt-br': "Enquanto este Pokémon for seu Pokémon Ativo, nenhum dos Pokémon em jogo na mão de cada jogador, e também na pilha de descarte de cada jogador, terá Habilidades (exceto Pokémon Psychic).",
				'de-de': "Solang dieses Pokémon dein Aktives Pokémon ist, hat jedes Pokémon im Spiel, in der Hand beider Spieler oder im Ablagestapel beider Spieler keine Fähigkeit (außer Psychic-Pokémon)."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Psychic",
				"Colorless",
			],
			name: {
				'en-us': "Psychic Assault",
				'fr-fr': "Assaut Psychique",
				'es-es': "Asalto Psíquico",
				'it-it': "Psicoassalto",
				'pt-br': "Ataque Psíquico",
				'de-de': "Psycho-Ansturm"
			},
			effect: {
				'en-us': "This attack does 10 more damage for each damage counter on your opponent's Active Pokémon.",
				'fr-fr': "Cette attaque inflige 10 dégâts supplémentaires pour chaque marqueur de dégâts placé sur le Pokémon Actif de votre adversaire.",
				'es-es': "Este ataque hace 10 puntos de daño más por cada contador de daño en el Pokémon Activo de tu rival.",
				'it-it': "Questo attacco infligge 10 danni in più per ogni segnalino danno presente sul Pokémon attivo del tuo avversario.",
				'pt-br': "Esse ataque causa 10 de danos adicionais para cada contador de danos no Pokémon Ativo do seu oponente.",
				'de-de': "Dieser Angriff fügt 10 weitere Schadenspunkte für jede Schadensmarke auf dem Aktiven Pokémon deines Gegners zu."
			},
			damage: "10+",

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 2,

	description: {
		'en-us': "It hates light and shock. If attacked, it inflates its body to build up its counterstrike.",
	},

	thirdParty: {
		cardmarket: 281842,
		tcgplayer: 94169
	}
}

export default card
