import { Card } from '../../../interfaces'
import Set from '../Lost Thunder'

const card: Card = {
	name: {
		en: "Typhlosion",
		fr: "Typhlosion",
		es: "Typhlosion",
		it: "Typhlosion",
		pt: "Typhlosion",
		de: "Tornupto"
	},

	illustrator: "Kouki Saitou",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		157,
	],

	hp: 160,

	types: [
		"Fire",
	],

	evolveFrom: {
		en: "Quilava",
		fr: "Feurisson",
	},

	stage: "Stage2",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Blazing Energy",
				fr: "Énergie Ardente",
				es: "Energía Abrasadora",
				it: "Energia Rovente",
				pt: "Energia Flamejante",
				de: "Lodernde Energie"
			},
			effect: {
				en: "Once during your turn (before your attack), you may use this Ability. All Energy attached to your Pokémon are Fire Energy instead of their usual type until the end of your turn. (This includes cards that come into play on this turn.)",
				fr: "Une seule fois pendant votre tour (avant votre attaque), vous pouvez utiliser ce talent. Jusqu’à la fin de votre tour, toutes les Énergies attachées à vos Pokémon sont des Énergies Fire au lieu de leur type habituel. (Cela comprend les cartes qui sont mises en jeu pendant ce tour.)",
				es: "Una vez durante tu turno (antes de tu ataque), puedes usar esta habilidad. Todas las Energías unidas a tus Pokémon son Energías Fire en vez de su tipo habitual hasta el final de tu turno. (Esto incluye cartas que entran en juego durante este turno).",
				it: "Una sola volta durante il tuo turno, prima di attaccare, puoi usare questa abilità. Tutte le Energie assegnate ai tuoi Pokémon sono Energie Fire anziché del loro solito tipo fino alla fine del tuo turno, incluse le carte che entrano in gioco in questo turno.",
				pt: "Uma vez durante a sua vez de jogar (antes de atacar), você pode usar esta Habilidade. Todas as Energias ligadas aos seus Pokémon são Energias Fire ao invés do seu tipo usual até o final da sua vez de jogar (isto inclui cartas que entrarem em jogo nesta rodada).",
				de: "Einmal während deines Zuges (bevor du angreifst) kannst du diese Fähigkeit einsetzen. Bis zum Ende deines Zuges sind alle an deine Pokémon angelegten Energien Fire-Energien anstelle ihres normalen Typs. (Dies schließt Karten, die während dieses Zuges ins Spiel gebracht werden, ein.)"
			},
		},
	],

	attacks: [
		{
			cost: [
				"Fire",
				"Fire",
				"Fire",
				"Fire",
			],
			name: {
				en: "Lost Flame",
				fr: "Flamme Perdue",
				es: "Llamarada Perdida",
				it: "Fiamma Perduta",
				pt: "Chama Perdida",
				de: "Nirgendwo-Flamme"
			},
			effect: {
				en: "Put 2 Energy attached to your opponent’s Active Pokémon in the Lost Zone.",
				fr: "Placez 2 Énergies attachées au Pokémon Actif de votre adversaire dans la Zone Perdue.",
				es: "Pon 2 Energías unidas al Pokémon Activo de tu rival en la Zona Perdida.",
				it: "Prendi due Energie assegnate al Pokémon attivo del tuo avversario e mettile nell’area perduta.",
				pt: "Coloque 2 Energias ligadas ao Pokémon Ativo do seu oponente na Zona Perdida.",
				de: "Lege 2 an das Aktive Pokémon deines Gegners angelegte Energien ins Nirgendwo."
			},
			damage: 120,

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],

	retreat: 2,

	thirdParty: {
		cardmarket: 365682
	}
}

export default card
