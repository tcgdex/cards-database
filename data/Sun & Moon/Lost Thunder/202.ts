import { Card } from '../../../interfaces'
import Set from '../Lost Thunder'

const card: Card = {
	name: {
		en: "Sigilyph GX",
		fr: "Cryptéro GX",
		es: "Sigilyph GX",
		it: "Sigilyph GX",
		pt: "Sigilyph GX",
		de: "Symvolara GX"
	},
	illustrator: "PLANETA Igarashi",
	rarity: "Ultra Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		561,
	],
	hp: 170,
	types: [
		"Psychic",
	],


	suffix: "GX",
	abilities: [
		{
			type: "Ability",
			name: {
				en: "Mirror Counter",
				fr: "Riposte Miroir",
				es: "Contraataque Espejo",
				it: "Controriflesso",
				pt: "Contra-ataque Espelhado",
				de: "Spiegelkonter"
			},
			effect: {
				en: "If this Pokémon is your Active Pokémon and is damaged by an attack from your opponent’s Pokémon-GX or Pokémon-EX (even if this Pokémon is Knocked Out), put damage counters on the Attacking Pokémon equal to the damage done to this Pokémon.",
				fr: "Si ce Pokémon est votre Pokémon Actif et qu’il subit les dégâts d’une attaque d’un Pokémon-GX ou Pokémon-EX de votre adversaire (même si ce Pokémon est mis K.O.), placez des marqueurs de dégâts sur le Pokémon Attaquant équivalents au nombre de dégâts infligés à ce Pokémon.",
				es: "Si este Pokémon es tu Pokémon Activo y resulta dañado por el ataque de un Pokémon-GX o Pokémon-EX de tu rival (incluso si este Pokémon queda Fuera de Combate), pon un número de contadores de daño en el Pokémon Atacante igual al daño infligido a este Pokémon.",
				it: "Se questo Pokémon è il tuo Pokémon attivo e viene danneggiato da un attacco di un Pokémon-GX o di un Pokémon-EX del tuo avversario, anche se viene messo KO, metti sul Pokémon attaccante un numero di segnalini danno pari ai danni inflitti a questo Pokémon.",
				pt: "Se este Pokémon for o seu Pokémon Ativo e for danificado por um ataque de um dos Pokémon-GX ou Pokémon-EX do seu oponente (mesmo que este Pokémon seja Nocauteado), coloque contadores de dano no Pokémon Atacante equivalentes ao dano causado a este Pokémon.",
				de: "Wenn dieses Pokémon dein Aktives Pokémon ist und durch eine Attacke von Pokémon-GX oder Pokémon-EX deines Gegners Schaden erhält (auch wenn dieses Pokémon dadurch kampfunfähig wird), lege der Höhe des zugefügten Schadens entsprechend Schadensmarken auf das Angreifende Pokémon."
			},
		},
	],
	attacks: [
		{
			cost: [
				"Psychic",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Sonic Wing",
				fr: "Aile Supersonique",
				es: "Ala Sónica",
				it: "Ala Sonica",
				pt: "Asa Sônica",
				de: "Überschallflügel"
			},
			effect: {
				en: "This attack’s damage isn’t affected by Resistance.",
				fr: "Les dégâts de cette attaque ne sont pas affectés par la Résistance.",
				es: "El daño de este ataque no se ve afectado por Resistencia.",
				it: "I danni di questo attacco non sono influenzati dalla resistenza.",
				pt: "O dano deste ataque não é afetado por Resistência.",
				de: "Der Schaden dieser Attacke wird durch Resistenz nicht verändert."
			},
			damage: 80,

		},
		{
			cost: [
				"Psychic",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Intercept GX",
				fr: "Interception GX",
				es: "Intercepción GX",
				it: "Intercettazione-GX",
				pt: "Interceptar GX",
				de: "Abfangen GX"
			},
			effect: {
				en: "This attack does 60 damage times the amount of Energy attached to your opponent’s Active Pokémon. (You can’t use more than 1 GX attack in a game.)",
				fr: "Cette attaque inflige 60 dégâts multipliés par le nombre d’Énergies attachées au Pokémon Actif de votre adversaire. (Vous ne pouvez utiliser qu’une attaque GX par partie.)",
				es: "Este ataque hace 60 puntos de daño por cada Energía unida al Pokémon Activo de tu rival. (No puedes usar más de 1 ataque GX en una partida).",
				it: "Questo attacco infligge 60 danni per ogni Energia assegnata al Pokémon attivo del tuo avversario. Non puoi usare più di un attacco GX a partita.",
				pt: "Este ataque causa 60 pontos de dano vezes a quantidade de Energia ligada ao Pokémon Ativo do seu oponente (você não pode usar mais de 1 ataque GX por partida).",
				de: "Diese Attacke fügt 60 Schadenspunkte mal der Anzahl der an das Aktive Pokémon deines Gegners angelegten Energien zu. (Du kannst pro Spiel nur 1 GX-Attacke einsetzen.)"
			},
			damage: "60×",

		},
	],
	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Fighting",
			value: "-20"
		},
	],
	retreat: 2,



}

export default card
