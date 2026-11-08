import { Card } from 'models/database/card'
import Set from '../SM Black Star Promos'

const card: Card = {
	name: {
		'en-us': "Reshiram & Charizard GX",
		'fr-fr': "Reshiram et Dracaufeu GX",
		'es-es': "Reshiram y Charizard GX",
		'it-it': "Reshiram e Charizard GX",
		'pt-br': "Reshiram e Charizard GX",
		'de-de': "Reshiram & Glurak GX"
	},
	illustrator: "Ryota Murayama",
	rarity: "Promo",
	category: "Pokemon",

	set: Set,
	dexId: [
		6,
		643
	],
	hp: 270,
	types: [
		"Fire",
	],

	stage: "Basic",
	suffix: "TAG TEAM-GX",

	attacks: [
		{
			cost: [
				"Fire",
				"Colorless",
			],
			name: {
				'en-us': "Outrage",
				'fr-fr': "Colère",
				'es-es': "Enfado",
				'it-it': "Oltraggio",
				'pt-br': "Ultraje",
				'de-de': "Wutanfall"
			},
			effect: {
				'en-us': "This attack does 10 more damage for each damage counter on this Pokémon.",
				'fr-fr': "Cette attaque inflige 10 dégâts supplémentaires pour chaque marqueur de dégâts placé sur ce Pokémon.",
				'es-es': "Este ataque hace 10 puntos de daño más por cada contador de daño en este Pokémon.",
				'it-it': "Questo attacco infligge 10 danni in più per ogni segnalino danno presente su questo Pokémon.",
				'pt-br': "Este ataque causa 10 pontos de dano a mais para cada contador de dano neste Pokémon.",
				'de-de': "Diese Attacke fügt 10 Schadenspunkte mehr mal der Anzahl der Schadensmarken auf diesem Pokémon zu."
			},
			damage: "30+",

		},
		{
			cost: [
				"Fire",
				"Fire",
				"Fire",
				"Colorless",
			],
			name: {
				'en-us': "Flare Strike",
				'fr-fr': "Attaque Flamboyante",
				'es-es': "Impacto Ígneo",
				'it-it': "Colpo Fiammante",
				'pt-br': "Golpe de Chamas",
				'de-de': "Feuergeschoss"
			},
			effect: {
				'en-us': "This Pokémon can’t use Flare Strike during your next turn.",
				'fr-fr': "Ce Pokémon ne peut pas utiliser Attaque Flamboyante pendant votre prochain tour.",
				'es-es': "Este Pokémon no puede usar Impacto Ígneo durante tu próximo turno.",
				'it-it': "Durante il tuo prossimo turno, questo Pokémon non può usare Colpo Fiammante.",
				'pt-br': "Este Pokémon não poderá usar Golpe de Chamas durante a sua próxima vez de jogar.",
				'de-de': "Dieses Pokémon kann Feuergeschoss während deines nächsten Zuges nicht einsetzen."
			},
			damage: 230,

		},
		{
			cost: [
				"Fire",
				"Fire",
				"Fire",
			],
			name: {
				'en-us': "Double Blaze GX",
				'fr-fr': "Double Brasier GX",
				'es-es': "Doble Llama GX",
				'it-it': "Doppia Vampata GX",
				'pt-br': "Labareda Dupla GX",
				'de-de': "Doppelbrand GX"
			},
			effect: {
				'en-us': "If this Pokémon has at least 3 extra Fire Energy attached to it (in addition to this attack’s cost), this attack does 100 more damage, and this attack’s damage isn’t affected by any effects on your opponent’s Active Pokémon. (You can’t use more than 1 GX attack in a game.)",
				'fr-fr': "Si au moins 3 Énergies Fire supplémentaires sont attachées à ce Pokémon (en plus du coût de cette attaque), cette attaque inflige 100 dégâts supplémentaires, et les dégâts de cette attaque ne sont affectés par aucun effet en action sur le Pokémon Actif de votre adversaire. (Vous ne pouvez utiliser qu’une attaque GX par partie.)",
				'es-es': "Si este Pokémon tiene por lo menos 3 Energías Fire adicionales unidas a él (además de las del coste de este ataque), este ataque hace 100 puntos de daño más, y el daño de este ataque no se ve afectado por ningún efecto en el Pokémon Activo de tu rival. (No puedes usar más de 1 ataque GX en una partida).",
				'it-it': "Se questo Pokémon ha almeno tre Energie Fire extra assegnate, in aggiunta a quelle del costo di questo attacco, questo attacco infligge 100 danni in più e i suoi danni non sono influenzati da alcun effetto presente sul Pokémon attivo del tuo avversario. Non puoi usare più di un attacco GX a partita.",
				'pt-br': "Se este Pokémon tiver pelo menos 3 Energias Fire adicionais ligadas a ele (além do custo deste ataque), este ataque causará 100 pontos de dano a mais e o dano deste ataque não será afetado por quaisquer efeitos no Pokémon Ativo do seu oponente (você não pode usar mais de 1 ataque GX por partida).",
				'de-de': "Wenn an dieses Pokémon mindestens 3 extra Fire-Energien angelegt sind (zusätzlich zu den Kosten dieser Attacke), fügt diese Attacke 100 Schadenspunkte mehr zu und der Schaden dieser Attacke wird durch Effekte auf dem Aktiven Pokémon deines Gegners nicht verändert. (Du kannst pro Spiel nur 1 GX-Attacke einsetzen.)"
			},
			damage: "200+",

		},
		{
			cost: [
				"Fire",
				"Fire",
				"Fire",
			],
			name: {
				'fr-fr': "Double Brasier-GX",
			},
			effect: {
				'fr-fr': "Si au moins 3 Énergies Fire supplémentaires sont attachées à ce Pokémon (en plus du coût de cette attaque), cette attaque inflige 100 dégâts supplémentaires, et les dégâts de cette attaque ne sont affectés par aucun effet en action sur le Pokémon Actif de votre adversaire. (Vous ne pouvez utiliser qu’une attaque GX par partie.)",
			},
			damage: "200+",

		},
	],
	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],

	retreat: 3,



}

export default card
