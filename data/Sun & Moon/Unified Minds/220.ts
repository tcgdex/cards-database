import { Card } from '../../../interfaces'
import Set from '../Unified Minds'

const card: Card = {
	name: {
		en: "Raichu & Alolan Raichu-GX",
		fr: "Raichu et Raichu d’Alola-GX",
		es: "Raichu y Raichu de Alola-GX",
		it: "Raichu e Raichu di Alola-GX",
		pt: "Raichu e Raichu de Alola-GX",
		de: "Raichu & Alola-Raichu-GX"
	},
	illustrator: "ConceptLab",
	rarity: "Ultra Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		26,
	],
	hp: 260,
	types: [
		"Lightning",
	],


	suffix: "TAG TEAM-GX",

	attacks: [
		{
			cost: [
				"Lightning",
				"Lightning",
				"Colorless",
			],
			name: {
				en: "Tandem Shock",
				fr: "Choc en Tandem",
				es: "Sacudida Tándem",
				it: "Duplice Shock",
				pt: "Choque em Parelha",
				de: "Tandemschock"
			},
			effect: {
				en: "If this Pokémon was on the Bench and became your Active Pokémon this turn, this attack does 80 more damage, and your opponent’s Active Pokémon is now Paralyzed.",
				fr: "Si ce Pokémon était sur le Banc et est devenu votre Pokémon Actif pendant ce tour, cette attaque inflige 80 dégâts supplémentaires et le Pokémon Actif de votre adversaire est maintenant Paralysé.",
				es: "Si este Pokémon estaba en la Banca y se ha convertido en tu Pokémon Activo en este turno, este ataque hace 80 puntos de daño más, y el Pokémon Activo de tu rival pasa a estar Paralizado.",
				it: "Se questo Pokémon era in panchina ed è diventato il tuo Pokémon attivo in questo turno, questo attacco infligge 80 danni in più e il Pokémon attivo del tuo avversario viene paralizzato.",
				pt: "Se este Pokémon estava no Banco e se tornou o seu Pokémon Ativo nesta rodada, este ataque causará 80 pontos de dano a mais e o Pokémon Ativo do seu oponente será Paralisado.",
				de: "Wenn dieses Pokémon auf der Bank war und in diesem Zug zu deinem Aktiven Pokémon wurde, fügt diese Attacke 80 Schadenspunkte mehr zu und das Aktive Pokémon deines Gegners ist jetzt paralysiert."
			},
			damage: "80+",

		},
		{
			cost: [
				"Lightning",
				"Lightning",
				"Colorless",
			],
			name: {
				en: "Lightning Ride GX",
				fr: "Tour d’Éclair GX",
				es: "Viaje Relámpago GX",
				it: "Cavalca Fulmini GX",
				pt: "Surfar no Relâmpago GX",
				de: "Blitzritt GX"
			},
			effect: {
				en: "Switch this Pokémon with 1 of your Benched Pokémon. If this Pokémon has at least 2 extra Lightning Energy attached to it (in addition to this attack’s cost), this attack does 100 more damage. (You can’t use more than 1 GX attack in a game.)",
				fr: "Échangez ce Pokémon avec l’un de vos Pokémon de Banc. Si au moins 2 Énergies Lightning supplémentaires sont attachées à ce Pokémon (en plus du coût de cette attaque), cette attaque inflige 100 dégâts supplémentaires. (Vous ne pouvez utiliser qu’une attaque GX par partie.)",
				es: "Cambia este Pokémon por 1 de tus Pokémon en Banca. Si este Pokémon tiene por lo menos 2 Energías Lightning adicionales unidas a él (además de las del coste de este ataque), este ataque hace 100 puntos de daño más. (No puedes usar más de 1 ataque GX en una partida).",
				it: "Scambia questo Pokémon con uno della tua panchina. Se questo Pokémon ha almeno due Energie Lightning extra assegnate, in aggiunta a quelle del costo di questo attacco, questo attacco infligge 100 danni in più. Non puoi usare più di un attacco GX a partita.",
				pt: "Troque este Pokémon por 1 dos seus Pokémon no Banco. Se este Pokémon tiver pelo menos 2 Energias Lightning adicionais ligadas a ele (além do custo deste ataque), este ataque causará 100 pontos de dano a mais (você não pode usar mais de 1 ataque GX por partida).",
				de: "Tausche dieses Pokémon gegen 1 Pokémon auf deiner Bank aus. Wenn an dieses Pokémon mindestens 2 extra Lightning-Energien angelegt sind (zusätzlich zu den Kosten dieser Attacke), fügt diese Attacke 100 Schadenspunkte mehr zu. (Du kannst pro Spiel nur 1 GX-Attacke einsetzen.)"
			},
			damage: "150+",

		},
		{
			cost: [
				"Lightning",
				"Lightning",
				"Colorless",
			],
			name: {
				fr: "Tour d’Éclair-GX",
			},
			effect: {
				fr: "Échangez ce Pokémon avec l’un de vos Pokémon de Banc. Si au moins 2 Énergies Lightning supplémentaires sont attachées à ce Pokémon (en plus du coût de cette attaque), cette attaque inflige 100 dégâts supplémentaires. (Vous ne pouvez utiliser qu’une attaque GX par partie.)",
			},
			damage: "150+",

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
			type: "Metal",
			value: "-20"
		},
	],
	retreat: 2,



}

export default card
