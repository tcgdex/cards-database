import { Card } from '../../../interfaces'
import Set from '../Unbroken Bonds'

const card: Card = {
	name: {
		en: "Muk & Alolan Muk-GX",
		fr: "Grotadmorv et Grotadmorv d’Alola-GX",
		es: "Muk y Muk de Alola-GX",
		it: "Muk e Muk di Alola-GX",
		pt: "Muk e Muk de Alola-GX",
		de: "Sleimok & Alola-Sleimok-GX"
	},

	illustrator: "Mitsuhiro Arita",
	rarity: "Secret Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		89,
	],

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
				en: "Severe Poison",
				fr: "Poison Violent",
				es: "Veneno Grave",
				it: "Maloveleno",
				pt: "Veneno Forte",
				de: "Pures Gift"
			},
			effect: {
				en: "Your opponent’s Active Pokémon is now Poisoned. Put 8 damage counters instead of 1 on that Pokémon between turns.",
				fr: "Le Pokémon Actif de votre adversaire est maintenant Empoisonné. Placez 8 marqueurs de dégâts au lieu d’un sur le Pokémon ciblé entre chaque tour.",
				es: "El Pokémon Activo de tu rival pasa a estar Envenenado. Pon 8 contadores de daño en vez de 1 en ese Pokémon entre turnos.",
				it: "Il Pokémon attivo del tuo avversario viene avvelenato. Tra un turno e l’altro, metti otto segnalini danno invece di uno su quel Pokémon.",
				pt: "O Pokémon Ativo do seu oponente agora está Envenenado. Coloque 8 contadores de dano ao invés de 1 naquele Pokémon entre as vezes de jogar.",
				de: "Das Aktive Pokémon deines Gegners ist jetzt vergiftet. Lege zwischen den Zügen 8 Schadensmarken anstelle von 1 Schadensmarke auf jenes Pokémon."
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
				en: "Poison Absorption",
				fr: "Absorption de Poison",
				es: "Absorción Veneno",
				it: "Assorbiveleno",
				pt: "Absorção de Veneno",
				de: "Giftabsorption"
			},
			effect: {
				en: "If your opponent’s Active Pokémon is Poisoned, heal 100 damage from this Pokémon.",
				fr: "Si le Pokémon Actif de votre adversaire est Empoisonné, soignez 100 dégâts à ce Pokémon.",
				es: "Si el Pokémon Activo de tu rival está Envenenado, cura 100 puntos de daño a este Pokémon.",
				it: "Se il Pokémon attivo del tuo avversario è avvelenato, cura questo Pokémon da 100 danni.",
				pt: "Se o Pokémon Ativo do seu oponente estiver Envenenado, cure 100 pontos de dano deste Pokémon.",
				de: "Wenn das Aktive Pokémon deines Gegners vergiftet ist, heile 100 Schadenspunkte bei diesem Pokémon."
			},
			damage: 120,

		},
		{

			name: {
				en: "Nasty Goo Mix GX",
				fr: "Mixture de Glu Fétide GX",
				es: "Mezcla Mugre Asquerosa GX",
				it: "Miscuglio di Appiccicume GX",
				pt: "Gosmas Nojentas Misturadas GX",
				de: "Ekelschleim-Mix GX"
			},
			effect: {
				en: "Your opponent’s Active Pokémon is now Paralyzed and Poisoned. If this Pokémon has at least 4 extra Energy attached to it (in addition to this attack’s cost), put 15 damage counters instead of 1 on that Pokémon between turns. (You can’t use more than 1 GX attack in a game.)",
				fr: "Le Pokémon Actif de votre adversaire est maintenant Empoisonné et Paralysé. Si au moins 4 Énergies supplémentaires sont attachées à ce Pokémon (en plus du coût de cette attaque), placez 15 marqueurs de dégâts au lieu d’un sur le Pokémon ciblé entre chaque tour. (Vous ne pouvez utiliser qu’une attaque GX par partie.)",
				es: "El Pokémon Activo de tu rival pasa a estar Envenenado y Paralizado. Si este Pokémon tiene por lo menos 4 Energías adicionales unidas a él (además de las del coste de este ataque), pon 15 contadores de daño en vez de 1 en ese Pokémon entre turnos. (No puedes usar más de 1 ataque GX en una partida).",
				it: "Il Pokémon attivo del tuo avversario viene paralizzato e avvelenato. Se questo Pokémon ha almeno quattro Energie extra assegnate, in aggiunta a quelle del costo di questo attacco, tra un turno e l’altro, metti 15 segnalini danno invece di uno su quel Pokémon. Non puoi usare più di un attacco GX a partita.",
				pt: "O Pokémon Ativo do seu oponente agora está Envenenado e Paralisado. Se este Pokémon tiver pelo menos 4 Energias adicionais ligadas a ele (além do custo deste ataque), coloque 15 contadores de dano ao invés de 1 naquele Pokémon entre as vezes de jogar (você não pode usar mais de 1 ataque GX por partida).",
				de: "Das Aktive Pokémon deines Gegners ist jetzt paralysiert und vergiftet. Wenn an dieses Pokémon mindestens 4 extra Energien angelegt sind (zusätzlich zu den Kosten dieser Attacke), lege zwischen den Zügen 15 Schadensmarken anstelle von 1 Schadensmarke auf jenes Pokémon. (Du kannst pro Spiel nur 1 GX-Attacke einsetzen.)"
			},

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 4
}

export default card
