import { Card } from 'models/database/card'
import Set from '../Lost Thunder'

const card: Card = {
	name: {
		'en-us': "Shuckle GX",
		'fr-fr': "Caratroc GX",
		'es-es': "Shuckle GX",
		'it-it': "Shuckle GX",
		'pt-br': "Shuckle GX",
		'de-de': "Pottrott GX"
	},

	illustrator: "5ban Graphics",
	rarity: "Ultra Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		213,
	],

	hp: 170,

	types: [
		"Grass",
	],

	suffix: "GX",

	abilities: [
		{
			type: "Ability",
			name: {
				'en-us': "Protective Shell",
				'fr-fr': "Carapace Protectrice",
				'es-es': "Caparazón Protector",
				'it-it': "Guscio Protettivo",
				'pt-br': "Carapaça Protetora",
				'de-de': "Schutzpanzer"
			},
			effect: {
				'en-us': "Prevent all damage done to this Pokémon by attacks from your opponent’s Pokémon that have 2 or fewer Energy attached to them.",
				'fr-fr': "Évitez tous les dégâts d’attaques infligés à ce Pokémon par les Pokémon de votre adversaire auxquels sont attachées 2 Énergies ou moins.",
				'es-es': "Evita todo el daño infligido a este Pokémon por ataques de los Pokémon de tu rival que tengan 2 o menos Energías unidas a ellos.",
				'it-it': "Previeni tutti i danni inflitti a questo Pokémon dagli attacchi dei Pokémon del tuo avversario che hanno due o meno Energie assegnate.",
				'pt-br': "Previne todo o dano causado a este Pokémon por ataques dos Pokémon do seu oponente que tenham 2 ou menos Energias ligadas a eles.",
				'de-de': "Verhindere allen Schaden, der diesem Pokémon durch Attacken von Pokémon deines Gegners, an die 2 oder weniger Energien angelegt sind, zugefügt wird."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Triple Poison",
				'fr-fr': "Triple Poison",
				'es-es': "Veneno Triple",
				'it-it': "Triplo Veleno",
				'pt-br': "Veneno Triplo",
				'de-de': "Dreifachgift"
			},
			effect: {
				'en-us': "Your opponent’s Active Pokémon is now Poisoned. Put 3 damage counters instead of 1 on that Pokémon between turns.",
				'fr-fr': "Le Pokémon Actif de votre adversaire est maintenant Empoisonné. Placez 3 marqueurs de dégâts au lieu d’un sur le Pokémon ciblé entre chaque tour.",
				'es-es': "El Pokémon Activo de tu rival pasa a estar Envenenado. Pon 3 contadores de daño en vez de 1 en ese Pokémon entre turnos.",
				'it-it': "Il Pokémon attivo del tuo avversario viene avvelenato. Tra un turno e l’altro, metti tre segnalini danno invece di uno su quel Pokémon.",
				'pt-br': "O Pokémon Ativo do seu oponente agora está Envenenado. Coloque 3 contadores de dano ao invés de 1 naquele Pokémon entre as vezes de jogar.",
				'de-de': "Das Aktive Pokémon deines Gegners ist jetzt vergiftet. Lege zwischen den Zügen 3 Schadensmarken anstelle von 1 Schadensmarke auf jenes Pokémon."
			},

		},
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Wrap GX",
				'fr-fr': "Ligotage GX",
				'es-es': "Constricción GX",
				'it-it': "Avvolgibotta-GX",
				'pt-br': "Embrulho GX",
				'de-de': "Wickel GX"
			},
			effect: {
				'en-us': "Your opponent’s Active Pokémon is now Paralyzed. (You can’t use more than 1 GX attack in a game.)",
				'fr-fr': "Le Pokémon Actif de votre adversaire est maintenant Paralysé. (Vous ne pouvez utiliser qu’une attaque GX par partie.)",
				'es-es': "El Pokémon Activo de tu rival pasa a estar Paralizado. (No puedes usar más de 1 ataque GX en una partida).",
				'it-it': "Il Pokémon attivo del tuo avversario viene paralizzato. Non puoi usare più di un attacco GX a partita.",
				'pt-br': "O Pokémon Ativo do seu oponente agora está Paralisado (você não pode usar mais de 1 ataque GX por partida).",
				'de-de': "Das Aktive Pokémon deines Gegners ist jetzt paralysiert. (Du kannst pro Spiel nur 1 GX-Attacke einsetzen.)"
			},
			damage: 40,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	retreat: 1,

	thirdParty: {
		cardmarket: 365828,
		tcgplayer: 178815
	}
}

export default card
