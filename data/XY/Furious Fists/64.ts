import { Card } from '../../../interfaces'
import Set from '../Furious Fists'

const card: Card = {
	name: {
		en: "Hawlucha EX",
		fr: "Brutalibré EX",
		es: "Hawlucha EX",
		it: "Hawlucha EX",
		pt: "Hawlucha EX",
		de: "Resladero EX"
	},

	illustrator: "5ban Graphics",
	rarity: "Ultra Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		701,
	],

	hp: 130,

	types: [
		"Fighting",
	],

	suffix: "EX",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Counterattack",
				fr: "Contre-Attaque",
				es: "Contragolpe",
				it: "Respinta",
				pt: "Contra-Atacante",
				de: "Gegenangriff"
			},
			effect: {
				en: "If this Pokémon is your Active Pokémon and is damaged by an opponent's attack (even if this Pokémon is Knocked Out), put 2 damage counters on the Attacking Pokémon.",
				fr: "Si ce Pokémon est votre Pokémon Actif et qu'il subit les dégâts d'une attaque de votre adversaire (même si ce Pokémon est mis K.O.), placez 2 marqueurs de dégâts sur le Pokémon Attaquant.",
				es: "Si este Pokémon es tu Pokémon Activo y resulta dañado por un ataque de tu rival (incluso si este Pokémon queda Fuera de Combate), pon 2 contadores de daño en el Pokémon Atacante.",
				it: "Se questo Pokémon è il tuo Pokémon attivo e viene danneggiato da un attacco del tuo avversario, anche se viene messo KO, metti due segnalini danno sul Pokémon attaccante.",
				pt: "Se este Pokémon for seu Pokémon Ativo e ele for danificado pelo ataque de um oponente (mesmo se esse Pokémon for Nocauteado), coloque 2 contadores de danos no Pokémon Atacante.",
				de: "Wenn dieses Pokémon dein Aktives Pokémon ist und durch einen gegnerischen Angriff Schaden erhält (auch wenn dieses Pokémon dadurch kampfunfähig wird), lege 2 Schadensmarken auf das Angreifende Pokémon."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Fighting",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Moonsault Stomp",
				fr: "Piétinage Sélénite",
				es: "Pisotón Salto Lunar",
				it: "Schiacciata Aerea",
				pt: "Pisoteada Moonsault",
				de: "Saltostampfer"
			},
			effect: {
				en: "If there is any Stadium card in play, this attack does 40 more damage.",
				fr: "S'il y a une carte Stade en jeu, cette attaque inflige 40 dégâts supplémentaires.",
				es: "Si hay alguna carta de Estadio en juego, este ataque hace 40 puntos de daño más.",
				it: "Se c'è in gioco una carta Stadio, questo attacco infligge 40 danni in più.",
				pt: "Se houver algum card de Estádio em jogo, este ataque causará 40 de danos adicionais.",
				de: "Wenn eine Stadionkarte im Spiel ist, fügt dieser Angriff 40 weitere Schadenspunkte zu."
			},
			damage: "60+",

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

	retreat: 1,
	stage: "Basic"
}

export default card
