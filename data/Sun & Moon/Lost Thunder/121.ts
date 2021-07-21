import { Card } from '../../../interfaces'
import Set from '../Lost Thunder'

const card: Card = {
	name: {
		en: "Tyranitar-GX",
		fr: "Tyranocif-GX",
		es: "Tyranitar-GX",
		it: "Tyranitar-GX",
		pt: "Tyranitar-GX",
		de: "Despotar-GX"
	},
	illustrator: "5ban Graphics",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		248,
	],
	hp: 250,
	types: [
		"Darkness",
	],
	evolveFrom: {
		en: "Pupitar",
		fr: "Ymphect",
	},

	suffix: "GX",
	abilities: [
		{
			type: "Ability",
			name: {
				en: "Lost Out",
				fr: "Perdu à Jamais",
				es: "Perdido Miserablemente",
				it: "Dispersi",
				pt: "Perdido",
				de: "Nirgendwohin"
			},
			effect: {
				en: "If your opponent’s Pokémon is Knocked Out by damage from this Pokémon’s attacks, put that Pokémon and all cards attached to it in the Lost Zone instead of the discard pile.",
				fr: "Si le Pokémon de votre adversaire est mis K.O. par les dégâts des attaques de ce Pokémon, placez ce Pokémon-là et toutes les cartes qui lui sont attachées dans la Zone Perdue au lieu de les défausser.",
				es: "Si alguno de los Pokémon de tu rival queda Fuera de Combate por el daño de los ataques de este Pokémon, pon ese Pokémon y todas las cartas unidas a él en la Zona Perdida en vez de en la pila de descartes.",
				it: "Se un Pokémon del tuo avversario viene messo KO dai danni degli attacchi di questo Pokémon, prendi quel Pokémon e tutte le carte a esso assegnate e mettili nell’area perduta invece che nella pila degli scarti.",
				pt: "Se algum dos Pokémon do seu oponente for Nocauteado pelo dano dos ataques deste Pokémon, coloque aquele Pokémon e todas as cartas ligadas a ele na Zona Perdida em vez de na pilha de descarte.",
				de: "Wenn ein Pokémon deines Gegners durch Schaden der Attacken dieses Pokémon kampfunfähig wird, lege jenes Pokémon und alle an es angelegten Karten ins Nirgendwo anstatt auf seinen Ablagestapel."
			},
		},
	],
	attacks: [
		{
			cost: [
				"Darkness",
				"Darkness",
				"Colorless",
			],
			name: {
				en: "Dusty Ruckus",
				fr: "Chahut Poussiéreux",
				es: "Alboroto Polvoriento",
				it: "Fracasso Polveroso",
				pt: "Balbúrdia Empoeirada",
				de: "Staubiger Krawall"
			},
			effect: {
				en: "This attack does 30 damage to each of your opponent’s Benched Basic Pokémon. (Don’t apply Weakness and Resistance for Benched Pokémon.)",
				fr: "Cette attaque inflige 30 dégâts à chacun des Pokémon de Banc de base de votre adversaire. (N’appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
				es: "Este ataque hace 30 puntos de daño a cada uno de los Pokémon Básicos en Banca de tu rival. (No apliques Debilidad y Resistencia a los Pokémon en Banca).",
				it: "Questo attacco infligge 30 danni a ciascun Pokémon Base nella panchina del tuo avversario. Ricorda che non puoi applicare debolezza e resistenza ai Pokémon in panchina.",
				pt: "Este ataque causa 30 pontos de dano a cada um dos Pokémon Básicos no Banco do seu oponente (não aplique Fraqueza e Resistência aos Pokémon no Banco).",
				de: "Diese Attacke fügt jedem Basis-Pokémon auf der Bank deines Gegners 30 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)"
			},
			damage: 130,

		},
		{
			cost: [
				"Darkness",
				"Darkness",
				"Colorless",
			],
			name: {
				en: "Lay the Smackdown GX",
				fr: "À Plate Couture GX",
				es: "Acabar con Todo GX",
				it: "Presa Schiacciante-GX",
				pt: "Aniquilação GX",
				de: "Smackdown GX"
			},
			effect: {
				en: "This attack’s damage isn’t affected by any effects on your opponent’s Active Pokémon. (You can’t use more than 1 GX attack in a game.)",
				fr: "Les dégâts de cette attaque ne sont affectés par aucun effet en action sur le Pokémon Actif de votre adversaire. (Vous ne pouvez utiliser qu’une attaque GX par partie.)",
				es: "El daño de este ataque no se ve afectado por ningún efecto en el Pokémon Activo de tu rival. (No puedes usar más de 1 ataque GX en una partida).",
				it: "I danni di questo attacco non sono influenzati da alcun effetto presente sul Pokémon attivo del tuo avversario. Non puoi usare più di un attacco GX a partita.",
				pt: "O dano deste ataque não é afetado por quaisquer efeitos no Pokémon Ativo do seu oponente (você não pode usar mais de 1 ataque GX por partida).",
				de: "Der Schaden dieser Attacke wird durch Effekte auf dem Aktiven Pokémon deines Gegners nicht verändert. (Du kannst pro Spiel nur 1 GX-Attacke einsetzen.)"
			},
			damage: 220,

		},
	],
	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Psychic",
			value: "-20"
		},
	],
	retreat: 3,



}

export default card
