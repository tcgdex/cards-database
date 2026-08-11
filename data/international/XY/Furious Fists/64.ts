import { Card } from 'models/database/card'
import Set from '../Furious Fists'

const card: Card = {
	name: {
		'en-us': "Hawlucha EX",
		'fr-fr': "Brutalibré EX",
		'es-es': "Hawlucha EX",
		'it-it': "Hawlucha EX",
		'pt-br': "Hawlucha EX",
		'de-de': "Resladero EX"
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
				'en-us': "Counterattack",
				'fr-fr': "Contre-Attaque",
				'es-es': "Contragolpe",
				'it-it': "Respinta",
				'pt-br': "Contra-Atacante",
				'de-de': "Gegenangriff"
			},
			effect: {
				'en-us': "If this Pokémon is your Active Pokémon and is damaged by an opponent's attack (even if this Pokémon is Knocked Out), put 2 damage counters on the Attacking Pokémon.",
				'fr-fr': "Si ce Pokémon est votre Pokémon Actif et qu'il subit les dégâts d'une attaque de votre adversaire (même si ce Pokémon est mis K.O.), placez 2 marqueurs de dégâts sur le Pokémon Attaquant.",
				'es-es': "Si este Pokémon es tu Pokémon Activo y resulta dañado por un ataque de tu rival (incluso si este Pokémon queda Fuera de Combate), pon 2 contadores de daño en el Pokémon Atacante.",
				'it-it': "Se questo Pokémon è il tuo Pokémon attivo e viene danneggiato da un attacco del tuo avversario, anche se viene messo KO, metti due segnalini danno sul Pokémon attaccante.",
				'pt-br': "Se este Pokémon for seu Pokémon Ativo e ele for danificado pelo ataque de um oponente (mesmo se esse Pokémon for Nocauteado), coloque 2 contadores de danos no Pokémon Atacante.",
				'de-de': "Wenn dieses Pokémon dein Aktives Pokémon ist und durch einen gegnerischen Angriff Schaden erhält (auch wenn dieses Pokémon dadurch kampfunfähig wird), lege 2 Schadensmarken auf das Angreifende Pokémon."
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
				'en-us': "Moonsault Stomp",
				'fr-fr': "Piétinage Sélénite",
				'es-es': "Pisotón Salto Lunar",
				'it-it': "Schiacciata Aerea",
				'pt-br': "Pisoteada Moonsault",
				'de-de': "Saltostampfer"
			},
			effect: {
				'en-us': "If there is any Stadium card in play, this attack does 40 more damage.",
				'fr-fr': "S'il y a une carte Stade en jeu, cette attaque inflige 40 dégâts supplémentaires.",
				'es-es': "Si hay alguna carta de Estadio en juego, este ataque hace 40 puntos de daño más.",
				'it-it': "Se c'è in gioco una carta Stadio, questo attacco infligge 40 danni in più.",
				'pt-br': "Se houver algum card de Estádio em jogo, este ataque causará 40 de danos adicionais.",
				'de-de': "Wenn eine Stadionkarte im Spiel ist, fügt dieser Angriff 40 weitere Schadenspunkte zu."
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
	stage: "Basic",

	thirdParty: {
		cardmarket: 281728,
		tcgplayer: 92241
	}
}

export default card
