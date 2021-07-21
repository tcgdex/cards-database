import { Card } from '../../../interfaces'
import Set from '../SM Black Star Promos'

const card: Card = {
	name: {
		en: "Alolan Marowak-GX",
		fr: "Ossatueur d’Alola-GX",
		es: "Marowak de Alola-GX",
		it: "Marowak di Alola-GX",
		pt: "Marowak de Alola-GX",
		de: "Alola-Knogga-GX"
	},
	illustrator: "5ban Graphics",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		105,
	],
	hp: 200,
	types: [
		"Fire",
	],
	evolveFrom: {
		en: "Cubone",
		fr: "Osselait",
	},

	suffix: "GX",
	abilities: [
		{
			type: "Ability",
			name: {
				en: "Cursed Body",
				fr: "Corps Maudit",
				es: "Cuerpo Maldito",
				it: "Corpofunesto",
				pt: "Corpo Amaldiçoado",
				de: "Tastfluch"
			},
			effect: {
				en: "If this Pokémon is your Active Pokémon and is damaged by an opponent’s attack (even if this Pokémon is Knocked Out), the Attacking Pokémon is now Confused.",
				fr: "Si ce Pokémon est votre Pokémon Actif et qu’il subit les dégâts d’une attaque de votre adversaire (même si ce Pokémon est mis K.O.), le Pokémon Attaquant est maintenant Confus.",
				es: "Si este Pokémon es tu Pokémon Activo y resulta dañado por el ataque de un rival (incluso si este Pokémon queda Fuera de Combate), el Pokémon Atacante pasa a estar Confundido.",
				it: "Se questo Pokémon è il tuo Pokémon attivo e viene danneggiato da un attacco del tuo avversario, anche se viene messo K.O., il Pokémon attaccante viene confuso.",
				pt: "Se este Pokémon for seu Pokémon Ativo e ele for danificado pelo ataque de um oponente (mesmo se esse Pokémon for Nocauteado), o Pokémon Atacante ficará Confuso.",
				de: "Wenn dieses Pokémon dein Aktives Pokémon ist und durch einen gegnerischen Angriff Schaden erhält (oder dieses Pokémon sogar kampfunfähig wird), ist das Angreifende Pokémon jetzt verwirrt."
			},
		},
	],
	attacks: [
		{
			cost: [
				"Fire",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Fiery Bone",
				fr: "Os Flamboyant",
				es: "Hueso Abrasador",
				it: "Osso Infuocato",
				pt: "Osso Flamejante",
				de: "Feuerknochen"
			},
			effect: {
				en: "Your opponent’s Active Pokémon is now Burned.",
				fr: "Le Pokémon Actif de votre adversaire est maintenant Brûlé.",
				es: "El Pokémon Activo de tu rival pasa a estar Quemado.",
				it: "Il Pokémon attivo del tuo avversario viene bruciato.",
				pt: "O Pokémon Ativo do seu oponente agora está Queimado.",
				de: "Das Aktive Pokémon deines Gegners ist jetzt verbrannt."
			},
			damage: 90,

		},
		{

			name: {
				en: "Lost Boomerang GX",
				fr: "Boomerang Perdu GX",
				es: "Boomerang Perdido GX",
				it: "Boomerang Perduto GX",
				pt: "Bumerangue Perdido GX",
				de: "Nirgendwo-Boomerang GX"
			},
			effect: {
				en: "This attack does 50 damage to 2 of your opponent’s Pokémon. This damage isn’t affected by Weakness or Resistance. If a Pokémon is Knocked Out by this damage, put that Pokémon and all cards attached to it in the Lost Zone instead of the discard pile. (You can’t use more than 1 GX attack in a game.)",
				fr: "Cette attaque inflige 50 dégâts à 2 des Pokémon de votre adversaire. Ces dégâts ne sont pas affectés par la Faiblesse ou la Résistance. Si un Pokémon est mis K.O. par ces dégâts, placez ce Pokémon-là et toutes les cartes qui lui sont attachées dans la Zone Perdue plutôt que dans la pile de défausse. (Vous ne pouvez utiliser qu’une attaque GX par partie.)",
				es: "Este ataque hace 50 puntos de daño a 2 de los Pokémon de tu rival. Este daño no se ve afectado por Debilidad o Resistencia. Si un Pokémon queda Fuera de Combate por este daño, pon ese Pokémon y todas las cartas unidas a él en la Zona Perdida en vez de en la pila de descartes. (No puedes usar más de 1 ataque GX en una partida).",
				it: "Questo attacco infligge 50 danni a due dei Pokémon del tuo avversario. Questi danni non sono influenzati dalla debolezza o dalla resistenza. Se un Pokémon viene messo KO da questi danni, prendi quel Pokémon e tutte le carte a esso assegnate e mettili nell’area perduta invece che nella pila degli scarti. Non puoi usare più di un attacco GX a partita.",
				pt: "Este ataque causa 50 pontos de dano a 2 dos Pokémon do seu oponente. Este dano não é afetado por Fraqueza ou Resistência. Se algum Pokémon for Nocauteado por este dano, coloque aquele Pokémon e todas as cartas ligadas a ele na Zona Perdida em vez de na pilha de descarte (você não pode usar mais de 1 ataque GX por partida).",
				de: "Diese Attacke fügt 2 Pokémon deines Gegners 50 Schadenspunkte zu. Der Schaden dieser Attacke wird durch Schwäche und Resistenz nicht verändert. Wenn ein Pokémon durch diesen Schaden kampfunfähig wird, lege jenes Pokémon und alle an es angelegten Karten ins Nirgendwo anstatt auf seinen Ablagestapel. (Du kannst pro Spiel nur 1 GX-Attacke einsetzen.)"
			},

		},
	],
	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],

	retreat: 2,



}

export default card
