import { Card } from 'models/database/card'
import Set from '../Unbroken Bonds'

const card: Card = {
	name: {
		'en-us': "Muk & Alolan Muk GX",
		'fr-fr': "Grotadmorv et Grotadmorv d’Alola GX",
		'es-es': "Muk y Muk de Alola GX",
		'it-it': "Muk e Muk di Alola GX",
		'pt-br': "Muk e Muk de Alola GX",
		'de-de': "Sleimok & Alola-Sleimok GX"
	},

	illustrator: "5ban Graphics",
	rarity: "Secret Rare",
	category: "Pokemon",
	set: Set,

	dexId: [89],
	hp: 270,

	types: [
		"Psychic",
	],

	suffix: "TAG TEAM-GX",

	attacks: [
		{
			cost: [
				"Psychic",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Severe Poison",
				'fr-fr': "Poison Violent",
				'es-es': "Veneno Grave",
				'it-it': "Maloveleno",
				'pt-br': "Veneno Forte",
				'de-de': "Pures Gift"
			},
			effect: {
				'en-us': "Your opponent’s Active Pokémon is now Poisoned. Put 8 damage counters instead of 1 on that Pokémon between turns.",
				'fr-fr': "Le Pokémon Actif de votre adversaire est maintenant Empoisonné. Placez 8 marqueurs de dégâts au lieu d’un sur le Pokémon ciblé entre chaque tour.",
				'es-es': "El Pokémon Activo de tu rival pasa a estar Envenenado. Pon 8 contadores de daño en vez de 1 en ese Pokémon entre turnos.",
				'it-it': "Il Pokémon attivo del tuo avversario viene avvelenato. Tra un turno e l’altro, metti otto segnalini danno invece di uno su quel Pokémon.",
				'pt-br': "O Pokémon Ativo do seu oponente agora está Envenenado. Coloque 8 contadores de dano ao invés de 1 naquele Pokémon entre as vezes de jogar.",
				'de-de': "Das Aktive Pokémon deines Gegners ist jetzt vergiftet. Lege zwischen den Zügen 8 Schadensmarken anstelle von 1 Schadensmarke auf jenes Pokémon."
			},

		},
		{
			cost: [
				"Psychic",
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Poison Absorption",
				'fr-fr': "Absorption de Poison",
				'es-es': "Absorción Veneno",
				'it-it': "Assorbiveleno",
				'pt-br': "Absorção de Veneno",
				'de-de': "Giftabsorption"
			},
			effect: {
				'en-us': "If your opponent’s Active Pokémon is Poisoned, heal 100 damage from this Pokémon.",
				'fr-fr': "Si le Pokémon Actif de votre adversaire est Empoisonné, soignez 100 dégâts à ce Pokémon.",
				'es-es': "Si el Pokémon Activo de tu rival está Envenenado, cura 100 puntos de daño a este Pokémon.",
				'it-it': "Se il Pokémon attivo del tuo avversario è avvelenato, cura questo Pokémon da 100 danni.",
				'pt-br': "Se o Pokémon Ativo do seu oponente estiver Envenenado, cure 100 pontos de dano deste Pokémon.",
				'de-de': "Wenn das Aktive Pokémon deines Gegners vergiftet ist, heile 100 Schadenspunkte bei diesem Pokémon."
			},
			damage: 120,

		},
		{

			name: {
				'en-us': "Nasty Goo Mix GX",
				'fr-fr': "Mixture de Glu Fétide GX",
				'es-es': "Mezcla Mugre Asquerosa GX",
				'it-it': "Miscuglio di Appiccicume GX",
				'pt-br': "Gosmas Nojentas Misturadas GX",
				'de-de': "Ekelschleim-Mix GX"
			},
			effect: {
				'en-us': "Your opponent’s Active Pokémon is now Paralyzed and Poisoned. If this Pokémon has at least 4 extra Energy attached to it (in addition to this attack’s cost), put 15 damage counters instead of 1 on that Pokémon between turns. (You can’t use more than 1 GX attack in a game.)",
				'fr-fr': "Le Pokémon Actif de votre adversaire est maintenant Empoisonné et Paralysé. Si au moins 4 Énergies supplémentaires sont attachées à ce Pokémon (en plus du coût de cette attaque), placez 15 marqueurs de dégâts au lieu d’un sur le Pokémon ciblé entre chaque tour. (Vous ne pouvez utiliser qu’une attaque GX par partie.)",
				'es-es': "El Pokémon Activo de tu rival pasa a estar Envenenado y Paralizado. Si este Pokémon tiene por lo menos 4 Energías adicionales unidas a él (además de las del coste de este ataque), pon 15 contadores de daño en vez de 1 en ese Pokémon entre turnos. (No puedes usar más de 1 ataque GX en una partida).",
				'it-it': "Il Pokémon attivo del tuo avversario viene paralizzato e avvelenato. Se questo Pokémon ha almeno quattro Energie extra assegnate, in aggiunta a quelle del costo di questo attacco, tra un turno e l’altro, metti 15 segnalini danno invece di uno su quel Pokémon. Non puoi usare più di un attacco GX a partita.",
				'pt-br': "O Pokémon Ativo do seu oponente agora está Envenenado e Paralisado. Se este Pokémon tiver pelo menos 4 Energias adicionais ligadas a ele (além do custo deste ataque), coloque 15 contadores de dano ao invés de 1 naquele Pokémon entre as vezes de jogar (você não pode usar mais de 1 ataque GX por partida).",
				'de-de': "Das Aktive Pokémon deines Gegners ist jetzt paralysiert und vergiftet. Wenn an dieses Pokémon mindestens 4 extra Energien angelegt sind (zusätzlich zu den Kosten dieser Attacke), lege zwischen den Zügen 15 Schadensmarken anstelle von 1 Schadensmarke auf jenes Pokémon. (Du kannst pro Spiel nur 1 GX-Attacke einsetzen.)"
			},

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 4,

	thirdParty: {
		cardmarket: 372721,
		tcgplayer: 189325
	}
}

export default card
