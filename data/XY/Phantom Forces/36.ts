import { Card } from '../../../interfaces'
import Set from '../Phantom Forces'

const card: Card = {
	name: {
		en: "Wobbuffet",
		fr: "Qulbutoké",
		es: "Wobbuffet",
		it: "Wobbuffet",
		pt: "Wobbuffet",
		de: "Woingenau"
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
				en: "Bide Barricade",
				fr: "Épreuve d'Endurance",
				es: "Barricada Paciencia",
				it: "Muro di Pazienza",
				pt: "Barricada Permanente",
				de: "Sperrzeit"
			},
			effect: {
				en: "As long as this Pokémon is your Active Pokémon, each Pokémon in play, in each player's hand, and in each player's discard pile has no Abilities (except for Psychic Pokémon).",
				fr: "Tant que ce Pokémon est votre Pokémon Actif, chacun des Pokémon en jeu, dans la main de chaque joueur et dans la pile de défausse de chaque joueur, n'a pas de talent (à part les Pokémon Psychic).",
				es: "Mientras este Pokémon sea tu Pokémon Activo, los Pokémon en juego, en la mano de cada jugador y en la pila de descartes de cada jugador no tienen ninguna habilidad (excepto los Pokémon Psychic).",
				it: "Fintanto che questo Pokémon è il tuo Pokémon attivo, le abilità dei Pokémon in gioco, in mano ai giocatori o nelle loro pile degli scarti non hanno più effetto (a eccezione dei Pokémon Psychic).",
				pt: "Enquanto este Pokémon for seu Pokémon Ativo, nenhum dos Pokémon em jogo na mão de cada jogador, e também na pilha de descarte de cada jogador, terá Habilidades (exceto Pokémon Psychic).",
				de: "Solang dieses Pokémon dein Aktives Pokémon ist, hat jedes Pokémon im Spiel, in der Hand beider Spieler oder im Ablagestapel beider Spieler keine Fähigkeit (außer Psychic-Pokémon)."
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
				en: "Psychic Assault",
				fr: "Assaut Psychique",
				es: "Asalto Psíquico",
				it: "Psicoassalto",
				pt: "Ataque Psíquico",
				de: "Psycho-Ansturm"
			},
			effect: {
				en: "This attack does 10 more damage for each damage counter on your opponent's Active Pokémon.",
				fr: "Cette attaque inflige 10 dégâts supplémentaires pour chaque marqueur de dégâts placé sur le Pokémon Actif de votre adversaire.",
				es: "Este ataque hace 10 puntos de daño más por cada contador de daño en el Pokémon Activo de tu rival.",
				it: "Questo attacco infligge 10 danni in più per ogni segnalino danno presente sul Pokémon attivo del tuo avversario.",
				pt: "Esse ataque causa 10 de danos adicionais para cada contador de danos no Pokémon Ativo do seu oponente.",
				de: "Dieser Angriff fügt 10 weitere Schadenspunkte für jede Schadensmarke auf dem Aktiven Pokémon deines Gegners zu."
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



}

export default card
