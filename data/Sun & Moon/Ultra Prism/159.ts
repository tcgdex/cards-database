import { Card } from '../../../interfaces'
import Set from '../Ultra Prism'

const card: Card = {
	name: {
		en: "Glaceon GX",
		fr: "Givrali GX",
		es: "Glaceon GX",
		it: "Glaceon GX",
		pt: "Glaceon GX",
		de: "Glaziola GX"
	},

	illustrator: "5ban Graphics",
	rarity: "Secret Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		471,
	],

	hp: 200,

	types: [
		"Water",
	],

	evolveFrom: {
		en: "Eevee",
		fr: "Évoli",
	},

	suffix: "GX",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Freezing Gaze",
				fr: "Regard Glacial",
				es: "Mirada Gélida",
				it: "Sguardo Glaciale",
				pt: "Olhar Congelante",
				de: "Gefrierblick"
			},
			effect: {
				en: "As long as this Pokémon is your Active Pokémon, your opponent’s Pokémon-GX and Pokémon-EX in play, in their hand, and in their discard pile have no Abilities, except for Freezing Gaze.",
				fr: "Tant que ce Pokémon est votre Pokémon Actif, les Pokémon-GX et les Pokémon-EX de votre adversaire en jeu, dans sa main et dans sa pile de défausse n’ont pas de talent, à l’exception de Regard Glacial.",
				es: "Mientras este Pokémon sea tu Pokémon Activo, los Pokémon-GX y Pokémon-EX de tu rival en juego, en su mano y en su pila de descartes no tienen ninguna habilidad, excepto Mirada Gélida.",
				it: "Fintanto che questo Pokémon è il tuo Pokémon attivo, le abilità dei Pokémon-GX e dei Pokémon-EX in gioco, nella mano e nella pila degli scarti del tuo avversario non hanno effetto, a eccezione di Sguardo Glaciale.",
				pt: "Enquanto este Pokémon for o seu Pokémon Ativo, os Pokémon-GX e Pokémon-EX em jogo, na mão e na pilha de descarte do seu oponente não têm Habilidades, exceto por Olhar Congelante.",
				de: "Solang dieses Pokémon dein Aktives Pokémon ist, haben die Pokémon-GX und Pokémon-EX deines Gegners im Spiel, auf seiner Hand und in seinem Ablagestapel keine Fähigkeiten, außer Gefrierblick."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Water",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Frost Bullet",
				fr: "Kunaï Givré",
				es: "Bala Helada",
				it: "Dardogelo",
				pt: "Projétil Congelado",
				de: "Frostprojektil"
			},
			effect: {
				en: "This attack does 30 damage to 1 of your opponent’s Benched Pokémon. (Don’t apply Weakness and Resistance for Benched Pokémon.)",
				fr: "Cette attaque inflige 30 dégâts à l’un des Pokémon de Banc de votre adversaire. (N’appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
				es: "Este ataque hace 30 puntos de daño a 1 de los Pokémon en Banca de tu rival. (No apliques Debilidad y Resistencia a los Pokémon en Banca).",
				it: "Questo attacco infligge 30 danni a uno dei Pokémon nella panchina del tuo avversario. Ricorda che non puoi applicare debolezza e resistenza ai Pokémon in panchina.",
				pt: "Este ataque causa 30 pontos de dano a 1 dos Pokémon no Banco do seu oponente (não aplique Fraqueza e Resistência aos Pokémon no Banco).",
				de: "Diese Attacke fügt 1 Pokémon auf der Bank deines Gegners 30 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)"
			},
			damage: 90,

		},
		{
			cost: [
				"Water",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Polar Spear GX",
				fr: "Lance Polaire-GX",
				es: "Lanza Polar GX",
				it: "Lancia Polare-GX",
				pt: "Lança Polar GX",
				de: "Polarspeer GX"
			},
			effect: {
				en: "This attack does 50 damage for each damage counter on your opponent’s Active Pokémon. (You can’t use more than 1 GX attack in a game.)",
				fr: "Cette attaque inflige 50 dégâts pour chaque marqueur de dégâts placé sur le Pokémon Actif de votre adversaire. (Vous ne pouvez utiliser qu’une attaque GX par partie.)",
				es: "Este ataque hace 50 puntos de daño por cada contador de daño en el Pokémon Activo de tu rival. (No puedes usar más de 1 ataque GX en una partida).",
				it: "Questo attacco infligge 50 danni per ogni segnalino danno sul Pokémon attivo del tuo avversario. Non puoi usare più di un attacco GX a partita.",
				pt: "Este ataque causa 50 pontos de dano para cada contador de dano no Pokémon Ativo do seu oponente (você não pode usar mais de 1 ataque GX por partida).",
				de: "Diese Attacke fügt 50 Schadenspunkte mal der Anzahl der Schadensmarken auf dem Aktiven Pokémon deines Gegners zu. (Du kannst pro Spiel nur 1 GX-Attacke einsetzen.)"
			},
			damage: "50×",

		},
	],

	weaknesses: [
		{
			type: "Metal",
			value: "×2"
		},
	],

	retreat: 2,

	thirdParty: {
		cardmarket: 315504
	}
}

export default card
